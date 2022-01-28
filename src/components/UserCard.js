// import React, { useState, useEffect } from 'react'
// import { useParams, Link } from "react-router-dom";

// function UserCard(){
// const [users, setUsers] = useState(null)

// const { id } = useParams();

// useEffect(() => {
//   fetch(`http://localhost:9292/users/${id}`)
//   .then((r) => r.json())
//   .then((user) => {
//       setUsers(user);
//   });
// }, [id]);

// // const { name, password, position, user_description, skills } = user

// console.log(users)

//     return(
//         <div> placeholder
//             {/* <p>{name}</p>
//             <p>{password}</p>
//             <p>{position}</p>
//             <p>{user_description}</p>
//             <p>{skills}</p> */}
//         </div>
//     )
// }

// export default UserCard;