
const users=[]

function addUser(id,info){
const existingUser=users.find((user)=>user.info.name===info.name && user.info.family===info.family)
const index=users.findIndex((user)=>user.info.name===info.name && user.info.family===info.family)
if(existingUser){
    users[index].id=id
    return existingUser
}
else{
var user={id,info}
users.push(user)
console.log(users)
return user

}

}

function removeUser(id){
    const index=users.findIndex((user)=>user.id===id)

    if(index!==-1){
        return users.splice(index,1)
    }


}


function getfamily(socketid){
    const index=users.findIndex((user)=>user.id===socketid)
    return users[index].info.family
}

function allUsers(){
    return users
}


function addExpense(socketid,expense){
const i=users.findIndex((u)=>u.id===socketid)
console.log(i)

 users[i].info.expenses.food.val= users[i].info.expenses.food.val + Number(expense.food)
 users[i].info.expenses.travel.val= users[i].info.expenses.travel.val + Number(expense.travel)
 users[i].info.expenses.health.val= users[i].info.expenses.health.val + Number(expense.health)
 users[i].info.expenses.education.val= users[i].info.expenses.education.val + Number(expense.education)
 users[i].info.expenses.loan.val= users[i].info.expenses.loan.val+ Number(expense.loan)
 users[i].info.expenses.others.val= users[i].info.expenses.others.val+ Number(expense.others)


console.log(users[i])

}


function getUsers(family){

    var u=[]
    users.map((each)=>{
        if(each.info.family===family){
            u.push(each)
        }
    })

    return u
}



function saveLimit(limits,family){

const us=getUsers(family)

us.map((e)=>{
    limits.food!==0?e.info.expenses.food.limit=Number(limits.food):null
    limits.travel!==0?e.info.expenses.travel.limit=Number(limits.travel):null
    limits.health!==0?e.info.expenses.health.limit=Number(limits.health):null
    limits.education!==0?e.info.expenses.education.limit=Number(limits.education):null
    limits.loan!==0?e.info.expenses.loan.limit=Number(limits.loan):null
    limits.others!==0?e.info.expenses.others.limit=Number(limits.others):null
})

return us

}

module.exports={
    addUser,
    removeUser,
    allUsers,
    addExpense,
    getUsers,
    getfamily,
    saveLimit
    
}