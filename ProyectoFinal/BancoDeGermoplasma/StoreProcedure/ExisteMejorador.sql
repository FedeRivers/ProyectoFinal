CREATE PROCEDURE [dbo].[ExisteMejorador]
	@Mail VARCHAR(100),
	@idMejorador INT,
	@Celular VARCHAR(9)
AS
BEGIN
	IF NOT EXISTS(SELECT * FROM Mejoradores WHERE mail = @Mail OR celular = @Celular AND idMejorador <> @idMejorador)
	RETURN 0
	IF EXISTS(SELECT * FROM Mejoradores WHERE mail = @Mail AND idMejorador <> @idMejorador)
	RETURN 1
	IF EXISTS(SELECT * FROM Mejoradores WHERE celular = @Celular AND idMejorador <> @idMejorador)
	RETURN 2
END