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
  };

  useEffect(() => {
    // console.log(user);
    if (user) {
      getContact(user);
    }
  }, [user]);

  return (
    <section className="contact-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2>Add Contact</h2>
            <form onSubmit={getUser}>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="mt-1 btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddContact;
