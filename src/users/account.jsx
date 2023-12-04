import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    console.log("Account");
    console.log(account);
    setAccount(account);
  };
  useEffect(() => {
    fetchAccount();
  }, []);

  const save = async () => {
    console.log("Account");
    await client.updateUser(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/auth/signin");
  };




  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          <input value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          <input value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          <input value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          <input value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          <select onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>

          <button onClick={save}>
     Save
  </button>
  <button onClick={signout}>
            
            Signout
          </button>

          

        </div>
      )}

<Link to="/auth/admin/users" className="btn btn-warning w-100">
    Users
  </Link>
    </div>
  );
}
export default Account;