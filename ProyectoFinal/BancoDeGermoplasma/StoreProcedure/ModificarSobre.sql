CREATE PROCEDURE [dbo].[ModificarSobre] 
	@NumeroSobre int,
	@IdCamara int,
	@Humedad int,
	@Germinacion int,
	@Vigor int,
	@NumeroLote int,
	@IdSemilla int,
	@IdEstado int
AS
BEGIN
	BEGIN TRY
		UPDATE Sobres SET 
		humedad = @Humedad,
		germinacion = @Germinacion,
		vigor = @Vigor, 
		numeroLote = @NumeroLote, 
		idSemilla = @IdSemilla, 
		idEstado = @IdEstado 
		WHERE numeroSobre = @NumeroSobre
		IF @Humedad IS NOT NULL OR @Germinacion IS NOT NULL OR @Vigor IS NOT NULL
			UPDATE Sobres SET
			humedad = @Humedad,
			germinacion = @Germinacion,
			vigor = @Vigor
			WHERE idSemilla = @IdSemilla
		RETURN 0
	END TRY
	BEGIN CATCH
		RETURN -1
	END CATCH
END