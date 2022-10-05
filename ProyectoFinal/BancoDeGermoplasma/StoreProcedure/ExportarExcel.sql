CREATE PROCEDURE ExportarExcel 
	@IdSobre int
AS
BEGIN
	UPDATE Sobres SET idEstado = 15, activo = 0 WHERE idSobre = @IdSobre
END