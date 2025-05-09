import { useState } from "react";

export default function Login() {
  const [loginForm,setLoginForm]=useState({
    email: '',
    password: ''
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(loginForm);
  }

  function handleChange(event) {
    setLoginForm((prevState)=>{
      return {
        ...prevState,
        [event.target.name]: [event.target.value]
      }
    })
  }


  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={handleChange} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={handleChange} />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
