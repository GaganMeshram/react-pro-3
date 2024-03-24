import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ContactCard = ({ contacts, deleteContact }) => {
  const params = useParams();
  console.log(contacts);
  console.log(params);
  console.log(deleteContact);
  const contact = contacts.find((contact) => contact.id == params.id);

  const getRandomColor = () => {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256); // Random integer between 0 and 255
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 156);

    // Construct a CSS color string using the RGB values
    const color = `rgb(${red}, ${green}, ${blue})`;
    const backgroundColorStyle = {
      backgroundColor: color, // Example: Red background color
      color: color,
    };

    return backgroundColorStyle;
  };
  const randomColor = getRandomColor();

  const card = () => {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title text-capitalize">{contact.name}</h5>
          <p class="card-text ">{contact.email}</p>
          <button onClick={() => deleteContact(contact.id)} class="btn btn-danger mx-3">
            Delete
          </button>
          <button class="btn btn-primary">Edit</button>
        </div>
      </div>
    );
  };

  // Example usage:
  console.log(randomColor); // Output a random color string, e.g., "rgb(123, 45, 200)"

  return (
    <div>{contact ? card() : <p>{`No contact with ID: ${params.id}`}</p>}</div>
  );
};

export default ContactCard;
