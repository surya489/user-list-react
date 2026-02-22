import React from "react";
import { useState, useEffect } from "react";
import { SearchUsers } from "./SearchUsers";
import { Loader } from "./Loader";

const apiEndPoint = 'https://jsonplaceholder.typicode.com/users';

export const UsersListGrid = () => {

    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setisLoading] = useState(false);

    const fetchApiData = async () => {
        try {
            setisLoading(true);
            const res = await fetch(apiEndPoint);
            const data = await res.json();
            console.log(data);
            setUsers(data);
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                setisLoading(false);
            }, 3000);
        }
    }

    useEffect(() => {
        fetchApiData();
    }, []);

    const filterusers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4 fw-bold">Users Dashboard</h2>
            <SearchUsers 
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    fetchApiData();
                }}
            />
            {isLoading ? (
                <Loader message="Loading users..." />
            ) : (
                <div className="row g-4">
                    {filterusers.length > 0 ? (
                        <>
                            {filterusers.map((user) => (
                                <div key={user.id} className="col-12 col-sm-6 col-lg-4">
                                    <div className="card h-100 border-0 shadow-sm user-card">
                                        <div className="card-body d-flex flex-column">

                                            <div className="text-center mb-3">
                                                <div className="fs-14 rounded-circle d-inline-block px-3 py-2 bg-primary">
                                                    {user.name.charAt(0)}
                                                </div>
                                            </div>

                                            <h5 className="card-title text-center fw-semibold">
                                                {user.name}
                                            </h5>

                                            <p className="text-muted text-center mb-1">
                                                @{user.username}
                                            </p>

                                            <p className="text-center small text-secondary">
                                                {user.email}
                                            </p>

                                            <p className="text-center small">
                                                📍 {user.address.city}
                                            </p>

                                            <button className="btn btn-primary mt-auto w-100">
                                                View Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div className="">
                            No users found for {searchTerm}
                        </div>
                    )}
                </div>
            )}
        </div>
    );

}