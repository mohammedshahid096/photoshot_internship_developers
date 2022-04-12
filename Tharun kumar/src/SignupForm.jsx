import './App.css';
import { Button, ButtonGroup, Card, CardActions, CardHeader, FormHelperText, FormLabel, Grid, IconButton, Input, InputAdornment, InputLabel, label, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import CallIcon from '@material-ui/icons/Call'
import FacebookIcon from '@material-ui/icons/Facebook'
import SearchIcon from "@material-ui/icons/Search"
const useStylesOne = makeStyles((theme) => ({
  appComponent:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#514bf4'
    
  },
  btnGrp: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "flex-end"
  },
  btn: {
    border: "0.1rem solid black",
    color: "black",
    backgroundColor: "white",
    width: "60%",
    float: "right"
  },

  card:{
    display: "flex",
    flexDirection: "column",
    paddingTop: "2rem",
    borderRadius: "1rem"
  },

  radioBtn: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
    gap: "1rem"
  },
  radioBtn1: {
    alignItems: "flex-start"
  },
  radioBtn2: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },

  header:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "2rem",
  },
  otpbtn:{
    border: "0.1rem solid grey",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    backgroundColor: "#30438e"
  },
  resendBtn:{
    border: "0.1rem solid grey",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    backgroundColor: "#ffff"
  },
  proceedbtn:{
    width: "100%",
    border: "0.1rem solid grey",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    outline: "none",
    backgroundColor: "#30438e"
  }
}));

const StylesOne = {
  width: "95%",
  border: "0.1rem solid grey",
  borderRadius: "0.5rem",
  padding: "0.5rem",
  outline: "none"
}

const StylesTwo = {
  width: "90%",
  border: "0.1rem solid grey",
  borderRadius: "0.5rem",
  padding: "0.5rem"
}
const SignupForm = () => {
  const classes = useStylesOne();
  const [value, setValue] = useState()

  return (
    <div>
            <form>
                <CardActions className={classes.header}>Create Account</CardActions>

                    <div style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: "0.4rem"
                    }}>
                    <FormLabel style={{
                        width: "50%"
                    }}>
                    <input type="radio" value="Photographer" checked={true} />
                    Photographer
                    </FormLabel>

                    <input type="radio" value="User" />
                    <FormLabel>User
                    </FormLabel>
                    </div>

                    <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    paddingBottom: "0.4rem"

                    }}>
                    <div>
                        <label for="name">First Name</label><br />
                        <input type="text" 
                        placeholder="First Name" style={StylesTwo}/>
                    </div>

                    <div>
                        <label >Last Name</label><br />
                        <input type="text" 
                        placeholder="Last Name" style={StylesTwo}/>
                    </div>
                    </div>

                    <div style={{
                        paddingBottom: "0.4rem"
                    }}>
                        <label >Username</label><br />
                        <input type="text" 
                        placeholder="username" style={StylesOne}/><br />  

                        <label >Email</label><br />
                        <input type="email" 
                        placeholder="Email" style={StylesOne}/><br />  


                        <label >Password</label><br />
                        <input type="Password" 
                        placeholder="Email" style={StylesOne}/><br />  
                            <br />  

                        <label >Comfirm Password</label><br />
                        <input
                            type="password"
                            id="input-with-icon-adornment"
                            style={StylesOne}/><br /> 

                        <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "1rem",
                        paddingBottom: "0.4rem"
                        }}>
                        <div>
                            <label >Phone Number</label><br />
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={value}
                                onChange={setValue}
                            /><br />
                        </div>
                        <div>
                            <label></label><br />
                            <button className={classes.otpbtn}>Send OTP</button>
                        </div>

                        </div>

                        <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "1rem",
                        paddingBottom: "0.4rem"
                        }}>
                        <div>
                            <label >OTP</label><br />
                            <OtpInput
                            numInputs={6}
                            containerStyle={StylesOne}
                            separator={<span>-</span>}
                            />
                        </div>
                        <div>
                            <label></label><br />
                            <button className={classes.resendBtn}>Resend 30sec</button>
                        </div>
                        </div>
                        <button className={classes.proceedbtn}>Proceed</button>

                        <h5 style={{textAlign: "center"}}>or</h5>

                        <div style={{
                          
                        }}>
                            <IconButton style={{float: "left",color:"blue"}}><CallIcon /></IconButton>
                            <IconButton  style={{float: "right",color:"white",backgroundColor:"blue"}}><FacebookIcon/></IconButton>
                        </div>
                    </div>
                </form>
    </div>
  );
}

export default SignupForm;
