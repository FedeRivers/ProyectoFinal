CREATE PROCEDURE [dbo].[DevolverSobres]
	@IdSobre int,
	@NumeroLote int
AS
BEGIN
	UPDATE Sobres SET idEstado = 12, activo = 0 WHERE idsobre = @IdSobre 

	IF NOT EXISTS(SELECT * FROM Sobres s WHERE s.numeroLote = @NumeroLote AND s.idEstado <> 12)
	BEGIN 
		UPDATE Lotes SET activo = 0 WHERE numeroLote = @NumeroLote
	END
END

