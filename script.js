var _a;
// Handle Profile Picture Upload
var uploadImage = document.getElementById("upload-image");
var profileImage = document.getElementById("profile-image");
uploadImage.addEventListener("change", function (event) {
    var _a;
    var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            profileImage.src = reader_1.result;
        };
        reader_1.readAsDataURL(file);
    }
});
// Download Resume as PDF
(_a = document.getElementById("download-pdf")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    Promise.resolve().then(function () { return require("jspdf"); }).then(function (jsPDF) {
        var pdf = new jsPDF.jsPDF({
            orientation: "portrait",
            unit: "pt",
            format: "a4",
        });
        pdf.html(document.getElementById("resume-container"), {
            callback: function (doc) {
                doc.save("resume.pdf");
            },
        });
    });
});
