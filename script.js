
const button = document.getElementById("changeButton");
const version = document.getElementById("version");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    version.textContent = "Bạn đã chạy JavaScript thành công!";
    message.textContent = "Website đang hoạt động tốt.";
});
