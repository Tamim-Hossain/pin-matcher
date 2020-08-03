document.getElementById("generate-pin-btn").addEventListener("click", function () {
    const randomPin = Math.round(1000 + Math.random() * 9999);
    document.getElementById("generateOutput").value = randomPin;
});
