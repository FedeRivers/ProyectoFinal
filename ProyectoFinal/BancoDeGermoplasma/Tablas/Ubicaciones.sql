CREATE TABLE [dbo].[Ubicaciones]
(
	[numeroSobre] INT NULL, 
    [fila] INT NOT NULL, 
    [columna] INT NOT NULL,
	[idCamara] INT NOT NULL,
	CONSTRAINT [FK_Ubicaciones] PRIMARY KEY CLUSTERED ([fila] ASC, [columna] ASC, [idCamara] ASC),
    CONSTRAINT [FK_Ubicaciones_Sobres] FOREIGN KEY ([numeroSobre]) REFERENCES [Sobres]([numeroSobre]),
    CONSTRAINT [FK_Ubicaciones_Camaras] FOREIGN KEY ([idCamara]) REFERENCES [Camaras]([idCamara])
)
