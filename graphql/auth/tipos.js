import { gql } from "apollo-server-core";

const tiposAutenticacion = gql`

type Token {
    token: String
    error: String
  }

type Mutation {
    registro(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      rol: Listado_Rol!
      estado: Listado_EstadoUsuario
      password: String!
    ): Token!

    login(
      correo: String!
      password: String!
    ): Token

    refreshToken: Token
    }
`;

export { tiposAutenticacion };