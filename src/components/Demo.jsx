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



//  return (
//    <section className="contact-form">
//      <div className="container">
//        <div className="row justify-content-center">
//          <div className="col-md-6">
//            <h2>Add Contact</h2>
//            <form onSubmit={getUser}>
//              <div class="form-group">
//                <label for="name">Name</label>
//                <input
//                  type="text"
//                  className="form-control"
//                  id="name"
//                  placeholder="Enter your name"
//                  value={name}
//                  onChange={(e) => setName(e.target.value)}
//                />
//              </div>
//              <div className="form-group">
//                <label for="email">Email address</label>
//                <input
//                  type="email"
//                  class="form-control"
//                  id="email"
//                  placeholder="Enter your email"
//                  value={email}
//                  onChange={(e) => setEmail(e.target.value)}
//                />
//              </div>
//              <button className="mt-1 btn btn-success">Submit</button>
//            </form>
//          </div>
//        </div>
//      </div>
//    </section>
//  );
