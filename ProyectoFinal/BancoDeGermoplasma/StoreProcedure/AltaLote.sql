CREATE PROCEDURE AltaLote
	 @Numero INT,
	 @Descripcion VARCHAR(100),
	 @IdMejorador INT
AS
BEGIN
	INSERT INTO Lotes(numeroLote, descripcion, idMejorador) VALUES(@Numero, @Descripcion, @IdMejorador)
END
GO
