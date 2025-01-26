import React, { useState, useEffect } from "react";
import axios from "axios";

API_KEY = "https://jsonplaceholder.typicode.com/todos";

const API = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    (async function fetchData() {
      const response = await axios.get(API_KEY);
      setData(response.data.slice(1, 5));
    })();
  }, []);

  async function addTitle() {
    const response = await axios.post(API_KEY, {
      title: title,
    });
    setData([...data, response.data]);
    setTitle("");
  }

  async function deleteTitle(id) {
    await axios.delete(`${API_KEY}/${id}`);
    setData(data.filter((t) => t.id !== id));
  }

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={addTitle}>add</button>
      {data &&
        data.map((title) => (
          <ul key={data.id}>
            <li>{title.title}</li>
            <button onClick={() => deleteTitle(title.id)}>delete</button>
          </ul>
        ))}
    </div>
  );
};

export default API;
