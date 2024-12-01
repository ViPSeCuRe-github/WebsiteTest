const ADMIN_PASSWORD = "admin777"; // Admin password

// Get references to form and pages container
const form = document.getElementById("note-form");
const pagesContainer = document.getElementById("pages-container");

// Function to load all pages from localStorage and display them
function loadPages() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const pageData = JSON.parse(localStorage.getItem(key));
    if (pageData && pageData.title && pageData.slug) {
      addPageToUI(pageData);
    }
  }
}

// Function to add a new page to the UI
function addPageToUI({ title, slug }) {
  const pageCard = document.createElement("div");
  pageCard.className = "page-card";

  const pageLink = document.createElement("a");
  pageLink.href = `page.html?slug=${slug}`;
  pageLink.innerHTML = `<h3>${title}</h3><p>Click to view this page</p>`;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete Page";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => deletePage(slug);

  pageCard.appendChild(pageLink);
  pageCard.appendChild(deleteBtn);

  pagesContainer.appendChild(pageCard);
}

// Function to delete a page
function deletePage(slug) {
  const password = prompt("Enter the admin password to delete this page:");
  if (password === ADMIN_PASSWORD) {
    localStorage.removeItem(slug);
    alert("Page deleted successfully!");

    // Refresh the homepage
    pagesContainer.innerHTML = "";
    loadPages();
  } else {
    alert("Incorrect password! Page deletion is not allowed.");
  }
}

// Function to handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (title === "" || content === "") {
    alert("Both title and content are required!");
    return;
  }

  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const pageData = { title, content, slug, images: [] };

  // Save the page to localStorage
  localStorage.setItem(slug, JSON.stringify(pageData));

  // Add the new page to the UI
  addPageToUI(pageData);

  // Reset the form
  form.reset();

  alert("Page added successfully!");
});

// Load pages on page load
window.onload = loadPages;
