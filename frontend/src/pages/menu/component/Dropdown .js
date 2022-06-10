import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const Dropdown = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return(
    <>
    <Box sx={{ minWidth: 200 }}>
    <FormControl fullWidt>
      <InputLabel id="demo-simple-select-label">付款方式</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
        sx={{ minWidth: 200 }}
      >
        <MenuItem value={10}>信用卡</MenuItem>
        <MenuItem value={20}>轉帳</MenuItem>
      </Select>
    </FormControl>
  </Box>
  </>
)
    }
export default Dropdown