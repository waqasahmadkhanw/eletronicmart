// import { Provider } from "react-redux";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { Toaster } from "react-hot-toast";

// import { store } from "./store";
// import { queryClient } from "../config/queryClient";

// export default function AppProvider({ children }) {
//   return (
//     <Provider store={store}>
//       <QueryClientProvider client={queryClient}>
//         {children}

//         <Toaster
//           position="top-right"
//           toastOptions={{
//             duration: 3000,
//             style: {
//               borderRadius: "12px",
//             },
//           }}
//         />

//         <ReactQueryDevtools initialIsOpen={false} />
//       </QueryClientProvider>
//     </Provider>
//   );
// }
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import { store } from "./store";
import { queryClient } from "../config/queryClient";
import { ENV } from "../config/env";

export default function AppProvider({ children }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: "12px",
            },
          }}
        />

        {ENV.IS_DEV && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </Provider>
  );
}