function sendMail () {
    let para = {
        Fname : document.getElementById("Fname").value,
        Lname : document.getElementById("Lname").value,
        Email : document.getElementById("email").value,
        Message : document.getElementById("Message").value
    }

    emailjs.send("service_bdvdmgw" ,"template_uwjeybs", para).then(alert("Sent Successfully!"))
}