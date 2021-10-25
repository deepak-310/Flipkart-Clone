import { Box, Button, Dialog, DialogContent, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyel=makeStyles({
    component:{
        height:'75vh',
        width:'100vh'
    },
    image:{
        backgroundImage:`url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height:'75vh',
        backgroundRepeat:'no-repeat',
        background:'#2874f0',
        width:'40%',
        backgroundPosition:"center 85%",
        padding: "45px 35px",
        '& > *':{
            color:'#ffffff',
            fontWeight:600
        }
    },
    login:{
        padding:'25px 35px',
        display:'flex',
        flex:1,
        flexDirection:'column',
        '& >*':{
            marginTop:6,
            fontSize:15,
        }

    },
    text:{
        color:"#878787",
        fontSize:10,

    },
    loginbtn:{
        textTransform:'nono',
        background:"#FB641B",
        color:"#ffffff",
        borderRadius:2,

    },
    reqbtn:{
        textTransform:'nono',
        background:"#ffffff",
        color:"#2874f0",
        borderRadius:2,

    },
    createacount:{
        textAlign:'center',
        marginTop:'auto',
        fontSize:12,
        color:'#2874f0',
        fontWeight:600,
        cursor:'pointer'
    }


})
const initialValue={
    login:{
        view:'login',
        heading:'login',
        subHeading:'Get acces to your Orders, Whishlist and Reccomendation'

    },
    signup:{
        view:'signup',
        heading:'Looks Like your new here',
        subHeading:'sign up with your mobail number to get started'

    }
}
const Login=({open,setOpen})=>{
    const [account, setAccount] = useState(initialValue.login);
    const handleClose=()=>{
        setOpen(false);
        setAccount(initialValue.login);
    }
    const classes=useStyel(initialValue.login);

    const toggleAccount =()=>{
        setAccount(initialValue.signup);
    }
    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{display:'flex'}}>
                    <Box className={classes.image}>
                    <Typography variant="h5">{account.heading}</Typography>
                    <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view ==='login'?

                            <Box className={classes.login}>
                                <TextField name="username" label="Enter eamil/Mobail Number"/>
                                <TextField name="Password" label="Enter Password" />
                                <Typography className={classes.text}>By continuing, You agree to flipkart's team of use and privacy policy.</Typography>
                                <Button variant="contained" className={classes.loginbtn}>Login</Button>
                                <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
                                <Button variant='contained' className={classes.reqbtn}>Request OTP</Button>
                                <Typography onClick= {() => toggleAccount()} className={classes.createacount}>New to flipkart? Create an Account</Typography>
                            </Box>:
                            <Box className={classes.login}>
                                <TextField name="firstname" label="Enter First name"/>
                                <TextField name="lastname" label="Enter last name" />
                                <TextField name="username" label="Enter username" />
                                <TextField name="email" label="Enter email" />
                                <TextField name="Password" label="Enter Password" />
                                <TextField name="Phone" label="Enter phone" />

                                <Button variant='contained' className={classes.loginbtn}>Signup</Button>
                            
                            </Box>

                    }

                </Box>
            </DialogContent>
        </Dialog>
       
    )
}
export default Login;