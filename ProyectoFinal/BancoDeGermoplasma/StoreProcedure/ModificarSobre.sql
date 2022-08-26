CREATE PROCEDURE [dbo].[ModificarSobre] 
	@IdSobre int,
	@Ubicacion varchar(50),
	@Humedad int,
	@Germinacion int,
	@Vigor int,
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
		vigor = @Vigor, 
		idLote = @IdLote, 
		idSemilla = @IdSemilla, 
		idEstado = @IdEstado 
		WHERE idSobre = @IdSobre
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