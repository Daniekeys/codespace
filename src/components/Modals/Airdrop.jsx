import React, { useState } from "react";
import Success from "../Feedback/Success";
import Error from "../Feedback/Error";
import { FaTimes } from "react-icons/fa";
import CircularProgress from '@material-ui/core/CircularProgress';
import {styles} from "./styles";
import axios from "axios";

const url = "https://sportrex-be.herokuapp.com/api/airdrops";
const Airdrop = ({handleClose}) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [sptAddress,setSptAddress] = useState("");
  const [email,setEmail ] = useState("");
  const [twitter,setTwitter] = useState("");
  const [discord, setDiscord] = useState("");
  const [telegram, setTelegram] = useState("");
  
  const  [loading, setLoading] = useState(false);
  const [validationMessage, setValidationMessage] = useState(true);
  if (success) {
    return <Success message={message} handleClose={handleClose} />;
  }
  if (error) {
    return <Error message={message} handleClose={handleClose} />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
   const data = new FormData();
    data.append("email", email);
    data.append("spt_address", sptAddress);

    data.append("twitter_link", twitter);
    data.append("discord_link", discord);
    data.append("telegram_link", telegram);
      if(sptAddress === "" || email === "" || twitter === "" || discord === "" || telegram === ""){
        setValidationMessage(true);
        setLoading(false);
        setTimeout(() => {
          setLoading(false);
          setValidationMessage(false);
        }, 5000);
      }
      else{
        axios
        .post(url, data)
        .then((res) => {
          setLoading(false);
          setSuccess(true);
          setMessage(res.data.message);
          setSptAddress("");
          setEmail("");
          setTwitter("");
          setDiscord("");
          setTelegram("");
          setValidationMessage(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
          setMessage(err.response.data.message);
        });
      }
  };
  
  return (
    <div className={styles.parentContainer}>
      <div className={styles.headerSession}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Get Airdrop</h1>
          <FaTimes className={styles.closeIcon} onClick={handleClose} />
        </div>
      </div>
      {/* $%$%$$%$%$%$^^^^^^^^^^VALIDATION ERRRO MESSAGE */}
      {validationMessage && (
        <p className={styles.validate}> All Fields are required !!!</p>
      )}
      <div className={styles.formContainer}>
        {/* ########################### START OF SINGLE FIELD */}
        <div className={styles.singleField}>
          <label className={styles.label}>Enter SPT Address *</label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.input}
              placeholder="0x061b4a25BE391Aa2034fC7aC5b631B1066423259"
              value={sptAddress}
              onChange={(e) => setSptAddress(e.target.value)}
              required
            />
          </div>
        </div>
        {/* $$$$$$$$$$$$$$$$$$$ END OF SINGLE */}
        {/* ########################### START OF SINGLE FIELD */}
        
        <div className={styles.singleField}>
          <label className={styles.label}>
            Enter Registered Email Address *
          </label>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder="johndoe@gmail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        {/* $$$$$$$$$$$$$$$$$$$ END OF SINGLE */}
        {/* ########################### START OF SINGLE FIELD */}
        <div className={styles.singleField}>
          <label className={styles.label}> Twitter Profile Link *</label>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder="https://twitter.com/JohnDoe"
              type="text"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              required
            />
          </div>
        </div>
        {/* $$$$$$$$$$$$$$$$$$$ END OF SINGLE */}
        {/* ########################### START OF SINGLE FIELD */}
        <div className={styles.singleField}>
          <label className={styles.label}>Telegram Profile *</label>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder="https://t.me/JohnDoe"
              type="text"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              required
            />
          </div>
        </div>
        {/* $$$$$$$$$$$$$$$$$$$ END OF SINGLE */}
        {/* ########################### START OF SINGLE FIELD */}
        <div className={styles.singleField}>
          <label className={styles.label}>Discord Profile Link *</label>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder="https://www.discordapp.com/users/123456789012345678"
              type="text"
              value={discord}
              onChange={(e) => setDiscord(e.target.value)}
              required
            />
          </div>
        </div>
        {/* $$$$$$$$$$$$$$$$$$$ END OF SINGLE */}
        {/* ########################### START OF SINGLE FIELD */}

        <div className={styles.btnContainer}>
          {loading ? (
            <div className={styles.wait}>
              <p className={styles.waiting}>Please wait...</p>
              <CircularProgress color="inherit" className="text-white" />
            </div>
          ) : (
            <button type="submit" className={styles.btn} onClick={handleSubmit}>
              Get Airdrop
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Airdrop;
