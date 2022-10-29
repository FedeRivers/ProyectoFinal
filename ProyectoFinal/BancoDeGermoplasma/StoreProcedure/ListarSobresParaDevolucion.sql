CREATE PROCEDURE [dbo].[ListarSobresParaDevolucion]
AS
BEGIN
	SELECT * FROM Sobres 
	WHERE idEstado IN(1, 16) 
		  AND activo = 1
END