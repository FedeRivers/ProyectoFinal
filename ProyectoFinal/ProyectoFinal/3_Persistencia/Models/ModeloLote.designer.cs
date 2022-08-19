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
	public partial class ModeloLoteDataContext : System.Data.Linq.DataContext
	{
		
		private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
		
    #region Definiciones de métodos de extensibilidad
    partial void OnCreated();
    #endregion
		
		public ModeloLoteDataContext() : 
				base(global::System.Configuration.ConfigurationManager.ConnectionStrings["BancoDeGermoplasmaConnectionString1"].ConnectionString, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloLoteDataContext(string connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloLoteDataContext(System.Data.IDbConnection connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloLoteDataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloLoteDataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.AltaLote")]
		public int AltaLote([global::System.Data.Linq.Mapping.ParameterAttribute(Name="Numero", DbType="Int")] System.Nullable<int> numero, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Descripcion", DbType="VarChar(100)")] string descripcion, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdMejorador", DbType="Int")] System.Nullable<int> idMejorador)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), numero, descripcion, idMejorador);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.BajaLote")]
		public int BajaLote([global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdLote", DbType="Int")] System.Nullable<int> idLote)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), idLote);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.ModificarLote")]
		public int ModificarLote([global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdLote", DbType="Int")] System.Nullable<int> idLote, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Numero", DbType="Int")] System.Nullable<int> numero, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Descripcion", DbType="VarChar(100)")] string descripcion, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdMejorador", DbType="Int")] System.Nullable<int> idMejorador)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), idLote, numero, descripcion, idMejorador);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.ListarLotes")]
		public ISingleResult<ListarLotesResult> ListarLotes([global::System.Data.Linq.Mapping.ParameterAttribute(Name="TerminoDeBusqueda", DbType="VarChar(100)")] string terminoDeBusqueda)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), terminoDeBusqueda);
			return ((ISingleResult<ListarLotesResult>)(result.ReturnValue));
		}
	}
	
	public partial class ListarLotesResult
	{
		
		private int _idLote;
		
		private int _numero;
		
		private string _descripcion;
		
		private System.Nullable<System.DateTime> _ingresoLote;
		
		private System.Nullable<bool> _activoLote;
		
		private int _idMejorador;
		
		private string _nombre;
		
		private string _direccion;
		
		private System.Nullable<System.DateTime> _ingresoMejorador;
		
		private string _mail;
		
		private System.Nullable<bool> _activoMejorador;
		
		public ListarLotesResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_idLote", DbType="Int NOT NULL")]
		public int idLote
		{
			get
			{
				return this._idLote;
			}
			set
			{
				if ((this._idLote != value))
				{
					this._idLote = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_numero", DbType="Int NOT NULL")]
		public int numero
		{
			get
			{
				return this._numero;
			}
			set
			{
				if ((this._numero != value))
				{
					this._numero = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_descripcion", DbType="VarChar(100) NOT NULL", CanBeNull=false)]
		public string descripcion
		{
			get
			{
				return this._descripcion;
			}
			set
			{
				if ((this._descripcion != value))
				{
					this._descripcion = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ingresoLote", DbType="DateTime")]
		public System.Nullable<System.DateTime> ingresoLote
		{
			get
			{
				return this._ingresoLote;
			}
			set
			{
				if ((this._ingresoLote != value))
				{
					this._ingresoLote = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_activoLote", DbType="Bit")]
		public System.Nullable<bool> activoLote
		{
			get
			{
				return this._activoLote;
			}
			set
			{
				if ((this._activoLote != value))
				{
					this._activoLote = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_idMejorador", DbType="Int NOT NULL")]
		public int idMejorador
		{
			get
			{
				return this._idMejorador;
			}
			set
			{
				if ((this._idMejorador != value))
				{
					this._idMejorador = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_nombre", DbType="VarChar(50) NOT NULL", CanBeNull=false)]
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
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_direccion", DbType="VarChar(50) NOT NULL", CanBeNull=false)]
		public string direccion
		{
			get
			{
				return this._direccion;
			}
			set
			{
				if ((this._direccion != value))
				{
					this._direccion = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ingresoMejorador", DbType="DateTime")]
		public System.Nullable<System.DateTime> ingresoMejorador
		{
			get
			{
				return this._ingresoMejorador;
			}
			set
			{
				if ((this._ingresoMejorador != value))
				{
					this._ingresoMejorador = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_mail", DbType="VarChar(50) NOT NULL", CanBeNull=false)]
		public string mail
		{
			get
			{
				return this._mail;
			}
			set
			{
				if ((this._mail != value))
				{
					this._mail = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_activoMejorador", DbType="Bit")]
		public System.Nullable<bool> activoMejorador
		{
			get
			{
				return this._activoMejorador;
			}
			set
			{
				if ((this._activoMejorador != value))
				{
					this._activoMejorador = value;
				}
			}
		}
	}
}
#pragma warning restore 1591
