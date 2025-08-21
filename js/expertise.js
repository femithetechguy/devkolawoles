// Expertise section functionality for Kolawoles Software Engineering portfolio

// Helper function to determine appropriate icon for expertise areas
function getExpertiseIcon(title) {
  const titleLower = title.toLowerCase();
  // Software Engineering specific icon mapping
  if (titleLower.includes('web development')) return 'bi-window';
  if (titleLower.includes('backend')) return 'bi-hdd-network';
  if (titleLower.includes('cloud')) return 'bi-cloud';
  if (titleLower.includes('automation') || titleLower.includes('devops')) return 'bi-robot';
  // Default icon
  return 'bi-graph-up';
}

// Create the expertise section HTML
function createExpertiseSection(data) {
  let html = `
    <section class="expertise-section py-3">
      <div class="container">
        <div class="row expertise-grid justify-content-center">
  `;
  
  data.forEach((item, index) => {
    html += `
      <div class="col-md-6 mb-2">
        <div class="expertise-card animate-fade-in" style="animation-delay: ${(index + 1) * 100}ms;">
          <div class="card-img-container text-center px-3 py-2" id="expertise-image-${index}">
            <i class="bi ${getExpertiseIcon(item.title)} text-primary" style="font-size: 3.5rem;"></i>
          </div>
          <div class="card-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            ${item.link ? `<a href="${item.link}" class="btn btn-primary">Learn More</a>` : ''}
          </div>
        </div>
      </div>
    `;
  });
  
  html += `
        </div>
      </div>
    </section>
  `;
  
  return html;
}

// Add animation to expertise cards when they come into view
document.addEventListener('DOMContentLoaded', function() {
  // Add any expertise-specific functionality here
  
  // Example: Add animation to expertise cards when they come into view
  const expertiseCards = document.querySelectorAll('.expertise-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  
  expertiseCards.forEach(card => {
    observer.observe(card);
  });
});

// Make functions available globally
window.createExpertiseSection = createExpertiseSection;
window.getExpertiseIcon = getExpertiseIcon;
