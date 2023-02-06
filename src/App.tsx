import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import FormInput from "./components/form/form-input";
import AppLayout from "./layout/app-layout";
import Button from "./components/button/button";

function App() {
  return (
    <AppLayout>
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
              <Button className="flex-1" text="Login" />
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
    </AppLayout>
  );
}

export default App;
