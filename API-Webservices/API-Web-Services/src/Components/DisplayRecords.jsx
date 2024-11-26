import axios from "axios";
import React, {useEffect, useState} from 'react';
import { json } from "react-router-dom";

function DisplayRecords() {
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3004/iphone')
            .then(res => {
                setColumns(Object.keys(res.data[0])); // Set the column headers
                setRows(res.data); // Set the row data
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
   <div className="container mt-5">
        <table className="table">
            <thead>
                <tr>
                 {columns.map((c,i) => (
                    <th key={i}>{c}</th>
                 ))}
                </tr>         
            </thead>
            <tbody>
                {
                    data.map((d,i) => (
                        <tr key={i}>
                            <td>{d.product_id}</td>
                            <td>{d.product_name}</td>
                            <td>{d.product_brief_description}</td>
                            <td>{d.product_description}</td>
                            <td>{d.description_id}</td>
                            <td>{d.price_id}</td>
                            <td>{d.starting_price}</td>
                            <td>{d.price_range}</td>
                            <td>{d.product_url}</td>
                            <td>{d.product_img}</td>
                            <td>{d.product_link}</td>
                        </tr>
                    ) )
                }
            </tbody>
        </table>
   </div>
    )
}

export default DisplayRecords



// import axios from "axios";
// import React, { useEffect, useState } from 'react';

// function DisplayRecords() {
//     const [columns, setColumns] = useState([]);
//     const [rows, setRows] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:3004/iphone')
//             .then(res => {
//                 setColumns(Object.keys(res.data[0])); // Set the column headers
//                 setRows(res.data); // Set the row data
//             })
//             .catch(error => console.error("Error fetching data:", error));
//     }, []);

//     return (
//         <div className="container mt-5">
//             <table className="table">
//                 <thead>
//                     <tr>
//                         {columns.map((c, i) => (
//                             <th key={i}>{c}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rows.map((row, i) => (
//                         <tr key={i}>
//                             {columns.map((col, j) => (
//                                 <td key={j}>{row[col]}</td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default DisplayRecords;

    
