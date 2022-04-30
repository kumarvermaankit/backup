var users=[]



function addUser(socketid,user){

    const u=users.find((e)=>e.socketid===socketid)

    if(!u){
        users.push({socketid,user})
    }

}

function removeUser(socketid){
    users.map((e)=>{
        if(e.socketid===socketid){
            var i=users.indexOf(e);
            users.splice(i,1);
        }
    })
}


function updateUser(socketid,user){
    users.map((e)=>{
        if(e.socketid===socketid){
            e.user=user
            return
        }
    })
}


function getUser(socketid){

    var otherusers=[]
    users.map((e)=>{
if(e.socketid!==socketid){
    otherusers.push(e)
}
    })



    return otherusers
}

function allUsers(){
    return users
}

module.exports={
    addUser,
    removeUser,
    updateUser,
    getUser,
    allUsers
}