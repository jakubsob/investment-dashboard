import React, { useState } from 'react'
import axios from 'axios';
const { PUBLIC_API_URL } = import.meta.env;

const DataTable = (props) => {
  const [transactions, setTransactions] = useState();

  const handleRefresh = () => {
    axios
      .get(`${PUBLIC_API_URL}/transaction`)
      .then(function (response) {
        const data = response.data;
        setTransactions(data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <button className="rounded-md p-2 w-full bg-blue-600 text-white hover:bg-blue-700" onClick={handleRefresh}>Refresh</button>
      <ul className="list-disk list-inside">
        {transactions && transactions.map((transaction, id) => (
          <li key={id}>
            <div className="break-words">
              {JSON.stringify(transaction)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DataTable
