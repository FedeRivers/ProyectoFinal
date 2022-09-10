CREATE PROCEDURE [dbo].[AsignarSobreACamara]
	@IdCamara int,
	@Fila int,
	@Columna int,
	@NumeroSobre int
AS
BEGIN
	UPDATE Ubicaciones
	SET numeroSobre = NULL
	WHERE numeroSobre = @NumeroSobre

	UPDATE Ubicaciones 
	SET numeroSobre = @NumeroSobre 
	WHERE fila = @Fila AND columna = @Columna AND idCamara = @IdCamara
END