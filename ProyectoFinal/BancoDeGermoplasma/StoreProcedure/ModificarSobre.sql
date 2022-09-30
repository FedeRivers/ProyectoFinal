CREATE PROCEDURE [dbo].[ModificarSobre] 
	@NumeroSobre int,
	@IdCamara int,
	@Humedad float,
	@Germinacion float,
	@Vigor float,
	@NumeroLote int,
	@IdSemilla int,
	@IdEstado int,
	@FechaEstimada dateTime,
	@peso decimal
AS
BEGIN
	BEGIN TRY
		UPDATE Sobres SET 
		numeroLote = @NumeroLote, 
		idSemilla = @IdSemilla, 
		idEstado = @IdEstado,
		peso = @peso
		WHERE numeroSobre = @NumeroSobre
		IF @Humedad IS NOT NULL OR @Germinacion IS NOT NULL OR @Vigor IS NOT NULL
			BEGIN
				UPDATE Sobres SET
				humedad = @Humedad,
				germinacion = @Germinacion,
				vigor = @Vigor,
				fechaEstimada = @FechaEstimada
				WHERE idSemilla = @IdSemilla and numeroLote = @NumeroLote
			END		
		IF @IdEstado = 4 --Destruido
			BEGIN
				UPDATE Sobres SET 
				activo = 0
				where numeroSobre = @NumeroSobre
			END
		RETURN 0
	END TRY
	BEGIN CATCH
		RETURN -1
	END CATCH
END