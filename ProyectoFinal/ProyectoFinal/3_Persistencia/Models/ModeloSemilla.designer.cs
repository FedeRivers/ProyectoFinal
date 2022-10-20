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
	public partial class ModeloSemillaDataContext : System.Data.Linq.DataContext
	{
		
		private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
		
    #region Definiciones de métodos de extensibilidad
    partial void OnCreated();
    #endregion
		
		public ModeloSemillaDataContext() : 
				base(global::System.Configuration.ConfigurationManager.ConnectionStrings["BancoDeGermoplasmaConnectionString"].ConnectionString, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloSemillaDataContext(string connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloSemillaDataContext(System.Data.IDbConnection connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloSemillaDataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloSemillaDataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.AltaSemilla")]
		public int AltaSemilla([global::System.Data.Linq.Mapping.ParameterAttribute(Name="Nombre", DbType="VarChar(50)")] string nombre, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdTaxonomia", DbType="Int")] System.Nullable<int> idTaxonomia)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), nombre, idTaxonomia);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.BajaSemilla")]
		public int BajaSemilla([global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdSemilla", DbType="Int")] System.Nullable<int> idSemilla)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), idSemilla);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.ModificarSemilla")]
		public int ModificarSemilla([global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdSemilla", DbType="Int")] System.Nullable<int> idSemilla, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Nombre", DbType="VarChar(50)")] string nombre, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdTaxonomia", DbType="Int")] System.Nullable<int> idTaxonomia)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), idSemilla, nombre, idTaxonomia);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.ListarSemillas")]
		public ISingleResult<ListarSemillasResult> ListarSemillas([global::System.Data.Linq.Mapping.ParameterAttribute(Name="TerminoDeBusqueda", DbType="VarChar(100)")] string terminoDeBusqueda)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), terminoDeBusqueda);
			return ((ISingleResult<ListarSemillasResult>)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.ExisteSemilla")]
		public int ExisteSemilla([global::System.Data.Linq.Mapping.ParameterAttribute(Name="Nombre", DbType="VarChar(50)")] string nombre, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Taxonomia", DbType="Int")] System.Nullable<int> taxonomia)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), nombre, taxonomia);
			return ((int)(result.ReturnValue));
		}
	}
	
	public partial class ListarSemillasResult
	{
		
		private int _idSemilla;
		
		private string _nombreSemilla;
		
		private System.Nullable<System.DateTime> _fechaDeIngreso;
		
		private System.Nullable<bool> _activoSemilla;
		
		private int _idTaxonomia;
		
		private string _nombreTaxonomia;
		
		private System.Nullable<bool> _activoTaxonomia;
		
		public ListarSemillasResult()
		{
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
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_nombreSemilla", DbType="VarChar(50) NOT NULL", CanBeNull=false)]
		public string nombreSemilla
		{
			get
			{
				return this._nombreSemilla;
			}
			set
			{
				if ((this._nombreSemilla != value))
				{
					this._nombreSemilla = value;
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
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_activoSemilla", DbType="Bit")]
		public System.Nullable<bool> activoSemilla
		{
			get
			{
				return this._activoSemilla;
			}
			set
			{
				if ((this._activoSemilla != value))
				{
					this._activoSemilla = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_idTaxonomia", DbType="Int NOT NULL")]
		public int idTaxonomia
		{
			get
			{
				return this._idTaxonomia;
			}
			set
			{
				if ((this._idTaxonomia != value))
				{
					this._idTaxonomia = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_nombreTaxonomia", DbType="VarChar(100) NOT NULL", CanBeNull=false)]
		public string nombreTaxonomia
		{
			get
			{
				return this._nombreTaxonomia;
			}
			set
			{
				if ((this._nombreTaxonomia != value))
				{
					this._nombreTaxonomia = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_activoTaxonomia", DbType="Bit")]
		public System.Nullable<bool> activoTaxonomia
		{
			get
			{
				return this._activoTaxonomia;
			}
			set
			{
				if ((this._activoTaxonomia != value))
				{
					this._activoTaxonomia = value;
				}
			}
		}
	}
}
#pragma warning restore 1591
