import FormInput from "../components/form/form-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/button/button";
import { useAuth } from "../context/auth-context";

const LoginPage = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <p className="py-14 text-4xl font-bold">
          Welcome to <br />
          Lunchtime!
        </p>
        <div>
          <FormInput
            label="Email"
            icon={<FontAwesomeIcon icon={faEnvelope} />}
          />
          <FormInput
            label="Password"
            icon={<FontAwesomeIcon icon={faLock} />}
          />
          <div className="flex justify-end">
            <a className="underline text-sm" href="">
              FORGOT PASSWORD?
            </a>
          </div>
          <div className="flex justify-between py-8">
            <a className="flex-1" href="">
              Signup
            </a>
            <Button onClick={login} className="flex-1">
              Login
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <FormInput label="Name" icon={<FontAwesomeIcon icon={faPerson} />} />
        <div className="flex justify-end">
          <a href="">Continue without login</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
