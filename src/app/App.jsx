import AppRoutes from "../routes/AppRoutes";
import AuthInitializer from "./AuthInitializer";
function App() {
  return (
    <>
      <AuthInitializer />
      <AppRoutes />
    </>
  );
}

export default App;