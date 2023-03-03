import '../table/styles.css';
import TableFilter from "react-table-filter";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import ElementHtml from "../table/ElementHtml";

export default function Home() {

  const [dataTableData, setDataTableData] = useState({ data: [] });
  const [dataTableColumn, setDataTableColumn] = useState({ columns: [] });
  const [accounts, setAccounts] = useState([])

  const { id } = useParams()

  const filterUpdated = (newData, filtersObject) => {
    setAccounts(newData);
  };

  const BuildTableData = (data) => {
    if (data.length > 0) {
      let columns = Object.keys(data[0]);
      setDataTableData({ data: data });
      setDataTableColumn({ columns: columns });
    }
  };

  useEffect(() => {
    BuildTableData(accounts);
  }, [accounts]);

  useEffect(() => {
    loadAccounts();
  }, []);

  const loadAccounts = async () => {
    const results = await axios.get("http://localhost:8080/accounts");
    setAccounts(results.data);
  }

  const deleteAccount = async (id) => {
    await axios.delete(`http://localhost:8080/account/${id}`);
    loadAccounts()
  }

  return (
    <div className='container'>
      <div className='py-5'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">State</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              accounts.map((account, index) => (
                <tr>
                  <th scope="row" key={index}>{index + 1}</th>
                  <td>{account.accountName}</td>
                  <td>{account.accountType}</td>
                  <td>{account.accountState}</td>
                  <td>
                    <Link className="btn btn-success mx-1" to={`/viewaccount/${account.accountId}`}>View</Link>
                    <Link className="btn btn-primary mx-1" to={`/updateaccount/${account.accountId}`}>Update</Link>
                    <button className="btn btn-danger mx-1" onClick={() => deleteAccount(account.accountId)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );

}
