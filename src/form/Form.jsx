import React, { Component } from 'react';
import FormRow from './FormRow';

//this.refs.nombreComponente.nombreMetodo       Acceder a las referencias de un componente en especifico

class Form extends Component {

  constructor() {
    super();
    this.onRegister = this.onRegister.bind(this);
  }

  onRegister(e) {
    console.log(this.refs.nombre.getValue());
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  render() {
    return(
      <div>
        <h2>Registro</h2>
        <form onSubmit={this.onSubmit}>
          <FormRow inputType="text" labelText="Nombre" ref="nombre"/>
          <FormRow inputType="text" labelText="Apellido" ref="apellido"/>
          <FormRow inputType="email" labelText="E-mail" ref="email"/>
          <FormRow inputType="password" labelText="Contraseña" ref="password"/>
          <FormRow inputType="password" labelText="Confirmar contraseña" ref="password2"/>
          <button onClick={this.onRegister}>Registro</button>
        </form>
      </div>
    );
  }
}

export default Form;
