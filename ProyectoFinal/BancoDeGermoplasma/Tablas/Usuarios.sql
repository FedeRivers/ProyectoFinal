CREATE TABLE [dbo].[Usuarios] (
    [id]       INT           IDENTITY (1, 1) NOT NULL,
    [nombre]   VARCHAR (100) NULL,
    [apellido] VARCHAR (100) NULL,
    CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED ([id] ASC)
);