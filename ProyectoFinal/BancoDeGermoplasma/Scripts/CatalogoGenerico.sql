﻿USE [BancoDeGermoplasma]
GO

/*Modulos*/
SET IDENTITY_INSERT [dbo].[Modulos] ON 
MERGE INTO [dbo].[Modulos] AS TARGET 
USING (
	VALUES (1, N'Tipo de usuario', 1),
		   (2, N'Mejorador', 1),
		   (3, N'Usuario', 1),
		   (4, N'Taxonomia', 1),
		   (5, N'Lote', 1),
		   (6, N'Semilla', 1),
		   (7, N'Sobre', 1),
		   (8, N'Ingresar humedad', 1),
		   (9, N'Ingresar germinacion', 1)
) AS SOURCE ( NewIdModulo, NewNombre, NewActivo )
ON TARGET.[idModulo] = SOURCE.NewIdModulo
WHEN MATCHED THEN 
	UPDATE SET [nombre] = SOURCE.NewNombre,
			   [activo] = SOURCE.NewActivo
WHEN NOT MATCHED BY TARGET THEN 
	INSERT ([idModulo],[nombre],[activo])
	VALUES (SOURCE.NewIdModulo,SOURCE.NewNombre,SOURCE.NewActivo);
SET IDENTITY_INSERT [dbo].[Modulos] OFF

/*Tipo de usuario*/
SET IDENTITY_INSERT [dbo].[TiposDeUsuario] ON 
MERGE INTO [dbo].[TiposDeUsuario] AS TARGET 
USING (
	VALUES (1, N'Admin', 1),
		   (2, N'Zafral', 1),
		   (3, N'Técnico del laboratorio de semillas', 1),
		   (4, N'Técnico del laboratorio de calidad de granos', 1)
) AS SOURCE ( NewIdTipoDeUsuario, NewNombre, NewActivo )
ON TARGET.[idTipoDeUsuario] = SOURCE.NewIdTipoDeUsuario 
WHEN MATCHED THEN 
	UPDATE SET [nombre] = SOURCE.NewNombre,
			   [activo] = SOURCE.NewActivo
WHEN NOT MATCHED BY TARGET THEN 
	INSERT ([idTipoDeUsuario],[nombre],[activo])
	VALUES (SOURCE.NewIdTipoDeUsuario,SOURCE.NewNombre,SOURCE.NewActivo);
SET IDENTITY_INSERT [dbo].[TiposDeUsuario] OFF 

/*Usuario*/
SET IDENTITY_INSERT [dbo].[Usuarios] ON 
MERGE INTO [dbo].[Usuarios] AS TARGET 
USING (
	VALUES (1, N'juan', N'alvarez', N'admin', N'juanda_2007@hotmail.es', N'44821864', 1, 1),
		   (2, N'Federico', N'Rios', N'123456', N'federico@gmail.com', N'55671228', 1, 1)
) AS SOURCE ( NewIdUsuario, NewNombre, NewApellido, NewContrasena, NewMail, NewCedula, NewIdTipoDeUsuario, NewActivo )
ON TARGET.[idUsuario] = SOURCE.NewIdUsuario 
WHEN MATCHED THEN 
	UPDATE SET [nombre] = SOURCE.NewNombre,
			   [apellido] = SOURCE.NewApellido,
			   [contrasena] = SOURCE.NewContrasena,
			   [mail] = SOURCE.NewMail,
			   [cedula] = SOURCE.NewCedula,
			   [idTipoDeUsuario] = SOURCE.NewIdTipoDeUsuario,
			   [activo] = SOURCE.NewActivo
WHEN NOT MATCHED BY TARGET THEN 
	INSERT ([idUsuario],[nombre],[apellido],[contrasena],[mail],[cedula],[idTipoDeUsuario],[activo])
	VALUES (SOURCE.NewIdUsuario,SOURCE.NewNombre,SOURCE.NewApellido,SOURCE.NewContrasena,SOURCE.NewMail,SOURCE.NewCedula,SOURCE.NewIdTipoDeUsuario,SOURCE.NewActivo);
SET IDENTITY_INSERT [dbo].[Usuarios] OFF 

/*Modulos Por Tipos De Usuario */
MERGE INTO [dbo].[ModulosPorTiposDeUsuario] AS TARGET 
USING (
	VALUES (1, 1),
		   (2, 1),
		   (3, 1),
		   (4, 1),
		   (5, 1)
) AS SOURCE ( NewIdModulo, NewIdTipoDeUsuario )
ON TARGET.[idModulo] = SOURCE.NewIdModulo AND TARGET.[idTipoDeUsuario] = SOURCE.NewIdTipoDeUsuario 
WHEN NOT MATCHED BY TARGET THEN 
	INSERT ([idModulo],[idTipoDeUsuario])
	VALUES (SOURCE.NewIdModulo,SOURCE.NewIdTipoDeUsuario)
WHEN NOT MATCHED BY SOURCE THEN
	DELETE;

/*Estados*/
SET IDENTITY_INSERT [dbo].[Estados] ON 
MERGE INTO [dbo].[Estados] AS TARGET 
USING (
	VALUES (1, N'Recibido'),
		   (2, N'Devuelto'),
		   (3, N'Secando'),
		   (4, N'Germinando'),
		   (5, N'Analizando humedad'),
		   (6, N'Destruido')
) AS SOURCE ( NewIdEstado, NewNombre )
ON TARGET.[idEstado] = SOURCE.NewIdEstado
WHEN MATCHED THEN 
	UPDATE SET [nombre] = SOURCE.NewNombre
WHEN NOT MATCHED BY TARGET THEN 
	INSERT ([idEstado],[nombre])
	VALUES (SOURCE.NewIdEstado,SOURCE.NewNombre);
SET IDENTITY_INSERT [dbo].[Estados] OFF

/*Coordenadas*/
MERGE INTO [dbo].[Coordenadas] AS TARGET 
USING (
	VALUES (1, 1, 3),
		   (2, 1, 3),
		   (3, 1, 3),
		   (4, 2, 3),
		   (5, 2, 3),
		   (6, 2, 3),
		   (1, 1, 4),
		   (2, 1, 4),
		   (3, 1, 4),
		   (4, 2, 4),
		   (5, 2, 4),
		   (6, 2, 4)
) AS SOURCE ( NewFila, NewColumna, NewIdEstado )
ON TARGET.[fila] = SOURCE.NewFila AND TARGET.[columna] = SOURCE.NewColumna AND TARGET.[idEstado] = SOURCE.NewIdEstado
WHEN MATCHED THEN 
	UPDATE SET [fila] = SOURCE.NewFila,
			   [columna] = SOURCE.NewColumna,
			   [idEstado] = SOURCE.NewIdEstado
WHEN NOT MATCHED BY TARGET THEN 
	INSERT ([fila],[columna],[idEstado])
	VALUES (SOURCE.NewFila,SOURCE.NewColumna,SOURCE.NewIdEstado);