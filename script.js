const form=document.querySelector("form");

const fullname=document.getElementById("name");
const email=document.getElementById("email");
const subject=document.getElementById("subject");
const message=document.getElementById("message");

function sendEmail(){

  const bodyMessage=`Full name: ${fullname.value}<br> Email: ${email.value}<br> Message: ${message.value}<br>`;
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "jacksonkhuto591@gmail.com",
    Password : "684959A149D67F6B9A4BA9CF53BB95CE3101",
    To : "jacksonkhuto591@gmail.com",
    From : "jacksonkhuto591@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if(message=="OK"){
      Swal.fire({
        title: "Success!",
        text: "Message Sent Succesfully!",
        icon: "success"
      });
    }
  }
);
  
}

form.addEventListener("submit",(e)=>{
   e.preventDefault();

   sendEmail();
});


