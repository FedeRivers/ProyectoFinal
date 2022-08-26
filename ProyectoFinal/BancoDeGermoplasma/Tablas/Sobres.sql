CREATE TABLE [dbo].[Sobres]
(
	[idSobre] INT IDENTITY (1, 1) NOT NULL PRIMARY KEY, 
    [ubicacion] VARCHAR(50) NOT NULL, 
    [activo] BIT NULL DEFAULT 1, 
    [fechaDeDevolucion] DATETIME NULL, 
    [fechaDeIngreso] DATETIME NULL DEFAULT GETDATE(), 
    [humedad] INT NULL DEFAULT 0, 
    [germinacion] INT NULL DEFAULT 0, 
	[vigor] INT NULL, 
    [idLote] INT NOT NULL, 
    [idSemilla] INT NOT NULL, 
    [idEstado] INT NOT NULL ,
    CONSTRAINT [FK_Sobres_Lotes] FOREIGN KEY ([idLote]) REFERENCES [Lotes]([idLote]),
	CONSTRAINT [FK_Sobres_Semillas] FOREIGN KEY ([idSemilla]) REFERENCES [Semillas]([idSemilla]),
	CONSTRAINT [FK_Sobres_Estados] FOREIGN KEY ([idEstado]) REFERENCES [Estados]([idEstado])
)
