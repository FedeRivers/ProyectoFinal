CREATE TABLE [dbo].[Modulos]
(
	[idModulo] INT IDENTITY (1, 1) NOT NULL, 
    [nombre] VARCHAR(100) NOT NULL, 
    [activo] BIT NULL DEFAULT 1, 
    CONSTRAINT [PK_Modulos] PRIMARY KEY ([idModulo]),
)
