import { gql } from 'apollo-boost';

export const GET_USER_QUERY = gql`
  query GetUserQuery($email: ID!) {
    user(email: $email) {
      email
      name
      role
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($email: ID!, $newAttributes: UserAttributesInput!) {
    updateUser(email: $email, newAttributes: $newAttributes) {
      email
      name
      role
    }
  }
`;
