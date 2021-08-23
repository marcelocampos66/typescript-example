import React, { useEffect, useState } from 'react';
import User from './components/User';
import './App.css';
import getUsers from './services/api';

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      {
        users.map((user: IUser) => <User key={user.email} user={user} />)
      }
    </div>
  );
}

export default App;
