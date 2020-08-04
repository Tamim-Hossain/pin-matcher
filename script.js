document.getElementById("generate-pin-btn").addEventListener("click", function () {
    const randomPin = Math.round(1000 + (Math.random() * 9999));
    document.getElementById("generateOutput").value = randomPin;
});

document.getElementById("submit").addEventListener("click", function () {
    const generateOutputValue = document.getElementById("generateOutput").value;
    const numberOutputValue = document.getElementById("numberOutput").value;
    if (generateOutputValue == numberOutputValue) {
        document.getElementById("wrong-alert").style.display = "none";
        document.getElementById("correct-alert").style.display = "block";
    } else {
        document.getElementById("correct-alert").style.display = "none";
        document.getElementById("wrong-alert").style.display = "block";

        const submitCount = parseInt(document.getElementById("submit-count").innerText);
        const submitRemain = document.getElementById("submit-count").innerText = submitCount - 1;
        if (submitRemain <= 0) {
            document.getElementById("submit-count").innerText = 3;
            document.getElementById("submit").disabled = true;
            document.getElementById("correct-alert").style.display = "none";
            document.getElementById("wrong-alert").style.display = "none";
            document.getElementById("limit-alert").style.display = "block";
        }
    }
});