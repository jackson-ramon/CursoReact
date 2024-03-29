import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        }),

        getTodo: builder.query({
            query: (todoId) => `/todos/${ todoId }`
        }),
    })
});

// useGetTodosQuery es un custom Hook creado por RTK
// el nombre puede ser cualquiera pero lo importante
// es saber que createApi() devuelve un custom Hook
export const { useGetTodosQuery, useGetTodoQuery } = todosApi;