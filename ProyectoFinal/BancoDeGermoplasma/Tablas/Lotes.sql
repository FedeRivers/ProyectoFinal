CREATE TABLE [dbo].[Lotes]
(
    [numeroLote] INT PRIMARY KEY, 
    [descripcion] VARCHAR(100) NOT NULL, 
    [fechaDeIngreso] DATETIME NULL DEFAULT GETDATE(), 
    [idMejorador] INT NOT NULL, 
    [activo] BIT NULL DEFAULT 1,
	CONSTRAINT [FK_Lotes_Mejoradores] FOREIGN KEY ([idMejorador]) REFERENCES [Mejoradores]([idMejorador]),
	UNIQUE([numeroLote],[idMejorador])
)
