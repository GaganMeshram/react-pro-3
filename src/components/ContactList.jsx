import ContactCard from "./ContactCard";
import { NavLink, Outlet } from "react-router-dom";
import Search from "./Search";

const ContactList = ({ contacts, deleteContact }) => {
  const getContact = contacts.map((contact) => (
    <div className="">
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
              <h6 className=" text-black">{contact.name}</h6>
              {/* <i>{contact.email}</i> */}
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
        <div className="col-sm-4">
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
