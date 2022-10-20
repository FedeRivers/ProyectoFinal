CREATE PROCEDURE ExisteSemilla
	@Nombre VARCHAR(50),
	@Taxonomia INT
AS
BEGIN
	IF NOT EXISTS(SELECT * FROM Semillas WHERE nombre = @Nombre AND idTaxonomia = @Taxonomia)
	RETURN 0
	ELSE
	RETURN 1
END
