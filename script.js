const submitButton = document.querySelector("button[type='submit']");
const afterSubmitContainer = document.querySelector("#after-submission");
const closeBtn = document.querySelector("#close");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    afterSubmitContainer.style.display = "flex";
    afterSubmitContainer.style.left = 0;
});
closeBtn.addEventListener("click", (e) => {
    afterSubmitContainer.style.display = "none";
    afterSubmitContainer.style.left = "-10000%";
})
//Before
// display: none;
// left: -1000 %;
//After
// display: flex;
// left: 0;