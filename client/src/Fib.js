import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fib = (props) => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');

  useEffect(() => {
    // featchValues
    fetchValues();

    // fetchIndexes
    fetchIndexes();
  });

  const fetchValues = async () => {
    const values = await axios.get('/api/values/current');
    setValues(values.data);
  };

  const renderValues = () => {
    const entries = [];
    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      );
    }
    return entries;
  };

  const fetchIndexes = async () => {
    const response = await axios.get('/api/values/all');
    setSeenIndexes(response.data);
  };

  const renderSeenIndexes = () => {
    return seenIndexes
      .map((seenIndex) => {
        return seenIndex;
      })
      .join(', ');
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    await axios.post('/api/values', {
      index: index,
    });

    setIndex('');
  };

  return (
    <>
      <div>
        <form onSubmit={formSubmitHandler}>
          <label>Enter your index:</label>
          <input
            value={index}
            onChange={(event) => setIndex(event.target.value)}
          />
          <button>Submit</button>
        </form>
        <h3>Indexes I have seen:</h3>
        <p>{renderSeenIndexes}</p>

        <h3>Calculated Values:</h3>
        {renderValues}
      </div>
    </>
  );
};

export default Fib;
