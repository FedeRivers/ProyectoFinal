CREATE PROCEDURE [dbo].[ObtenerSobre]
	@numeroLote int,
	@idSemilla int
AS
BEGIN
	SELECT TOP(1) numeroSobre,
		   activo,
		   fechaDeDevolucion,
		   fechaDeIngreso,
		   fechaEstimada,
		   humedad,
		   germinacion,
		   vigor,
		   numeroLote,
		   idSemilla,
		   idEstado,
		   peso
	FROM Sobres
	WHERE numeroLote = @numeroLote and idSemilla = @idSemilla and idEstado not in(2,3,4)
END
