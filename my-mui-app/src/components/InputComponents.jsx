import React, { useState } from "react";
import { Button, TextField, Autocomplete, Box, FormControlLabel, Checkbox, Fab, FormLabel, RadioGroup, Radio, FormControl, Rating, Select, MenuItem, Slider, Switch, ToggleButton, ToggleButtonGroup } from "@mui/material"; // Fab import here
import FavoriteIcon from '@mui/icons-material/Favorite';

function InputComponents() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1");
  const [rating, setRating] = useState(2);
  const [sliderValue, setSliderValue] = useState(30); // Corrected here
  const [switchChecked, setSwitchChecked] = useState(false);
  const [alignment, setAlignment] = useState("left");
  const [selectOption, setSelectOption] = useState("option1"); // Added separate state for Select

  const interests = ["Coding", "Music", "Sports", "Reading", "Movies"];

  const handleSubmit = () => {
    alert(`Name: ${name}, Age: ${age}, Interest: ${selectedInterest}, Agreed: ${agreed}`);
  }

  const handleCheckboxChange = (event) => {
    setAgreed(event.target.checked);
  }

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  }

  const handleSelectChange = (event) => {
    setSelectOption(event.target.value); // Using the correct state
  }

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  }

  const handleSwitchChange = (event) => {
    setSwitchChecked(event.target.checked);
  }

  const handleToggleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }

  return (
    <Box sx={{ width: 300, margin: "auto", padding: "20px" }}>
      {/* Text Field for Name */}
      <TextField
        label="Your Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      {/* Text Field for Age */}
      <TextField
        label="Your Age"
        variant="outlined"
        fullWidth
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br /><br />

      {/* Autocomplete for Interests */}
      <Autocomplete
        options={interests}
        value={selectedInterest}
        onChange={(event, newValue) => setSelectedInterest(newValue)}
        renderInput={(params) => <TextField {...params} label="Interest" />}
      />
      <br /><br />

      {/* Checkbox for Agreement */}
      <FormControlLabel
        control={<Checkbox checked={agreed} onChange={handleCheckboxChange} />}
        label="I agree to terms and conditions"
      />
      <br /><br />

      {/* Radio Group for Selecting Options */}
      <FormControl component="fieldset">
        <FormLabel component="legend">Select Option</FormLabel>
        <RadioGroup value={selectedOption} onChange={handleRadioChange}>
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
          <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
        </RadioGroup>
      </FormControl>
      <br /><br />

      {/* Rating Component */}
      <Rating
        name="rating"
        value={rating}
        onChange={handleRatingChange}
      />
      <br /><br />

      {/* Submit Button */}
      <Button variant="contained" onClick={handleSubmit} disabled={!agreed}>
        Submit
      </Button>

      {/* Floating Action Button (FAB) */}
      <Fab
        color="primary"
        aria-label="add"
        size="small"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
        }}
        onClick={handleSubmit}
      >
        <FavoriteIcon />
      </Fab>

      {/* select */}
      <Select value={selectOption} onChange={handleSelectChange} fullWidth>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>

      {/* slider  */}
      <Slider
        value={sliderValue}
        onChange={handleSliderChange}
        aria-labelledby="continous-slider"
      />

      {/* switch  */}
      <FormControlLabel
        control={<Switch checked={switchChecked} onChange={handleSwitchChange} />}
        label="Enable feature"
      />

      {/* toggle button  */}
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleToggleChange}
        aria-label="text alignment"
      >
        <ToggleButton value="left">Left</ToggleButton>
        <ToggleButton value="center">Center</ToggleButton>
        <ToggleButton value="right">Right</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default InputComponents;
