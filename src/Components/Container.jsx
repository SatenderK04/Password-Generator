import Display from "./Display";
import Factors from "./Factors";
import style from "./Container.module.css";
import { useState, useEffect } from "react";

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialChar = "@#$%&*_";

export default function Container() {
  let [len, setLen] = useState(6);
  let [password, setPassword] = useState("");
  let [incLower, setIncLower] = useState(false);
  let [incNumber, setIncNumber] = useState(false);
  let [incSpecial, setIncSpecial] = useState(false);
  let [str, setStr] = useState(uppercase);
  let [alertMessage, setAlertMessage] = useState("Copy");

  let lowercaseChecked = () => {
    setIncLower(!incLower);
  };

  let numberChecked = () => {
    setIncNumber(!incNumber);
  };
  const specialCharChecked = () => {
    setIncSpecial(!incSpecial);
  };
  useEffect(() => {
    let charSet = uppercase;
    if (incLower) charSet += lowercase;
    if (incNumber) charSet += numbers;
    if (incSpecial) charSet += specialChar;
    setStr(charSet);
  }, [incLower, incNumber, incSpecial]);

  const passLen = (e) => {
    setLen(Number(e.target.value));
  };
  const generatePass = () => {
    let pass = "";
    for (let i = 0; i < len; i++) {
      let ind = Math.floor(Math.random() * str.length);
      pass += str[ind];
    }
    setPassword(pass);
  };

  const copyToClipboard = () => {
    if (password !== "") {
      navigator.clipboard.writeText(password);
      setAlertMessage("Copied!");
      setTimeout(() => setAlertMessage("Copy"), 2000);
    }
  };

  return (
    <>
      <div className={style.Container}>
        <Display
          generatePass={generatePass}
          password={password}
          copyToClipboard={copyToClipboard}
          alertMessage={alertMessage}
        />
        <Factors
          passLen={passLen}
          lowercaseChecked={lowercaseChecked}
          numberChecked={numberChecked}
          specialCharChecked={specialCharChecked}
        />
      </div>
    </>
  );
}
