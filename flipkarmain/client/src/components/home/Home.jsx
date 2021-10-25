import {Box,makeStyles} from '@material-ui/core';

import Banner from "./Banner";
import NaveBar from "./NaveBar";
import Slide from './slide';
import MidSection from './midSection';
const useStyle=makeStyles({
    component:{
        padding:10,
        background:"F2F2F2"
    },
    rightimg:{
        background:"#ffffff",
        padding:5,
        margin:"12px 0 0 10px",
        width:"17%"

    }
})
const Home =()=>{
    const classes=useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/54adab5ef798bacc.jpg?q=70';
    return(
        
        <div>
        <NaveBar />
        <Box className={classes.component}>
        <Banner/>
        <Box style={{display:"flex"}}>
            <Box style={{width:'80%'}}>
                <Slide timer={true} title="Deals of the Day" />
            </Box>
            <Box className={classes.rightimg}>
                <img src={adURL} style={{width:230, height:"auto"}}/>
            </Box>
        </Box>
        <MidSection />
        <Slide 
            timer={false}
            title="Discount for You"
        />
         <Slide 
            timer={false}
            title="Suggested Items"
        />
         <Slide 
            timer={false}
            title="Top selection"
        />
         <Slide 
            timer={false}
            title="Recommended Items"
        />
         <Slide 
            timer={false}
            title="Best salers"
        />
        </Box>
        
        </div>
    )
}
export default Home;