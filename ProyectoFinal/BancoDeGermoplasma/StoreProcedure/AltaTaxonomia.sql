CREATE PROCEDURE AltaTaxonomia 
	@Nombre VARCHAR(50)
AS
BEGIN
	INSERT INTO Taxonomias(nombre)
	VALUES(@Nombre)
END
GO