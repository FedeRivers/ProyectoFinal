CREATE TABLE [dbo].[Alertas]
(
	[idAlerta] INT IDENTITY (1, 1) PRIMARY KEY, 
    [fechaDeCreacion] DATETIME NULL DEFAULT GETDATE(),
	[fechaDeEjecucion] DATETIME NOT NULL, 
    [numeroLote] INT NOT NULL, 
    [idSemilla] INT NOT NULL,
	[idCamara] INT NOT NULL, 
    [idTipoDeUsuario] INT NOT NULL , 
    [activo] BIT NULL DEFAULT 1,
    CONSTRAINT [FK_Alertas_Lotes] FOREIGN KEY ([numeroLote]) REFERENCES [Lotes]([numeroLote]),
	CONSTRAINT [FK_Alertas_Semillas] FOREIGN KEY ([idSemilla]) REFERENCES [Semillas]([idSemilla]),
	CONSTRAINT [FK_Alertas_Camaras] FOREIGN KEY ([idCamara]) REFERENCES [Camaras]([idCamara]),
	CONSTRAINT [FK_Alertas_TiposDeUsuario] FOREIGN KEY ([idTipoDeUsuario]) REFERENCES [TiposDeUsuario]([idTipoDeUsuario])
)
