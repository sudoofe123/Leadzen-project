// CompanyList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Company from './Company';

const CompanyList = () => {
    const [data, setData] = useState([]);
    const [expanded, setExpanded] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/users',
            );
            setData(result.data);
        };
        fetchData();
    }, []);

    const handleExpand = id => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <div>
            {data.map(item => (
                <Company
                    key={item.id}
                    item={item}
                    handleExpand={handleExpand}
                    expanded={expanded === item.id}
                />
            ))}
        </div>
    );
};

export default CompanyList;




