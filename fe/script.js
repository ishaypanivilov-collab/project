const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault(); 

 
    const username = document.querySelector('[id="text name"]').value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const subject = document.querySelector('[id="topic problem"]').value;
    const message = document.querySelector("textarea").value; 

    // לוגיקת בדיקות (Validation)
    if (username.length < 5) {
        alert("שם מלא חייב להיות לפחות 5 תווים");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("כתובת אימייל לא חוקית");
        return;
    }

    if (phone.length > 0 && phone.length < 10) {
        alert("טלפון חייב להכיל לפחות 10 ספרות");
        return;
    }

    if (subject.length < 5) {
        alert("נושא ההודעה חייב להיות לפחות 5 תווים");
        return;
    }

    if (message.length < 10) {
        alert("תוכן ההודעה חייב להיות לפחות 10 תווים");
        return;
    }

    // הדפסה לקונסול במידה והכל תקין
    console.log("--- Form Submitted Successfully ---");
    console.log("Name:", username);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Subject:", subject);
    console.log("Message:", message);

    alert("הודעה נשלחה בהצלחה!");
});