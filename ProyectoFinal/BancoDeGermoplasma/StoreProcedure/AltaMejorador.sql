CREATE PROCEDURE [dbo].[AltaMejorador] 
	@Nombre varchar(50),
	@Mail varchar(50),
	@Direccion varchar(50),
	@Celular varchar(9)

AS
BEGIN
	BEGIN TRY
		Insert into Mejoradores(nombre, mail, direccion, celular) values (@Nombre, @Mail, @Direccion, @Celular)
		return 0
	END TRY
	BEGIN CATCH
		return -1
	END CATCH
END