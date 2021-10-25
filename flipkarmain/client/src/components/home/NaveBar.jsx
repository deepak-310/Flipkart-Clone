import { navData } from "../../constant/data";
import {Box, Typography,makeStyles} from '@material-ui/core';

const useStyle=makeStyles({
    component:{
        display:"flex",
        margin:" 55px 130px 0 130px",
        justifyContent:"space-between"

    },
    contaner:{
        textAlign:"center",
        padding:"12px 5 px",
        margin:"auto",
        width:'100%'
        

    },
    image:{
        width:64,
    },
    text:{
        fontSize:14,
        fontWeight:600,

    }
})

const NaveBar = () =>{
    const classes= useStyle();
    return(
       <Box className={classes.component}>
           {
               navData.map(data =>(
                <Box className={classes.contaner}>
                <img src={data.url} className={classes.image}/>
                <Typography className={classes.text}>{data.text}</Typography>
                </Box>
               ))
           }
           
       </Box>
    )
}
export default NaveBar;