// import React from "react";
import PropTypes from "prop-types";

export const Form = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

// eslint-disable-next-line react/prop-types
export const LabelName = ({ children, defaultValue }) => {
  return <label defaultValue={defaultValue}>{children}</label>;
};

LabelName.propTypes = {
  defaultValue: PropTypes.any,
};

// eslint-disable-next-line react/prop-types
export const InputField = ({
  type,
  name,
  value,
  placeholder,
  // eslint-disable-next-line react/prop-types
  onChange,
  // eslint-disable-next-line react/prop-types
  className,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`border-2 py-2 px-1 ${className}`}
    />
  );
};

InputField.propTypes = {
  type: PropTypes.oneOf(["text", "number", "password", "email"]),
  name: PropTypes.string,
  value: PropTypes.any,
  onchange: PropTypes.func,
  placeholder: PropTypes.string,
};
