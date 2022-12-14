//Node Modules
import { useQuery, useMutation } from '@apollo/react-hooks';
import { map } from 'lodash';
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Relative Imports
import { ALL_USERS_QUERY, DELETE_USERS_MUTATION, RESET_USERS_MUTATION } from './queries.js';
import { Wrapper } from './styles.js';
import { ROLE_ENUM } from '../../utils/constants';

const UsersPage = () => {
  // create a state variable to hold emails of users to delete
  const [usersToDelete, setUsersToDelete] = React.useState([]);
  const navigate = useNavigate();

  // get all users query, notifying on refetch so we can show the loading state
  const {
    loading: queryLoading,
    error: queryError,
    data = {},
    refetch,
  } = useQuery(ALL_USERS_QUERY, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
  });

  // delete a users mutation, using array of emails to select users, on completion, refetch data
  const [deleteUsers, { loading: deleteLoading }] = useMutation(DELETE_USERS_MUTATION);

  // reset users mutation, leaving this button / query here so the demo is fully functional
  const [resetUsers, { loading: resetLoading }] = useMutation(RESET_USERS_MUTATION);

  // function to handle toggling of checkboxes / storing emails in state
  const toggleUserCheckbox = (email) => (event) => {
    if (event.target.checked) {
      setUsersToDelete([...usersToDelete, email]);
    }
    if (!event.target.checked) {
      setUsersToDelete(usersToDelete.filter((user) => user !== email));
    }
  };

  // loading handler, replace with something fancy
  if (queryLoading || deleteLoading || resetLoading) {
    return <p>Loading...</p>;
  }

  // error handler, replace with something fancy
  if (queryError) {
    return <p>Error: {JSON.stringify(queryError)}</p>;
  }

  return (
    <Wrapper>
      {/* Header contains the title and the delete button*/}
      <header className="title-row">
        <div className="title">Users</div>
        <button
          type="button"
          disabled={!usersToDelete.length > 0}
          className={`delete-button ${usersToDelete.length > 0 ? 'active' : ''}`}
          onClick={() => {
            setUsersToDelete([]);
            deleteUsers({ variables: { emails: usersToDelete } }).then(() => {
              refetch();
            });
          }}
        >
          Delete
        </button>
      </header>

      {/* table for all our user data*/}
      <table>
        <thead>
          <tr>
            <td></td>
            <td className="header">EMAIL</td>
            <td className="header">NAME</td>
            <td className="header">ROLE</td>
          </tr>
        </thead>
        <tbody>
          {/* map over users and generate table rows */}
          {map(data.allUsers, (user) => (
            // instead of adding the click handler to the entire row,
            // we skip adding it to the checkbox
            <tr key={user.email}>
              <td className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={toggleUserCheckbox(user.email)}
                />
              </td>
              <td
                className="user-email clickable"
                onClick={() => {
                  navigate(`/users/${user.email}`);
                }}
              >
                {user.email}
              </td>
              <td
                className="clickable"
                onClick={() => {
                  navigate(`/users/${user.email}`);
                }}
              >
                {user.name}
              </td>
              <td
                className="clickable"
                onClick={() => {
                  navigate(`/users/${user.email}`);
                }}
              >
                {ROLE_ENUM[user.role].label}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* reset button, so that the demo is resettable */}
      <button
        type="button"
        className="reset-button"
        onClick={() => {
          setUsersToDelete([]);
          resetUsers().then(refetch);
        }}
      >
        Reset All Data
      </button>
    </Wrapper>
  );
};

export default UsersPage;
