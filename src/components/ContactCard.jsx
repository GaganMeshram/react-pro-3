import { useEffect } from "react";


const ContactCard = ({ contact, deleteContact }) => {
  const { id, name, email } = contact;
// console.log(deleteContact)
  const getId = (usr) => {
    console.log(usr.id)
   
  }



  return (
    <ul>
      {/* <!-- Placeholder for contact items --> */}
      <li key={id}>
        <div class="contact-item d-flex justify-content">
          <i class="bi bi-person-circle"></i>
          <div>
            <h3>{name}</h3>
            <p>{email}</p>
          </div>

          {/* <!-- Add more details if needed --> */}
          <div>
            <button
              class="btn btn-danger"
              onClick={() => deleteContact(contact)}
            >
              <i class="bi bi-trash"></i> Delete
            </button>
          </div>
        </div>
      </li>
      {/* <!-- Additional contact items go here --> */}
    </ul>
  );
};

export default ContactCard;
