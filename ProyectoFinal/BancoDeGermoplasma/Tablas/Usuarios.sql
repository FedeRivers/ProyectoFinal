CREATE TABLE [dbo].[Usuarios] (
    [idUsuario]       INT           IDENTITY (1, 1) NOT NULL,
    [nombre]   VARCHAR (100) NOT NULL,
    [apellido] VARCHAR (100) NOT NULL,
	[contrasena] VARCHAR(50) NOT NULL,
    [mail] VARCHAR(100) NOT NULL, 
    [cedula] VARCHAR(10) NOT NULL, 
    [fechaDeIngreso] DATETIME NULL DEFAULT GETDATE(), 
    [fechaDeModificacion] DATETIME NULL DEFAULT GETDATE(), 
	[activo] BIT NOT NULL DEFAULT 1 
    CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED ([idUsuario] ASC)
);