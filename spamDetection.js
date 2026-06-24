function checkSpam() {

    let text = document.getElementById("message").value.toLowerCase();

    let spamWords = [
        "win",
        "free",
        "prize",
        "money",
        "offer",
        "lottery",
        "urgent",
        "click here",
        "congratulations"
    ];

    let spamFound = false;

    for(let i = 0; i < spamWords.length; i++) {
        if(text.includes(spamWords[i])) {
            spamFound = true;
            break;
        }
    }

    let result = document.getElementById("result");

    if(spamFound) {
        result.innerHTML = "⚠️ Spam Message Detected";
        result.style.color = "red";
    } else {
        result.innerHTML = "✅ Not Spam";
        result.style.color = "green";
    }
}
