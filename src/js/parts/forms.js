const files = document.querySelectorAll('#files');
if (files.length) {
    files.forEach(file => {
        const label = file.previousElementSibling;

        file.onchange = function () {
            const fileName = this.files[0]?.name;
            label.innerText = fileName ?? label.dataset.text
        };
    });

}