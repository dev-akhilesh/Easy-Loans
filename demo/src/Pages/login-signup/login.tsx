import React, { useState } from "react";
import style from "./Login.module.css";
import imagelogo from "./Utiles/imagelogo.png";

//TS Interface for Login DataTypes
export interface loginDatatype{
  email : string,
  password : number
}

//TS Interface for Register DataTypes
export interface registerDatatype{
  name : string,
  email : string,
  password : number
}

function Login() {
  //State for Login register form Render
  const [state, setstate] = useState<Boolean>(true);

  //State for Login Data
  const [LoginData, setLoginData] = useState<loginDatatype>({
    email : "",
    password : 0
  })

  //State for Register Data
  const [RegisterData, setRegisterData] = useState<registerDatatype>({
    name : "",
    email : "",
    password : 0
  })

  //Submit handler for Login form
  const handleLogin=(e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(LoginData);

  }

  //Submit handler for Register form
  const handleRegister=(e : React.FormEvent<HTMLFormElement> )=>{
    e.preventDefault();
    console.log(RegisterData);
  }


  return (
    <div className={style.Container}>
      <div className={style.boxContainer}>
        <div className={style.miniContainer1}>
          <h1 className={style.loginheading}>
            {state == true ? "Login" : "Register"}
          </h1>
          <img className={style.imglogo} src={imagelogo} alt="error" />
          <div className={style.animated}>
            <div className={style.line}>Get Ready</div>
            <div className={style.line}>Easy Loan</div>
            <div className={style.line}>Less intrest rate</div>
            <div className={style.line}>Get instant Loan</div>
            <div className={style.line}>Best offers</div>
          </div>
        </div>
        <div className={style.miniContainer2}>
          {state == true ? (
            <form className={style.form} onSubmit={handleLogin}>
              <h1 className={style.loginheading2}>Login</h1>
              <img className={style.imglogo2} src={imagelogo} alt="error" />
              <div className={style.inpcont}>
                <label className={style.lable} htmlFor="">
                  Enter Email
                </label>
                <input
                  className={style.input}
                  type="email"
                  placeholder="Email"
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setLoginData({...LoginData, email : e.target.value})}
                />
                <p></p>
              </div>
              <div className={style.inpcont}>
                <label className={style.lable} htmlFor="">
                  Enter Password
                </label>
                <input
                  className={style.input}
                  type="password"
                  placeholder="Password"
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setLoginData({...LoginData, password : +e.target.value})}
                />
              </div>
              <p className={style.formchange} onClick={() => setstate(false)}>
                New User?
              </p>
              <button
                className={style.submitbtn}
                type="submit"
              >Submit</button>
              <div className={style.animated2}>
                <div className={style.line}>Get Ready</div>
                <div className={style.line}>Easy Loan</div>
                <div className={style.line}>Less intrest rate</div>
                <div className={style.line}>Get instant Loan</div>
                <div className={style.line}>Best offers</div>
              </div>
            </form>
          ) : (
            <form className={style.form} onSubmit={handleRegister}>
              <h1 className={style.loginheading2}>Register</h1>
              <img className={style.imglogo2} src={imagelogo} alt="error" />
              <div className={style.inpcont}>
                <label className={style.lable} htmlFor="">
                  Enter Name
                </label>
                <input
                  className={style.input}
                  type="name"
                  placeholder="Name"
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setRegisterData({...RegisterData,name : e.target.value})}
                />
                <p></p>
              </div>
              <div className={style.inpcont}>
                <label className={style.lable} htmlFor="">
                  Enter Email
                </label>
                <input
                  className={style.input}
                  type="email"
                  placeholder="Email"
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setRegisterData({...RegisterData, email:e.target.value})}
                />
              </div>
              <div className={style.inpcont}>
                <label className={style.lable} htmlFor="">
                  Enter Password
                </label>
                <input
                  className={style.input}
                  type="password"
                  placeholder="Password"
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setRegisterData({...RegisterData, password : +e.target.value})}
                />
              </div>
              <p className={style.formchange} onClick={() => setstate(true)}>
                Allready a User?
              </p>
              <button
                className={style.submitbtn}
                type="submit"
              >Register</button>
              <div className={style.animated2}>
                <div className={style.line}>Get Ready</div>
                <div className={style.line}>Easy Loan</div>
                <div className={style.line}>Less intrest rate</div>
                <div className={style.line}>Get instant Loan</div>
                <div className={style.line}>Best offers</div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
