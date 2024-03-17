import ContactCard from "./ContactCard";

const ContactList = ({ contacts, deleteContact }) => {
  // console.log(contacts);
  // console.log(deleteContact);

  // console.log(contacts.length === 0 ? 'no user': 'user found')

  const getConatct = contacts.map((contact) => (
    <div>
      <ContactCard contact={contact} deleteContact={deleteContact} />
    </div>
  ));

  return (
    <div >
      <h2>Contact List</h2>
      {contacts.length === 0 ? <div>No Contacts</div> : getConatct}
    </div>
  );
};

export default ContactList;
