import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface categoryType {
  name: string;
}

export interface brandType {
  name: string;
}

export interface ProductType {
  documentId: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: {
    url: string;
  };
  brand: brandType;
  category: categoryType;
}

export interface FilterQueryType {
  search: string;
  category: string;
  brand: string;
  minPrice: string;
  maxPrice: string;
  sort: string;
}

export interface SignUpData {
    username: string;
    email: string;
    password: string;
  }

  export interface LoginData {
    identifier: string;
    password: string;
  }

export function filterEndPoint(filterQuery: FilterQueryType) {
  const params = new URLSearchParams();

  if (filterQuery.search) {
    params.append("filters[$or][0][title][$containsi]", filterQuery.search);
    params.append(
      "filters[$or][1][description][$containsi]",
      filterQuery.search
    );
  }

  if (filterQuery.category) {
    params.append("filters[category][name][$eqi]", filterQuery.category);
  }

  if (filterQuery.brand) {
    params.append("filters[brand][name][$eqi]", filterQuery.brand);
  }

  if (filterQuery.minPrice) {
    params.append("filters[price][$gte]", filterQuery.minPrice);
  }

  if (filterQuery.maxPrice) {
    params.append("filters[price][$lte]", filterQuery.maxPrice);
  }

  if (filterQuery.sort) {
    params.append("sort", filterQuery.sort);
  }

  params.append("populate", "*");

  return params.toString();
}

const strapiURL = import.meta.env.VITE_STRAPI_URL;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${strapiURL}/api/`,
  }),
  endpoints: builder => {
    return {
      getProducts: builder.query<ProductType[], FilterQueryType>({
        query: (filterQuery) => {
          const endPoint = filterEndPoint(filterQuery);
          return `/products?${endPoint}`;
        },
      }),
      loginUser: builder.mutation<number, LoginData>({
        query: (data) => {
            return {
                url: '/auth/local',
                method: 'POST',
                body: data
            }
        }
      })
    };
  },
});


export const { useGetProductsQuery, useLoginUserMutation } = apiSlice;