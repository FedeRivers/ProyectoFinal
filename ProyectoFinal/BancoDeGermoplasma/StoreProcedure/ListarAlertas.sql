CREATE PROCEDURE [dbo].[ListarAlertas]
	@IdTipoDeUsuario int,
	@CantidadDeAlertas int
AS
BEGIN
	SELECT Top(@CantidadDeAlertas)
			idAlerta,
			fechaDeCreacion,
			fechaDeEjecucion,
			numeroLote,
			nombreSemilla,
			idCamara,
			idTipoDeUsuario,
			activo
	FROM Alertas
	WHERE idTipoDeUsuario = @IdTipoDeUsuario and activo = 1 and fechaDeEjecucion <= GETDATE()
	ORDER BY fechaDeEjecucion DESC
END
