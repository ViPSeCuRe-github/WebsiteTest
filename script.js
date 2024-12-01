// Container for pages
const pagesContainer = document.getElementById('pages-container');

// Function to add a new page
function addPage() {
  // Create page card
  const pageCard = document.createElement('div');
  pageCard.className = 'page-card';

  // Add content to the page card
  const title = prompt('Enter the title for this page:');
  if (!title) return;

  pageCard.innerHTML = `
    <h3>${title}</h3>
    <p>Add your notes here...</p>
    <textarea rows="4" placeholder="Write notes here..."></textarea>
    <div>
      <label for="file-upload-${title}">Attach files:</label>
      <input type="file" id="file-upload-${title}" multiple>
    </div>
  `;

  // Append page card to the container
  pagesContainer.appendChild(pageCard);
}
