const popup = document.querySelector(".add-popup")
const addbtn =  document.querySelector(".add-note")
const cancelbtn = document.querySelector(".cancel-btn")

addbtn.addEventListener("click", () => {
    popup.classlist.add("show");
});

cancelbtn.addEventListener("click", () => {
    popup.classlist.remove("show")
})
