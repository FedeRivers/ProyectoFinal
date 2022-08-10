CREATE PROCEDURE [dbo].[ListarUsuarios]
	@TerminoDeBusqueda varchar(100) 
AS
BEGIN
	If (@TerminoDeBusqueda is not null)
		BEGIN
			select * 
			from Usuarios u INNER JOIN TiposDeUsuario tu ON u.idTipoDeUsuario = tu.idTipoDeUsuario
			where u.nombre Like '%'+@TerminoDeBusqueda+'%' and u.activo = 1
			
		END
	Else
		BEGIN
			select * 
			from Usuarios u INNER JOIN TiposDeUsuario tu ON u.idTipoDeUsuario = tu.idTipoDeUsuario
			where  u.activo = 1		
		END
END