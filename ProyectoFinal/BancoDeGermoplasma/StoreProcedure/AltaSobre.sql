CREATE PROCEDURE [dbo].[AltaSobre] 
	@Ubicacion varchar(50),
	@Humedad int,
	@Germinacion int,
	@IdLote int,
	@IdSemilla int,
	@IdEstado int
AS
BEGIN
	BEGIN TRY
		INSERT INTO Sobres(ubicacion, humedad, germinacion, idLote, idSemilla, idEstado) 
		VALUES (@Ubicacion, @Humedad, @Germinacion, @IdLote, @IdSemilla, @IdEstado)
		return 0
	END TRY
	BEGIN CATCH
		return -1
	END CATCH
END