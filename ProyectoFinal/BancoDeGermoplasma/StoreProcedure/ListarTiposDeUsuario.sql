CREATE PROCEDURE [dbo].[ListarTiposDeUsuario]
	@TerminoDeBusqueda varchar(100) 
AS
BEGIN
	If (@TerminoDeBusqueda is not null)
		BEGIN
			SELECT idTipoDeUsuario,nombre,activo FROM TiposDeUsuario WHERE nombre Like '%'+@TerminoDeBusqueda+'%' and activo = 1
			
		END
	Else
		BEGIN
			SELECT idTipoDeUsuario,nombre,activo FROM TiposDeUsuario where  activo = 1		
		END
END
