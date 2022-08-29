CREATE PROCEDURE [dbo].[AltaSobre] 
	@Ubicacion varchar(50),
	@Humedad int,
	@Germinacion int,
	@NumeroLote int,
	@IdSemilla int,
	@IdEstado int
AS
BEGIN
	BEGIN TRY
		INSERT INTO Sobres(ubicacion, humedad, germinacion, numeroLote, idSemilla, idEstado) 
		VALUES (@Ubicacion, @Humedad, @Germinacion, @NumeroLote, @IdSemilla, @IdEstado)
		return 0
	END TRY
	BEGIN CATCH
		return -1
	END CATCH
END