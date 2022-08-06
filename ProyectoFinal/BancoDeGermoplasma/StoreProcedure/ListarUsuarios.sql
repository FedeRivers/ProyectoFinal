CREATE PROCEDURE [dbo].[ListarUsuarios]
	@TerminoDeBusqueda varchar(100) 
AS
BEGIN
	If (@TerminoDeBusqueda is not null)
		BEGIN
			select * from Usuarios where nombre Like '%'+@TerminoDeBusqueda+'%' and activo = 1
			
		END
	Else
		BEGIN
			select * from Usuarios where  activo = 1		
		END
END