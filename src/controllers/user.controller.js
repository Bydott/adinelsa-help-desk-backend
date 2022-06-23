import { getConnection, querys, sql } from "../database";

export const getUserByLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("email", sql.VarChar, email)
      .input("password", sql.VarChar, password)
      .query(querys.getUserByLogin);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_usuario", req.params.id_usuario)
      .query(querys.getIncidenceById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateUserById = async (req, res) => {
  const { telefono_usuario, correo_usuario, direccion_usuario, contraseña_usuario } = req.body;

  // validating
  if (telefono_usuario == null || correo_usuario == null || direccion_usuario == null || contraseña_usuario == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("telefono_Usuario", sql.VarChar, telefono_usuario)
      .input("correo_Usuario", sql.Varchar, correo_usuario)
      .input("direccion_Usuario", sql.VarChar, direccion_usuario)
      .input("contraseña-Usuario", sql.Varchar, contraseña_usuario)
      .input("id_usuario", req.params.id_usuario)
      .query(querys.updateUserById);
    res.json({ telefono_usuario, correo_usuario, direccion_usuario, contraseña_usuario });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};