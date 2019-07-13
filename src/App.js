import React from 'react';
//import logo from './logo.svg'; image import
import './style/bootstrap.min.css';
import './style/signin.css';

function App() {
  return (
    <FormSignin form='main'/>
  );
}


class FormSignin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form : "main"
    }
  }
    input(type, name) {
      return (
        <div>
        <label for={"input"+this.confirize(name)} class="sr-only">{name}</label>
        <input type={type} id={"input"+this.confirize(name)} class="form-control" placeholder={name} required="" autofocus=""></input>
        </div>
      );
    }

    checkbox(name, caption) {
      return (
        <div class="checkbox">
            <label>
                <input type="checkbox" value={this.confirize(name)} /> {caption}
            </label>
          </div>
      );
    }

    button(caption, funcion) {
      return(
      <button class="btn btn-lg btn-primary btn-block" type="button" onClick={funcion}>
        {caption}
      </button>
      );
    }

    buttonText(caption, link) {
      return(
        <a class="form-control" href="#" onClick={link}>{caption}</a>
      );
    }

    heading2(caption) {
      return (
        <h2 class="form-signin-heading">{caption}</h2>
      );
    }

    confirize(text) {
      text = text.replace(/ /g, "_");
      return text.toLowerCase();
    }

    changeType(ntype) {
      this.setState({
        form : ntype
      }); 
      console.log("form type changed! ")
    }


    render() {
      switch(this.state.form) {
        case "main":
            return (
              <form class="form-signin"> 
              {this.heading2("Nova Log In")}
              {this.input("text", "Username")}
              {this.input("password", "Password")}
              {this.button("Log In", () => alert('hola'))} 
              {this.buttonText("Create Account", () => this.changeType("create"))}
              {this.buttonText("Recover Password", () => this.changeType("recover"))}
              </form>
            );
          break;
        case "recover":
          return (
              <form class="form-signin">
                {this.heading2("Recover Password")}
                {this.input("email", "Email")}
                {this.button("Okey", () => alert('test'))}
                {this.button("Back", () => this.changeType("main"))}
              </form>
          );
          break;
        case "create":
          return(
            <form class="form-signin">
              {this.heading2("Create NOVA Account")}
              {this.input("text", "Username")}
              {this.input("email", "Email")}
              {this.input("password", "Password")}
              {this.input("password", "Re-Password")}
              {this.button("Create", () => alert('creating..'))}
              {this.button("Cancel", () => this.changeType("main"))}
            </form>
          );
          break; 
      }
      
    }

}



export default App;
