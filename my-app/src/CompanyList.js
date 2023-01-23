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



// // CompanyList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Company from './Company';
// import Pagination from './Pagination';

// const CompanyList = () => {
//     const [data, setData] = useState([]);
//     const [expanded, setExpanded] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [companiesPerPage] = useState(3);

//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await axios(
//                 'https://jsonplaceholder.typicode.com/users',
//             );
//             setData(result.data);
//         };
//         fetchData();
//     }, []);

//     const handleExpand = id => {
//         setExpanded(expanded === id ? null : id);
//     };

//     // Get current companies
//     const indexOfLastCompany = currentPage * companiesPerPage;
//     const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
//     const currentCompanies = data.slice(indexOfFirstCompany, indexOfLastCompany);

//     // Change page
//     const paginate = pageNumber => setCurrentPage(pageNumber);

//     return (
//         <div>
//             <Pagination
//                 companiesPerPage={companiesPerPage}
//                 totalCompanies={data.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//             />
//             {currentCompanies.map(item => (
//                 <Company
//                     key={item.id}
//                     item={item}
//                     handleExpand={handleExpand}
//                     expanded={expanded === item.id}
//                 />
//             ))}
//         </div>
//     );
// };

// export default CompanyList;
