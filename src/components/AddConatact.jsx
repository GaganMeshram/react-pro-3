import { useState, useEffect } from "react";

const AddContact = ({ getContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  // console.log(getContact)

  const getUser = (e) => {
    e.preventDefault();
    if (name === "" && email === "") {
      alert("All field are medatory");
    } else
      setUser({
        id: Math.floor(Math.random() * 100000),
        name: name,
        email: email,
      });
    setName("");
    setEmail("");
  };

  useEffect(() => {
    // console.log(user);
    if (user) {
      getContact(user);
    }
  }, [user]);

  return (
    <div className="contact-form">
      <h2>Add contact</h2>
      <form onSubmit={getUser}>
        <div className="form-group">
          <label htmlFor="form-group"></label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-group"></label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="mt-2 btn btn-success">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
