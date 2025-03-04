
function validateForm(){


    const nameval = document.getElementById("name").value;
    const emailval = document.getElementById("email").value;
    const firstTime = document.querySelector('input[name="firstTime"]:checked') ? document.querySelector('input[name="firstTime"]:checked').value : '';
    const easyNav = document.querySelector('input[name="easyNav"]:checked') ? document.querySelector('input[name="easyNav"]:checked').value : '';
    const suggestionsval = document.getElementById("suggestions").value;
    const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : '';
    const recommend = document.querySelector('input[name="recommend"]:checked') ? document.querySelector('input[name="recommend"]:checked').value : '';
    const updates = document.getElementById("updates").value;
    const requests = document.getElementById("requests").value;



    const name = document.getElementById("name");
    const email = document.getElementById("email");

    const suggestions = document.getElementById("suggestions");
    const easyNavYes = document.getElementById("yesNav");
    const easyNavNo = document.getElementById("noNav");


    const validMail = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    const nameError = document.getElementById("nameError");
    const mailError = document.getElementById("mailError");
    const emptySuggestion = document.getElementById("emptySuggestion");


    nameError.innerHTML = "";
    mailError.innerHTML = "";
    emptySuggestion.innerHTML = "";



    if (name.value === "" || name.value == null) {
        nameError.innerHTML = "Please fill this in!";
        name.classList.add("error-input");
        nameError.classList.add("error-message");
        name.scrollIntoView({ behavior: "smooth", block: "start" });
        return false;
    } else {
        nameError.innerHTML = ""; 
        name.classList.remove("error-input");
        nameError.classList.remove("error-message");
    }
    
    if (!validMail.test(email.value)){
        mailError.innerHTML = "Invalid Email format!"; 
        email.classList.add("error-input");
        mailError.classList.add("error-message");
        email.scrollIntoView({ behavior: "smooth", block: "start" });
        return false;

    } else {
        mailError.innerHTML = "";
        email.classList.remove("error-input");
        mailError.classList.remove("error-message");
    }

    if (easyNavNo.checked && suggestions.value.trim() === ""){
        emptySuggestion.innerHTML = "Please provide suggestions if you found the website not easy to navigate";
        emptySuggestion.classList.add("error-message");
        suggestions.classList.add("error-input"); 
        suggestions.scrollIntoView({ behavior: "smooth", block: "start" }); 
        return false;
    } else {
        emptySuggestion.innerHTML = ""; 
        emptySuggestion.classList.remove("error-message");
        suggestions.classList.remove("error-input");
    }



    window.open(`preview.html?name=${encodeURIComponent(nameval)}&email=${encodeURIComponent(emailval)}&firstTime=${encodeURIComponent(firstTime)}&easyNav=${encodeURIComponent(easyNav)}&suggestions=${encodeURIComponent(suggestionsval)}&rating=${encodeURIComponent(rating)}&recommend=${encodeURIComponent(recommend)}&updates=${encodeURIComponent(updates)}&requests=${encodeURIComponent(requests)}`, '_blank');
    
   
        
}

function goHome(){
    window.location.href = "home.html";
}




  