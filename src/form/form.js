
import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';


const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setValue("");
    onSubmit(value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text" inputRef={inputRef} value={value} onChange={handleChange}
        id="input-with-icon-textfield"
        label="Введите свое сообщение"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" >
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Button className="myBtnClass" variant="contained" type="submit">отправить</Button>
    </form>
  );
};

export default Form;
    