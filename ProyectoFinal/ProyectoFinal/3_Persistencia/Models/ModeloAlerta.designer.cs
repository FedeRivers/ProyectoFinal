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
	public partial class ModeloAlertaDataContext : System.Data.Linq.DataContext
	{
		
		private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
		
    #region Definiciones de métodos de extensibilidad
    partial void OnCreated();
    #endregion
		
		public ModeloAlertaDataContext() : 
				base(global::System.Configuration.ConfigurationManager.ConnectionStrings["BancoDeGermoplasmaConnectionString1"].ConnectionString, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloAlertaDataContext(string connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloAlertaDataContext(System.Data.IDbConnection connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloAlertaDataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloAlertaDataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.AltaAlerta")]
		public int AltaAlerta([global::System.Data.Linq.Mapping.ParameterAttribute(Name="FechaDeEjecucion", DbType="DateTime")] System.Nullable<System.DateTime> fechaDeEjecucion, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="NumeroLote", DbType="Int")] System.Nullable<int> numeroLote, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdSemilla", DbType="Int")] System.Nullable<int> idSemilla, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdCamara", DbType="Int")] System.Nullable<int> idCamara, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdTipoDeUsuario", DbType="Int")] System.Nullable<int> idTipoDeUsuario)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), fechaDeEjecucion, numeroLote, idSemilla, idCamara, idTipoDeUsuario);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.ListarAlertas")]
		public ISingleResult<ListarAlertasResult> ListarAlertas([global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdTipoDeUsuario", DbType="Int")] System.Nullable<int> idTipoDeUsuario)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), idTipoDeUsuario);
			return ((ISingleResult<ListarAlertasResult>)(result.ReturnValue));
		}
	}
	
	public partial class ListarAlertasResult
	{
		
		private int _idAlerta;
		
		private System.Nullable<System.DateTime> _fechaDeCreacion;
		
		private System.DateTime _fechaDeEjecucion;
		
		private int _numeroLote;
		
		private int _idSemilla;
		
		private int _idCamara;
		
		private int _idTipoDeUsuario;
		
		private System.Nullable<bool> _activo;
		
		public ListarAlertasResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_idAlerta", DbType="Int NOT NULL")]
		public int idAlerta
		{
			get
			{
				return this._idAlerta;
			}
			set
			{
				if ((this._idAlerta != value))
				{
					this._idAlerta = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_fechaDeCreacion", DbType="DateTime")]
		public System.Nullable<System.DateTime> fechaDeCreacion
		{
			get
			{
				return this._fechaDeCreacion;
			}
			set
			{
				if ((this._fechaDeCreacion != value))
				{
					this._fechaDeCreacion = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_fechaDeEjecucion", DbType="DateTime NOT NULL")]
		public System.DateTime fechaDeEjecucion
		{
			get
			{
				return this._fechaDeEjecucion;
			}
			set
			{
				if ((this._fechaDeEjecucion != value))
				{
					this._fechaDeEjecucion = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_numeroLote", DbType="Int NOT NULL")]
		public int numeroLote
		{
			get
			{
				return this._numeroLote;
			}
			set
			{
				if ((this._numeroLote != value))
				{
					this._numeroLote = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_idSemilla", DbType="Int NOT NULL")]
		public int idSemilla
		{
			get
			{
				return this._idSemilla;
			}
			set
			{
				if ((this._idSemilla != value))
				{
					this._idSemilla = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_idCamara", DbType="Int NOT NULL")]
		public int idCamara
		{
			get
			{
				return this._idCamara;
			}
			set
			{
				if ((this._idCamara != value))
				{
					this._idCamara = value;
				}
			}
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
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_activo", DbType="Bit")]
		public System.Nullable<bool> activo
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
