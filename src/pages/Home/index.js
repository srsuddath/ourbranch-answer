// Node Modules
import React from 'react';
import { Wrapper } from './styles.js';
import { Link } from 'react-router-dom';

// this is a basic page with just a redirect link on it, as I preferred
// users to be at the /users url, and didn't want to force a redirect there
const HomePage = () => {
  return (
    <Wrapper>
      <Link to="/users" className="button-oversized">
        Head to User page
      </Link>
    </Wrapper>
  );
};

export default HomePage;
