CREATE PROCEDURE [dbo].[ObtenerEstadisticas]
	@fechaDesde DateTime,
	@fechaHasta DateTime
AS
BEGIN
	
SELECT COUNT(*) AS valor,t.nombre 
FROM SOBRES so 
INNER JOIN Semillas se ON so.idSemilla = se.idSemilla
INNER JOIN Taxonomias t ON t.idTaxonomia = se.idTaxonomia
WHERE ((@fechaDesde IS NULL
	  OR so.fechaDeIngreso >= @fechaDesde) AND
	  (@fechaHasta IS NULL
	  OR so.fechaDeIngreso <= @fechaHasta))
GROUP BY t.nombre

END
