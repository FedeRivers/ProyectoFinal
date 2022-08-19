CREATE PROCEDURE ModificarLote
	 @IdLote INT,
	 @Numero INT,
	 @Descripcion VARCHAR(100),
	 @IdMejorador INT
AS
BEGIN
	UPDATE Lotes SET numero = @Numero, descripcion = @Descripcion, idMejorador = @IdMejorador WHERE idLote = @IdLote
END
GO
