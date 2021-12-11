import { gql } from 'apollo-server-express';

const tiposInscripcion = gql`
  type Inscripcion {
    _id: ID!
    estado: Listado_EstadoInscripcion!
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto: Proyecto!
    estudiante: Usuario!
  }

  type Query {
    Inscripciones: [Inscripcion]
  }

  type Mutation {
    crearInscripcion(
      estado: Listado_EstadoInscripcion!
      proyecto: String!
      estudiante: String!
    ): Inscripcion

    aprobarInscripcion(id: String!): Inscripcion
  }
`;

export { tiposInscripcion };
