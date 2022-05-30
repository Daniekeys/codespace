import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import i18next from "i18next";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    outline:"none",
    border:"none"
  },
  text:{
color:"#fff"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const languages = [
    {
      code: "fr",
      name: "français",
      country_code: "fr",
    },
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "ar",
      name: "عربي",
      country_code: "sa",
      dir:'rtl'
    },
  ];
  
const Dropdown = () => {
const [lang, setLang] = useState("");
const classes = useStyles();

return (
<FormControl className={classes.formControl}>
<InputLabel id="demo-simple-select-autowidth-label">Language</InputLabel>
<Select
  labelId="demo-simple-select-autowidth-label"
  id="demo-simple-select-autowidth"
  value={lang}
  className={classes.text}
  // onChange={() => i18next.changeLanguage(lang)}
  autoWidth
>
  <MenuItem value="">
    <em className={classes.text}>Select Language</em>
  </MenuItem>
  {languages.map((item, index) => {
      return (

          <MenuItem value={item.name} key={index}  onClick={() => i18next.changeLanguage(item.code)}>{item.name}</MenuItem>
      )
  })}

</Select>

</FormControl>
)
}
export default Dropdown