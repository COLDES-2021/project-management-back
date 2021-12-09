import mongoose from 'mongoose';
// import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from '../enums/enums.js';
import { ObjectiveModel } from '../objective.js';
import { UserModel } from '../usuario/usuario.js';
const { Schema, model } = mongoose;

// interface Proyecto {
//   nombre: string;
//   presupuesto: number;
//   fechaInicio: Date;
//   fechaFin: Date;
//   estado: Enum_EstadoProyecto;
//   fase: Enum_FaseProyecto;
//   lider: Schema.Types.ObjectId;
//   objetivos: [{ descripcion: String; tipo: Enum_TipoObjetivo }];
// }

const projectSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    presupuesto: {
      type: Number,
      required: true,
    },
    fechaInicio: {
      type: Date,
      required: true,
    },
    fechaFin: {
      type: Date,
      required: true,
    },
    estado: {
      type: String,
      enum: ['Activo', 'Inactivo'],
      default: 'Inactivo',
    },
    fase: {
      type: String,
      enum: ['Iniciado', 'Desarrollo', 'Terminado', 'Nulo'],
      default: 'Nulo',
    },
    lider: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: UserModel,
    },
    objetivos: [
      {
        descripcion: {
          type: String,
          required: true,
        },
        tipo: {
          type: String,
          enum: ['General', 'Específico'],
          required: true,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

projectSchema.virtual('avances', {
  ref: 'Avance',
  localField: '_id',
  foreignField: 'proyecto',
});

projectSchema.virtual('inscripciones', {
  ref: 'Inscripcion',
  localField: '_id',
  foreignField: 'proyecto',
});

const ProjectModel = model('Proyecto', projectSchema);

export { ProjectModel };
