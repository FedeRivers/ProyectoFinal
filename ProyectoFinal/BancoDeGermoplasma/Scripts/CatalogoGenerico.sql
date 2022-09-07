USE [BancoDeGermoplasma]
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
		   (9, N'Ingresar germinacion', 1),
		   (10, N'Buscar duplicados', 1)
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
	VALUES (1, N'juan', N'alvarez', N'U2FsdGVkX1/+7jaCIlj62G+4WdF90fKlJZg6YDyUnfo=', N'juanda_2007@hotmail.es', N'44821864', 1, 1),
		   (2, N'Federico', N'Rios', N'U2FsdGVkX18xu+XDGrDBA04iBIm5z2SM7X9h1GIQj9w=', N'federico@gmail.com', N'55671228', 1, 1)
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
		   (5, 1),
		   (6, 1),
		   (7, 1),
		   (8, 1),
		   (9, 1)
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

--/////////////////////////////////////////////---------DATOS DE PRUEBA--------------------////////////////////////////////////////////////--

/*Mejoradores*/
SET IDENTITY_INSERT [dbo].[Mejoradores] ON 
MERGE INTO [dbo].[Mejoradores] AS TARGET 
USING (
	VALUES (1, N'Pedro Carro', N'pedrocarro@hotmail.com', N'la casita', CAST(N'2022-09-01 19:53:54.680' AS DateTime), 1),
		   (2, N'Pablo Sosa', N'pablososa@hotmail.com', N'pablo mi casita', CAST(N'2022-09-01 19:54:30.300' AS DateTime), 1),
		   (3, N'Rogelio Perez', N'rogelioperez@gmail.es', N'una calle y casa', CAST(N'2022-09-01 19:55:41.610' AS DateTime), 1)
) AS SOURCE ( NewIdMejorador, NewNombre, NewMail, NewDireccion, NewFechaDeIngreso, NewActivo )
ON TARGET.[idMejorador] = SOURCE.NewIdMejorador 
WHEN MATCHED THEN 
	UPDATE SET [nombre] = SOURCE.NewNombre,
			   [mail] = SOURCE.NewMail,
			   [direccion] = SOURCE.NewDireccion,
			   [fechaDeIngreso] = SOURCE.NewFechaDeIngreso,
			   [activo] = SOURCE.NewActivo
WHEN NOT MATCHED BY TARGET THEN 
	INSERT ([idMejorador],[nombre],[mail],[direccion],[fechaDeIngreso],[activo])
	VALUES (SOURCE.NewIdMejorador,SOURCE.NewNombre,SOURCE.NewMail,SOURCE.NewDireccion,SOURCE.NewFechaDeIngreso,SOURCE.NewActivo);
SET IDENTITY_INSERT [dbo].[Mejoradores] OFF 

/*Lotes*/
MERGE INTO [dbo].[Lotes] AS TARGET 
USING (
	VALUES (1, N'lote grande', CAST(N'2022-09-01 19:56:56.107' AS DateTime), 1, 1),
           (2, N'lote muy grande', CAST(N'2022-09-01 19:57:12.293' AS DateTime), 2, 1),
		   (3, N'lote extremadamente grande', CAST(N'2022-09-01 19:57:37.373' AS DateTime), 3, 1),
		   (4, N'holi holi', CAST(N'2022-09-01 19:58:02.763' AS DateTime), 2, 1),
		   (28, N'yes i have', CAST(N'2022-09-01 19:59:45.327' AS DateTime), 3, 1),
		   (52, N'descripcion bien', CAST(N'2022-09-01 19:58:34.143' AS DateTime), 3, 1)
) AS SOURCE ( NewNumeroLote, NewDescripcion, NewFechaDeIngreso, NewIdMejorador, NewActivo )
ON TARGET.[numeroLote] = SOURCE.NewNumeroLote
WHEN MATCHED THEN 
	UPDATE SET [descripcion] = SOURCE.NewDescripcion,
			   [fechaDeIngreso] = SOURCE.NewFechaDeIngreso,
			   [idMejorador] = SOURCE.NewIdMejorador,
			   [activo] = SOURCE.NewActivo
WHEN NOT MATCHED BY TARGET THEN 
	INSERT ([numeroLote],[descripcion],[fechaDeIngreso],[idMejorador],[activo])
	VALUES (SOURCE.NewNumeroLote,SOURCE.NewDescripcion,SOURCE.NewFechaDeIngreso,SOURCE.NewIdMejorador,SOURCE.NewActivo);

/*Taxonomias*/
SET IDENTITY_INSERT [dbo].[Taxonomias] ON 
MERGE INTO [dbo].[Taxonomias] AS TARGET 
USING (
	VALUES (1, N'Pyrus', 1),
		   (2, N'Solanum', 1),
		   (3, N'Ananas', 1)
) AS SOURCE ( NewIdTaxonomia, NewNombre, NewActivo )
ON TARGET.[idTaxonomia] = SOURCE.NewIdTaxonomia 
WHEN MATCHED THEN 
	UPDATE SET [nombre] = SOURCE.NewNombre,
			   [activo] = SOURCE.NewActivo
WHEN NOT MATCHED BY TARGET THEN 
	INSERT ([idTaxonomia],[nombre],[activo])
	VALUES (SOURCE.NewIdTaxonomia,SOURCE.NewNombre,SOURCE.NewActivo);
SET IDENTITY_INSERT [dbo].[Taxonomias] OFF 


