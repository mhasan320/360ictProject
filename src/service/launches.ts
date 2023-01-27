import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const launchesApi = createApi({
  reducerPath: 'launchesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v3/' }),
  endpoints: (builder) => ({
    getLanuchesByName: builder.query<any, string>({
      query: (name) => `${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetLanuchesByNameQuery } = launchesApi