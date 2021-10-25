import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "../../constant/data";
import { Box, Button, Divider, makeStyles, Typography } from "@material-ui/core";
import Countdown from 'react-countdown';

const userStyle=makeStyles({
    component:{
        marginTop:12,
        background:"#fffff"

    },
    deal:{
        padding:"15px 20px",
        display:"flex"


    },
    image:{
        height:150
    },
    dealtext:{
        fontSize:22,
        fontWeight:600,
        lineHeight:"32px",
        marginRight:25
    },
    timer:{
        color:'#7f7f7f',
        display:"flex",
        alignItems:"center"
    },
    Button:{
        marginLeft:"auto",
        background:"#2874f0",
        borderRadius:2,
        fontSize:12
    },
    text:{
        fontSize:12,
        marginTop:5
    },
    wapper:{
        padding:'35px 13px'
    }
})
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  

 

const Slide =({timer,title})=>{
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const classes=userStyle();
    const renderer =({ hours, minutes, seconds})=>{
        return <span className={classes.timer}> {hours} : {minutes} : {seconds} Left</span>;
    }
    return(
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealtext}>{title}</Typography>
                {
                    timer &&
                    <> 
                    <img src={timerURL} style={{width:24}}/>
                    <Countdown date={Date.now() + 5.04e+7} renderer={renderer } />
                    <Button variant="contained" color="primary" className={classes.Button}>View all</Button>
                </>
                }
            </Box>
            <Divider/>
            <Carousel 
            responsive={responsive}
            infinite={true}
            draggable={false}
            swipeable={false}
            centerMode={true}
            autoPlay={true}
            autoPlaySpeed={10000}
            keyBoardControl={true}
            showDots={false}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet","mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
                {
                    products.map(product=>(

                        <Box textAlign="center" className={classes.wapper}>
                        <img src={product.url} className={classes.image}/> 
                        <Typography className={classes.text} style={{fontWeight:600,color:"#212121"}}>{product.title.shortTitle}</Typography>
                        <Typography className={classes.text} style={{color:"green"}}>{product.discount}</Typography>
                        <Typography className={classes.text} style={{color:"#212121",opacity:.6}}>{product.tagline}</Typography>
                        </Box>

                    ))
                }

            </Carousel>
        </Box>
    )
}
export default Slide;