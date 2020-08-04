document.getElementById("generate-pin-btn").addEventListener("click", function () {
    const randomPin = Math.round(1000 + (Math.random() * 9999));
    document.getElementById("generateOutput").value = randomPin;
});

document.getElementById("submit").addEventListener("click", function () {
    const generateOutputValue = document.getElementById("generateOutput").value;
    const numberOutputValue = document.getElementById("numberOutput").value;

    if (generateOutputValue == numberOutputValue) {
        document.getElementById("wrong").style.display = "none";
        document.getElementById("correct").style.display = "block";
    } else {
        document.getElementById("correct").style.display = "none";
        document.getElementById("wrong").style.display = "block";
    }
});