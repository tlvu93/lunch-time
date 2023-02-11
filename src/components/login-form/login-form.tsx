import React, { useState } from "react";
import FormInput from "../form/form-input";

import Button from "../button/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/auth-context";
import { Navigate } from "react-router-dom";

type Props = {};

type FormData = {
  email: string;
  password: string;
};

const LoginForm = (props: Props) => {
  const { isAuthenticated, login } = useAuth();

  if (isAuthenticated) {
    console.log("Authenticated");
  }

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = (): boolean => {
    let isValid = true;

    const { email, password } = formData;

    setErrors({ email: "", password: "" });

    if (!email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      isValid = false;
    }

    if (!password.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form data is valid");
      login(formData.email, formData.password);
    } else {
      console.log("Form data is invalid", errors);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(name, value);
  };

  return (
    <>
      {isAuthenticated && <Navigate to="/order" replace={true} />}
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="text"
          value={formData.email}
          onChange={handleChange}
          label="Email"
          icon={<FontAwesomeIcon icon={faEnvelope} />}
        />
        <FormInput
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
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
          <Button type="submit" className="flex-1">
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
