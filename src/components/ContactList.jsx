import ContactCard from "./ContactCard";
import { NavLink, Outlet } from "react-router-dom";
import Search from "./Search";
import "../css/contactList.css";

const ContactList = ({ contacts, deleteContact }) => {
  const getContact = contacts.map((contact) => (
    <div className="">
      <div className="">
        <ul className="list-unstyled">
          <li key={contact}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "text-danger" : "";
              }}
              key={contact}
              to={`/contact/${contact.id}`}
            >
              {contact.name}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <NavLink className="btn btn-dark" to={"/add"}>
        Add new
      </NavLink>
      <div className="row">
        <div className=" contact-list col-sm-4 text-bg-light pt-2 mt-2 border-2 rounded-2">
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
    </div>
  );
};

export default ContactList;
