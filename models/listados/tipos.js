import { gql } from 'apollo-server-express';

const tiposListados = gql`
  enum Listado_EstadoUsuario {
    Pendiente
    Autorizado
    No_Autorizado
  }

  enum Listado_Rol {
    Estudiante
    Lider
    Administrador
  }

  enum Listado_EstadoProyecto {
    Activo
    Inactivo
  }

  enum Listado_FaseProyecto {
    Iniciado
    Desarrollo
    Terminado
    Nulo
  }

  enum Listado_TipoObjetivo {
    General
    Especifico
  }

  enum Listado_EstadoInscripcion {
    Aceptado
    Rechazado
    Pendiente
  }
`;

export { tiposListados };
