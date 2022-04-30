import React, { useEffect,useState } from "react"
import "./cardstyle.css"
import SmallCard from "./smallcard"
import { PieChart } from 'react-minimal-pie-chart';
function Homepage(props){

const [main,setmain]=useState("Add Expense")
const [findex,setfindex]=useState(3)
const [sindex,setsindex]=useState(0)
const [tindex,settindex]=useState(1)
const [frindex,setfrindex]=useState(2)

const [arr,setarr]=useState(["Personal Expense","Individual Family Expense","Total Family Expense"])
const [expense,setexpense]=useState({
    food:0,
    travel:0,
    health:0,
    education:0,
    loan:0,
    others:0
})





function OnChange(event){
event.preventDefault()



setexpense((prev)=>{
    return{
        ...prev,
        [event.target.name]:event.target.value
    }
})

}

function totalexpense(){
    var total={
        food:0,
        travel:0,
        health:0,
        education:0,
        loan:0,
        others:0

    }

props.users.map((e)=>{
    total.food=total.food+e.info.expenses.food.val
    total.health=total.health+e.info.expenses.health.val
    total.travel=total.travel+e.info.expenses.travel.val
    total.education=total.education+e.info.expenses.education.val
    total.loan=total.loan+e.info.expenses.loan.val
    total.others=total.others+e.info.expenses.others.val
})


return(
    <div style={{display:"flex"}}>      
    <p>Total</p>
   <PieChart className="my_pie"  
 data={[
   { title: `Food_Rs.${total.food}`, value: Number(total.food), color: '#E38627' },
   { title: 'Travel', value: Number(total.travel), color: '#C13C37' },
   { title: 'Health', value: Number(total.health), color: '#6A2135' },
   { title: 'Education', value: Number(total.education), color: '#005f99' },
   { title: 'loan', value: Number(total.loan), color: '#867ae9' },
   { title: 'others', value: Number(total.others), color: '#1eae98' },
 ]}
/>
<div className="pie_info">
<div className="itemexpense" style={{backgroundColor:"#E38627"}}>
<p  className="total">{`Food: Rs:${total.food}`}</p>
<p className="current_limit">{`Current Limit:${props.users[0].info.expenses.food.limit}`}</p>
</div>
<div className="itemexpense" style={{backgroundColor:"#C13C37"}}>
<p className="total" >{`Travel: Rs:${total.travel}`}</p>
<p className="current_limit">{`Current Limit:${props.users[0].info.expenses.travel.limit}`}</p>
</div>
<div className="itemexpense" style={{backgroundColor:"#6A2135"}}>
<p  className="total">{`Health: Rs:${total.health}`}</p>
<p className="current_limit">{`Current Limit:${props.users[0].info.expenses.health.limit}`}</p>
</div>
<div className="itemexpense" style={{backgroundColor:"#005f99"}}>
<p className="total" >{`Education: Rs:${total.education}`}</p>
<p className="current_limit">{`Current Limit:${props.users[0].info.expenses.education.limit}`}</p>
</div>
<div className="itemexpense" style={{backgroundColor:"#867ae9"}}>
<p className="total" >{`Loan: Rs:${total.loan}`}</p>
<p className="current_limit">{`Current Limit:${props.users[0].info.expenses.loan.limit}`}</p>
</div>
<div className="itemexpense" style={{backgroundColor:"#1eae98"}}>
<p  className="total">{`Others: Rs:${total.others}`}</p>
<p className="current_limit">{`Current Limit:${props.users[0].info.expenses.others.limit}`}</p>
</div>
   

   {/* <p style={{backgroundColor:"#6A2135"}}>{`Health: Rs:${total.health}`}</p>
   <p style={{backgroundColor:"#005f99"}}>{`Education: Rs:${total.education}`}</p>
   <p style={{backgroundColor:"#867ae9"}}>{`loan: Rs:${total.loan}`}</p>
   <p style={{backgroundColor:"#1eae98"}}>{`others: Rs:${total.others}`}</p> */}
</div>
</div>
      )

}

function addExpense(event){
event.preventDefault()

props.socket.emit("addexpense",expense)

setexpense({
    food:0,
    travel:0,
    health:0,
    education:0,
    loan:0,
    others:0
})


}




var a=["food","travel","health","education","loan","others"]


function Pie(){
  
    return(
        <div>
   { props.users.map((e)=>{
     
       if(e.id===props.socket.id){
       return(
     <div style={{display:"flex"}}>      
     <p>{e.info.name}</p>
    <PieChart className="my_pie"  
  data={[
    { title: `Food_Rs.${e.info.expenses.food.val}`, value: Number(e.info.expenses.food.val), color: '#E38627' },
    { title: 'Travel', value: Number(e.info.expenses.travel.val), color: '#C13C37' },
    { title: 'Health', value: Number(e.info.expenses.health.val), color: '#6A2135' },
    { title: 'Education', value: Number(e.info.expenses.education.val), color: '#005f99' },
    { title: 'loan', value: Number(e.info.expenses.loan.val), color: '#867ae9' },
    { title: 'others', value: Number(e.info.expenses.others.val), color: '#1eae98' },
  ]}
/>
<div className="pie_info">

    <p style={{backgroundColor:"#E38627"}}>{`Food: Rs:${e.info.expenses.food.val}`}</p>
    <p style={{backgroundColor:"#C13C37"}}>{`Travel: Rs:${e.info.expenses.travel.val}`}</p>
    <p style={{backgroundColor:"#6A2135"}}>{`Health: Rs:${e.info.expenses.health.val}`}</p>
    <p style={{backgroundColor:"#005f99"}}>{`Education: Rs:${e.info.expenses.education.val}`}</p>
    <p style={{backgroundColor:"#867ae9"}}>{`loan: Rs:${e.info.expenses.loan.val}`}</p>
    <p style={{backgroundColor:"#1eae98"}}>{`others: Rs:${e.info.expenses.others.val}`}</p>
</div>
</div>
       )
       }
    })}
    </div>
    )
}


function AllPie(){

var c=""

props.users.length>4?c="pie_info2_new":c="pie_info2"

    return(
        <div style={{display:"flex"}}>
   { props.users.map((e)=>{
     
    
       return(
     <div style={{display:"flex"}}>
     <div >      
     <p>{e.info.name}</p>
    <PieChart className="pie"  
  data={[
    { title: `Food_Rs.${e.info.expenses.food}`, value: Number(e.info.expenses.food.val), color: '#E38627' },
    { title: 'Travel', value: Number(e.info.expenses.travel.val), color: '#C13C37' },
    { title: 'Health', value: Number(e.info.expenses.health.val), color: '#6A2135' },
    { title: 'Education', value: Number(e.info.expenses.education.val), color: '#005f99' },
    { title: 'loan', value: Number(e.info.expenses.loan.val), color: '#867ae9' },
    { title: 'others', value: Number(e.info.expenses.others.val), color: '#1eae98' },
  ]}
/>
</div>
<div className={c}>
    <p style={{backgroundColor:"#E38627"}}>{`Food: Rs:${e.info.expenses.food.val}`}</p>
    <p style={{backgroundColor:"#C13C37"}}>{`Travel: Rs:${e.info.expenses.travel.val}`}</p>
    <p style={{backgroundColor:"#6A2135"}}>{`Health: Rs:${e.info.expenses.health.val}`}</p>
    <p style={{backgroundColor:"#005f99"}}>{`Education: Rs:${e.info.expenses.education.val}`}</p>
    <p style={{backgroundColor:"#867ae9"}}>{`loan: Rs:${e.info.expenses.loan.val}`}</p>
    <p style={{backgroundColor:"#1eae98"}}>{`others: Rs:${e.info.expenses.others.val}`}</p>
</div>
</div>
       )
       
    })}
    </div>
    )
}

console.log(props.users)


const [i,seti]=useState(0)
function Change(event,val){
    var i=arr.indexOf(val)
    arr[i]=main
    if(main==="Add Expense"){
        setfindex(i)
    }
    else if(main==="Personal Expense"){
        setsindex(i)
    }
    else if(main==="Individual Family Expense"){
        settindex(i)
    }
    else if(main==="Total Family Expense"){
        setfrindex(i)
    }
    event.preventDefault()
    
setmain(val)

}



function cards(){

var t=0;
    return(
        <div>
            {arr.map((each)=>{
         
                return(
              <div>      
              {/* {  each==="Add Expense"?t=findex:each==="Personal Expense"?t=sindex:each==="Individual Family Expense"?t=tindex:each==="Total Family Expense"?t=frindex:null} */}
             
            <SmallCard main={main} i={each} Change={(event)=>Change(event,each)} val={each}/>
                </div>
                )
            })}
            </div>
    )
}

useEffect(()=>{
    if(i>0){
        
        document.querySelector(".a").classList.remove("maincard")
        document.querySelector(".a").classList.add("maincard2")
    }
seti(i+1)
},[main])    



return(
    <div className="container">
    {main==="Add Expense"?<div className="maincard a" style={{overflow:"hidden"}}>
    
        <h3 style={{color:"white"}}>Add Expense</h3>
        <div className="expensediv">
        {/* <input type="number" className="expense_input" name="food" value={expense.food} onChange={(event)=>OnChange(event)} placeholder="food expense"/>
        <input type="number"  className="expense_input" name="travel" value={expense.travel} onChange={(event)=>OnChange(event)} placeholder="travel expense"/>
        <input type="number" className="expense_input" name="health" value={expense.health}  onChange={(event)=>OnChange(event)}  placeholder="health expense"/>
        <input type="number" className="expense_input" name="education" value={expense.education} onChange={(event)=>OnChange(event)}  placeholder="education expense"/>
        <input type="number" className="expense_input" name="loan"  value={expense.loan} onChange={(event)=>OnChange(event)} placeholder="loan expense"/>
        <input type="number" className="expense_input" name="others"  value={expense.others} onChange={(event)=>OnChange(event)}  placeholder="other expenses"/> */}
        <div className="limit_div">
        <div style={{display:"flex",marginBottom:"10px"}}>
            <label for="food" className="expense_label"> Food: </label>
            
            <input type="number" name="food"  className="iadd" value={(expense.food)}  placeholder="in Rs" onChange={(event)=>OnChange(event)} />
        </div>
        <div style={{display:"flex",marginBottom:"10px"}}>
            <label for="travel" className="expense_label">Travel:</label>
            <input type="number" name="travel"  className="iadd" value={(expense.travel)} placeholder="in Rs" onChange={(event)=>OnChange(event)} />
        </div>
        <div style={{display:"flex",marginBottom:"10px"}}>
            <label for="health" className="expense_label">Health:</label>
            <input type="number" name="health"  className="iadd" value={(expense.health)} placeholder="in Rs" onChange={(event)=>OnChange(event)} />
        </div>
        <div style={{display:"flex",marginBottom:"10px"}}>
            <label for="education" className="expense_label">Education:</label>
            <input type="number" name="education" className="iadd" value={(expense.education)} placeholder="in Rs" onChange={(event)=>OnChange(event)} />
        </div>
        <div style={{display:"flex",marginBottom:"10px"}}>
            <label for="loan" className="expense_label">Loan:</label>
            <input type="number" name="loan"  className="iadd" value={(expense.loan)} placeholder="in Rs" onChange={(event)=>OnChange(event)} />
        </div>
        <div style={{display:"flex",marginBottom:"10px"}}>
            <label for="others" className="expense_label">Others:</label>
            <input type="number" name="others"  className="iadd" value={(expense.others)} placeholder="in Rs" onChange={(event)=>OnChange(event)} />
        </div>
        </div>
       
        <button className="add" onClick={(event)=>addExpense(event)}>Add</button>
        </div>
   
    </div>:null}
    {main==="Personal Expense"?<div className="maincard a">
    {Pie()}
    </div>:null}
    {main==="Individual Family Expense"?<div className="maincard a">
      {AllPie()}
    </div>:null}
  {main==="Total Family Expense"?<div className="maincard a">
        {totalexpense()}
    </div>:null}
    {/* {main!=="Add Expense"?<SmallCard main={main}  Change={(event)=>Change(event,"Add Expense",findex)}  val="Add Expense"/>:null}
    {main!=="Personal Expense"?<SmallCard main={main} Change={(event)=>Change(event,"Personal Expense",sindex)} val="Personal Expense"/>:null}
    {main!=="Individual Family Expense"?<SmallCard main={main} Change={(event)=>Change(event,"Individual Family Expense",tindex)} val="Individual Family Expense"/>:null}
    {main!=="Total Family Expense"?<SmallCard main={main} Change={(event)=>Change(event,"Total Family Expense",frindex)} val="Total Family Expense"/>:null} */}
  {cards()}
    </div>
)
    
}

export default Homepage