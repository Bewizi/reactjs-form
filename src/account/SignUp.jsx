import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { ActionButton } from "../components/button";
import { Form, InputField, LabelName } from "../components/form";

import { User } from "../backend/form";

export const SignUp = () => {
  const [user, setUser] = useState({
    fullName: "",
  });

  useEffect(() => {
    if (Object.keys(user).length === 1) {
      setUser((prevUser) => ({ ...prevUser, email: "" }));
    }
  }, [setUser, user]);

  const [fullNameError, setFullNameError] = useState("");
  const [successfully, setSuccessfully] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.fullName) {
      // alert("Unable to submit: Form contains errors or missing fields");
      setFullNameError("Full name cannot be empty");
    } else {
      // Create a new User object when the form is submitted
      const newUser = new User(user.fullName);
      console.log("New User:", newUser); // For testing, you can remove this later
      // Here you can perform further actions like sending the newUser object to an API
      alert("User created successfully!"); // For testing, you can remove this later
      setSuccessfully("correct name");

      navigate("/guest");
    }
  };

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, fullName: value });
    if (value.length <= 6) {
      setFullNameError("Please enter a valid name (at least 6 characters)");
    } else {
      setFullNameError("");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Form onSubmit={handleSubmit}>
        <LabelName htmlFor="fullname" defaultValue="fullname">
          FullName
        </LabelName>
        <div>
          <InputField
            type="text"
            id="fullname"
            name="fullname"
            value={user.fullName}
            placeholder="Enter FullName"
            onChange={handleFullNameChange}
          />
          <p style={{ color: "red" }}>{fullNameError}</p>
        </div>

        <div style={{ color: "green" }}>{successfully}</div>
        <ActionButton />
      </Form>
    </div>
  );
};
