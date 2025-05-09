import { useRef, useState } from "react";

export default function Login() {
  // const [loginForm,setLoginForm]=useState({
  //   email: '',
  //   password: ''
  // });
  const emailRef=useRef();
  const passwordRef=useRef();

  function handleFormSubmit(event) {
    event.preventDefault();

    const emailValue=emailRef.current.value;
    const passwordValue=passwordRef.current.value;
    console.log(emailValue);
    console.log(passwordValue);
  }

  // function handleChange(event) {
  //   setLoginForm((prevState)=>{
  //     return {
  //       ...prevState,
  //       [event.target.name]: [event.target.value]
  //     }
  //   })
  // }


  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={passwordRef}/>
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
