CREATE PROCEDURE [dbo].[ListarMejoradores]
	@TerminoDeBusqueda varchar(100) 
AS
BEGIN
	If (@TerminoDeBusqueda is not null)
		BEGIN
			select * from Mejoradores where nombre Like '%'+@TerminoDeBusqueda+'%'
		END
	Else
		BEGIN
			select * from Mejoradores			
		END
END