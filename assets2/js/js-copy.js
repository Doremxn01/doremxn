document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("fa-clone")) {
    const input = e.target.parentElement.parentElement.querySelector("input");
    setTimeout(function () {
      input.select();
      document.execCommand("copy");
    }, 0);
    e.target.parentElement.classList.add("active");
    setTimeout(function () {
      e.target.parentElement.classList.remove("active");
    }, 2500);
  }
});
