CREATE PROCEDURE [dbo].[AltaSemilla] 
	@Nombre varchar(50),
	@IdTaxonomia int

AS
BEGIN
	BEGIN TRY
		INSERT INTO Semillas(nombre, idTaxonomia) VALUES (@Nombre, @IdTaxonomia)
		return 0
	END TRY
	BEGIN CATCH
		return -1
	END CATCH
END