import ContactCard from "./ContactCard";
import { NavLink, Outlet } from "react-router-dom";

const ContactList = ({ contacts, deleteContact }) => {
  const getContact = contacts.map((contact) => (
    <div>
      <div className="">
        <ul className="list-unstyled">
          <li key={contact}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "text-success" : "";
              }}
              key={contact}
              to={`/contact/${contact.id}`}
            >
              <h6>{contact.name}</h6>
              {/* <i>{contact.email}</i> */}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <h3>Contact list</h3>
          {contacts.length === 0 ? (
          <div>No Contacts</div>
        ) : (
          <div className="flex gap-2">{getContact}</div>
        )}
        </div>
        <div className="col-sm-8">
          <Outlet/>
        </div>
      </div>
    </div>

    // <div className="container">
    //   <div className="flex flex-column gap-2">
    //     <h2 className="display-3">Contact List</h2>
    //     {contacts.length === 0 ? (
    //       <div>No Contacts</div>
    //     ) : (
    //       <div className="flex gap-2">{getContact}</div>
    //     )}
    //   </div>

    //   <Outlet />
    // </div>
  );
};

export default ContactList;
