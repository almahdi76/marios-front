import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { useFormik } from "formik";
import {  Box, Button, Grid, InputAdornment, Link, Paper, TextField, Toolbar, Typography } from '@mui/material';
type Client={
  identifiant:string,
  password:string
}
const Login = () => {
  const [person,setPerson]=useState();
  const btnstyle = { margin: "15px 0" };
  const stylePaper = {
    padding: "10px",
    height: "50vh",
    width: "300px",
    margin: "20px auto",
    
  };
  const navigate = useNavigate();
  const initialvalues = {

    identifiant: "",
    password: "",

  };
  const handelChangeUser=(pers:Client)=>{

  }
  const formik = useFormik({
    initialValues: initialvalues,
    // validationSchema: schema,
    onSubmit: (values) => {
      console.log("envoyer" + values);
      handelChangeUser(values);
      navigate("/");
    },
  });

  return (
    <div>
     <Grid >
        <Paper elevation={11} 
         sx={stylePaper}
        >
         
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ display: "block", margin: "0 auto " }} >
              <Box m={1} >
              <Typography sx={{ textAlign: "center" }} variant="body1">
                Identifiant
              {/* {t("common.msg")} */}
            </Typography>
                <TextField
                
                //   placeholder={t("placehold.identifiant")}
                  size="small"
                  fullWidth
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.identifiant}
                  name="identifiant"
                  error={formik.touched.identifiant && Boolean(formik.errors.identifiant)}
                  helperText={formik.touched.identifiant && formik.errors.identifiant}
                />
              </Box>
              <Box m={1}>
              <Typography sx={{ textAlign: "center" }} variant="body1">
                Mot de Passe
              {/* {t("common.msg")} */}
            </Typography>
                <TextField
                //   placeholder={t("placehold.password")}
                  size="small"
                  type="text"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  name="password"
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Box>
             
            

              <Link href="#" underline="none" >
              <Typography sx={{ textAlign: "right",color:"#fbc02c" }} variant="body1">
                Créer un compte
              {/* {t("common.msg")} */}
            </Typography>
              </Link>

          
              <Button
                fullWidth
                sx={{color:'#3b438b',background:'#fbc02c'}}
                
                onClick={() => {
                  navigate("/");
                }}
              >
                {/* {t("common.btn_csl")} */}
                Connextion
              </Button>
            </Box>
          </form>
        </Paper>
      </Grid>
      
    </div>
  )
}

export default Login
