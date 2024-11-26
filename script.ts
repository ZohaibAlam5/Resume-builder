// Handle Profile Picture Upload
const uploadImage = document.getElementById("upload-image") as HTMLInputElement;
const profileImage = document.getElementById("profile-image") as HTMLImageElement;

uploadImage.addEventListener("change", (event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            profileImage.src = reader.result as string;
        };
        reader.readAsDataURL(file);
    }
});

// Download Resume as PDF
document.getElementById("download-pdf")?.addEventListener("click", () => {
    import("jspdf").then((jsPDF) => {
        const pdf = new jsPDF.jsPDF({
            orientation: "portrait",
            unit: "pt",
            format: "a4",
        });

        pdf.html(document.getElementById("resume-container") as HTMLElement, {
            callback: (doc) => {
                doc.save("resume.pdf");
            },
        });
    });
});
