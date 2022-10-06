CREATE PROCEDURE [dbo].[ListarLotesParaDevolucion]
AS
BEGIN
	SELECT * FROM Lotes l
	WHERE l.numeroLote NOT IN (SELECT s.numeroLote
							   FROM Sobres s
							   WHERE s.idEstado in(7,3,11,12,13,14,15))
	AND activo = 1
END




