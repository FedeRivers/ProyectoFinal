CREATE PROCEDURE [dbo].[ExisteEspacioLibre]
	@IdCamara INT
AS
BEGIN
	SELECT TOP(1) fila,columna FROM Ubicaciones WHERE idCamara = @IdCamara AND numeroSobre IS NULL
END