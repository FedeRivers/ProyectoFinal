CREATE PROCEDURE [dbo].[AsignarSobreACamara]
	@IdCamara int,
	@Fila int,
	@Columna int,
	@NumeroSobre int,
	@IdEstado int
AS
BEGIN
	UPDATE Ubicaciones
	SET numeroSobre = NULL
	WHERE numeroSobre = @NumeroSobre
	IF @IdEstado <> 4
	BEGIN	
		UPDATE Ubicaciones 
		SET numeroSobre = @NumeroSobre 
		WHERE fila = @Fila AND columna = @Columna AND idCamara = @IdCamara 
	END
END