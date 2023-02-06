import "./App.css";
import FormInput from "./components/form/form-input";
import AppLayout from "./layout/app-layout";
import Button from "./components/button/button";
import { AuthProvider } from "./context/auth-context";
import LoginPage from "./pages/login-page";

function App() {
  return (
    <AuthProvider>
      <AppLayout>
        <LoginPage />
      </AppLayout>
    </AuthProvider>
  );
}

export default App;
