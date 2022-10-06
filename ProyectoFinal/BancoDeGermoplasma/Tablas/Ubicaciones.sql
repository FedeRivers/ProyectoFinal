CREATE TABLE [dbo].[Ubicaciones]
(
	[idSobre] INT NULL, 
    [fila] INT NOT NULL, 
    [columna] INT NOT NULL,
	[idCamara] INT NOT NULL,
	CONSTRAINT [FK_Ubicaciones] PRIMARY KEY CLUSTERED ([fila] ASC, [columna] ASC, [idCamara] ASC),
    CONSTRAINT [FK_Ubicaciones_Sobres] FOREIGN KEY ([idSobre]) REFERENCES [Sobres]([idSobre]),
    CONSTRAINT [FK_Ubicaciones_Camaras] FOREIGN KEY ([idCamara]) REFERENCES [Camaras]([idCamara])
)
