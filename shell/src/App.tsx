import React, { useState } from "react";
import { createRoot } from 'react-dom/client'
import { Container, Typography, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";


import Button from "@mui/material/Button";

// @ts-ignore
import DemoMFE from "demo_mfe";

const App = () => {
 const [name, setName] = useState("");
 const [lastName, setLastName] = useState("");
 const [age, setAge] = useState("");
 const [person, setPerson] = useState({});

 const handleSubmit = () => {
  setPerson({
    name: name,
    lastName: lastName,
    ...(age && { age: age }),
  });
 };

 const resetPerson = () => {
  setPerson({})
  setName('')
  setLastName('')
  setAge('')
 }

 return (
  <>
   <Typography
    variant="h2"
    align="center"
    style={{ backgroundColor: "black", color: "white", padding: "16px" }}
   >
    Webpack react app - Demo
   </Typography>
   <Container style={{ marginTop: "32px" }}>
    <Grid container spacing={4}>
     <Grid size={5}>
      <Typography>Name</Typography>
      <TextField
       label="Enter your name"
       value={name}
       fullWidth
       onChange={(e) => setName(e.target.value)}
      />
     </Grid>
     <Grid size={5}>
      <Typography>Last name</Typography>
      <TextField
       label="Enter your last name"
       value={lastName}
       fullWidth
       onChange={(e) => setLastName(e.target.value)}
      />
     </Grid>
     <Grid size={2}>
      <Typography>Age</Typography>
      <TextField
       label="Enter your age"
       value={age}
       fullWidth
       type="number"
       onChange={(e) => setAge(e.target.value)}
      />
     </Grid>
     <Grid size={12}>
      <Button
       variant="contained"
       color="primary"
       onClick={() => handleSubmit()}
      >
       Add
      </Button>
     </Grid>
     <Grid size={12}>
      <DemoMFE person={person} resetPerson={resetPerson} />
     </Grid>
    </Grid>
   </Container>
  </>
 );
};

createRoot(document.getElementById('app')).render(<App/>)

