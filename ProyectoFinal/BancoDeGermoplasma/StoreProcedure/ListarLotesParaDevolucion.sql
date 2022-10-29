CREATE PROCEDURE [dbo].[ListarLotesParaDevolucion]
AS
BEGIN
	SELECT * FROM Lotes l
	WHERE l.numeroLote NOT IN (SELECT s.numeroLote
							   FROM Sobres s
							   WHERE s.idEstado NOT IN(1,16)
							   AND s.activo = 1)
	AND l.activo = 1
END



