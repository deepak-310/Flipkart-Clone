import { makeStyles,InputBase} from "@material-ui/core";
import { alpha} from '@material-ui/core/styles';
import {Search} from '@material-ui/icons';
const usestyle=makeStyles((theme)=>({
    Search1: {
        borderRadius:2,
        backgroundColor: 'white',
        marginLeft: 10,
        width: '38%',
        display:'flex',
        color:"black"
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        color:"blue"
      },
      inputRoot: {
        fontSize:14,
        width:'100%'
      },
      inputInput: {
        paddingLeft: 20,
      },
   
}))
const SearchBar = () => {
    const classes = usestyle();
    return(
       <div className={classes.Search1}>
           
           <InputBase
              placeholder="Search for products,Brands and More"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
            < Search/>
            </div>    
       </div>
       
    )
    
}

export default SearchBar;