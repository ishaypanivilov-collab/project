const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault(); 

 
    const username = document.querySelector('[id="text name"]').value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const subject = document.querySelector('[id="topic problem"]').value;
    const message = document.querySelector("textarea").value; 

if (username.length<5) {
	alert("שם המשתמש חייב להיות לפחות 5 תווים");
     return;
} else  console.log('username:'+username)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
    alert("כתובת אימייל לא חוקית");
     return;
}
else   console.log('email:'+email)   
if (phone.length < 10) {
        alert("טלפון חייב להכיל לפחות 10 ספרות");
        return;
    } else  console.log('phone number:'+phone)

    if (subject.length < 5) {
        alert("נושא ההודעה חייב להיות לפחות 5 תווים");
       return;
    } else  console.log('subject:'+subject)

    if (message.length < 10) {
        alert("תוכן ההודעה חייב להיות לפחות 10 תווים");
         return;
    } else  console.log('message:'+ message)

    alert("הודעה שולחה בהצלחה!");

    // שליחת הנתונים לשרת (Node.js)
    fetch('http://localhost:3000/submit', {
        method: 'POST', // סוג הבקשה - שליחה
        headers: {
            'Content-Type': 'application/json' // אומר לשרת שהמידע הוא בפורמט JSON
        },
        body: JSON.stringify({ 
            username: username, 
            email: email, 
            phone: phone, 
            subject: subject, 
            message: message 
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("תשובה מהשרת:", data);
    })
    .catch(error => {
        console.error("שגיאה בשליחה:", error);
    });
})