CREATE TABLE [dbo].[ModulosPorTiposDeUsuario]
(
	[idModulo] INT NOT NULL , 
    [idTipoDeUsuario] INT NOT NULL, 
	CONSTRAINT [FK_ModulosPorTipoDeUsuario] PRIMARY KEY CLUSTERED ([idModulo] ASC, [idTipoDeUsuario] ASC),
    CONSTRAINT [FK_ModulosPorTiposDeUsuario_Modulos] FOREIGN KEY ([idModulo]) REFERENCES [Modulos]([idModulo]), 
    CONSTRAINT [FK_ModulosPorTiposDeUsuario_TiposDeUsuario] FOREIGN KEY ([idTipoDeUsuario]) REFERENCES [TiposDeUsuario]([idTipoDeUsuario]) 
)
