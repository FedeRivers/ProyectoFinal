CREATE PROCEDURE [dbo].[AltaAlerta]
	@FechaDeEjecucion DateTime,
	@NumeroLote int,
	@NombreSemilla varchar(50),
	@IdCamara int,
	@IdTipoDeUsuario int
AS
BEGIN
	INSERT INTO Alertas(fechaDeEjecucion,numeroLote,nombreSemilla,idCamara,idTipoDeUsuario) VALUES (@FechaDeEjecucion,@NumeroLote,@NombreSemilla,@IdCamara,@IdTipoDeUsuario)
END
