const UserNameEl=document.getElementById("username");
const passswordEl=document.getElementById("password");
const msg=document.getElementById("msg");
const SignUp=()=>{
    if(UserNameEl.value=="" || passswordEl.value==""){
      msg.innerText="Enter the credentails";
      msg.style.color="red";
      UserNameEl.style.border="2px solid red";
      passswordEl.style.border="2px solid red";
    
    }
   else if(passswordEl.value.length<8){
        passswordEl.style.border="2px solid red";
        msg.innerText="Password Length must be at least 8 Characters";
        msg.style.color="red";
    }
    else {
      
        UserNameEl.innerText=""
        passswordEl.innerText=""
        alert("Signup Successfull")
    }

   
};

const clearThings=()=>{
    UserNameEl.style.border="1px solid #999"
    passswordEl.style.border="1px solid #999"
    msg.innerText="";
}