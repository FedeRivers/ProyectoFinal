CREATE PROCEDURE ModificarTaxonomia 
	 @IdTaxonomia INT,
	 @Nombre VARCHAR(50)
AS
BEGIN
	UPDATE Taxonomias SET nombre = @Nombre WHERE idTaxonomia = @IdTaxonomia
END
GO