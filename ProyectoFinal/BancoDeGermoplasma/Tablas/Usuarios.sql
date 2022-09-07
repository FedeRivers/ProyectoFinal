CREATE TABLE [dbo].[Usuarios] (
    [idUsuario]       INT           IDENTITY (1, 1) NOT NULL,
    [nombre]   VARCHAR (100) NOT NULL,
    [apellido] VARCHAR (100) NOT NULL,
	[contrasena] VARCHAR(100) NOT NULL,
    [mail] VARCHAR(100) NOT NULL, 
    [cedula] VARCHAR(10) NOT NULL, 
    [fechaDeIngreso] DATETIME NULL DEFAULT GETDATE(), 
    [fechaDeModificacion] DATETIME NULL DEFAULT GETDATE(), 
	[activo] BIT NOT NULL DEFAULT 1, 
    [idTipoDeUsuario] INT NOT NULL
    CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED ([idUsuario] ASC),
	CONSTRAINT [FK_Usuarios_TiposDeUsuario] FOREIGN KEY ([idTipoDeUsuario]) REFERENCES [TiposDeUsuario]([idTipoDeUsuario]),
);