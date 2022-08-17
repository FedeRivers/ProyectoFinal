CREATE TABLE [dbo].[Taxonomias]
(
	[idTaxonomia] INT IDENTITY (1, 1) NOT NULL, 
    [nombre] NCHAR(10) NOT NULL, 
    [activo] BIT NULL DEFAULT 1,
)
