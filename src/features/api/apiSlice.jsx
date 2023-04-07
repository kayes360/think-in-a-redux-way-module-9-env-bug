import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseURL:  import.meta.env.VITE_APP_API_URL, 
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});

 
