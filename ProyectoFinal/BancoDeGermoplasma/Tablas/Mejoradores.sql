CREATE TABLE [dbo].[Mejoradores]
(
	[idMejorador] INT IDENTITY (1, 1) NOT NULL, 
    [nombre] VARCHAR(50) NOT NULL, 
    [mail] VARCHAR(50) NOT NULL, 
    [direccion] VARCHAR(50) NOT NULL, 
    [fechaDeIngreso] DATETIME NULL DEFAULT GETDATE(), 
	[celular] VARCHAR(9) NOT NULL, 
    [activo] BIT NULL DEFAULT 1, 
    CONSTRAINT [PK_Mejoradores] PRIMARY KEY ([idMejorador]),
)
