CREATE TABLE [dbo].[TipoDeUsuario]
(
	[idTipoDeUsuario] INT NOT NULL PRIMARY KEY IDENTITY, 
    [nombre] VARCHAR(100) NOT NULL, 
    [activo] BIT NOT NULL
)
