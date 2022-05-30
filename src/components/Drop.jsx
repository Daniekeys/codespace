import React,{useState} from 'react'
import {MdArrowDropDown} from 'react-icons/md'
import i18next from "i18next";
import cookies from 'js-cookie'
const styles = {
    parent:"flex relative w-full h-full flex-col ",
    sectionA:"flex justify-between items-center space-x-4 cursor-pointer text-white text-base md:text-xl biome-semibold",
    sectionB:"relative",
    close:"hidden",
    listContainer: "absolute top-8  left-0 bg-blue w-48 flex flex-col",
    item:"w-full py-4 text-white hover:bg-semiBlue",
};
const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
    {
      code: "fr",
      name: "français",
      country_code: "fr",
    },
    {
      code: "es",
      name: "Spanish",
      country_code: "es",
      
    },
    {
      code: "nl",
      name: "nederlands",
      country_code: "nl",
      
    },
    {
      code: "cn",
      name: "中国人",
      country_code: "cn",
      
    },
    {
      code: "kr",
      name: "한국어",
      country_code: "kr",
      
    },
    {
      code: "jp",
      name: "日本",
      country_code: "jp",
      
    },
  ];
  
const Drop = () => {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find(l => l.code === currentLanguageCode);
    const [lang, setLang] = useState("ENG");
    const [open, setOpen] = useState(false);
    const handleSelect = (code,name) => {
      i18next.changeLanguage(code);
      setLang(name);
      setOpen(false);
    }
    return (
        <div className={styles.parent}>
            <div className={styles.sectionA} onClick={() => setOpen(!open)}>
        <p>{lang}</p>
        <MdArrowDropDown />
            </div>
        <div className={open? styles.listContainer: styles.close}>
        <ul>
        {languages.map(({code, name, country_code}) => (
              <li key={country_code} className={styles.item} >
              <button className="flex  items-center space-x-6 px-2"
               onClick={() => handleSelect(code,name)} disabled={code === currentLanguageCode}
               >
                <span className={`flag-icon flag-icon-${country_code} `} 
                style={{ opacity:code === currentLanguage ? 0.2 :1}}
                ></span>
                {name}
              </button>
            </li>
            ))}
        </ul>
        </div>
        </div>
    )
}

export default Drop