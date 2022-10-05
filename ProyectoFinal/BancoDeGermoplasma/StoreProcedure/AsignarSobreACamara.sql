CREATE PROCEDURE [dbo].[AsignarSobreACamara]
	@IdCamara int,
	@Fila int,
	@Columna int,
	@IdSobre int,
	@IdEstado int
AS
BEGIN
	UPDATE Ubicaciones
	SET idSobre = NULL
	WHERE idSobre = @IdSobre
	IF @IdEstado <> 4
	BEGIN	
		UPDATE Ubicaciones 
		SET idSobre = @IdSobre 
		WHERE fila = @Fila AND columna = @Columna AND idCamara = @IdCamara 
	END
END