// Admin password
const ADMIN_PASSWORD = "admin123"; // Change this as needed

// Pages container
const pagesContainer = document.getElementById("pages-container");

// Authenticate admin before adding a page
function authenticate() {
  const password = prompt("Enter the admin password:");
  if (password === ADMIN_PASSWORD) {
    addPage();
  } else {
    alert("Access denied! Only admins can add pages.");
  }
}

// Add a new page
function addPage() {
  const title = prompt("Enter the title for this page:");
  if (!title) return;

  // Create a unique slug
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  // Save page details in localStorage
  const pageData = { title: title, content: "", slug: slug };
  localStorage.setItem(slug, JSON.stringify(pageData));

  // Add link to the page
  addPageToUI(pageData);
}

// Add a page to the UI
function addPageToUI({ title, slug }) {
  const pageLink = document.createElement("a");
  pageLink.href = `page.html?slug=${slug}`;
  pageLink.className = "page-card";
  pageLink.innerHTML = `<h3>${title}</h3><p>Click to view this page</p>`;
  pagesContainer.appendChild(pageLink);
}

// Load pages from localStorage
function loadPages() {
  Object.keys(localStorage).forEach((slug) => {
    const pageData = JSON.parse(localStorage.getItem(slug));
    if (pageData) {
      addPageToUI(pageData);
    }
  });
}

// Load pages on startup
loadPages();
