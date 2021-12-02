// src/mocks/handlers.js
import { rest } from 'msw'
import { useSelector } from 'react-redux';

export const handlers = [
  
  rest.get('/', (req, res, ctx) => {
    // Check if data is downloaded to redux store
    const r = useSelector(state => state.birds);
    if (r=='') {
      // If not loaded, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not loaded',
        }),
      )
    }

    // If loaded to redux store, return a 200 status and data.
    return res(
      ctx.status(200),
      ctx.json({
        store:r,
      }),
    )
  }),

  rest.post('/', (req, res, ctx) => {
    // check if submission of employee is returned.
    const newitem = sessionStorage.getItem('added')

    if (newitem=='') {
      // If not returned, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not returned',
        }),
      )  
    }
    return res(
      ctx.status(200),
      ctx.json({
        data: newitem,
      }),
    )

  }),

]