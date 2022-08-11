import { gql } from 'graphql-tag';

export const createStudentQuery = gql`
  mutation createStudent {
    id
    name
    cpf
    email
  }
`;

export const deleteStudentQuery = gql`
  mutation deleteStudent (id: $id)
`;

export const updateStudentQuery = gql`
  mutation  updateStudent (id: $id , data: {name: $name, cpf: $cpf, email: $email}) {
    id
  }
`;
