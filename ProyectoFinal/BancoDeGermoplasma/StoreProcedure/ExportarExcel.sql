CREATE PROCEDURE ExportarExcel 
	@NumeroSobre int
AS
BEGIN
	UPDATE Sobres SET idEstado = 15 WHERE numeroSobre = @NumeroSobre
END