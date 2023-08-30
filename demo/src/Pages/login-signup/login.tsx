import { Toast, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { addUser, getData } from "../../redux/AuthReducer/action";

import style from "./Login.module.css";
import imagelogo from "./Utiles/imagelogo.png";
import { Navigate, useNavigate } from "react-router-dom";

//TS Interface for Login DataTypes
export interface loginDatatype {
  email: string;
  password: string;
}

//TS Interface for Register DataTypes
export interface registerDatatype {
  name: string;
  email: string;
  password: string;
  image: string;
}

function Login() {
  const nav = useNavigate();
  //Chakra Toast
  const toast = useToast();

  //AuthState
  const [isAuth, setAuth] = useState<Boolean>(false);

  //State for Login register form Render
  const [state, setstate] = useState<Boolean>(true);

  //State for Login Data
  const [LoginData, setLoginData] = useState<loginDatatype>({
    email: "",
    password: "",
  });

  //State for Register Data
  const [RegisterData, setRegisterData] = useState<registerDatatype>({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  //UsersData
  const [users, setUsers] = useState<registerDatatype[]>();

  useEffect(() => {
    getData().then((res) => {
      setUsers(res);
    });
  }, []);

  //Submit handler for Login form
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isAuth === true
      ? toast({
          title: "login successful",
          description: "Wellcome to the website",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      : toast({
          title: "wrong credentials",
          description: "Email or Password is Wrong ",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
  };

  useEffect(() => {
    users?.forEach((el: registerDatatype) => {
      if (el.email === LoginData.email && el.password === LoginData.password) {
        setAuth(true);
      }
    });
  }, [LoginData]);

  //Submit handler for Register form
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (RegisterData.password === "") {
      toast({
        title: "wrong credentials",
        description: "Please Enter valid credentials",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else if (RegisterData.email === "") {
      toast({
        title: "wrong credentials",
        description: "Please Enter valid credentials",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else if (RegisterData.name === "") {
      toast({
        title: "wrong credentials",
        description: "Please Enter valid credentials",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      addUser(RegisterData)
        .then((res) => {
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setstate(true);
        })
        .catch((error) => {
          toast({
            title: "wrong credentials",
            description: "Email or Password is Wrong ",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        });
    }
  };

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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLoginData({ ...LoginData, email: e.target.value })
                  }
                  // value={LoginData.email}
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLoginData({ ...LoginData, password: e.target.value })
                  }
                  // value={LoginData.password}
                />
              </div>
              <p className={style.formchange} onClick={() => setstate(false)}>
                New User?
              </p>
              <button className={style.submitbtn} type="submit">
                Submit
              </button>
              {isAuth && <Navigate to="/" replace={true} />}
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRegisterData({ ...RegisterData, name: e.target.value })
                  }
                />
              </div>
              <div className={style.inpcont}>
                <label className={style.lable} htmlFor="">
                  Enter Email
                </label>
                <input
                  className={style.input}
                  type="email"
                  placeholder="Email"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRegisterData({ ...RegisterData, email: e.target.value })
                  }
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRegisterData({
                      ...RegisterData,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <p className={style.formchange} onClick={() => setstate(true)}>
                Allready a User?
              </p>
              <button className={style.submitbtn} type="submit">
                Register
              </button>
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
