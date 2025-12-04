import { apiSlice } from './apiSlice';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  tags: string[];
  sizes: string[];
  colors: string[];
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/products',
      providesTags: ['Products'],
    }),
    getProductBySlug: builder.query<Product, string>({
      query: (slug) => `/products/${slug}`,
      providesTags: ['Products'],
    }),
    getProductsByCategory: builder.query<Product[], string>({
      query: (category) => `/products/category/${category}`,
      providesTags: ['Products'],
    }),
    createProduct: builder.mutation<Product, Partial<Product>>({
      query: (product) => ({
        url: '/products',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation<Product, Partial<Product> & { id: string }>({
      query: ({ id, ...product }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: product,
      }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductBySlugQuery,
  useGetProductsByCategoryQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApiSlice;
