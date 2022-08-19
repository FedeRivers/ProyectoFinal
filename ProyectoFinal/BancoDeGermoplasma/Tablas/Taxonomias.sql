CREATE TABLE [dbo].[Taxonomias]
(
	[idTaxonomia] INT IDENTITY (1, 1) NOT NULL, 
    [nombre] VARCHAR(100) NOT NULL UNIQUE, 
    [activo] BIT NULL DEFAULT 1, 
    CONSTRAINT [PK_Taxonomias] PRIMARY KEY ([idTaxonomia]),
)
