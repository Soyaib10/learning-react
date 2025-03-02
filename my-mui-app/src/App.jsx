import React from "react";
import Button from "@mui/material/Button";
import './App.css'
import { Typography } from "@mui/material";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Button variant="contained" color="primary">Click Me</Button>

      <Typography variant="h2" gutterBottom>This is heading</Typography>
      <Typography variant="body1">
        This is paragraph. MUI typography helps text.
      </Typography>
      <Typography variant="body2">
        This is body2 text. It's smaller than body1 and used for secondary information.
      </Typography>
    </div>
  )
}

export default App
