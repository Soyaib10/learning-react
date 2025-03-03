import React, { useState } from "react";
import Button from "@mui/material/Button";
import './App.css'
import { Card, CardActions, CardContent, Typography, TextField } from "@mui/material";

function App() {
  const [name, setName] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if (name.trim() === "") {
      setError(true)
    } else {
      setError(false)
      console.log("Submitted name: ", name)
      alert(`Hello, ${name}`)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Card sx={{ width: 300 }}>
        {/* card CardContent */}
        <CardContent>
          <Typography variant="h5" component="div">
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a simple card component example.
          </Typography>

          {/* text field as input */}
          <TextField
            label="Enter your name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}

            error={error}
            helperText={error ? "Name is required!" : ""}
          />
        </CardContent>

        {/* card CardAction */}
        <CardActions>
          <Button variant="contained" size="small" onClick={handleSubmit}>
            Submit
          </Button>

          <Button
            variant="outlined"
            size="small"
            onClick={handleSubmit}
          >
            Learn more by submitting
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default App
