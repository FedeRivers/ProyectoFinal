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
	public partial class ModeloSobreDataContext : System.Data.Linq.DataContext
	{
		
		private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
		
    #region Definiciones de métodos de extensibilidad
    partial void OnCreated();
    #endregion
		
		public ModeloSobreDataContext() : 
				base(global::System.Configuration.ConfigurationManager.ConnectionStrings["BancoDeGermoplasmaConnectionString"].ConnectionString, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloSobreDataContext(string connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloSobreDataContext(System.Data.IDbConnection connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloSobreDataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public ModeloSobreDataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.ExisteSobre")]
		public int ExisteSobre([global::System.Data.Linq.Mapping.ParameterAttribute(Name="NumeroSobre", DbType="Int")] System.Nullable<int> numeroSobre, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="NumeroLote", DbType="Int")] System.Nullable<int> numeroLote)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), numeroSobre, numeroLote);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.BajaSobre")]
		public int BajaSobre([global::System.Data.Linq.Mapping.ParameterAttribute(Name="NumeroSobre", DbType="Int")] System.Nullable<int> numeroSobre)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), numeroSobre);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.AsignarSobreACamara")]
		public int AsignarSobreACamara([global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdCamara", DbType="Int")] System.Nullable<int> idCamara, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Fila", DbType="Int")] System.Nullable<int> fila, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Columna", DbType="Int")] System.Nullable<int> columna, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="NumeroSobre", DbType="Int")] System.Nullable<int> numeroSobre)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), idCamara, fila, columna, numeroSobre);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.ExisteEspacioLibre")]
		public ISingleResult<ExisteEspacioLibreResult> ExisteEspacioLibre([global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdCamara", DbType="Int")] System.Nullable<int> idCamara)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), idCamara);
			return ((ISingleResult<ExisteEspacioLibreResult>)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.AltaSobre")]
		public int AltaSobre([global::System.Data.Linq.Mapping.ParameterAttribute(Name="NumeroSobre", DbType="Int")] System.Nullable<int> numeroSobre, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="NumeroLote", DbType="Int")] System.Nullable<int> numeroLote, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdSemilla", DbType="Int")] System.Nullable<int> idSemilla)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), numeroSobre, numeroLote, idSemilla);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.ModificarSobre")]
		public int ModificarSobre([global::System.Data.Linq.Mapping.ParameterAttribute(Name="NumeroSobre", DbType="Int")] System.Nullable<int> numeroSobre, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdCamara", DbType="Int")] System.Nullable<int> idCamara, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Humedad", DbType="Float")] System.Nullable<double> humedad, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Germinacion", DbType="Float")] System.Nullable<double> germinacion, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="Vigor", DbType="Float")] System.Nullable<double> vigor, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="NumeroLote", DbType="Int")] System.Nullable<int> numeroLote, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdSemilla", DbType="Int")] System.Nullable<int> idSemilla, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdEstado", DbType="Int")] System.Nullable<int> idEstado, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="FechaEstimada", DbType="DateTime")] System.Nullable<System.DateTime> fechaEstimada, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="Decimal(18,0)")] System.Nullable<decimal> peso)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), numeroSobre, idCamara, humedad, germinacion, vigor, numeroLote, idSemilla, idEstado, fechaEstimada, peso);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.ListarSobres")]
		public ISingleResult<ListarSobresResult> ListarSobres([global::System.Data.Linq.Mapping.ParameterAttribute(Name="NumeroSobre", DbType="Decimal(18,0)")] System.Nullable<decimal> numeroSobre, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="NumeroLote", DbType="Decimal(18,0)")] System.Nullable<decimal> numeroLote, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="NombreSemilla", DbType="VarChar(50)")] string nombreSemilla, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdEstado", DbType="Decimal(18,0)")] System.Nullable<decimal> idEstado, [global::System.Data.Linq.Mapping.ParameterAttribute(Name="IdCamara", DbType="Decimal(18,0)")] System.Nullable<decimal> idCamara)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), numeroSobre, numeroLote, nombreSemilla, idEstado, idCamara);
			return ((ISingleResult<ListarSobresResult>)(result.ReturnValue));
		}
	}
	
	public partial class ExisteEspacioLibreResult
	{
		
		private int _fila;
		
		private int _columna;
		
		public ExisteEspacioLibreResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_fila", DbType="Int NOT NULL")]
		public int fila
		{
			get
			{
				return this._fila;
			}
			set
			{
				if ((this._fila != value))
				{
					this._fila = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_columna", DbType="Int NOT NULL")]
		public int columna
		{
			get
			{
				return this._columna;
			}
			set
			{
				if ((this._columna != value))
				{
					this._columna = value;
				}
			}
		}
	}
	
	public partial class ListarSobresResult
	{
		
		private int _numeroSobre;
		
		private System.Nullable<decimal> _peso;
		
		private System.Nullable<int> _fila;
		
		private System.Nullable<int> _columna;
		
		private string _nombre;
		
		private System.Nullable<bool> _activoSobre;
		
		private System.Nullable<System.DateTime> _fechaDeDevolucion;
		
		private System.Nullable<System.DateTime> _ingresoSobre;
		
		private System.Nullable<double> _humedad;
		
		private System.Nullable<double> _germinacion;
		
		private System.Nullable<double> _vigor;
		
		private System.Nullable<System.DateTime> _fechaEstimada;
		
		private int _numeroLote;
		
		private string _descripcion;
		
		private System.Nullable<bool> _activoLote;
		
		private System.Nullable<System.DateTime> _ingresoLote;
		
		private int _idSemilla;
		
		private string _nombreSemilla;
		
		private System.Nullable<System.DateTime> _ingresoSemilla;
		
		private System.Nullable<bool> _activoSemilla;
		
		private int _idEstado;
		
		private string _nombreEstado;
		
		public ListarSobresResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_numeroSobre", DbType="Int NOT NULL")]
		public int numeroSobre
		{
			get
			{
				return this._numeroSobre;
			}
			set
			{
				if ((this._numeroSobre != value))
				{
					this._numeroSobre = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_peso", DbType="Decimal(18,5)")]
		public System.Nullable<decimal> peso
		{
			get
			{
				return this._peso;
			}
			set
			{
				if ((this._peso != value))
				{
					this._peso = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_fila", DbType="Int")]
		public System.Nullable<int> fila
		{
			get
			{
				return this._fila;
			}
			set
			{
				if ((this._fila != value))
				{
					this._fila = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_columna", DbType="Int")]
		public System.Nullable<int> columna
		{
			get
			{
				return this._columna;
			}
			set
			{
				if ((this._columna != value))
				{
					this._columna = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_nombre", DbType="VarChar(50)")]
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
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_activoSobre", DbType="Bit")]
		public System.Nullable<bool> activoSobre
		{
			get
			{
				return this._activoSobre;
			}
			set
			{
				if ((this._activoSobre != value))
				{
					this._activoSobre = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_fechaDeDevolucion", DbType="DateTime")]
		public System.Nullable<System.DateTime> fechaDeDevolucion
		{
			get
			{
				return this._fechaDeDevolucion;
			}
			set
			{
				if ((this._fechaDeDevolucion != value))
				{
					this._fechaDeDevolucion = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ingresoSobre", DbType="DateTime")]
		public System.Nullable<System.DateTime> ingresoSobre
		{
			get
			{
				return this._ingresoSobre;
			}
			set
			{
				if ((this._ingresoSobre != value))
				{
					this._ingresoSobre = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_humedad", DbType="Float")]
		public System.Nullable<double> humedad
		{
			get
			{
				return this._humedad;
			}
			set
			{
				if ((this._humedad != value))
				{
					this._humedad = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_germinacion", DbType="Float")]
		public System.Nullable<double> germinacion
		{
			get
			{
				return this._germinacion;
			}
			set
			{
				if ((this._germinacion != value))
				{
					this._germinacion = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_vigor", DbType="Float")]
		public System.Nullable<double> vigor
		{
			get
			{
				return this._vigor;
			}
			set
			{
				if ((this._vigor != value))
				{
					this._vigor = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_fechaEstimada", DbType="DateTime")]
		public System.Nullable<System.DateTime> fechaEstimada
		{
			get
			{
				return this._fechaEstimada;
			}
			set
			{
				if ((this._fechaEstimada != value))
				{
					this._fechaEstimada = value;
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
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ingresoSemilla", DbType="DateTime")]
		public System.Nullable<System.DateTime> ingresoSemilla
		{
			get
			{
				return this._ingresoSemilla;
			}
			set
			{
				if ((this._ingresoSemilla != value))
				{
					this._ingresoSemilla = value;
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
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_idEstado", DbType="Int NOT NULL")]
		public int idEstado
		{
			get
			{
				return this._idEstado;
			}
			set
			{
				if ((this._idEstado != value))
				{
					this._idEstado = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_nombreEstado", DbType="VarChar(50) NOT NULL", CanBeNull=false)]
		public string nombreEstado
		{
			get
			{
				return this._nombreEstado;
			}
			set
			{
				if ((this._nombreEstado != value))
				{
					this._nombreEstado = value;
				}
			}
		}
	}
}
#pragma warning restore 1591
