CREATE PROCEDURE [dbo].[ListarAlertas]
	@IdTipoDeUsuario int
AS
BEGIN
	SELECT idAlerta,
			fechaDeCreacion,
			fechaDeEjecucion,
			numeroLote,
			idSemilla,
			idCamara,
			idTipoDeUsuario,
			activo
	FROM Alertas
	WHERE idTipoDeUsuario = @IdTipoDeUsuario and activo = 1 and fechaDeEjecucion >= GETDATE() 
END
