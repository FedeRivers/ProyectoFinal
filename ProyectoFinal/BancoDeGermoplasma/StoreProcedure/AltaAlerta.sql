CREATE PROCEDURE [dbo].[AltaAlerta]
	@FechaDeEjecucion DateTime,
	@NumeroLote int,
	@IdSemilla int,
	@IdCamara int,
	@IdTipoDeUsuario int
AS
BEGIN
	INSERT INTO Alertas(fechaDeEjecucion,numeroLote,idSemilla,idCamara,idTipoDeUsuario) VALUES (@FechaDeEjecucion,@NumeroLote,@IdSemilla,@IdCamara,@IdTipoDeUsuario)
END
