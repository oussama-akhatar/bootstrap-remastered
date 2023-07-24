import { useEffect, useState } from 'react';
import classes from './Users.module.scss';
import axios from 'axios';

const Services = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <div className={classes.container}>
        <h1>List of Users</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>username</th>
              <th>website</th>
              <th>phone</th>
              <th>address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.website}</td>
                  <td>{user.phone}</td>
                  <td>{user.address.street} - {user.address.suite} - {user.address.city}</td>
                  <td>
                    <i className="bi bi-pen text-success"></i>
                    <i className="bi bi-eye text-primary" style={{marginLeft: 10}}></i>
                    <i className="bi bi-trash3 text-danger" style={{marginLeft: 10}}></i>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Services