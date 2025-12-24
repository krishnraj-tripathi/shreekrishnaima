const prices = {
  views: 49,
  followers: 199,
  likes: 99,
  comments: 149,
  story: 39
};

const serviceSelect = document.getElementById("service");
const priceSpan = document.getElementById("price");
const usernameInput = document.getElementById("username");

serviceSelect.addEventListener("change", function () {
  const service = this.value;
  priceSpan.innerText = prices[service] || 0;
});

function verify() {
  const service = serviceSelect.value;
  const username = usernameInput.value.trim();

  if (service === "") {
    alert("Please select a service");
    return;
  }

  if (username === "") {
    alert("Please enter Instagram username or reel link");
    return;
  }

  alert("Order verified successfully!\nWe will contact you soon.");
}
