import "./App.css";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardHeader,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  label,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import SignupForm from "./SignupForm";
import LoginForm from "./loginForm";

const useStylesOne = makeStyles((theme) => ({
  appComponent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  btnGrp: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "flex-end",
  },
  btn: {
    color: "black",
    width: "60%",
    float: "right",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "2rem",
    borderRadius: "1rem",
  },

  radioBtn: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
    gap: "1rem",
  },
  radioBtn1: {
    alignItems: "flex-start",
  },
  radioBtn2: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "2rem",
  },
  otpbtn: {
    border: "0.1rem solid grey",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    backgroundColor: "#30438e",
  },
  resendBtn: {
    border: "0.1rem solid grey",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    backgroundColor: "#ffff",
  },
  proceedbtn: {
    width: "100%",
    border: "0.1rem solid grey",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    outline: "none",
    backgroundColor: "#30438e",
  },
}));

const StylesOne = {
  width: "95%",
  border: "0.1rem solid grey",
  borderRadius: "0.5rem",
  padding: "0.5rem",
  outline: "none",
};

const StylesTwo = {
  width: "90%",
  border: "0.1rem solid grey",
  borderRadius: "0.5rem",
  padding: "0.5rem",
};
const SignupPage = () => {
  const classes = useStylesOne();
  const [value, setValue] = useState();
  const [form, setForm] = useState(<SignupForm />);

  const LoginHandler = () => {
    setForm(<LoginForm />);
  };

  const SignupHandler = () => {
    setForm(<SignupForm />);
    document.getElementById("signup").style.backgroundColor = "white";
  };

  return (
    <div className={classes.appComponent}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <h1>photoshooto</h1>
          <ButtonGroup className={classes.btnGrp}>
            <Button className={classes.btn} id="login" onClick={LoginHandler}>
              Login
            </Button>
            <Button className={classes.btn} id="signup" onClick={SignupHandler}>
              SignUp
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={8} style={{ padding: "1rem" }}>
          <Card className={classes.card}>
            <CardActions
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {form}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignupPage;
