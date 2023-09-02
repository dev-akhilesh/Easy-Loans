import React, { useState, useEffect } from "react";

const ThankYouPage = () => {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, []);

  useEffect(() => {
    if (timer === 1) {
      // Redirect to the homepage using JavaScript's window.location
      window.location.href = "/";
    }
  }, [timer]);

  return (
    <div style={{backgroundColor:"#130f24"}}>
      <h1>Thank You!</h1>
      <p>Redirecting in {timer} seconds...</p>
    </div>
  );
};

export default ThankYouPage;

