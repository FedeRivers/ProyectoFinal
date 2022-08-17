CREATE PROCEDURE ListarTaxonomias
AS
BEGIN
	SELECT idTaxonomia, nombre, activo FROM Taxonomias WHERE activo = 1
END
GO
