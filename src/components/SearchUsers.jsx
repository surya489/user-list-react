import React from "react";

export const SearchUsers = ({ placeholder = "Search Users", value, onChange }) => {
  return (
    <div className="mb-4 d-flex justify-content-center">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-control w-50 shadow-sm"
      />
    </div>
  );
};