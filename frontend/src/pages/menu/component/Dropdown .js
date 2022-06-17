import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const Dropdown = () => {
    const [pay, setpay] = React.useState('');
    const handleChange = (event) => {
      setpay(event.target.value);
    };
    return(
    <>
    <Box sx={{ minWidth: 200 }}>
    <FormControl fullWidt>
    <InputLabel id="demo-simple-select-autowidth-label">付款方式</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={pay}
        onChange={handleChange}
        sx={{ minWidth: 200 }}
      >
        <MenuItem value={'Creditcard'}>信用卡</MenuItem>
        <MenuItem value={'ATM'}>轉帳</MenuItem>
      </Select>
    </FormControl>
  </Box>
  </>
)
    }
export default Dropdown