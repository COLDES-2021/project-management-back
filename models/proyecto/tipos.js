import { gql } from 'apollo-server-express';

const tiposProyecto = gql`
  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Listado_TipoObjetivo!
  }

  input crearObjetivo {
    descripcion: String!
    tipo: Listado_TipoObjetivo!
  }

  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Listado_EstadoProyecto!
    fase: Listado_FaseProyecto!
    lider: Usuario!
    objetivos: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
  }

  type Query {
    Proyectos: [Proyecto]
  }

  type Mutation {
    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      estado: Listado_EstadoProyecto!
      fase: Listado_FaseProyecto!
      lider: String!
      objetivos: [crearObjetivo]
    ): Proyecto
  }
`;

export { tiposProyecto };
