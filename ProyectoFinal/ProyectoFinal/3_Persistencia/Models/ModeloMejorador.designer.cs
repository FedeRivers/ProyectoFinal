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
	public partial class ModeloMejoradorDataContext : System.Data.Linq.DataContext
	{
		
		private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
		
    #region Definiciones de métodos de extensibilidad
    partial void OnCreated();
    #endregion
		
		public ModeloMejoradorDataContext() : 
				base(global::System.Configuration.ConfigurationManager.ConnectionStrings["BancoDeGermoplasmaConnectionString"].ConnectionString, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloMejoradorDataContext(string connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloMejoradorDataContext(System.Data.IDbConnection connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloMejoradorDataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloMejoradorDataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.BajaMejorador")]
		public int BajaMejorador([global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdMejorador", DbType="Int")] System.Nullable<int> idMejorador)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), idMejorador);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.AltaMejorador")]
		public int AltaMejorador([global::System.Data.Linq.Mapping.ParameterAttribute(Name="Nombre", DbType="VarChar(50)")] string nombre, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Mail", DbType="VarChar(50)")] string mail, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Direccion", DbType="VarChar(50)")] string direccion, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Celular", DbType="VarChar(9)")] string celular)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), nombre, mail, direccion, celular);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.ModificarMejorador")]
		public int ModificarMejorador([global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdMejorador", DbType="Int")] System.Nullable<int> idMejorador, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Nombre", DbType="VarChar(50)")] string nombre, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Mail", DbType="VarChar(50)")] string mail, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Direccion", DbType="VarChar(50)")] string direccion, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Celular", DbType="VarChar(9)")] string celular)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), idMejorador, nombre, mail, direccion, celular);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.ListarMejoradores")]
		public ISingleResult<ListarMejoradoresResult> ListarMejoradores([global::System.Data.Linq.Mapping.ParameterAttribute(Name="TerminoDeBusqueda", DbType="VarChar(100)")] string terminoDeBusqueda)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), terminoDeBusqueda);
			return ((ISingleResult<ListarMejoradoresResult>)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.ExisteMejorador")]
		public int ExisteMejorador([global::System.Data.Linq.Mapping.ParameterAttribute(Name="Mail", DbType="VarChar(100)")] string mail, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="Int")] System.Nullable<int> idMejorador, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Celular", DbType="VarChar(9)")] string celular)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), mail, idMejorador, celular);
			return ((int)(result.ReturnValue));
		}
	}
	
	public partial class ListarMejoradoresResult
	{
		
		private int _idMejorador;
		
		private string _nombre;
		
		private string _mail;
		
		private string _direccion;
		
		private System.Nullable<System.DateTime> _fechaDeIngreso;
		
		private string _celular;
		
		private System.Nullable<bool> _activo;
		
		public ListarMejoradoresResult()
		{
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
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_fechaDeIngreso", DbType="DateTime")]
		public System.Nullable<System.DateTime> fechaDeIngreso
		{
			get
			{
				return this._fechaDeIngreso;
			}
			set
			{
				if ((this._fechaDeIngreso != value))
				{
					this._fechaDeIngreso = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_celular", DbType="VarChar(9) NOT NULL", CanBeNull=false)]
		public string celular
		{
			get
			{
				return this._celular;
			}
			set
			{
				if ((this._celular != value))
				{
					this._celular = value;
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
