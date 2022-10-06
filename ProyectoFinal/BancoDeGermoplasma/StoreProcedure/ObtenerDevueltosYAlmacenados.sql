CREATE PROCEDURE [dbo].[ObtenerDevueltosYAlmacenados]
	@fechaDesde DateTime,
	@fechaHasta DateTime
AS
BEGIN
	
SELECT COUNT(*) AS valor, e.nombre
FROM SOBRES so 
INNER JOIN Estados e on e.idEstado = so.idEstado
WHERE so.idEstado in (12,15)
	  AND ((@fechaDesde IS NULL
	  OR so.fechaDeIngreso >= @fechaDesde) AND
	  (@fechaHasta IS NULL
	  OR so.fechaDeIngreso <= @fechaHasta))
GROUP BY e.nombre

END