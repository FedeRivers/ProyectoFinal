CREATE PROCEDURE [dbo].[AltaSobre] 
	@NumeroSobre int,
	@NumeroLote int,
	@IdSemilla int
AS
BEGIN
	BEGIN TRY
		INSERT INTO Sobres(numeroSobre, numeroLote, idSemilla) 
		VALUES (@NumeroSobre, @NumeroLote, @IdSemilla)
		return 0
	END TRY
	BEGIN CATCH
		return -1
	END CATCH
END