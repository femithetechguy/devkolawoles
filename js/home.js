// Home section functionality for Kolawoles Software Engineering portfolio

// Create the home section HTML for Software Engineering
function createHomeSection(data) {
  let html = `
    <section class="home-section py-3">
      <div class="container">
        <div class="row justify-content-center">
  `;
  
  data.forEach((item, index) => {
    if (index === 0) {
      html += `
        <div class="col-12 mb-2">
          <div class="welcome-banner animate-fade-in text-center py-2">
            <h2 class="mb-2">${item.title}</h2>
            <p class="lead">${item.description}</p>
          </div>
        </div>
      `;
    } else {
      html += `
        <div class="col-md-6 col-lg-3 mb-2">
          <div class="feature-card animate-fade-in" style="animation-delay: ${(index) * 100}ms;">
            <div class="card shadow h-100">
              <div class="text-center px-3 py-2 bg-light" id="home-image-${index}">
                <i class="bi ${getBootstrapIconForTitle(item.title)} text-primary" style="font-size: 3.5rem;"></i>
              </div>
              <div class="card-body">
                <h4 class="mb-1">${item.title}</h4>
                <p class="mb-2">${item.description}</p>
                ${item.link ? `<a href="javascript:void(0);" onclick="navigateToTab('Showcase')" class="btn btn-primary btn-sm">Learn More</a>` : ''}
              </div>
            </div>
          </div>
        </div>
      `;
    }
  });
  
  html += `
        </div>
      </div>
    </section>
  `;
  
  return html;
}

// Navigation and scroll logic for Software Engineering portfolio
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".navbar .nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });
          history.pushState(null, null, hash);
        }
      }
    });
  });
});

// Set favicon for Software Engineering portfolio if not already set
(function() {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = "assets/imgs/favicon.png";
})();

// Helper function to determine the appropriate Bootstrap icon for Software Engineering based on title
function getBootstrapIconForTitle(title) {
  const titleLower = title.toLowerCase();
  // Software Engineering specific icon mapping
  if (titleLower.includes('web development')) return 'bi-window';
  if (titleLower.includes('backend')) return 'bi-hdd-network';
  if (titleLower.includes('cloud')) return 'bi-cloud';
  if (titleLower.includes('automation') || titleLower.includes('devops')) return 'bi-robot';
  // Retain other mappings for general terms
  if (titleLower.includes('data') || titleLower.includes('analytics')) return 'bi-bar-chart-fill';
  if (titleLower.includes('visualization') || titleLower.includes('dashboard')) return 'bi-graph-up';
  if (titleLower.includes('services')) return 'bi-gear-fill';
  if (titleLower.includes('expertise')) return 'bi-stars';
  if (titleLower.includes('project') || titleLower.includes('featured')) return 'bi-collection';
  if (titleLower.includes('integration')) return 'bi-diagram-3';
  if (titleLower.includes('model')) return 'bi-grid-3x3-gap';
  if (titleLower.includes('business') || titleLower.includes('intelligence')) return 'bi-briefcase-fill';
  // Default icon if no match
  return 'bi-bar-chart-line-fill';
}

// Make functions available globally for Software Engineering portfolio
window.createHomeSection = createHomeSection;
window.getBootstrapIconForTitle = getBootstrapIconForTitle;
