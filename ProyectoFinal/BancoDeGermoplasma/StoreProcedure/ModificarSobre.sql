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
		numeroLote = @NumeroLote, 
		idSemilla = @IdSemilla, 
		idEstado = @IdEstado 
		WHERE numeroSobre = @NumeroSobre
		IF @Humedad IS NOT NULL OR @Germinacion IS NOT NULL OR @Vigor IS NOT NULL
			BEGIN
				UPDATE Sobres SET
				humedad = @Humedad,
				germinacion = @Germinacion,
				vigor = @Vigor
				WHERE idSemilla = @IdSemilla and numeroLote = @NumeroLote
			END
		IF @IdEstado = 4 OR @IdEstado = 5
			BEGIN
				UPDATE Sobres SET
				idEstado = 7
				WHERE idSemilla = @IdSemilla and numeroLote = @NumeroLote and numeroSobre <> @NumeroSobre
			END
		IF @IdEstado = 6
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