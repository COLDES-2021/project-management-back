import { gql } from 'apollo-server-express';
import { tiposListados } from '../models/listados/tipos.js';
import { tiposUsuario } from '../models/usuario/tipos.js';
import { tiposProyecto } from '../models/proyecto/tipos.js';
import { tiposAvance } from '../models/avance/tipos.js';
import { tiposInscripcion } from '../models/inscripcion/tipos.js';

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [
  tiposGlobales,
  tiposListados,
  tiposUsuario,
  tiposProyecto,
  tiposAvance,
  tiposInscripcion,
];
