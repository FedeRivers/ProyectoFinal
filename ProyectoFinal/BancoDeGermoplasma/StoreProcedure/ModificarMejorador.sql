CREATE PROCEDURE [dbo].[ModificarMejorador] 
	@IdMejorador INT,
	@Nombre varchar(50),
	@Mail varchar(50),
	@Direccion varchar(50),
	@Celular varchar(9)
AS
BEGIN
	BEGIN TRY
		UPDATE Mejoradores SET nombre = @Nombre, mail = @Mail, direccion = @Direccion, celular = @Celular WHERE idMejorador = @IdMejorador
		return 0
	END TRY
	BEGIN CATCH
		return -1
	END CATCH
END