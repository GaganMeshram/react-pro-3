import React, { useState, useEffect } from "react";

function Demo() {
  const [data, setData] = useState( JSON.parse(localStorage.getItem("myData")) || []);

  // Function to fetch data from localStorage when the component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("myData"));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  // Function to update localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(data));
  }, [data]);

  // Function to handle adding new items to the data
  const addItem = () => {
    const newItem = { id: Date.now(), name: "New Item" }; // Replace with your item structure
    setData([...data, newItem]);
  };

  return (
    <div className="App">
      <h1>Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default Demo;
