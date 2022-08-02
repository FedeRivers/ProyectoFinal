CREATE PROCEDURE [dbo].[ListarMejoradores]
	@TerminoDeBusqueda varchar(100) 
AS
BEGIN
	If (@TerminoDeBusqueda is not null)
		BEGIN
			select * from Mejoradores where nombre Like '%'+@TerminoDeBusqueda+'%' and activo = 1
			
		END
	Else
		BEGIN
			select * from Mejoradores where  activo = 1		
		END
END