import React from "react";

export const Loader = ({ message = "Loading..." }) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 position-absolute end-0 top-0 start-0">
            <div className="spinner-border text-primary mb-3" role="status">
                <span className="visually-hidden">Loading</span>
            </div>

            <p className="text-muted fw-semibold">{message}</p>
        </div>
    );
};