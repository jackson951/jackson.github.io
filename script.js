const form=document.querySelector("form");

const fullname=document.getElementById("name");
const email=document.getElementById("email");
const subject=document.getElementById("subject");
const message=document.getElementById("message");
//From : "jacksonkhuto591@gmail.com",(original)

function sendEmail(){

  const bodyMessage=`Full name: ${fullname.value}<br> Email: ${email.value}<br> Message: ${message.value}<br>`;
  Email.send({
    SecureToken : "e1ec463a-dccc-4b15-bc1d-70818f3f807e ",
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
   form.reset();//line to be changed
});


