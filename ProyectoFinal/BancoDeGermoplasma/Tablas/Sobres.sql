CREATE TABLE [dbo].[Sobres]
(
    [idsobre] INT NOT NULL IDENTITY (1, 1) PRIMARY KEY, 
	[numeroSobre] INT NOT NULL, 
    [fechaDeDevolucion] DATETIME NULL, 
    [fechaDeIngreso] DATETIME NULL DEFAULT GETDATE(), 
	[fechaEstimada] DATETIME NULL, 
    [humedad] FLOAT NULL DEFAULT 0, 
    [germinacion] FLOAT NULL DEFAULT 0, 
	[vigor] FLOAT NULL, 
    [numeroLote] INT NOT NULL, 
    [idSemilla] INT NOT NULL, 
    [idEstado] INT NULL DEFAULT 1,
	[peso] DECIMAL(18, 5) NULL DEFAULT 0, 
    [codigoQR] VARCHAR(MAX) NULL, 
    [cantidadDeSemillas] INT NULL, 
	[activo] BIT NULL DEFAULT 1 
    CONSTRAINT [FK_Sobres_Lotes] FOREIGN KEY ([numeroLote]) REFERENCES [Lotes]([numeroLote]),
	CONSTRAINT [FK_Sobres_Semillas] FOREIGN KEY ([idSemilla]) REFERENCES [Semillas]([idSemilla]),
	CONSTRAINT [FK_Sobres_Estados] FOREIGN KEY ([idEstado]) REFERENCES [Estados]([idEstado]),
	UNIQUE([numeroSobre],[numeroLote]),
)
