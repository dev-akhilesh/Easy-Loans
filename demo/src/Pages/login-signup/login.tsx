
import React from "react";
import style from "./Login.module.css";
import imagelogo from "./Utiles/imagelogo.png";

function Login() {



  return (
    <div className={style.Container}>
      <div className={style.boxContainer}>
        <div className={style.miniContainer1}>
            <h1 className={style.loginheading}>Login</h1>
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
          <form className={style.form} action="">
            <div className={style.inpcont}>
              <label className={style.lable} htmlFor="">Enter Email</label>
              <input className={style.input} type="email" placeholder="Email" />
               <p></p>
            </div>
            <div className={style.inpcont}>
              <label className={style.lable} htmlFor="">Enter Password</label>
              <input className={style.input} type="password" placeholder="Password" />
            </div>
            <input className={style.submitbtn} type="Submit" placeholder="Submit"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

