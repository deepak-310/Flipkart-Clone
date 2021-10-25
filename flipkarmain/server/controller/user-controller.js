import User from "../model/userSchema.js";
export const userSignup = async(request,response) =>{
    try{
        const exist = user.findOne({username:request.body.username});
        if(exist){
            return response.status(401).response('user already exist');
        }
        const user = request.body;
        const newUser = new User(user)
        await newUser.save();

        response.status(200).json('user is succesfully registerd');


    }catch(error){
        console.log('Error:',error.message);
    }
}