import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = (props) => {
  return (
    <>
      <div>
        <p>In some other page!</p>

        <Link to="/">Go Back Home</Link>
      </div>
    </>
  );
};

export default OtherPage;
