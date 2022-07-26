CREATE TABLE [dbo].[Usuarios] (
    [id]       INT           IDENTITY (1, 1) NOT NULL,
    [nombre]   VARCHAR (100) NOT NULL,
    [apellido] VARCHAR (100) NOT NULL,
    [mail] VARCHAR(100) NOT NULL, 
    CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED ([id] ASC)
);