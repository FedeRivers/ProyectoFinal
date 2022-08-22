CREATE PROCEDURE [dbo].[ListarSemillas]
	@TerminoDeBusqueda varchar(100)
AS
BEGIN
	IF (@TerminoDeBusqueda is not null)
		BEGIN
			SELECT 
			se.idSemilla AS idSemilla,
			se.nombre AS nombreSemilla,
			se.fechaDeIngreso,
			se.activo AS activoSemilla,
			ta.idTaxonomia AS idTaxonomia,
			ta.nombre AS nombreTaxonomia,
			ta.activo AS activoTaxonomia		
			FROM Semillas se INNER JOIN Taxonomias ta ON se.idTaxonomia = ta.idTaxonomia
			WHERE se.nombre Like '%'+@TerminoDeBusqueda+'%' and se.activo = 1
		END
	ELSE
		BEGIN
			SELECT 
			se.idSemilla AS idSemilla,
			se.nombre AS nombreSemilla,
			se.fechaDeIngreso,
			se.activo AS activoSemilla,
			ta.idTaxonomia AS idTaxonomia,
			ta.nombre AS nombreTaxonomia,
			ta.activo AS activoTaxonomia		
			FROM Semillas se INNER JOIN Taxonomias ta ON se.idTaxonomia = ta.idTaxonomia
			WHERE se.activo = 1		
		END
END