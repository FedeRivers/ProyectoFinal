CREATE TABLE [dbo].[Sobres]
(
	[numeroSobre] INT PRIMARY KEY, 
    [activo] BIT NULL DEFAULT 1, 
    [fechaDeDevolucion] DATETIME NULL, 
    [fechaDeIngreso] DATETIME NULL DEFAULT GETDATE(), 
    [humedad] INT NULL DEFAULT 0, 
    [germinacion] INT NULL DEFAULT 0, 
	[vigor] INT NULL, 
    [numeroLote] INT NOT NULL, 
    [idSemilla] INT NOT NULL, 
    [idEstado] INT NULL DEFAULT 1 ,
    CONSTRAINT [FK_Sobres_Lotes] FOREIGN KEY ([numeroLote]) REFERENCES [Lotes]([numeroLote]),
	CONSTRAINT [FK_Sobres_Semillas] FOREIGN KEY ([idSemilla]) REFERENCES [Semillas]([idSemilla]),
	CONSTRAINT [FK_Sobres_Estados] FOREIGN KEY ([idEstado]) REFERENCES [Estados]([idEstado]),
	UNIQUE([numeroSobre],[numeroLote])
)
