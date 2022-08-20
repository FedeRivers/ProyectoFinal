USE [BancoDeGermoplasma]
GO
SET IDENTITY_INSERT [dbo].[Modulos] ON 

INSERT [dbo].[Modulos] ([idModulo], [nombre], [activo]) VALUES (1, N'Tipo de usuario', 1)
INSERT [dbo].[Modulos] ([idModulo], [nombre], [activo]) VALUES (2, N'Mejorador', 1)
INSERT [dbo].[Modulos] ([idModulo], [nombre], [activo]) VALUES (3, N'Usuario', 1)
INSERT [dbo].[Modulos] ([idModulo], [nombre], [activo]) VALUES (4, N'Taxonomia', 1)
INSERT [dbo].[Modulos] ([idModulo], [nombre], [activo]) VALUES (5, N'Lote', 1)
INSERT [dbo].[Modulos] ([idModulo], [nombre], [activo]) VALUES (6, N'pepito', 1)
SET IDENTITY_INSERT [dbo].[Modulos] OFF

--INSERT [dbo].[TiposDeUsuario] ([nombre]) 
--VALUES (N'Admin'),
--	   (N'Zafral'),
--	   (N'Tecnico1'),
--	   (N'Tecnico2')

--INSERT [dbo].[Usuarios] ([nombre], [apellido], [contrasena], [mail], [cedula], [idTipoDeUsuario]) 
--VALUES (N'juan', N'alvarez', N'admin', N'juanda_2007@hotmail.es', N'44821864', 1),
--	   (N'Federico', N'Rios', N'123456', N'federico@gmail.com', N'55671228', 1)

--SET IDENTITY_INSERT [dbo].[Modulos] ON 
--MERGE INTO [dbo].[Modulos] AS TARGET 
--USING (
--	VALUES (1, N'Tipo de usuario', 1),
--		   (2, N'Mejorador', 1),
--		   (3, N'Usuario', 1),
--		   (4, N'Taxonomia', 1),
--		   (5, N'Lote', 1),
--		   (6, N'Prueba', 1)
--) AS SOURCE ( NewIdModulo, NewNombre, NewActivo )
--ON TARGET.[idModulo] = SOURCE.NewIdModulo
--WHEN MATCHED THEN 
--	UPDATE SET [nombre] = SOURCE.NewNombre,
--			   [activo] = SOURCE.NewActivo
--WHEN NOT MATCHED BY TARGET THEN 
--	INSERT ([idModulo],[nombre],[activo])
--	VALUES (SOURCE.NewIdModulo,SOURCE.NewNombre,SOURCE.NewActivo);
--SET IDENTITY_INSERT [dbo].[Modulos] OFF
