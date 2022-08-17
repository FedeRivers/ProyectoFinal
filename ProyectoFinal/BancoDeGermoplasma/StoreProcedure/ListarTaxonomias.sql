CREATE PROCEDURE [dbo].[ListarTaxonomias]
	@TerminoDeBusqueda varchar(100) 
AS
BEGIN
	If (@TerminoDeBusqueda is not null)
		BEGIN
			SELECT idTaxonomia, nombre, activo FROM Taxonomias WHERE nombre Like '%'+@TerminoDeBusqueda+'%' and activo = 1
			
		END
	Else
		BEGIN
			SELECT idTaxonomia, nombre, activo from Taxonomias where  activo = 1		
		END
END
