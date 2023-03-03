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
    <div className="container">
      <table className="table table-striped table-bordered table-hover">
        <thead>
          
            <TableFilter rows={accounts} onFilterUpdate={filterUpdated}>
              {dataTableData &&
                dataTableColumn.columns.map((title, index) => (
                  <th
                    key={title}
                    filterkey={title}
                    casesensitive={"true"}
                    showsearch={"true"}
                  >
                    {title}
                  </th>
                ))}
            </TableFilter>
          
        </thead>
        <tbody>
          <ElementHtml
            accounts={dataTableData}
            dataTableColumn={dataTableColumn}
          />
        </tbody>
      </table>
    </div>
  );

}
