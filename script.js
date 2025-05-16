 function validOrder() {
    var quantity = document.getElementById("Qnt");
    var size = document.getElementsByClassName("s-check");
    let sum = 0;
    let sizeCheck = "";
  
    for (let i = 0; i < size.length; i++) {
      if (size[i].checked) {
        sizeCheck += size[i].value + " ";
        sum += 1;
      }
    }
  
    if (!confirm("Your weight selected is: " + sizeCheck + "\nAre you sure about this information?")) {
      return false;
    } else if (isNaN(quantity.value) || quantity.value < sum) {
      document.getElementById("QntE").innerHTML=`<p class="hide">edit your quantity order</p>`;
      return false;
    } else {
      return true;
    }
  }
  document.addEventListener('DOMContentLoaded',function(){
  const cmdNumber=localStorage.getItem('cmdnumber');
  if(cmdNumber)
{
  const products=[
   {name:"Phosphate creatine",price:"15$",image:"image/crea 1.png"},
   {name:"Platinum creatine",price:"25$",image:"image/crea 2.png"},
   {name:"Optimum creatine",price:"28$",image:"image/crea 3.png"},
   {name:"Megap creatine",price:"35$",image:"image/crea 4.png"},
   {name:"Cell tech creatine",price:"30$",image:"image/crea 5.png"},
   {name:"Mutant Mass",price:"14$",image:"image/mass 1.png"},
   {name:"hyperbolic Mass",price:"31$",image:"image/mass 2.png"},
   {name:"Mass tech",price:"15$",image:"image/mass 3.png"},
   {name:"Serious Mass",price:"14$",image:"image/mass 4.png"},
   {name:"bpi iso Mass",price:"19$",image:"image/mass 5.png"},
   {name:"Compat powder",price:"60$",image:"image/pro 1.png"},
   {name:"ON whey",price:"28$",image:"image/pro 2.png"},
   {name:"Nitro tech power",price:"29$",image:"image/pro 3.png"},
   {name:"Gold standard casein",price:"15$",image:"image/prot4.png"},
   {name:"Gold standard whey",price:"30$",image:"image/pro 5.png"},
   {name:"Megape BCA",price:"70$",image:"image/pre 1.png"},
   {name:"Rhino pre-train",price:"25$",image:"image/pre 2.png"},
   {name:"Andarine global",price:"35$",image:"image/prework3.png"},
   {name:"OPS MTN magnum",price:"20$",image:"image/pre 4.png"},
   {name:"X-treme energy",price:"17$",image:"image/pre 5.png"}
]
  const product = products[cmdNumber -1];
    document.getElementById('image').innerHTML=` <img src="${product.image}" class="img"> `;
    document.getElementById('name').innerHTML=` <input name="Oname"  class="readonly" type="text" value="${ product.name}" readonly> `;
    document.getElementById('price').innerHTML=` <input name="price" class="readonly" type="text" value="${ product.price}" readonly> ` ;
}
})
function ValidationInfo(){
  var email= document.getElementById("email");
  var pass= document.getElementById("pass");
  var cpass= document.getElementById("cpass");
  var fname= document.getElementById("fname");
  var lname= document.getElementById("lname");
  var wilaya= document.getElementById("wila");
  var phone= document.getElementById("phone");
  var addres= document.getElementById("addres");
  var age= document.getElementById("age");
  const sex=document.getElementsByClassName("s");
  sexCheck=null;
  for(let i=0 ; i<sex.length;i++){
    if(sex[i].checked)
     {sexCheck=sex[i].value;
      break
      }
     
  }
  if(fname.value=="" )
  { document.getElementById("names").innerHTML=`<p class="hide">enter your first name</p>`;
  return false;}
  else if(lname.value=="" )
  { document.getElementById("names").innerHTML=`<p class="hide">enter your last name</p>`;
    return false;}
  else if(isNaN(age.value) || age.value<17 || age.value>100)
  { document.getElementById("ageE").innerHTML=`<p class="hide">edit your age</p>`;
    return false;}
  else if(isNaN(phone.value) || phone.value.length <9 || phone.value.length >10)
  { document.getElementById("phoneE").innerHTML=`<p class="hide">edit your phone</p>`;
  return false;}
  else if(email.value=="" )
  { document.getElementById("emailE").innerHTML=`<p class="hide">enter your email</p>`;
  return false;
  }
  else if(addres.value=="" )
  { document.getElementById("addE").innerHTML=`<p class="hide">enter your addres</p>`;
  return false;}
  else if(pass.value=="" || pass.value.length <8)
  { document.getElementById("passE").innerHTML=`<p class="hide">enter your password</p>`;
  return false;}
  else if(cpass.value=="" ||  cpass.value != pass.value  )
  { document.getElementById("cpassE").innerHTML=`<p class="hide">edit your confirm password</p>`;
  return false;}
  else if(!confirm("your gender is :"+sexCheck+"\n"+"are you sure for this information"))
  {return false;}
  else if(!confirm("your wilaya is: "+wilaya.value +"\n"+ " are sure about this information"))
    { 
      return false;
    }
  else
  { return true; }
  
  }
  function Validation(){
    var email= document.getElementById("email");
    var pass= document.getElementById("pass");
    if(email.value=="" && pass.value=="")
    { document.getElementById("emailE").innerHTML=`<p class="hide">enter your email</p>`;
      document.getElementById("passE").innerHTML=`<p class="hide">enter your password</p>`
      return false;}
    else if(email.value=="" )
    { document.getElementById("emailE").innerHTML=`<p class="hide">enter your email</p>`;
    return false;}
    else if(pass.value=="" )
    { document.getElementById("passE").innerHTML=`<p class="hide">enter your password</p>`;
    return false;}
    else
    { return true; }
    
    }
     function command(cmd){
         localStorage.setItem('cmdnumber',cmd);
         window.location.href='commande.html'
     }
     function closebar(){
      const bar=document.querySelector('.bar')
      bar.style.display='none'
       }
      function showbar(){
      const bar=document.querySelector('.bar')
      bar.style.display='flex'
     }
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     