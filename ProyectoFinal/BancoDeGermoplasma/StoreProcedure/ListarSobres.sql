CREATE PROCEDURE [dbo].[ListarSobres]
	@NumeroSobre numeric = null,
	@NumeroLote numeric  = null,
	@NombreSemilla varchar(50) = null,
	@IdEstado numeric = null,
	@IdCamara numeric = null
AS
BEGIN

	SELECT
	so.idsobre,
	so.numeroSobre,
	so.peso,
	so.codigoQR,
	ub.idCamara,
	ub.fila,
	ub.columna,
	ca.nombre,
	so.activo AS activoSobre,
	so.fechaDeDevolucion,
	so.fechaDeIngreso AS ingresoSobre,
	so.humedad,
	so.germinacion,
	so.vigor,
	so.fechaEstimada,
	so.cantidadDeSemillas,
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
	LEFT OUTER JOIN Ubicaciones ub ON so.idSobre = ub.idSobre
	LEFT OUTER JOIN Camaras ca ON ca.idCamara = ub.idCamara
	WHERE so.activo = 1 and ((@NumeroSobre is null
			or so.numeroSobre = @NumeroSobre) and
			((@NumeroLote is null
			or so.numeroLote = @NumeroLote) and 
			((@NombreSemilla is null
			or se.nombre like @NombreSemilla+'%') and
			((@IdEstado is null
			or so.idEstado = @IdEstado) and
			((@IdCamara is null
			or ub.idCamara = @IdCamara))))))
END
