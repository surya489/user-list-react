import React, { useState } from "react";

export const UserForm = () => {
  const initialState = {
    name: "",
    email: "",
    city: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      console.log("Payload sent:", result);

      setSuccessMsg("User created successfully");

      setFormData(initialState);
    } catch (error) {
      console.error(error);
    } finally {
        setIsSubmitting(false);
        setTimeout(() => {
            setSuccessMsg("");
        }, 2000);
    }
  };

  return (
    <div className="card shadow-sm p-4 mb-5">
      <h4 className="mb-3">Add New User</h4>

      {successMsg && (
        <div className="alert alert-success">{successMsg}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control focus-ring"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="city"
            className="form-control"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-success w-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Create User"}
        </button>
      </form>
    </div>
  );
};