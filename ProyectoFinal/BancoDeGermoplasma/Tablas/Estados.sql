CREATE TABLE [dbo].[Estados]
(
	[idEstado] INT IDENTITY (1, 1) NOT NULL, 
    [nombre] VARCHAR(50) NOT NULL, 
    CONSTRAINT [PK_Estados] PRIMARY KEY ([idEstado]),
)
