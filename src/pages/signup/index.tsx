import { useState } from 'react'
import { useNavigate } from 'react-router';
import { useFormik } from "formik";
import {  Box, Button, Card, CardContent, Grid, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material';
import { auto } from '@popperjs/core';


const SignUp = () => {
  const btnstyle = { margin: "15px 0" };
  const stylePaper = {
    padding: "10px",
    // height: "50vh",
    width: "75wh",
    margin: "20px auto",
    
  };
  const navigate = useNavigate();
  const initialvalues = {

    nom: "",
    prenom: "",
    password: "",
    repassword: "",
    adresse: "",
    telephone: "",

  };
  // const handelChangeUser=(pers:User)=>{

  // }
  const formik = useFormik({
    initialValues: initialvalues,
    // validationSchema: schema,
    onSubmit: (values) => {
      console.log("envoyer" + values);
      // handelChangeUser(values);
      navigate("/");
    },
  });
  return (
    <div style={{margin:'auto',width:"80%",marginTop:"30px",paddingLeft:"auto"}}>
  
    
    <Card sx={{ minWidth: 275,maxWidth:"70%" }}>
    <CardContent style={{background:'red'}}>
   
    <h2>Créer votre compte client  </h2>
            <form >
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    Name: <TextField sx={{background:'#ffffff'}}
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        // onChange={e => setFirstName(e.target.value)}
                        // value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        // onChange={e => setLastName(e.target.value)}
                        // value={lastName}
                        fullWidth
                        required
                    />
                </Stack>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="password"
                        // onChange={e => setFirstName(e.target.value)}
                        // value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="repwd"
                        // onChange={e => setLastName(e.target.value)}
                        // value={lastName}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="adresse"
                    // onChange={e => setEmail(e.target.value)}
                    // value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="telephone"
                    // onChange={e => setPassword(e.target.value)}
                    // value={password}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />

                <Button variant="outlined" color="secondary" type="submit">Register</Button>
            </form>
            <small>Already have an account? Login Here</small>
     
   
    </CardContent>
    </Card>
    {/* +++++++++++++++++++++++++++++++++++ */}
  </div>
  )
}

export default SignUp
