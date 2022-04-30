import React, { useEffect,useState } from "react"
import "./cardstyle.css"
// import small from "./smallcard"
import SmallCard from "./smallcard"

import img1 from "./bachat_real_estate-1.jpg"
import img2 from "./bachat_real_estate-2.jpg"
import img3 from "./bachat_real_estate-3.jpg"
import img4 from "./bachat_real_estate-4.jpg"
import img5 from "./bachat_real_estate-5.jpg"
import img6 from "./bachat_real_estate-6.jpg"
import img7 from "./bachat_real_estate-7.jpg"
import img8 from "./bachat_real_estate-8.jpg"
import img9 from "./stock/bachat_stock-1.jpg"
import img10 from "./stock/bachat_stock-2.jpg"
import img11 from "./stock/bachat_stock-3.jpg"
import img12 from "./stock/bachat_stock-4.jpg"
import img13 from "./stock/bachat_stock-5.jpg"
import img14 from "./stock/bachat_stock-6.jpg"
import img15 from "./stock/bachat_stock-7.jpg"
import img16 from "./stock/bachat_stock-8.jpg"
import img17 from "./stock/bachat_stock-9.jpg"
import img18 from "./stock/bachat_stock-10.jpg"
import img19 from "./stock/bachat_stock-11.jpg"
import img20 from "./stock/bachat_stock-12.jpg"
import img21 from "./stock/bachat_stock-13.jpg"
import img22 from "./stock/bachat_stock-14.jpg"
import img23 from "./stock/bachat_stock-15.jpg"
import img24 from "./stock/bachat_stock-16.jpg"
import img25 from "./stock/bachat_stock-17.jpg"
import img26 from "./stock/bachat_stock-18.jpg"
import img27 from "./stock/bachat_stock-19.jpg"


import i4 from "./CryptoCurrency_1.jpg"
import i5 from "./CryptoCurrency_2.jpg"
import i6 from "./CryptoCurrency_3.jpg"
import i7 from "./CryptoCurrency_4.jpg"
import i8 from "./CryptoCurrency_5.jpg"
import i9 from "./CryptoCurrency_6.jpg"
import i10 from "./CryptoCurrency_7.jpg"
import i11 from "./CryptoCurrency_8.jpg"

function Page4(){


    const [main,setmain]=useState("Stock")
    const [findex,setfindex]=useState(3)
    const [sindex,setsindex]=useState(0)
    const [tindex,settindex]=useState(1)
    const [frindex,setfrindex]=useState(2)
    
    const [arr,setarr]=useState(["Real Estate","Cryptocurrency","Coming Soon"])
    
    const [i,seti]=useState(0)
    function Change(event,val){
        var i=arr.indexOf(val)
        arr[i]=main
        if(main==="Real Estate"){
            setfindex(i)
        }
        else if(main==="Stock"){
            setsindex(i)
        }
        else if(main==="Cryptocurrency"){
            settindex(i)
        }
        else if(main==="Coming Soon"){
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
                  {/* {  each==="Real Estate"?t=findex:each==="Stock"?t=sindex:each==="Cryptocurrency"?t=tindex:each==="Coming Soon"?t=frindex:null} */}
                 
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
        {main==="Real Estate"?<div className="maincard a">
            
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
    
    
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={img1} alt="Real Estate slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img2} alt="Stock slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img3} alt="Cryptocurrency slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img4} alt="Fourth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img5} alt="Fifth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img6} alt="Sixth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img7} alt="Seventh slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img8} alt="Eighth slide"/>
    </div>
    
    
   
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>:null}
        {main==="Stock"?<div className="maincard a">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="9" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="12" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="13"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="14"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="15" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="16"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="17"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="18"></li>
  </ol>
  <div class="carousel-inner">
    
    <div class="carousel-item active">
      <img class="d-block w-100" src={img9} alt="Real Estate slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img10} alt="Stock slide"/>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src={img11} alt="Fourth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img12} alt="fifth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img13} alt="Sixth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img14} alt="seventh slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img15} alt="eighth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img16} alt="ninth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img17} alt="tenth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img18} alt="eleventh slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img19} alt="twelfth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img20} alt="Thirteenth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img21} alt="fourteenth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img22} alt="fifteenth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img23} alt="Sixteenth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img24} alt="seventh slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img25} alt="eighteenth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img26} alt="ninteenth slide"/>
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>:null}
        {main==="Cryptocurrency"?<div className="maincard a">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
    
    
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={i4} alt="Real Estate slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={i5} alt="Stock slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={i6} alt="Cryptocurrency slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={i7} alt="Fourth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={i8} alt="Fifth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={i9} alt="Sixth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={i10} alt="Seventh slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={i11} alt="Eighth slide"/>
    </div>
    
    
   
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>:null}
      {main==="Coming Soon"?<div className="maincard a">
            Coming Soon
        </div>:null}
        {/* {main!=="Real Estate"?<SmallCard main={main}  Change={(event)=>Change(event,"Real Estate",findex)}  val="Real Estate"/>:null}
        {main!=="Stock"?<SmallCard main={main} Change={(event)=>Change(event,"Stock",sindex)} val="Stock"/>:null}
        {main!=="Cryptocurrency"?<SmallCard main={main} Change={(event)=>Change(event,"Cryptocurrency",tindex)} val="Cryptocurrency"/>:null}
        {main!=="Coming Soon"?<SmallCard main={main} Change={(event)=>Change(event,"Coming Soon",frindex)} val="Fourth"/>:null} */}
      {cards()}
        </div>
    )


    
}

export default Page4