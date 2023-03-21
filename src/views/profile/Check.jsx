// import React, { useState,useEffect } from 'react';
// import jwt_decode from "jwt-decode";
// const Check = () => {
//     const [name, setName] = useState("");
//     const [phone, setPhone] = useState("");
//     const [email, setEmail] = useState("");
//     const [address, setAddress] = useState("");
//     const [qualification, setQualification] = useState("");
//     const [userimg, setuserimg] = useState("");
//     const [id, setid] = useState("");
//     const [dob, setDob] = useState();
//     useEffect(() => {
//         const token = window.localStorage.getItem("JWTtoken");
//         var { _doc } = jwt_decode(token);
//         console.log(_doc)
//         console.log({ _doc });
//         setName(_doc.name);
//         setPhone(_doc.phoneno);
//         setEmail(_doc.email);
//         setAddress(_doc.address);
//         setQualification(_doc.qualification);
//         setuserimg(_doc.userimg);
//         setid(_doc._id);
//         setDob(dob);
//         // moment().format("MMMM Do YYYY, h:mm:ss a");
//       }, []);
//       const [data, setData] = useState(JSON.parse(localStorage.setItem("data")) || {});

//       const handleInputChange = (newValue) => {
//         const updatedData = { ...data, field: newValue };
//         setData(updatedData);

//       }
//   return (
//     <div>

//     <div>
//       <h1>Hello, {name}!</h1>
//       <input type="text" value={name} onChange={handleInputChange} />
//       <button onClick={handleUpdate}>Update Name</button>
//     </div>

//     </div>
//   )
// }

// export default Check
