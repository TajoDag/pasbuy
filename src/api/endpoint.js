export const API = import.meta.env.VITE_API_BASE_URL;

export const endpoints = {
  auth: {
    login: `login`,
    register: `register`
  },
  product: {
    list: `products/all`,
    create: `admin/products`,
    delete: `product`,
    getDetail: `product`
  },
  category: {
    getAll: `categories/all`,
  },
  productType: {
    getAll: `admin/product-type/all`,
    create: `admin/product-type/create`,
    delete: `admin/product-type/delete`,
    update: `admin/product-type/edit`,
  },
  brand: {
    getAll: `brand/all`,
    create: `admin/brand/create`,
    delete: `admin/brand/delete`,
    update: `admin/brand/edit`,
  },
  size: {
    getAll: `admin/size/all`,
    create: `admin/size/create`,
    delete: `admin/size/delete`,
    update: `admin/size/edit`,
  },
};
