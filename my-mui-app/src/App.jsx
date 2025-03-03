import React from "react";
import Button from "@mui/material/Button";
import './App.css'
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Card sx={{ width: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a simple card component example.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            size="small"
            component="a"
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default App
