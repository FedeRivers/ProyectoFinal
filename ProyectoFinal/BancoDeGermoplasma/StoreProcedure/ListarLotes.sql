﻿CREATE PROCEDURE ListarLotes
	@TerminoDeBusqueda varchar(100) = null
AS
BEGIN
	IF (@TerminoDeBusqueda is not null)
		BEGIN
			SELECT 
			lo.numeroLote,
			lo.descripcion,
			lo.fechaDeIngreso AS ingresoLote,
			lo.activo AS activoLote,
			me.idMejorador,
			me.nombre,
			me.direccion,
			me.fechaDeIngreso AS ingresoMejorador,
			me.mail,
			me.activo AS activoMejorador
			FROM Lotes lo INNER JOIN Mejoradores me ON lo.idMejorador = me.idMejorador
			WHERE numeroLote Like '%'+@TerminoDeBusqueda+'%' and lo.activo = 1
		END
	ELSE
		BEGIN
			SELECT 
			lo.numeroLote,
			lo.descripcion,
			lo.fechaDeIngreso AS ingresoLote,
			lo.activo AS activoLote,
			me.idMejorador,
			me.nombre,
			me.direccion,
			me.fechaDeIngreso AS ingresoMejorador,
			me.mail,
			me.activo AS activoMejorador
			FROM Lotes lo INNER JOIN Mejoradores me ON lo.idMejorador = me.idMejorador
			WHERE lo.activo = 1		
		END
END
GO
