CREATE PROCEDURE [dbo].[ModificarSemilla]
	 @IdSemilla INT,
	 @Nombre VARCHAR(50),
	 @IdTaxonomia INT
AS
BEGIN
	UPDATE Semillas SET nombre = @Nombre, idTaxonomia = @IdTaxonomia WHERE idSemilla = @IdSemilla
END