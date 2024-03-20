import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ContactCard = ({ contacts, deleteContact }) => {
  const params = useParams();
  // console.log(contacts)
  // console.log(params);
  const contact = contacts.find((contact) => contact.id == params.profileId);
  // console.log(contact);
  const { id, name, email } = contact;

  const getRandomColor = () => {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256); // Random integer between 0 and 255
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Construct a CSS color string using the RGB values
    const color = `rgb(${red}, ${green}, ${blue})`;
    const backgroundColorStyle = {
      backgroundColor: color, // Example: Red background color
    };

    return backgroundColorStyle;
  };

  // Example usage:
  const randomColor = getRandomColor();
  console.log(randomColor); // Output a random color string, e.g., "rgb(123, 45, 200)"

  return (
    <div class="container">
      <div style={randomColor} key={id} class="card">
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{email}</h6>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            hendrerit, dui nec consequat ultricies, felis enim varius felis, et
            tempus lacus turpis a odio.
          </p>
          <a href="#" class="card-link">
            Email
          </a>
          <a href="#" class="card-link">
            LinkedIn
          </a>
          <button class="btn btn-outline-info m-lg-2">Edit</button>
          <button class="btn btn-outline-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
