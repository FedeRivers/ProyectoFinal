CREATE PROCEDURE [dbo].[ListarSobres]
	@TerminoDeBusqueda varchar(100)
AS
BEGIN
	IF (@TerminoDeBusqueda is not null)
		BEGIN
			SELECT
			so.numeroSobre,
			so.ubicacion,
			so.activo AS activoSobre,
			so.fechaDeDevolucion,
			so.fechaDeIngreso AS ingresoSobre,
			so.humedad,
			so.germinacion,
			so.vigor,
			lo.numeroLote,
			lo.descripcion,
			lo.activo AS activoLote,
			lo.fechaDeIngreso AS ingresoLote,
			se.idSemilla,
			se.nombre AS nombreSemilla,
			se.fechaDeIngreso AS ingresoSemilla,
			se.activo AS activoSemilla,
			es.idEstado,
			es.nombre AS nombreEstado
			FROM Sobres so 
			INNER JOIN Lotes lo ON so.numeroLote = lo.numeroLote
			INNER JOIN Semillas se ON so.idSemilla = se.idSemilla
			INNER JOIN Estados es ON so.idEstado = es.idEstado
			WHERE so.activo = 1
		END
	ELSE
		BEGIN
			SELECT
			so.numeroSobre,
			so.ubicacion,
			so.activo AS activoSobre,
			so.fechaDeDevolucion,
			so.fechaDeIngreso AS ingresoSobre,
			so.humedad,
			so.germinacion,
			so.vigor,
			lo.numeroLote,
			lo.descripcion,
			lo.activo AS activoLote,
			lo.fechaDeIngreso AS ingresoLote,
			se.idSemilla,
			se.nombre AS nombreSemilla,
			se.fechaDeIngreso AS ingresoSemilla,
			se.activo AS activoSemilla,
			es.idEstado,
			es.nombre AS nombreEstado
			FROM Sobres so 
			INNER JOIN Lotes lo ON so.numeroLote = lo.numeroLote
			INNER JOIN Semillas se ON so.idSemilla = se.idSemilla
			INNER JOIN Estados es ON so.idEstado = es.idEstado
			WHERE so.activo = 1
		END
END