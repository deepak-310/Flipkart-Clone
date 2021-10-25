
import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../constant/data';
import { makeStyles } from '@material-ui/core';

const useStyle= makeStyles({
    image:{
        width:"100%",
        height:280
    },
    carousel:{
        marginTop:10

    }
})
const Banner =()=>{
    const  classes=useStyle();
    return(
        <Carousel 
        autoPlay={true}
        animation='slide'
        navButtonsAlwaysVisible={true}
        indicators={false}  
        cycleNavigation={true}
        navButtonsProps={{
            style:{
                background:"white",
                color:"black",
                borderRadius:0,
                margin:0

            }
        }}
        className={classes.carousel}
        
        >
        {
            bannerData.map( image => (
            <img src={ image}  className={classes.image}/>
             ))
        }
        </Carousel>

    )
}
export default Banner;