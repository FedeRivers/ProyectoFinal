CREATE TABLE [dbo].[Semillas]
(
	[idSemilla] INT IDENTITY (1, 1) NOT NULL PRIMARY KEY, 
    [nombre] VARCHAR(50) NOT NULL, 
    [fechaDeIngreso] DATETIME NULL DEFAULT GETDATE(), 
    [activo] BIT NULL DEFAULT 1, 
    [idTaxonomia] INT NOT NULL,
	CONSTRAINT [FK_Semillas_Taxonomias] FOREIGN KEY ([idTaxonomia]) REFERENCES [Taxonomias]([idTaxonomia])
)
