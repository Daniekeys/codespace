import React,{ useState} from 'react'

import sendicon from "../assets/sendicon.png";
import image from "../assets/SUBSCRIBE-IMAGE.png";
import axios from "axios";
import SuccessSnack from "./Snackbar/SuccessSnack"
import ErrorSnack from './Snackbar/ErrorSnack'
import CircularProgress from "@material-ui/core/CircularProgress";



const url = "https://sportrex-be.herokuapp.com/api/subscribe";

const styles = {
  container:
    " hidden md:flex w-full h-full bg-lightBlue  justify-center    my-8 md:px-24",
  contentContainer: "mt-2 flex flex-col   items-center",
  inputContainer:
    " w-10/12 sm:w-full  lg:w-8/12 bg-white flex mt-[3.5rem] justify-between rounded-[2.5rem] px-6 py-4 ",
  input:
    "border-none outline-none w-10/12 text-grey-dark text-lg biome-regular ",
  title: "text-white gradient-text  text-[1.375rem] sm:text-[1.5rem] mb-12 lg:mb-2 lg:text-[2.5rem] lg:mt-[7.5rem] text-center biome-bold ",
  img: "w-10 h-10 cursor-pointer",
  validation: "text-yellow text-xl biome-regular",
};

const Subscribe = () => {
    const [email, setEmail] = useState("");
     const [error, setError] = useState(false);
     const [success, setSuccess] = useState(false);
     const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
    // const [validationMessage, setValidationMessage] = useState(true);
      if (success) {
        return <SuccessSnack message={message} open={success} setOpen={setSuccess} />;
      }
      if (error) {
        return <ErrorSnack open={error} setOpen={setError} message={message} />;
      }

       const handleSubmit = (e) => {
         e.preventDefault();
         setLoading(true);
         const data = new FormData();
         
         data.append("email", email);
        

         if ( email === "") {
        //    setValidationMessage(true);
           setLoading(false);
           setTimeout(() => {
             setLoading(false);
            //  setValidationMessage(false);
           }, 5000);
         } else {
           axios
             .post(url, data)
             .then((res) => {
               setLoading(false);
               setSuccess(true);
               setMessage(res.data.message);
               setEmail("");
             })
             .catch((err) => {
               setLoading(false);
               setError(true);
               setMessage(err.response.data.message);
             });
         }
       };

    return (
      <div
        className={styles.container}
        style={{
          background: "transparent ",
          // backgroundImage: "url(https://media.publit.io/file/mask-T.png)",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //   objectFit: "cover",
          height: "30rem",
          width: "100%",
          borderRadius:"60px"
        }}
      >
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>
            Be Part of Greatness, Join the Community
          </h1>
       
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="johndoe@gmail.com"
            />
            {loading ? (
              <CircularProgress color="inherit" className="text-blue" />
            ) : (
              <img
                className={styles.img}
                src={sendicon}
                alt="send"
                onClick={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    );
}

export default Subscribe
