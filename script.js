const form = document.querySelector(".form");
const input = document.querySelector(".input");
const copyBtn = document.querySelector(".copyBtn");

const copyText = (e) => {
  e.preventDefault();
  input.select();
  input.setSelectionRange(0, input.value.length);
  document.execCommand("copy");
  copyBtn.textContent = "Copied!!!!";
  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 800);
};

copyBtn.addEventListener("click", copyText);
