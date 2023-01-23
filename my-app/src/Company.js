
//company.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Company = ({ item, handleExpand, expanded }) => {
    const [userData, setUserData] = useState({});
    const [buttonText, setButtonText] = useState("View details");

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://jsonplaceholder.typicode.com/users/${item.id}`,
            );
            setUserData(result.data);
        };
        if (expanded) {
            fetchData();
        }
    }, [expanded, item.id]);

    const handleButtonClick = () => {
        handleExpand(item.id);
        setButtonText(expanded ? "View details" : "Hide details");
    }

    return (
        <div>
            <div className={`company ${expanded ? 'expanded' : ''}`}>
                <h2>{item.name}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Street</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{item.username}</td>
                            <td>{item.address.street}</td>
                            <td>{item.address.city}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={handleButtonClick}>{buttonText}</button>
            </div>
            {expanded && (
                <div className="user-details">
                    <p><span>Name: </span>{userData.name}</p>
                    <p><span>Email:</span>{userData.email}</p>
                    <p> <span>Phone:</span>{userData.phone}</p>
                    {/* <p> <span>Desccription:</span>{userData.company.catchPhrase}</p> */}
                </div>
            )}
        </div>
    );
};

export default Company;
