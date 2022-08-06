﻿#pragma warning disable 1591
//------------------------------------------------------------------------------
// <auto-generated>
//     Este código fue generado por una herramienta.
//     Versión de runtime:4.0.30319.42000
//
//     Los cambios en este archivo podrían causar un comportamiento incorrecto y se perderán si
//     se vuelve a generar el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ProyectoFinal._3_Persistencia.Models
{
	using System.Data.Linq;
	using System.Data.Linq.Mapping;
	using System.Data;
	using System.Collections.Generic;
	using System.Reflection;
	using System.Linq;
	using System.Linq.Expressions;
	using System.ComponentModel;
	using System;
	
	
	[global::System.Data.Linq.Mapping.DatabaseAttribute(Name="BancoDeGermoplasma")]
	public partial class ModeloTipoDeUsuarioDataContext : System.Data.Linq.DataContext
	{
		
		private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
		
    #region Definiciones de métodos de extensibilidad
    partial void OnCreated();
    #endregion
		
		public ModeloTipoDeUsuarioDataContext() : 
				base(global::System.Configuration.ConfigurationManager.ConnectionStrings["BancoDeGermoplasmaConnectionString"].ConnectionString, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloTipoDeUsuarioDataContext(string connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloTipoDeUsuarioDataContext(System.Data.IDbConnection connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloTipoDeUsuarioDataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloTipoDeUsuarioDataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.ListarTiposDeUsuario")]
		public ISingleResult<ListarTiposDeUsuarioResult> ListarTiposDeUsuario()
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())));
			return ((ISingleResult<ListarTiposDeUsuarioResult>)(result.ReturnValue));
		}
	}
	
	public partial class ListarTiposDeUsuarioResult
	{
		
		private int _idTipoDeUsuario;
		
		private string _nombre;
		
		private bool _activo;
		
		public ListarTiposDeUsuarioResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_idTipoDeUsuario", DbType="Int NOT NULL")]
		public int idTipoDeUsuario
		{
			get
			{
				return this._idTipoDeUsuario;
			}
			set
			{
				if ((this._idTipoDeUsuario != value))
				{
					this._idTipoDeUsuario = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_nombre", DbType="VarChar(100) NOT NULL", CanBeNull=false)]
		public string nombre
		{
			get
			{
				return this._nombre;
			}
			set
			{
				if ((this._nombre != value))
				{
					this._nombre = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_activo", DbType="Bit NOT NULL")]
		public bool activo
		{
			get
			{
				return this._activo;
			}
			set
			{
				if ((this._activo != value))
				{
					this._activo = value;
				}
			}
		}
	}
}
#pragma warning restore 1591
