CREATE PROCEDURE AltaLote
	 @Numero INT,
	 @Descripcion VARCHAR(100),
	 @IdMejorador INT
AS
BEGIN
	INSERT INTO Lotes(numero, descripcion, idMejorador) VALUES(@Numero, @Descripcion, @IdMejorador)
END
GO
