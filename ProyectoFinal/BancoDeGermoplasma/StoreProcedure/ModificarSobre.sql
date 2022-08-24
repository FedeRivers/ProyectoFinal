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
		RETURN 0
	END TRY
	BEGIN CATCH
		RETURN -1
	END CATCH
END