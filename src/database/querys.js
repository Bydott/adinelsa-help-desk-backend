export const querys = {
  /*
  getAllProducts: "SELECT TOP(500) * FROM [webstore].[dbo].[Products]",
  getProducById: "SELECT * FROM Products Where Id = @Id",
  addNewProduct:
    "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  updateProductById:
    "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
  */
  getAllRoles: "SELECT * FROM Rol",
  getUserByLogin: "SELECT * FROM Usuarios WHERE correo_electronico=@email AND password=@password",
  getAllIncidence: "SELECT * FROM Incidencia",
  getEstadoIncidencia: "SELECT * FROM EstadoIncidencia",
  getTipoIncidencia: "SELECT * FROM TipoIncidencia",
  createNewIncidence: 
  "INSERT INTO Incidencia (cod_incidencia, fecha_registro, id_tipo, id_detalle_incidencia, id_usuario, id_suministro) VALUES (@codigo_incidencia, @fecha_incidencia, @id_tipo_incidencia, @id_detalle_incidencia, @id_usuario, @id_suministro",
  getIncidenceById: "SELECT * FROM Incidencia Where id_incidencia = @id_incidencia",
  getUserById: "SELECT * FROM Usuarios Where id_usuario = @id_usuario",
  updateUserById: 
  "UPDATE Usuarios SET telefono = @telefono_usuario, correo_electronico = @correo_usuario, direccion = @direccion_usuario, password = @contraseña_usuario WHERE id_usuario = @id_usuario",

};