/*Semillas*/
SET IDENTITY_INSERT [dbo].[Semillas] ON 
MERGE INTO [dbo].[Semillas] AS TARGET 
USING (
	VALUES (1, N'Girasol', CAST(N'2022-09-01 19:51:59.037' AS DateTime), 1, 1),
		   (2, N'Lechuga', CAST(N'2022-09-01 19:52:13.347' AS DateTime), 1, 2),
		   (3, N'Boñato', CAST(N'2022-09-01 19:52:56.393' AS DateTime), 1, 3)
) AS SOURCE ( NewIdSemilla, NewNombre, NewFechaDeIngreso, NewActivo, NewIdTaxonomia )
ON TARGET.[idSemilla] = SOURCE.NewIdSemilla
WHEN MATCHED THEN 
	UPDATE SET [nombre] = SOURCE.NewNombre,
			   [fechaDeIngreso] = SOURCE.NewFechaDeIngreso,
			   [activo] = SOURCE.NewActivo,
			   [idTaxonomia] = SOURCE.NewIdTaxonomia
WHEN NOT MATCHED BY TARGET THEN 
	INSERT ([idSemilla],[nombre],[fechaDeIngreso],[activo],[idTaxonomia])
	VALUES (SOURCE.NewIdSemilla,SOURCE.NewNombre,SOURCE.NewFechaDeIngreso,SOURCE.NewActivo,SOURCE.NewIdTaxonomia);
SET IDENTITY_INSERT [dbo].[Semillas] OFF 

/*Sobres*/
MERGE INTO [dbo].[Sobres] AS TARGET 
USING (
	VALUES (1, N'ubi uwu', 1, NULL, CAST(N'2022-09-01 20:02:27.307' AS DateTime), 0, 0, NULL, 1, 1, 1),
		   (2, N'ubi uwu', 1, NULL, CAST(N'2022-09-01 20:04:55.867' AS DateTime), 0, 0, NULL, 3, 3, 1),
		   (4, N'ubi uwu', 1, NULL, CAST(N'2022-09-01 20:06:12.267' AS DateTime), 0, 0, NULL, 28, 2, 1),
		   (5, N'ubi uwu', 1, NULL, CAST(N'2022-09-01 20:05:39.030' AS DateTime), 0, 0, NULL, 2, 1, 1),
		   (6, N'ubi uwu', 1, NULL, CAST(N'2022-09-01 20:07:38.987' AS DateTime), 0, 0, NULL, 4, 1, 1),
		   (7, N'ubi uwu', 1, NULL, CAST(N'2022-09-01 20:07:08.963' AS DateTime), 0, 0, NULL, 52, 3, 1),
		   (9, N'ubi uwu', 1, NULL, CAST(N'2022-09-01 20:10:19.477' AS DateTime), 0, 0, NULL, 2, 2, 1),
		   (10, N'ubi uwu', 1, NULL, CAST(N'2022-09-01 20:10:34.790' AS DateTime), 0, 0, NULL, 28, 3, 1),
		   (26, N'ubi uwu', 1, NULL, CAST(N'2022-09-01 20:03:05.177' AS DateTime), 0, 0, NULL, 2, 2, 1),
		   (45, N'ubi uwu', 1, NULL, CAST(N'2022-09-01 20:03:34.167' AS DateTime), 0, 0, NULL, 3, 3, 1),
		   (51, N'ubi uwu', 1, NULL, CAST(N'2022-09-01 20:09:16.093' AS DateTime), 0, 0, NULL, 28, 1, 1),
		   (56, N'ubi uwu', 1, NULL, CAST(N'2022-09-01 20:06:42.553' AS DateTime), 0, 0, NULL, 4, 1, 1),
		   (69, N'ubi uwu', 1, NULL, CAST(N'2022-09-01 20:08:20.287' AS DateTime), 0, 0, NULL, 52, 2, 1),
		   (95, N'ubi uwu', 1, NULL, CAST(N'2022-09-01 20:07:57.013' AS DateTime), 0, 0, NULL, 1, 3, 1),
		   (363, N'ubi uwu', 1, NULL, CAST(N'2022-09-01 20:09:50.947' AS DateTime), 0, 0, NULL, 3, 1, 1)
) AS SOURCE ( NewNumeroSobre, NewUbicacion, NewActivo, NewFechaDeDevolucion, NewFechaDeIngreso, NewHumedad, NewGerminacion, NewVigor, NewNumeroLote, NewIdSemilla, NewIdEstado )
ON TARGET.[numeroSobre] = SOURCE.NewNumeroSobre
WHEN MATCHED THEN 
	UPDATE SET [ubicacion] = SOURCE.NewUbicacion,
			   [activo] = SOURCE.NewActivo,
			   [fechaDeDevolucion] = SOURCE.NewFechaDeDevolucion,
			   [fechaDeIngreso] = SOURCE.NewFechaDeIngreso,
			   [humedad] = SOURCE.NewHumedad,
			   [germinacion] = SOURCE.NewGerminacion,
			   [vigor] = SOURCE.NewVigor,
			   [numeroLote] = SOURCE.NewNumeroLote,
			   [idSemilla] = SOURCE.NewIdSemilla,
			   [idEstado] = SOURCE.NewIdEstado
WHEN NOT MATCHED BY TARGET THEN 
	INSERT ([numeroSobre],[ubicacion],[activo],[fechaDeDevolucion],[fechaDeIngreso],[humedad],[germinacion],[vigor],[numeroLote],[idSemilla],[idEstado])
	VALUES (SOURCE.NewNumeroSobre,SOURCE.NewUbicacion,SOURCE.NewActivo,SOURCE.NewFechaDeDevolucion,SOURCE.NewFechaDeIngreso,SOURCE.NewHumedad,SOURCE.NewGerminacion,SOURCE.NewVigor,SOURCE.NewNumeroLote,SOURCE.NewIdSemilla,SOURCE.NewIdEstado);
	*/