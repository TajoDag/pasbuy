export const API = import.meta.env.VITE_API_BASE_URL;

export const endpoints = {
  auth: {
    login: `login`,
    register: `register`,
  },
  product: {
    list: `products/all`,
    create: `products`,
    delete: `product`,
    getDetail: `product`,
  },
  user: {
    all: `admin/users`,
    detail: `me`,
    // update: `user/update`,
    updatePassword: `password/update`,
    update: `me/update`,
  },
  category: {
    getAll: `categories/all`,
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
  agency: {
    get: `agency/homeAgent`,
    getNotSuccess: `agency/orders`,
    updatePrice: `agency/product/update`,
    createOrder: `agency/order/create`,
    getListOrder: `agency/order/all`,
    changeStatus: `agency/order/status`,
  },
  orders: {
    getListOrders: `customer/order/all`,
  },
  livechat: {
    get: `configLiveChat`,
  },
  logoHeader: {
    get: `admin/logo/header`,
  },
  logoFooter: {
    get: `logo/footer`,
  },
  banner: {
    get: `banner`,
  },
};
