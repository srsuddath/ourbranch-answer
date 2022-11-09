// Node Modules
import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { map } from 'lodash';
// Relative Imports
import { Wrapper } from './styles.js';
import { GET_USER_QUERY, UPDATE_USER_MUTATION } from './queries.js';

const ROLE_ENUM = {
  ADMIN: { label: 'Admin', value: 'ADMIN' },
  DEVELOPER: { label: 'Developer', value: 'DEVELOPER' },
  APP_MANAGER: { label: 'App Manager', value: 'APP_MANAGER' },
  MARKETING: { label: 'Marketing', value: 'MARKETING' },
  SALES: { label: 'Sales', value: 'SALES' },
};

const EditUserPage = () => {
  // create state
  const [name, setName] = React.useState('');
  const [role, setRole] = React.useState('');

  // use navigate to redirect to the users page after save
  const navigate = useNavigate();

  // fetch email from url for query
  const { email } = useParams();

  /* create our get user query, setting a default value and using a network only
   fetch policy to prevent issues loading the page repeatedly after saves */
  const {
    loading,
    error,
    data = { user: {} },
  } = useQuery(GET_USER_QUERY, {
    variables: { email },
    fetchPolicy: 'network-only',
  });

  // save the user info then redirect to the users page
  const [updateUser] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      navigate('/users');
    },
  });

  // this function is used to take care of the hand off between data and local state on load
  const deriveChecked = (roleEnum) => {
    if (role) {
      return roleEnum === role;
    }
    return roleEnum === data.user.role;
  };

  // loading handler, replace with something fancy
  if (loading) {
    return <p>Loading...</p>;
  }

  // error handler, replace with something fancy
  if (error) {
    return <p>Error: {JSON.stringify(data)}</p>;
  }

  return (
    <Wrapper>
      {/* Header contains the title and the save button*/}
      <header className="title-row">
        <div className="title">{email}</div>
        <button
          type="button"
          className={`save-button`}
          onClick={() => {
            updateUser({
              variables: {
                email,
                newAttributes: {
                  name: name || data.user.name,
                  role: role || data.user.name,
                },
              },
            });
          }}
        >
          Save
        </button>
      </header>

      <div className="line" />

      <div className="edit-row">
        {/* first column for updating name*/}
        <div className="column">
          <label htmlFor="name-input" className="name-label">
            Name
          </label>

          {/* do some value chaining with name to start with the data,
            and then swap to state after first update*/}
          <input
            type="text"
            className="name-input"
            id="name-input"
            value={name || data.user.name}
            onChange={(event) => {
              console.log('2 did it');
              setName(event.target.value);
            }}
          />
        </div>

        <div className="vertical-line" />

        <div className="column">
          {/* iterate over our enums to create our role options*/}
          {map(ROLE_ENUM, (roleEnum) => {
            return (
              <div key={roleEnum.value} className="role-radio-input">
                <input
                  type="radio"
                  className="radio-button"
                  name="role"
                  id={`${roleEnum.value}-radio`}
                  value={roleEnum.value}
                  checked={deriveChecked(roleEnum.value)}
                  onChange={() => {
                    setRole(roleEnum.value);
                  }}
                />
                <label htmlFor={`${roleEnum.value}-radio`}>{roleEnum.label}</label>
              </div>
            );
          })}
        </div>
      </div>

      {/* not part of the design, but there should be 
        functionality to return to the user page without an update*/}
      <Link to="/users" className="return-button">
        Return to user page
      </Link>
    </Wrapper>
  );
};

export default EditUserPage;
