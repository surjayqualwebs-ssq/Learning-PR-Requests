const btn = document.getElementById("actionBtn");
const status = document.getElementById("status");

btn.addEventListener("click", () => {
  btn.disabled = true;
  btn.innerText = "Processing...";
  status.innerText = "Please wait...";

  setTimeout(() => {
    btn.disabled = false;
    btn.innerText = "Submit";
    status.innerText = "Done!";
  }, 2000);
});
