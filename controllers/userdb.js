import { v4 as uuidv4 } from 'uuid';
let userdata=[]
export const getUsers=(req,res)=>{
    res.send(userdata);
}
export const CreateUser=(req,res)=>{
    const user=req.body;
    userdata.push({... user,id:uuidv4()});
    res.send(`User with name ${user.firstName} added to DB !...`);
    // console.log('Post reached');
    // console.log(req.body);
    // const userID=;
    // const userwithId={... user,id:uuidv4()}
}
export const getUser=(req,res)=>{
    const {id}=req.params;
    const founduser=userdata.find((user)=> user.id===id); 
    res.send(founduser);
}
export const deleteUser=(req,res)=>{
    const {id}=req.params;
    userdata=userdata.filter((user)=>user.id!==id);
    res.send(`user with name ${id} is deleted from DB...!`)
}
export const updateUser=(req,res)=>{
    const {id}=req.params;
    const {firstName,lastName,age}=req.body;
    const user=userdata.find((user)=> user.id===id);
    if(firstName) user.firstName=firstName;
    if(lastName) user.lastName=lastName;
    if(age) user.age=age;
    res.send(`user with id ${id} got updated`);
}
