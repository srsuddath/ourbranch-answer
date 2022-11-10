// Node Modules
import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link, useParams } from 'react-router-dom';
import { map } from 'lodash';
// Relative Imports
import { Wrapper } from './styles.js';
import { GET_USER_QUERY, UPDATE_USER_MUTATION } from './queries.js';
import { ROLE_ENUM } from '../../utils/constants';

const EditUserPage = () => {
  // create state and set up hooks
  const [name, setName] = React.useState('');
  const [role, setRole] = React.useState('');

  // fetch email from url for query
  const { email } = useParams();

  /* create our get user query, setting a default value and using a network only
   fetch policy to prevent issues loading the page repeatedly after saves */
  const { loading, error, data } = useQuery(GET_USER_QUERY, {
    variables: { email },
    fetchPolicy: 'network-only',
  });

  // hook to set state variables on data fetch
  useEffect(() => {
    if (!loading) {
      setName(data.user.name);
      setRole(data.user.role);
    }
  }, [data, loading]);

  // save the user info
  const [updateUser, { loading: updateInFlight }] = useMutation(UPDATE_USER_MUTATION);

  // loading handler, replace with something fancy
  if (loading || updateInFlight) {
    return <p>Loading...</p>;
  }

  // error handler, replace with something fancy
  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
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
                  name: name,
                  role: role,
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
            value={name}
            onChange={(event) => {
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
                  checked={roleEnum.value === role}
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
