import React  from 'react'
import ReactTimeout from 'react-timeout'
import {StyleFormulario} from "../components/styles"
import "../../src/index.css";


export class Formulario extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        Asunto: '',
        Telefono: '',
        Edad: '',
        EdadError: '',
        AsuntoError:'',
        nameError: '',
        emailError: '',
        TelefonoError:'',
      };
    
    }

    handleEdadChange = event => {
      this.setState({ Edad: event.target.value }, () => {
        this.validateEdad();
      });
    };

    validateEdad = () => {
      const { Edad } = this.state;
      this.setState({
        EdadError:
        Edad.length > 0 ? null : 'Invalido'
      });
    }



    handleTelefonoChange = event => {
        this.setState({ Telefono: event.target.value }, () => {
          this.validateTelefono();
        });
      };
  
      validateTelefono = () => {
        const { Telefono } = this.state;
        this.setState({
          TelefonoError:
            Telefono.length > 3 ? null : 'Numero incompleto'
        });
      }

  
    handleNameChange = event => {
      this.setState({ name: event.target.value }, () => {
        this.validateName();
      });
    };
  
    handleEmailChange = event => {
      this.setState({ email: event.target.value }, () => {
        this.validateEmail();
      });
    };
  
    validateName = () => {
      const { name } = this.state;
      this.setState({
        nameError:
          name.length > 3 ? null : 'Name debe tener al menos 3 characteres'
      });
    }
  
    validateEmail = () => {
      const { email } = this.state;
      this.setState({
        emailError:
          email.length > 3 ? null : 'Email debe tener al menos 3 characteres'
        });

    }
  
    handleSubmit = () => {
      alert(`Tu informacion fue enviada con exito, estaremos en contacto contigo:`);
    };
    
    
  
    render() {
      return (
          
        <StyleFormulario>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Nombre:</label>
            <input  
              name='name'
              className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
              id='name'
              placeholder='Enter name'
              value={this.state.name}
              onChange={this.handleNameChange}
              onBlur={this.validateName}
            />
            <div className='invalid-feedback'>{this.state.nameError}</div>
          </div>
          <br></br>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input
              name='email'
              className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`}
              id='email'
              placeholder='Enter email'
              value={this.state.email}
              onChange={this.handleEmailChange}
              onBlur={this.validateEmail}
            />
            <div className='invalid-feedback'>{this.state.emailError}</div>
          </div>
          <br></br>
          <div className='form-group'>
            <label htmlFor='Telefono'>Telefono:</label>
            <input
              name='Telefono'
              className={`form-control ${this.state.TelefonoError ? 'is-invalid' : ''}`}
              id='Telefono'
              placeholder='+57 3007736076'
              value={this.state.Telefono}
              onChange={this.handleTelefonoChange}
              onBlur={this.validateTelefono}
            />
            <div className='invalid-feedback'>{this.state.TelefonoError}</div>
          </div>
          <br></br>
          <div className='form-group'>
            <label htmlFor='Edad'>Edad:</label>
            <input
              name='Edad'
              className={`form-control ${this.state.EdadError ? 'is-invalid' : ''}`}
              id='Edad'
              placeholder='Ej 20'
              value={this.state.Edad}
              onChange={this.handleEdadChange}
              onBlur={this.validateEdad}
            />
            <div className='invalid-feedback'>{this.state.EdadError}</div>
          </div>


          <br></br>
          <button type='submit' id='envio' className='btn btn-success btn-block' >
            Enviar
          </button>
        </form>
        </StyleFormulario>
      );
    }
  }
