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
  }, []);

  const fetchValues = async () => {
    const values = await axios.get('/api/values/current');
    setValues(values.data);
  };

  const renderValues = (values) => {
    const keys = Object.keys(values);
    return keys.map((key) => {
      return <li key={key}>Key is <b>{key}</b> and value is <b>{values[key]}</b></li>
    });
  };

  const fetchIndexes = async () => {
    const response = await axios.get('/api/values/all');
    setSeenIndexes(response.data);
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
        <div>
          {seenIndexes.map((seenIndex, i) => {
            return <li key={i}>{seenIndex.number}</li>;
          })}
        </div>

        <h3>Calculated Values:</h3>
        <div>{renderValues(values)}</div>
      </div>
    </>
  );
};

export default Fib;
