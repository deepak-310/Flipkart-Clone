import {Box,Button,makeStyles, Typography,Badge} from '@material-ui/core'; 
import {Link} from 'react-router-dom';
import {ShoppingCart} from '@material-ui/icons';
import { useState } from 'react';

import LoginDailog from '../login/Login.jsx'

const useStyle = makeStyles({
    login:{
        background:"#ffffff",
        color:"#2874f0",
        textTransform:"none",
        fontWeight:600,
        borderRadius:2,
        padding: '5px 40px',
        boxShadow:"nono"
    },
    Wrapper:{
        margin:"0 7% 0 auto",
        display:"flex",
        ' & > *':{
            marginRight:50,
            alignItems:"center",
            TextDecoder:"None",
            color:"#fff"
        }
    },
    container:{
        display:"flex"
    }

})
const HeaderButton =() =>{
    const classes = useStyle();
    const [ open,setOpen] = useState(false);
    const openLoginDailog=()=>{
        setOpen(true);
    }
    return(
        <Box className={classes.Wrapper}>
            <Button variant='contained' onClick={()=>openLoginDailog()} className={classes.login} style={{color:"#2874f0"}}>Login</Button>
            <Link><Typography style={{marginTop:5,textDecoration:"none"}}>More</Typography></Link>
            <Link to="/cart" className={classes.container}>
                <Badge badgeContent={2} color="secondary">
                    <ShoppingCart/>
                </Badge>
                <Typography style={{marginLeft:10,textDecoration:'none'}}>Cart</Typography>
            </Link>
            <LoginDailog open={open} setOpen={setOpen}/>

        </Box>

    )

}
export default HeaderButton;