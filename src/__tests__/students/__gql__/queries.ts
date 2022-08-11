import { gql } from 'graphql-tag';

export const getStudentsQuery = gql`
  query students {
    students {
      id
      name
      cpf
      email
    }
  }
`;
