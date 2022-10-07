CREATE PROCEDURE [dbo].[ModificarSobre] 
	@IdSobre int,
	@IdCamara int,
	@Humedad float,
	@Germinacion float,
	@Vigor float,
	@NumeroLote int,
	@IdSemilla int,
	@IdEstado int,
	@FechaEstimada dateTime,
	@peso decimal,
	@CodigoQR varchar(max)
AS
BEGIN
	BEGIN TRY
		UPDATE Sobres SET 
		numeroLote = @NumeroLote, 
		idSemilla = @IdSemilla, 
		idEstado = @IdEstado,
		peso = @peso,
		codigoQR = @CodigoQR
		WHERE idSobre = @IdSobre
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
				where idSobre = @IdSobre
			END
		RETURN 0
	END TRY
	BEGIN CATCH
		RETURN -1
	END CATCH
END