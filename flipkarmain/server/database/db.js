import mongoose from 'mongoose';


const Connection= async(username,password)=>{
    const URL = `mongodb+srv://${username}:${password}@ecommerceweb.sww1x.mongodb.net/FLIPKART?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true});
        console.log("database connected succesully")
    } catch(error){
        console.log('Error: ',error.message);
    }
     
}
export default Connection;