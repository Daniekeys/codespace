import React, { useState } from "react";
import Success from "../Feedback/Success";
import Error from "../Feedback/Error";
import { FaTimes } from "react-icons/fa";
import CircularProgress from "@material-ui/core/CircularProgress";
import { styles } from "./styles";
import axios from "axios";

const url = "https://sportrex-be.herokuapp.com/api/airdrops";

// {“full_name”, “email”, “twitter_link”, “resume”, “about_yourself”}

const Api = ({ handleClose }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");


  const [loading, setLoading] = useState(false);
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
  

    data.append("name", name);
  
   
    if (
      
      email === "" ||
      name === "" 
     
    ) {
      setValidationMessage(true);
      setLoading(false);
      setTimeout(() => {
        setLoading(false);
        setValidationMessage(false);
      }, 5000);
    } else {
      axios
        .post(url, data)
        .then((res) => {
          setLoading(false);
          setSuccess(true);
          setMessage(res.data.message);
          setName("");
          setEmail("");
          
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
          <h1 className={styles.headerTitle}>Join API Waitlist</h1>
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
          <label className={styles.label}>Enter Full Name *</label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.input}
              placeholder="Ayeni Daniel"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        {/* $$$$$$$$$$$$$$$$$$$ END OF SINGLE */}
        {/* ########################### START OF SINGLE FIELD */}
        <div className={styles.singleField}>
          <label className={styles.label}>
            Enter  Email Address *
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
      

        <div className={styles.btnContainer}>
          {loading ? (
            <div className={styles.wait}>
              <p className={styles.waiting}>Please wait...</p>
              <CircularProgress color="inherit" className="text-white" />
            </div>
          ) : (
            <button type="submit" className={styles.btn} onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Api
