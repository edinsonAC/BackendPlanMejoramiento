const TipoFactor = require("./factor_type_model");
const Factor = require("./factor_model");
const EjeEstrategico = require("./strategic_axis_model");
const LineaEstrategica = require("./strategic_line_model");
const ProgramaInversion = require("./investment_program_model");
const ProgramaAcademico = require("./academic_program_model");
const TipoUsuario = require("./user_type_model");
const Usuario = require("./user_model");
const Proceso = require("./process_model");
const TipoSituacion = require("./situation_type_model");
const Responsable = require("./responsible_model");

const PlanMejoramiento = require("./improvement_plan_model")
const Proyecto = require("./project_model")
const AccionMejora = require("./improvement_action_model")
const Tarea = require("./task_model")

ProgramaAcademico.hasMany(Usuario, {foreignKey: 'pracId'});
Usuario.belongsTo(ProgramaAcademico, {foreignKey: 'pracId'});

TipoUsuario.hasMany(Usuario, {foreignKey: 'tiusId'});
Usuario.belongsTo(TipoUsuario, {foreignKey: 'tiusId'});

TipoFactor.hasMany(Factor, {foreignKey: 'tifaId'});
Factor.belongsTo(TipoFactor, {foreignKey: 'tifaId'});

EjeEstrategico.hasMany(LineaEstrategica, {foreignKey: 'ejesId'});
LineaEstrategica.belongsTo(EjeEstrategico, {foreignKey: 'ejesId'});

LineaEstrategica.hasMany(ProgramaInversion, {foreignKey: 'liesId'});
ProgramaInversion.belongsTo(LineaEstrategica, {foreignKey: 'liesId'});

ProgramaAcademico.hasMany(PlanMejoramiento, {foreignKey: 'pracId'});
PlanMejoramiento.belongsTo(ProgramaAcademico, {foreignKey: 'pracId'});

PlanMejoramiento.hasMany(Proyecto, {foreignKey: 'plmeId'});
Proyecto.belongsTo(PlanMejoramiento, {foreignKey: 'plmeId'});

PlanMejoramiento.hasMany(AccionMejora, {foreignKey: 'plmeId'});
AccionMejora.belongsTo(PlanMejoramiento, {foreignKey: 'plmeId'});

Factor.hasMany(AccionMejora, {foreignKey: 'factId'});
AccionMejora.belongsTo(Factor, {foreignKey: 'factId'});

ProgramaInversion.hasMany(AccionMejora, {foreignKey: 'prinId'});
AccionMejora.belongsTo(ProgramaInversion, {foreignKey: 'prinId'});

Proceso.hasMany(AccionMejora, {foreignKey: 'procId'});
AccionMejora.belongsTo(Proceso, {foreignKey: 'procId'});

TipoSituacion.hasMany(AccionMejora, {foreignKey: 'tisiId'});
AccionMejora.belongsTo(TipoSituacion, {foreignKey: 'tisiId'});

AccionMejora.hasMany(Tarea, {foreignKey: 'acmeId'});
Tarea.belongsTo(AccionMejora, {foreignKey: 'acmeId'});

Usuario.hasMany(Tarea, {foreignKey: 'usuaId'});
Tarea.belongsTo(Usuario, {foreignKey: 'usuaId'});

Responsable.hasMany(Tarea, {foreignKey: 'respId'});
Tarea.belongsTo(Responsable, {foreignKey: 'respId'});


module.exports = {
    Factor,
    TipoFactor,
    EjeEstrategico,
    LineaEstrategica,
    ProgramaInversion,
    ProgramaAcademico,
    Usuario,
    TipoUsuario,
    PlanMejoramiento,
    Proyecto,
    Proceso,
    TipoSituacion,
    AccionMejora,
    Tarea,
    Responsable
};