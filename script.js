//your JS code here. If required.
// Get dropdown
const select = document.getElementById("colorSelect");

// Get button
const btn = document.querySelector('input[type="button"]');

// Remove selected option
btn.addEventListener("click", function () {
  const selectedIndex = select.selectedIndex;

  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
});