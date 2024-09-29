// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersTable from './components/UsersTable';

function App() {
  const [userData, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch users from API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/get-users', {
          headers: {
            'Authorization': 'Basic QWFydGkwMTpBYXJ0aTA5Mjc',
          },
          // timeout: 5000,
        });
        setUsers(response.data);
        setLoading(false);
        console.log(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchUsers()

  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <div className="App">      
      <h1>User Details</h1>

      {userData && (
        <table>
          <thead>
            <tr>
              <th>Active Status</th>
              <th>Report Date</th>
              <th>City</th>
              <th>Created Date</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Free Trial End Date</th>
              <th>Free Trial Taken</th>
              <th>Gender</th>
              <th>Last Login Date</th>
              <th>Last Name</th>
              <th>Last Payment Date</th>
              <th>Last Updated Date</th>
              <th>Mobile</th>
              <th>Partner Mobile</th>
              <th>Promotion Code</th>
              <th>Sale Channel</th>
              <th>Subscription End Date</th>
              <th>Subscription Type</th>
              <th>Transaction Ref</th>
              <th>Transaction UPI</th>
              <th>User Type</th>

            </tr>
          </thead>
          <tbody>
            {userData && userData.firstname && Object.keys(userData.firstname).map((key) => (
              <tr key={key}>
                <td>{userData.ActiveStatus[key]}</td>
                <td>{userData.ReportDate[key]}</td>
                <td>{userData.city[key]}</td>
                <td>{userData.createdate[key]}</td>
                <td>{userData.email[key]}</td>
                <td>{userData.firstname[key]}</td>
                <td>{userData.freetrialenddate[key]}</td>
                <td>{userData.freetrialtaken[key]}</td>
                <td>{userData.gender[key]}</td>
                <td>{userData.lastlogindate[key]}</td>
                <td>{userData.lastname[key]}</td>
                <td>{userData.lastpaymentdate[key]}</td>
                <td>{userData.lastupdatedate[key]}</td>
                <td>{userData.mobile[key]}</td>
                <td>{userData.partnermobile[key]}</td>
                <td>{userData.promotioncode[key]}</td>
                <td>{userData.salechannel[key]}</td>
                <td>{userData.subcriptionenddate[key]}</td>
                <td>{userData.subcriptiontype[key]}</td>
                <td>{userData.transactionref[key]}</td>
                <td>{userData.transactionupi[key]}</td>
                <td>{userData.usertype[key]}</td>

              </tr>
            ))}
          </tbody>
        </table> 
      )}
    </div>
  );
}

export default App;
