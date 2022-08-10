CREATE TABLE [dbo].[TiposDeUsuario]
(
	[idTipoDeUsuario] INT NOT NULL PRIMARY KEY IDENTITY, 
    [nombre] VARCHAR(100) NOT NULL, 
    [activo] BIT NOT NULL DEFAULT 1
)
