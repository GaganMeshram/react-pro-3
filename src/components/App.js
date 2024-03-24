import AddContact from "./AddConatact";
import ContactList from "./ContactList";
import NoUser from "./NoUser";
import Demo from "./Demo";
import Header from "./Header";
import Hero from "./Hero";
import { useEffect, useState } from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import NotFound from "./NotFound";
import ContactCard from "./ContactCard";

function App() {
  const Local_Data = "contacts"; // Use a constant variable for the local storage key
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(Local_Data)) || []
  );

  useEffect(() => {
    // Save data to local storage whenever contacts state changes
    localStorage.setItem(Local_Data, JSON.stringify(contacts));
  }, [contacts]); // Run this effect whenever contacts state changes

  const getContact = (user) => {
    // Update contacts state by appending the new user
    setContacts([...contacts, user]);
  };

  const deleteContact = (id) => {
    // console.log(id);
    setContacts(contacts.filter((contact) => contact.id != id));
    // Implement delete functionality here
  };

  // Rouetrs
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ContactList contacts={contacts} />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/contact/:id",
          element: (
            <ContactCard contacts={contacts} deleteContact={deleteContact} />
          ),
        },
        {
          path: "/add",
          element: <AddContact getContact={getContact} />,
        },
      ],
    },
    ,
    ,
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div className="App">
      // <Header />
      // <Hero />
      // <RouterProvider router={router} />
    </div>
  );
}

export default App;
