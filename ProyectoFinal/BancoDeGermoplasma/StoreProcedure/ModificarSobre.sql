CREATE PROCEDURE [dbo].[ModificarSobre] 
	@IdSobre int,
	@Ubicacion varchar(50),
	@Humedad int,
	@Germinacion int,
	@IdLote int,
	@IdSemilla int,
	@IdEstado int
AS
BEGIN
	BEGIN TRY
		UPDATE Sobres SET 
		ubicacion = @Ubicacion,
		humedad = @Humedad,
		germinacion = @Germinacion, 
		idLote = @IdLote, 
		idSemilla = @IdSemilla, 
		idEstado = @IdEstado 
		WHERE idSobre = @IdSobre

		IF @Humedad IS NOT NULL OR @Germinacion IS NOT NULL
			UPDATE Sobres SET
			humedad = @Humedad,
			germinacion = @Germinacion
			WHERE idSemilla = @IdSemilla
		RETURN 0
	END TRY
	BEGIN CATCH
		RETURN -1
	END CATCH
END