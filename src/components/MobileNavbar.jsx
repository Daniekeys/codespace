import React,{useState} from 'react'
import navbar from '../assets/navbar.png';
import logo from '../assets/primarylogo.png';
import cancel from '../assets/cancel.png';
import AirdropModal from "./Modals/AirdropModal";
import PresaleModal from "./Modals/PresaleModal";

const styles = {
  parentContainer: "w-full m-sticky-nav ",
  container:"w-full mt-2 mb-2 flex flex-col justify-between items-center biome-regular relative ",
  logoContainer: "w-full  flex justify-between  items-center px-2 ",
  logoContainer2: "w-full  flex justify-between  items-center ",
  logo: "w-32 h-full",
  navToggler: " h-full w-12  lg:hidden",
  menuCard: "absolute z-50 bg-blue px-2 top-0 left-0 right-0 w-full h-screen  transition-all duration-1000 ease-in-out bg-blue ",
  menuContainer: "w-full  flex flex-col px-2 bg-blue  transition-all duration-1000 ease-in-out",
  menuItem: "text-white text-xl ",
  menuItemActive: "text-white text-base md:text-xl",
  homeContainer: "flex flex-col mb-6 mt-8 ",
  buttonContainer: "  flex row-reverse mt-8  ",
  preBtn: "text-yellow m-preBtn border-yellow border-[1px] px-4 py-2  ",
  getBtn: "text-white m-getBtn font-bold bg-lightBlue px-4 py-2 mr-4 ",
};

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openPresale, setOpenPresale] = useState(false);
    const handleClosePresale =() => {
      setOpen(false)
        setOpenPresale(true)
    }
    const handleCloseModal =() => {
      setOpen(false)
        setOpenModal(true)
    }
  const handleOpen = () => {
      setOpen(true)
  }
  const handleClose = () => {
      setOpen(false)
  }
    return (
      <div className={styles.parentContainer}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="logo" className={styles.logo} />
            <img
              src={navbar}
              alt="logo"
              className={styles.navToggler}
              onClick={handleOpen}
            />
          </div>
          {open && (
            <div className={styles.menuCard}>
              {/* *******************************************Start OF HEADER 2 **************** */}
              <div className={styles.logoContainer2}>
                <img src={logo} alt="logo" className={styles.logo} />
                <img
                  src={cancel}
                  alt="logo"
                  className={styles}
                  onClick={handleClose}
                />
              </div>
              {/* *******************************************END OF HEADER 2 **************** */}
              <div className={styles.menuContainer}>
                <div className={styles.homeContainer}>
                  <a href="#home" className={styles.menuItem}>
                    Home
                  </a>
                  <div className="w-6 h-[1px] bg-white" />
                </div>
                <div className="mb-6">
                  <a
                    href="#Feature"
                    className={styles.menuItem}
                    onClick={handleClose}
                  >
                    Features
                  </a>
                </div>
                <div className="mb-6">
                  <a
                    href="#Partners"
                    className={styles.menuItem}
                    onClick={handleClose}
                  >
                    Partners
                  </a>
                </div>
                <div className="mb-6">
                  <a
                    href="https://media.publit.io/file/SPORTREX-WHITE-PAPER-2022-version1.pdf"
                    className={styles.menuItem}
                    onClick={handleClose}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Whitepaper
                  </a>
                </div>
                <div className="mb-6">
                  <a
                    href="#API"
                    className={styles.menuItem}
                    onClick={handleClose}
                  >
                    API
                  </a>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.getBtn} onClick={handleCloseModal}>
                  Get Airdrop
                </button>
                <button className={styles.preBtn} onClick={handleClosePresale}>
                  Pre-Sale
                </button>
              </div>
            </div>
          )}
        </div>
        <AirdropModal
          open={openModal}
          handleClose={() => setOpenModal(false)}
        />
        <PresaleModal
          open={openPresale}
          handleClose={() => setOpenPresale(false)}
        />
      </div>
    );};

    export default  MobileNavbar