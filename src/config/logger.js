import { ENV } from "./env";

const isDev = ENV.IS_DEV;

export const logger = {
  info: (...args) => {
    if (isDev) console.info(...args);
  },

  success: (...args) => {
    if (isDev) console.log("✅", ...args);
  },

  warn: (...args) => {
    if (isDev) console.warn(...args);
  },

  error: (...args) => {
    if (isDev) console.error(...args);
  },

  debug: (...args) => {
    if (isDev) console.debug(...args);
  },
};