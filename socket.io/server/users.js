 const users=[]

 const addusers=(id,name,room)=>{
      name=name.trim().toLowerCase();
      room=room.trim().toLowerCase();

     const existingUser=users.find((user)=>user.room===room && user.name===name)

   
     if(existingUser){
         
         return{error:"User or Room Already Exists"}
       
     }
     else{
      
         user={id,name,room}
         users.push(user)
         console.log(users)
         return user;
     }
 }

 const removeuser=(id)=>{
     const index=users.findIndex((user)=>user.id===id)

     if(index!==-1){
         return users.splice(index,1)[0]
     }
 }
 const getUser=(id)=>{
     
    
   const user=users.find((user)=>user.id===id)
   if(user){
       return user
   }

}

 const getUsersinroom=(room)=>{users.filter((user)=>user.room===room)}

 module.exports={addusers,removeuser,getUser,getUsersinroom};