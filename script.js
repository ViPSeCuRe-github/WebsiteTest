// Pages container
const pagesContainer = document.getElementById('pages-container');

// Password for admin authentication
const ADMIN_PASSWORD = "admin123"; // Change this to your desired password

// Authenticate the admin
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
  // Prompt for the page title
  const title = prompt("Enter the title for this page:");
  if (!title) return;

  // Generate a unique URL-friendly slug for the page
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  // Save the page data to local storage (or use a backend for permanent storage)
  const pageData = {
    title: title,
    content: "",
    slug: slug,
  };
  localStorage.setItem(slug, JSON.stringify(pageData));

  // Add a link to the page in the pages container
  const pageLink = document.createElement("a");
  pageLink.href = `page.html?slug=${slug}`;
  pageLink.className = "page-card";
  pageLink.innerHTML = `<h3>${title}</h3><p>Click to view this page</p>`;
  pagesContainer.appendChild(pageLink);
}

// Function to load page content
function loadPageContent() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  // Retrieve the page data from local storage
  const pageData = localStorage.getItem(slug);
  if (pageData) {
    const { title, content } = JSON.parse(pageData);

    // Update the page with the retrieved data
    document.getElementById("page-title").innerText = title;
    document.getElementById("page-content").value = content;

    // Save edits to local storage
    document.getElementById("page-content").addEventListener("input", (e) => {
      const updatedContent = e.target.value;
      localStorage.setItem(slug, JSON.stringify({ title, content: updatedContent, slug }));
    });
  } else {
    document.body.innerHTML = "<h1>Page not found!</h1>";
  }
}
