import { gql } from 'apollo-server-express';

const tiposUsuario = gql`
  type Usuario {
    _id: ID!
    identificacion: String!
    nombre: String!
    apellido: String!
    correo: String!
    rol: Listado_Rol!
    estado: Listado_EstadoUsuario
    inscripciones: [Inscripcion]
    avancesCreados: [Avance]
    proyectosLiderados: [Proyecto]
    foto: String
  }

  input CamposEditarPerfil {
    nombre: String
    apellido: String
    identificacion: String
    foto: String
  }

  input FiltroUsuarios {
    _id: ID
    identificacion: String
    correo: String
    rol: Listado_Rol
    estado: Listado_EstadoUsuario
  }

  type Query {
    Usuarios(filtro: FiltroUsuarios): [Usuario]
    Usuario(_id: String!): Usuario
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      rol: Listado_Rol!
      estado: Listado_EstadoUsuario
      password: String!
    ): Usuario

    editarUsuario(
      _id: String!
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      estado: Listado_EstadoUsuario!
    ): Usuario

    eliminarUsuario(_id: String, correo: String): Usuario

    editarPerfil(_id: String!, campos: CamposEditarPerfil!): Usuario
  }
`;

export { tiposUsuario };
