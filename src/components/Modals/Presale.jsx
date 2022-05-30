import React, { useState } from "react";
import Success from "../Feedback/Success";
import Error from "../Feedback/Error";
import { FaTimes } from "react-icons/fa";
import CircularProgress from "@material-ui/core/CircularProgress";
import { styles } from "./styles";
import axios from "axios";

const url = "https://sportrex-be.herokuapp.com/api/presales";

// {“full_name”, “email”, “twitter_link”, “resume”, “about_yourself”}

const Presale = ({ handleClose }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [sptAddress, setSptAddress] = useState("");
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
    data.append("full_name", fullname);
    data.append("email", email);
    data.append("spt_address", sptAddress);
   
    if (
      fullname === "" ||
      email === "" ||
      sptAddress === "" 
     
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
          setFullname("");
          setEmail("");
          setSptAddress("")
     
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
        <div className={styles.header1}>
          <h1 className={styles.headerTitle}>Presale</h1>
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
          <label className={styles.label}>Enter Legal Fullname *</label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.input}
              placeholder="John Doe"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
        </div>
        {/* $$$$$$$$$$$$$$$$$$$ END OF SINGLE */}
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
          <label className={styles.label}>Enter Resgistered Email Address *</label>
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

export default Presale;
