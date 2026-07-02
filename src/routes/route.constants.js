export const ROLES = {
  ADMIN: "admin",
  SELLER: "seller",
  CUSTOMER: "customer",
};

export const ROUTES = {
  // Public
  HOME: "/",
  SHOP: "/shop",
  PRODUCT_DETAILS: "/product/:productId",
  CATEGORY: "/category/:categorySlug",
  SEARCH: "/search",

  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",

  // Customer
  PROFILE: "/profile",
  CART: "/cart",
  WISHLIST: "/wishlist",
  CHECKOUT: "/checkout",
  ORDERS: "/orders",
  ORDER_DETAILS: "/orders/:orderId",

  // Seller
  SELLER_DASHBOARD: "/seller",
  SELLER_PRODUCTS: "/seller/products",
  SELLER_ORDERS: "/seller/orders",

  // Admin
  ADMIN_DASHBOARD: "/admin",
  ADMIN_PRODUCTS: "/admin/products",
  ADMIN_CATEGORIES: "/admin/categories",
  ADMIN_BRANDS: "/admin/brands",
  ADMIN_ORDERS: "/admin/orders",
  ADMIN_USERS: "/admin/users",

  UNAUTHORIZED: "/unauthorized",
  NOT_FOUND: "*",
};