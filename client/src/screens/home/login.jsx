import React, {Fragment} from "react";
import { Avatar, Button, Grid, Typography, Container, Box } from "@material-ui/core";
import { sizing } from '@material-ui/system';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { login } from "../../services/auth";
import { connect } from "../../services/assetDbCall";
import Form from "../../components/form/form";
import InputField from "../../components/form/inputField";
import "../../assets/css/loginstyles.css";
import Logo from "../../assets/images/brand/logo.png"
import Particles from "../../components/loginAnimation"

const useStyles = {
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    color: "#009933",
    backgroundColor: "#fff"
  },
  form: {
    width: "100%",
    justify: "flex-end",
    height: "100%"
  },
  submit: {
    backgroundColor: "#009933",
    color: "white"
  }
};

class Login extends Form {
  state = {
    data: {
      email: "",
      password: ""
    }
  };

  onSubmit = async () => {
    try {
      const { data } = this.state;
      const result = await login(data.email, data.password);
      console.log(result);
      const { orgDatabase } = jwtDecode(result.data);
      const connectData = await connect(orgDatabase);
      if (result.status === 200 && connectData.status === 200) {
        window.location = "/dashboard/";
      }
    } catch (error) {
      return null;
    }
  };

//   render() {
//     return (
//       <React.Fragment>
//         <Container maxWidth="xs">
//           <div className={useStyles.paper}>
//             <div className="login-card-align">
//               <div className="login-lock-icon">
//                 <Avatar className={useStyles.avatar}>
//                   <LockOutlinedIcon />
//                 </Avatar>
//               </div>
//               <Typography className="login-header" component="h1" variant="h5">
//                 Sign in
//               </Typography>
//               <form className={useStyles.form} onSubmit={this.handleSubmit}>
//                 <div className="login-field-style">
//                   <InputField
//                     required
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     autoComplete="email"
//                     autoFocus={true}
//                     onChange={this.handleOnChange}
//                     type="email"
//                   />
//                 </div>
//                 <div className="login-field-style">
//                   <InputField
//                     required
//                     name="password"
//                     label="Password"
//                     type="password"
//                     id="password"
//                     autoComplete="current-password"
//                     onChange={this.handleOnChange}
//                   />
//                 </div>
//                 <div className="login-button-align">
//                   <Button
//                     className="login-button-style"
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                   >
//                     Log In
//                   </Button>
//                 </div>
//                 <Grid container>
//                   <Grid className="forgot-link-style" item>
//                     <Link to={"/forgotpassword"}>Forgot password?</Link>
//                   </Grid>
//                 </Grid>
//               </form>
//             </div>
//           </div>
//         </Container>
//       </React.Fragment>
//     );
//   }
// }

// export default Login;

render() {
  return (
    <Fragment>
    <Grid container spacing={3} direction="row">
      <Grid item xs={12} md={3} lg={3} direction="column">
              <div direction="column" className="login-card-align"> 
              <div direction="column" className="login-logo-styles">
              <img className="login-brand-styles" src= {Logo} />
              </div>
                {/* <div className="login-lock-icon">
                 <Avatar className={useStyles.avatar}>
                   <LockOutlinedIcon />
                 </Avatar>
                </div> */}
                <Grid direction="column" className="login-body-styles">
                <Typography className="login-header" component="h1" variant="h5">
                 Log in to your account 
                </Typography>
              <div className="login-textbox-style">
               <form className={useStyles.form} onSubmit={this.handleSubmit}>
                 <div className="login-field-style">
                   <InputField
                     required
                     id="email"
                     //label="Email Address"
                     name="email"
                     placeholder="email"
                     autoComplete="email"
                     autoFocus={true}
                     onChange={this.handleOnChange}
                     type="email"
                     size="small"
                   />
                 </div>
                 <div className="login-field-style">
                   <InputField
                     required
                     name="password"
                     placeholder="password"
                     //label="Password"
                     type="password"
                     id="password"
                     autoComplete="current-password"
                     onChange={this.handleOnChange}
                     size="small"
                   />
                 </div>
                 <div className="login-button-align">
                <Grid container spacing={3} direction="row"> 
                 <Grid item xs={12} md={6} lg={6} direction="row">
                   <Button
                     className="login-button-style"
                     type="submit"
                     fullWidth
                     variant="contained"
                   >
                     Log In
                   </Button>
                   </Grid>
                   <Grid item xs={12} md={6} lg={6} direction="row" className="forgot-grid">
                   <Link className="forgot-link-style" to={"/forgotpassword"}>Forgot password?</Link>
                   </Grid>
                   </Grid>
                 </div>
               </form>
               </div>
            </Grid>
          </div>
      </Grid>
      <Grid item xs={12} md={9} lg={9} className="login-background" direction="column">   
      <Particles />
     </Grid>
    </Grid>
    </Fragment>

    );
  }
}
export default Login;


