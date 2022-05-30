import React,{useState} from 'react'
import {FaBars} from 'react-icons/fa';
import logo from '../assets/primarylogo.png';
import AirdropModal from './Modals/AirdropModal'
import PresaleModal from './Modals/PresaleModal'

const styles = {
  parentContainer: "w-full  mb-8 left-0 sticky-nav bg-blue ",
  container: "w-full mt-2 mb-2 flex justify-between items-center biome-regular ",
  logoContainer: "w-full h-full md:w-2/12 flex justify-between  items-center",
  logo: "w-9/12 h-auto",
  navToggler: " text-2xl text-white md:hidden",
  menuContainer: "w-full md:w-6/12 flex ml-8 justify-evenly items-center",
  menuItem: "text-grey hover:text-white text-base md:text-xl biome-semibold",
  menuItemActive: "text-white text-base md:text-xl biome-semibold",
  homeContainer: "flex flex-col",
  buttonContainer: " md:w-4/12 flex justify-end items-center",
  preBtn:
    "text-yellow border-yellow border-[1px]  py-[1rem] px-[2.4rem]  biome-semibold ",
  getBtn:
    "text-white biome-semigold bg-lightBlue  py-[1rem] px-[2.4rem] mr-4 ",
};

const Navbar = () => {
    // write a function that applies the active class to the menu item
  const [openModal, setOpenModal] = useState(false);
  const [openPresale, setOpenPresale] = useState(false)

    const activeClass = (path) => {
        if(path === window.location.pathname){
            return styles.menuItemActive
        } else {
            return styles.menuItem
        }
    }

    return (
      <>
        <div className={styles.parentContainer}>
          <div className={styles.container}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="logo" className={styles.logo} />
              <FaBars className={styles.navToggler} />
            </div>
            <div className={styles.menuContainer}>
              <div className={styles.homeContainer}>
                <a href="#home" className={styles.menuItemActive}>
                  Home
                </a>
                <div className="w-6 h-[1px] bg-white" />
              </div>
              <div className={activeClass("/about")}>
                <a href="#Features" className={styles.menuItem}>
                  Features
                </a>
              </div>
              <div className={activeClass("/about")}>
                <a href="#Partners" className={styles.menuItem}>
                  Partners
                </a>
              </div>
              <div className={activeClass("/about")}>
                <a
                  href="https://media.publit.io/file/SPORTREX-WHITE-PAPER-2022-version1.pdf"
                  className={styles.menuItem}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whitepaper
                </a>
              </div>
              <div className={activeClass("/about")}>
                <a href="#API" className={styles.menuItem}>
                  API
                </a>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={styles.getBtn}
                onClick={() => setOpenModal(true)}
              >
                Get Airdrop
              </button>
              <button
                className={styles.preBtn}
                onClick={() => setOpenPresale(true)}
              >
                Pre-Sale
              </button>
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
        </div>
      </>
    );};

    export default Navbar 