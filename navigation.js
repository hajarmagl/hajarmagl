// navigation.js
document.addEventListener("DOMContentLoaded", () => {
    setupMenuNavigation();
    setupEditAndSaveActions();
    setupProfileView();
    setupNavigationArrows();
  });
  
  const pageHistory = [];  // History stack to store previous pages for back navigation
  let forwardHistory = []; // Stack to store forward history
  let currentPage = window.location.href;  // Get current page URL
  
  function navigateTo(page) {
    if (page !== currentPage) {
      pageHistory.push(currentPage);  // Save the current page before navigating
      forwardHistory = [];  // Clear forward history on new navigation
      currentPage = page;
      window.location.href = currentPage;
    }
  }
  
  function setupMenuNavigation() {
    document.querySelectorAll(".menu-item").forEach((item) => {
      item.addEventListener("click", (event) => {
        const pageName = event.currentTarget.querySelector("span").textContent.trim();
        switch (pageName) {
          case "Students Orders":
            navigateTo("index.html");
            break;
          case "Faculty Orders":
            navigateTo("index4.html");
            break;
          case "Late Fees":
            navigateTo("index6.html");
            break;
          default:
            console.error("Unknown page:", pageName);
        }
      });
    });
  }
  
  function setupEditAndSaveActions() {
    document.body.addEventListener("click", (event) => {
      if (event.target.classList.contains("edit-button")) {
        // Navigate to the correct edit page depending on the current page
        if (currentPage.includes("index.html")) {
          navigateTo("index2.html");  // Go to edit page for Manage Students Orders
        } else if (currentPage.includes("index4.html")) {
          navigateTo("index3.html");  // Go to edit page for Added/Activated Books
        }
      } else if (event.target.classList.contains("save-button")) {
        // Return to specific pages based on the current edit page
        if (currentPage.includes("index2.html")) {
          navigateTo("index.html");  // Return to Activated Orders
        } else if (currentPage.includes("index3.html")) {
          navigateTo("index4.html");  // Return to Manage Faculty Orders
        }
      }
    });
  }
  
  function setupProfileView() {
    // Redirect to Profile page (index5.html) when clicking on profile name or logo
    const profileElements = [document.querySelector(".user-info h2"), document.querySelector(".logo-container")];
    profileElements.forEach((element) => {
      if (element) {
        element.addEventListener("click", () => {
          navigateTo("index5.html");
        });
      }
    });
  }
  
  function setupNavigationArrows() {
    // Back arrow functionality
    document.querySelector(".nav-arrows .nav-button:first-child").addEventListener("click", () => {
      if (pageHistory.length > 0) {
        forwardHistory.push(currentPage);  // Save the current page to forward history
        const lastPage = pageHistory.pop();  // Go back to the last page in history
        currentPage = lastPage;
        window.location.href = currentPage;
      }
    });
  
    // Forward arrow functionality
    document.querySelector(".nav-arrows .nav-button:last-child").addEventListener("click", () => {
      if (forwardHistory.length > 0) {
        pageHistory.push(currentPage);  // Save the current page to page history
        const nextPage = forwardHistory.pop();  // Go forward to the next page
        currentPage = nextPage;
        window.location.href = currentPage;
      }
    });
  }
