CREATE PROCEDURE DesactivarAlerta
	 @IdAlerta INT 
AS
BEGIN
	UPDATE Alertas SET activo = 0 WHERE idAlerta = @IdAlerta
END
GO