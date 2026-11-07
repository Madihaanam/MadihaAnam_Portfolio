// Find the menu button and the navigation links on the page.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

// Run this code only if both elements are present.
if (menuButton && navigation) {

  // Open or close the navigation when the menu button is clicked.
  menuButton.addEventListener("click", function () {
    const menuIsOpen = navigation.classList.toggle("open");

    // Update accessibility information for screen readers.
    menuButton.setAttribute("aria-expanded", String(menuIsOpen));

    if (menuIsOpen) {
      menuButton.setAttribute("aria-label", "Close navigation");
      menuButton.textContent = "✕";
    } else {
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.textContent = "☰";
    }
  });

  // Close the mobile menu after a navigation link is selected.
  const navigationLinks = navigation.querySelectorAll("a");

  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("open");

      // Reset the button to its closed-menu state.
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.textContent = "☰";
    });
  });
}
