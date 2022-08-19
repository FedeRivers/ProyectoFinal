CREATE TABLE [dbo].[Lotes]
(
	[idLote] INT IDENTITY (1, 1) NOT NULL PRIMARY KEY, 
    [numero] INT NOT NULL, 
    [descripcion] VARCHAR(100) NOT NULL, 
    [fechaDeIngreso] DATETIME NULL DEFAULT GETDATE(), 
    [idMejorador] INT NOT NULL, 
    [activo] BIT NULL DEFAULT 1,
	CONSTRAINT [FK_Lotes_Mejoradores] FOREIGN KEY ([idMejorador]) REFERENCES [Mejoradores]([idMejorador]),
	CONSTRAINT UC_Lotes UNIQUE (numero,idMejorador)
)
