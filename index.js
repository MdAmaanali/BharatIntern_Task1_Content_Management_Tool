document.addEventListener("DOMContentLoaded", () => {
    const blogForm = document.getElementById("blog-form");

    blogForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;
        const imageFile = document.getElementById("image").files[0];
        const videoFile = document.getElementById("video").files[0];

        // You can handle saving the data and files to the server here

        console.log("Title:", title);
        console.log("Content:", content);
        console.log("Image File:", imageFile);
        console.log("Video File:", videoFile);

        // Clear the form after submission
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
        document.getElementById("image").value = "";
        document.getElementById("video").value = "";
    });
});
const imageBoxes = document.querySelectorAll('.image-box');
let draggedImage = null;

imageBoxes.forEach(box => {
    box.addEventListener('dragstart', (e) => {
        draggedImage = e.target;
        e.target.style.opacity = '0.5';
    });

    box.addEventListener('dragend', () => {
        draggedImage.style.opacity = '1';
        draggedImage = null;
    });
});

imageBoxes.forEach(box => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    box.addEventListener('dragenter', (e) => {
        e.preventDefault();
        if (draggedImage) {
            box.style.border = '2px dashed #007bff';
        }
    });

    box.addEventListener('dragleave', () => {
        box.style.border = '2px dashed #ccc';
    });

    box.addEventListener('drop', () => {
        if (draggedImage) {
            box.style.border = '2px dashed #ccc';
            box.appendChild(draggedImage);
        }
    });
});
