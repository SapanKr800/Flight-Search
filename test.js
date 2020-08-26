
     

function templete(data){
  const From = document.getElementById("orign").value;
  const To = document.getElementById("destination").value;
  const DepartDate = document.getElementById("DepartDate").value;
  const ReturnDate = document.getElementById("ReturnDate").value;
  var result="";
  
  
for(i=0;i<data.length;i++){
  if((data[i].From== From) && (data[i].To==To ) && (DepartDate !== "") && (ReturnDate == "")){
   
  result +=`
  
<div class="details">
<div> <p>${data[i].Company} </p></div>
<div> <p>${data[i].Depart}</p><p> ${data[i].From}</p> </div>
<div> <p>${data[i].Arrive}</p><p> ${data[i].To}</p> </div>

<div><p>${data[i].Duration} </p></div>
<div><p>${data[i].Prices}</p><p>Book</p></div>
</div>

  
  `;
  }
    /*************************** */
 else if((data[i].From== To) && (data[i].To==From ) && (DepartDate !== "")&& (ReturnDate !== "")){
  
 
  result +=`
  
<div class="details">




<div> <p>${data[i].Company} </p></div>
<div> <p>${data[i].Depart}</p><p> ${data[i].From}</p> </div>
<div> <p>${data[i].Arrive}</p><p> ${data[i].To}</p> </div>


<div><p>${data[i].Duration} </p></div>
<div><p>${data[i].Prices}</p><p>Book</p></div>
</div>



  
  `;

}


      }
     
      document.getElementById("app").innerHTML = result;
}


 


function flight(){

fetch("data.json")
.then(res => res.json())
.then(data => {
 
  const flightBlock= templete(data);
 
 })
.catch(console=> console.log('Error'));


}


