// import React, { useState, useEffect } from "react";

// function Demo() {
//   const [data, setData] = useState( JSON.parse(localStorage.getItem("myData")) || []);

//   // Function to fetch data from localStorage when the component mounts
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("myData"));
//     if (storedData) {
//       setData(storedData);
//     }
//   }, []);

//   // Function to update localStorage whenever data changes
//   useEffect(() => {
//     localStorage.setItem("myData", JSON.stringify(data));
//   }, [data]);

//   // Function to handle adding new items to the data
//   const addItem = () => {
//     const newItem = { id: Date.now(), name: "New Item" }; // Replace with your item structure
//     setData([...data, newItem]);
//   };

//   return (
//     <div className="App">
//       <h1>Data:</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//       <button onClick={addItem}>Add Item</button>
//     </div>
//   );
// }

// export default Demo;





// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ContactList contacts={contacts} />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         path: "/contact/:profileId",
//         element: (
//           <ContactCard contacts={contacts} deleteContact={deleteContact} />
//         ),
//         errorElement: <NoUser />,
//       },
//     ],
//   },
//   {
//     path: "/add",
//     element: <AddContact getContact={getContact} />,
//   },
// ]);

// return (
//   <div className="App">
//     <Header />
//     <Hero />
//     <RouterProvider router={router} />

//     {/* <Demo/> */}
//     {/* <AddContact getContact={getContact} />
//       <ContactList contacts={contacts} deleteContact={deleteContact} /> */}
//   </div>
// );

{/* <div className="container">
  <div className="row">
    <div className="col-sm-4">
      <div className="row">
        <NavLink to="/add" className="col-sm-6 btn btn-outline-dark mb-4">
          New
        </NavLink>
      </div>
      {contacts.length === 0 ? (
        <div>No Contacts</div>
      ) : (
        <div className="flex gap-2">{getContact}</div>
      )}
    </div>
    <div className="col-sm-8">
      <Outlet />
    </div>
  </div>
</div>; */}
