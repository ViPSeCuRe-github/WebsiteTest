// Pages container
const pagesContainer = document.getElementById("pages-container");

// Admin password
const ADMIN_PASSWORD = "admin123"; // Change this password as needed

// Authenticate admin before allowing to add a page
function authenticate() {
  const password = prompt("Enter the admin password:");
  if (password === ADMIN_PASSWORD) {
    addPage();
  } else {
    alert("Access denied! Only admins can add pages.");
  }
}

// Function to add a new page
function addPage() {
  // Prompt for page title
  const title = prompt("Enter the title for this page:");
  if (!title) return;

  // Create a unique slug for the page
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  // Save page details to local storage
  const pageData = {
    title: title,
    content: "",
    slug: slug,
  };
  localStorage.setItem(slug, JSON.stringify(pageData));

  // Add a link to the new page
  const pageLink = document.createElement("a");
  pageLink.href = `page.html?slug=${slug}`;
  pageLink.className = "page-card";
  pageLink.innerHTML = `<h3>${title}</h3><p>Click to view this page</p>`;
  pagesContainer.appendChild(pageLink);
}

// Function to load pages from local storage
function loadPages() {
  for (let i = 0; i < localStorage.length; i++) {
    const slug = localStorage.key(i);
    const pageData = JSON.parse(localStorage.getItem(slug));
    if (pageData) {
      const pageLink = document.createElement("a");
      pageLink.href = `page.html?slug=${slug}`;
      pageLink.className = "page-card";
      pageLink.innerHTML = `<h3>${pageData.title}</h3><p>Click to view this page</p>`;
      pagesContainer.appendChild(pageLink);
    }
  }
}

// Load pages on startup
loadPages();
