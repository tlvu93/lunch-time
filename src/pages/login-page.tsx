import FormInput from "../components/form/form-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/button/button";
import { useAuth } from "../context/auth-context";
import { useNavigate, Navigate } from "react-router-dom";
import React, { ReactEventHandler, useState } from "react";
import LoginForm from "../components/login-form/login-form";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <p className="py-14 text-4xl font-bold">
          Welcome to <br />
          Lunchtime!
        </p>
        <div>
          <LoginForm />
        </div>
      </div>

      <div className="mb-8">
        <FormInput
          name="name"
          label="Name"
          icon={<FontAwesomeIcon icon={faPerson} />}
        />
        <div className="flex justify-end">
          <div onClick={() => navigate("/")}>Continue without login</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
