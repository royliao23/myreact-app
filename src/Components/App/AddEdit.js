import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from 'components';
import { productService, alertService } from 'services';

export { AddEdit };

function AddEdit(props) {
    const user = props?.user;
    const isAddMode = !user;
    const cu = (user)=>{
        if (user)
        return Object.values(user)[1] 
        else 
        return '';
    }
    
    const [persons, setPersons] = useState(null);
    useEffect(() => {
        productService.getAllemployees().then(x => setPersons(x));
    }, []);
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    
    // form validation rules 
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('title is required'),
        author: Yup.string()
            .required('author is required'),
        desc: Yup.string()
            .required('Description is required'),
        year: Yup.string()
            .required('Year is required'),
        
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // set default form values if in edit mode
    if (!isAddMode) {
        const { password, confirmPassword, ...defaultValues } = user;
        formOptions.defaultValues = defaultValues;
    }
    
    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        return isAddMode
            ? createUser(data)
            : updateUser(user.id, data);
    }

    function createUser(data) {
        return productService.create(data)
            .then(() => {
                alertService.success('User added', { keepAfterRouteChange: true });
                router.push('.');
            })
            .catch(alertService.error);
    }

    function updateUser(id, data) {
        return productService.update(id, data)
            .then(() => {
                alertService.success('User updated', { keepAfterRouteChange: true });
                router.push('..');
            })
            .catch(alertService.error);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>{isAddMode ? 'Add Product' : 'Edit Product'}</h1>
            <div className="form-row">
                <div className="form-group col2">
                    <label>Author</label>
                    <select name="author" {...register('author')} className={`form-control ${errors.author ? 'is-invalid' : ''}`}>
                        <option value={cu(user)}>{cu(user)}</option>
                        {persons && persons.map((user,currentuser) =>
                        <option   value={user.id}  >{user.id}-{user.firstname} </option>
                        )}
                        
                    </select>
                    <div className="invalid-feedback">{errors.author?.message}</div>
                </div>
                <div className="form-group col3">
                    <label>Title</label>
                    <input name="firstName" type="text" {...register('title')} className={`form-control ${errors.title ? 'is-invalid' : ''}`} />

                    <div className="invalid-feedback">{errors.title?.message}</div>
                </div>
                <div className="form-group col-5">
                    <label>DESC</label>
                    <textarea name="firstName" type="text" {...register('desc')} className={`form-control ${errors.desc ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.desc?.message}</div>
                </div>
                <div className="form-group col-2">
                    <label>Year</label>
                    <input name="lastName" type="text" {...register('year')} className={`form-control ${errors.year ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.year?.message}</div>
                </div>
            </div>
         
            <div className="form-group">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary mr-2">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Save
                </button>
                <button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="btn btn-secondary">Reset</button>
                <Link href="/products" className="btn btn-link">Cancel</Link>
            </div>
        </form>
    );
}