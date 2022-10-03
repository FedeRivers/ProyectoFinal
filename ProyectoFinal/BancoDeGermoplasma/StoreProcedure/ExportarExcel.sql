CREATE PROCEDURE ExportarExcel 
	@NumeroSobre int
AS
BEGIN
	UPDATE Sobres SET idEstado = 15, activo = 0 WHERE numeroSobre = @NumeroSobre
END