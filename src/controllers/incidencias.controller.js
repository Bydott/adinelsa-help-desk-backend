import { getConnection, querys, sql } from "../database";

export const getAllIncidence = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllIncidence);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewIncidence = async (req, res) => {
  const { codigo_incidencia, fecha_incidencia, id_tipo_incidencia, id_detalle_incidencia, id_usuario, id_suministro } = req.body;

  // validating
  if (codigo_incidencia == null || fecha_incidencia == null || id_tipo_incidencia == null || id_detalle_incidencia == null || id_usuario == null || id_suministro == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("codigo_incidencia", sql.Char, codigo_incidencia)
      .input("fecha_incidencia", sql.Date, fecha_incidencia)
      .input("id_tipo_incidencia", sql.int, id_tipo_incidencia)
      .input("id_detalle_incidencia", sql.int, id_detalle_incidencia)
      .input("id_usuario", sql.int, id_usuario)
      .input("id_suministro", sql.int, id_suministro)
      .query(querys.createNewIncidence);

    res.json({ codigo_incidencia, fecha_incidencia, id_tipo_incidencia, id_detalle_incidencia, id_usuario, id_suministro });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getIncidenceById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_incidencia", req.params.id_incidencia)
      .query(querys.getIncidenceById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
