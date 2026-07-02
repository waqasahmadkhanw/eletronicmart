export const ENV = {
  APP_NAME: import.meta.env.VITE_APP_NAME || "ElectroMart",

  API_URL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:8000/api",

  NODE_ENV: import.meta.env.MODE,

  IS_DEV: import.meta.env.DEV,

  IS_PROD: import.meta.env.PROD,
};