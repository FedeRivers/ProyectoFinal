CREATE PROCEDURE BajaTaxonomia 
	 @IdTaxonomia INT
AS
BEGIN
	UPDATE Taxonomias SET Activo = 0 WHERE idTaxonomia = @IdTaxonomia
END
GO