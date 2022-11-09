import { gql } from 'apollo-boost';

export const ALL_USERS_QUERY = gql`
  query GetAllUsers {
    allUsers {
      email
      name
      role
    }
  }
`;

export const DELETE_USERS_MUTATION = gql`
  mutation DeleteUsersMutation($emails: [ID]!) {
    deleteUsers(emails: $emails)
  }
`;

export const RESET_USERS_MUTATION = gql`
  mutation ResetUsersMutation {
    resetUsers
  }
`;
