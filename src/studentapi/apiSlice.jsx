import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 
//Creating Api
export const apiSlice = createApi({  
    reducerPath:'apiSlice',  //unique key for reducer
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3500/'}),
    tagTypes:["Student"], //for Refetching purpose 
    endpoints:(builder)=>({
        getstudents:builder.query({ //endpoint for fetching all details
            query:()=>'/students',
            providesTags:['Student']
        }),
        addstudent:builder.mutation({ //endpoint for add data
            query:(student)=>({
                url:'/students',
                method:'POST',
                body:student,  
            }),
            invalidatesTags:['Student']
        }),
        getstudent:builder.query({   //endpoint for display particular data
          query:(id)=>`/students/${id}`,
          providesTags:['Student']
         }),
        updatestudent: builder.mutation({  //endpoint for updating data
            query: (student) => ({
              url: `/students/${student.id}`,
              method: 'PUT',
              body: student,
            }),
            invalidatesTags:['Student']
          }),
        deleteStudent: builder.mutation({   // endpoint for deleting data
            query: (id) => ({
              url: `/students/${id}`,
              method: 'DELETE',
            }),
            invalidatesTags:['Student']
          }),
        

    })
})

//create custom hooks for all Endpoints then export
export const {
  useGetstudentsQuery,
  useAddstudentMutation,
  useGetstudentQuery,useUpdatestudentMutation,
  useDeleteStudentMutation} = apiSlice;