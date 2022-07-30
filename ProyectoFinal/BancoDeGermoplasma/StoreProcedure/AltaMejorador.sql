CREATE PROCEDURE [dbo].[AltaMejorador] 
	@Nombre varchar(50),
	@Mail varchar(50),
	@Direccion varchar(50)

AS
BEGIN
	BEGIN TRY
		Insert into Mejoradores(nombre, mail, direccion) values (@Nombre, @Mail, @Direccion)
		return 0
	END TRY
	BEGIN CATCH
		return -1
	END CATCH
END