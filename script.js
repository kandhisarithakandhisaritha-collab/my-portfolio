const qrButton = document.getElementById("qr-button");
const qrBox = document.getElementById("qrcode");
const qrMessage = document.getElementById("qr-message");

qrButton.addEventListener("click", function () {
    const publicURL = window.location.href;

    if (
        window.location.protocol === "file:" ||
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
    ) {
        qrMessage.textContent =
            "First publish your website online, then generate its QR code.";
        return;
    }

    if (typeof QRCode === "undefined") {
        qrMessage.textContent =
            "QR library could not load. Check your internet connection.";
        return;
    }

    qrBox.innerHTML = "";

    new QRCode(qrBox, {
        text: publicURL,
        width: 200,
        height: 200,
        colorDark: "#081120",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    qrMessage.textContent =
        "QR code ready! Scan it with your phone camera.";
});