function analyzeSentiment() {

    const text = document
        .getElementById("userInput")
        .value
        .toLowerCase();

    const positiveWords = [
        "good", "great", "excellent",
        "happy", "love", "awesome",
        "fantastic", "amazing", "wonderful",
        "best", "nice"
    ];

    const negativeWords = [
        "bad", "terrible", "awful",
        "sad", "hate", "worst",
        "poor", "angry", "horrible",
        "disappointing", "ugly"
    ];

    let score = 0;

    positiveWords.forEach(word => {
        if (text.includes(word)) {
            score++;
        }
    });

    negativeWords.forEach(word => {
        if (text.includes(word)) {
            score--;
        }
    });

    const result = document.getElementById("result");

    if (score > 0) {
        result.innerHTML =
            "😊 Positive Sentiment";
        result.style.color = "green";
    }
    else if (score < 0) {
        result.innerHTML =
            "😞 Negative Sentiment";
        result.style.color = "red";
    }
    else {
        result.innerHTML =
            "😐 Neutral Sentiment";
        result.style.color = "orange";
    }
}
