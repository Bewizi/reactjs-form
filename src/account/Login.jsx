// import React from "react";

import { ActionButton } from "../components/button";
import { Form, InputField, LabelName } from "../components/form";

export const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Form>
        <LabelName htmlFor="username" defaultValue="username">
          Email
        </LabelName>
        <div>
          <InputField
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email Address"
          />
        </div>

        <LabelName htmlFor="username" defaultValue="username">
          Password
        </LabelName>
        <div>
          <InputField
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
          />
        </div>
        <ActionButton />
      </Form>
    </div>
  );
};
