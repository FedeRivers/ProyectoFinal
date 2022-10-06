CREATE PROCEDURE [dbo].[ListarSobresParaDevolucion]
AS
BEGIN
	SELECT * FROM Sobres so
	INNER JOIN Semillas se on so.idSemilla = se.idSemilla
	WHERE so.idEstado = 1 
		OR (so.germinacion > 0 AND so.germinacion < 85
		AND so.idEstado NOT IN(12,4))
		AND so.activo = 1
END
