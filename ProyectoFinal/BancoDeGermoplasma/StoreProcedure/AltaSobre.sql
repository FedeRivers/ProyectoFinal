CREATE PROCEDURE [dbo].[AltaSobre] 
	@NumeroSobre int,
	@NumeroLote int,
	@IdSemilla int,
	@CodigoQR varchar(max)
AS
BEGIN
	BEGIN TRY
		INSERT INTO Sobres(numeroSobre, numeroLote, idSemilla,codigoQR) 
		VALUES (@NumeroSobre, @NumeroLote, @IdSemilla,@CodigoQR)
		return 0
	END TRY
	BEGIN CATCH
		return -1
	END CATCH
END