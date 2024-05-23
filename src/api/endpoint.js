export const API = import.meta.env.VITE_API_BASE_URL;

export const endpoints = {
  auth: {
    login: `login`,
  },
  product: {
    list: `products/all`,
    create: `products`,
    delete: `product`,
    getDetail: `product`,
  },
  category: {
    getAll: `categories/all`,
    create: `categories/create`,
    delete: `categories/delete`,
    update: `categories/edit`,
  },
  productType: {
    getAll: `product-type/all`,
    create: `product-type/create`,
    delete: `product-type/delete`,
    update: `product-type/edit`,
  },
  brand: {
    getAll: `brand/all`,
    create: `brand/create`,
    delete: `brand/delete`,
    update: `brand/edit`,
  },
  size: {
    getAll: `size/all`,
    create: `size/create`,
    delete: `size/delete`,
    update: `size/edit`,
  },
};
