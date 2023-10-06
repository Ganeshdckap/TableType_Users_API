
// import React, { useEffect, useState } from "react";
// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState('');

//   const fetchUserData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data));
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   return (
//     <div className="container">
//       <h3>User Details</h3>
//          <input placeholder="User Name" onChange={(e) => setSearch(e.target.value)} className="mt-2" />
      
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>NAME</th>
//               <th>EMAIL</th>
//               <th>PHONE</th>
//               <th>CITY</th>
//               <th>ZIPCODE</th>  
//               <th>COMPANY</th>
//               <th>WEBSITE</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length > 0 &&
//               users.map((user) => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.address.city}</td>
//                   <td>{user.address.zipcode}</td>
//                   <td>{user.company.name}</td>
//                   <td>{user.website}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="container">
      <h3>User Details</h3>
      <input
        placeholder="Search User by Name"
        onChange={(e) => setSearch(e.target.value)}
        className="mt-2"
      />

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>CITY</th>
              <th>ZIPCODE</th>
              <th>COMPANY</th>
              <th>WEBSITE</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address.city}</td>
                  <td>{user.address.zipcode}</td>
                  <td>{user.company.name}</td>
                  <td>{user.website}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No matching users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
