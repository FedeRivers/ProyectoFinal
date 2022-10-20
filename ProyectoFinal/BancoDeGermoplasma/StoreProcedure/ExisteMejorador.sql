CREATE PROCEDURE [dbo].[ExisteMejorador]
	@Mail VARCHAR(100),
	@idMejorador INT
AS
BEGIN
	IF NOT EXISTS(SELECT * FROM Mejoradores WHERE mail = @Mail AND idMejorador <> @idMejorador)
	RETURN 0
	IF EXISTS(SELECT * FROM Mejoradores WHERE mail = @Mail AND idMejorador <> @idMejorador)
	RETURN 1
END