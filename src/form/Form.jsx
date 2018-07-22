import React, { Component } from 'react';
import FormRow from './FormRow';

//this.refs.nombreComponente.nombreMetodo       Acceder a las referencias de un componente en especifico

class Form extends Component {

  constructor() {
    super();

    this.state = {
      labelLegend: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }



  onSubmit(e) {
    e.preventDefault();

    let nombre = this.refs.nombre.getValue();
    let apellido = this.refs.apellido.getValue();
    let email = this.refs.apellido.getValue();
    let password = this.refs.password.getValue();
    let password2 = this.refs.password2.getValue();

    if(password === password2) {
      this.setState({ labelLegend: 'Logueado exitosamente' });
    }
    else
      alert("Las contraseñas no coinciden. Intenta de nuevo");
  }

  render() {
    return(
      <div>
        <h2>Registro</h2>
        <form onSubmit={this.onSubmit}>
          <FormRow inputType="text" isRequired={true} labelText="Nombre" ref="nombre"/>
          <FormRow inputType="text" isRequired={true} labelText="Apellido" ref="apellido"/>
          <FormRow inputType="email" isRequired={true} labelText="E-mail" ref="email"/>
          <FormRow inputType="password" isRequired={true} labelText="Contraseña" ref="password"/>
          <FormRow inputType="password" isRequired={true} labelText="Confirmar contraseña" ref="password2"/>
          <button>Registro</button>
          <label>{ this.state.labelLegend }</label>
        </form>
      </div>
    );
  }
}

export default Form;
