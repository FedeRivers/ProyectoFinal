CREATE TABLE [dbo].[Coordenadas]
(
	[idSobre] INT NULL, 
    [fila] INT NOT NULL, 
    [columna] INT NOT NULL, 
    [idEstado] INT NOT NULL,
	CONSTRAINT [FK_Coordenadas] PRIMARY KEY CLUSTERED ([fila] ASC, [columna] ASC, [idEstado] ASC),
    CONSTRAINT [FK_Corrdenadas_Sobres] FOREIGN KEY ([idSobre]) REFERENCES [Sobres]([idSobre]),
    CONSTRAINT [FK_Corrdenadas_Estados] FOREIGN KEY ([idEstado]) REFERENCES [Estados]([idEstado])
)
