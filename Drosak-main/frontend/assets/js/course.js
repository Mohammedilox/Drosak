document.addEventListener('DOMContentLoaded', () => {
    const coursesContainer = document.getElementById('courses');
    const filters = {
      language: document.getElementById('filter-language'),
      price: document.getElementById('filter-price'),
      platform: document.getElementById('filter-platform'),
      category: document.getElementById('filter-category'),
      rating: document.getElementById('filter-rating')
    };
  
    fetch('assets/data/courses.json')
      .then(res => res.json())
      .then(data => {
        let allCourses = data;
  
        function renderCourses(courses) {
          coursesContainer.innerHTML = '';
          if (courses.length === 0) {
            coursesContainer.innerHTML = '<p>No courses found.</p>';
            return;
          }
          courses.forEach(course => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
              <img src="${course.thumbnail}" alt="${course.title}" class="mb-2 rounded" />
              <h3 class="text-lg font-bold">${course.title}</h3>
              <p class="text-sm text-gray-600">${course.language} • ${course.platform}</p>
              <p class="text-sm">${course.category}</p>
              <p class="font-bold mt-1">${course.price === 0 ? 'Free' : `$${course.price}`}</p>
              <p class="text-yellow-500">⭐ ${course.rating}</p>
              <a href="${course.url}" target="_blank" class="btn mt-2">View</a>
            `;
            coursesContainer.appendChild(card);
          });
        }
  
        function applyFilters() {
          let filtered = allCourses.filter(c => {
            return (
              (filters.language.value === '' || c.language === filters.language.value) &&
              (filters.price.value === '' ||
                (filters.price.value === 'free' && c.price === 0) ||
                (filters.price.value === 'paid' && c.price > 0)) &&
              (filters.platform.value === '' || c.platform === filters.platform.value) &&
              (filters.category.value === '' || c.category === filters.category.value) &&
              (filters.rating.value === '' || c.rating >= parseFloat(filters.rating.value))
            );
          });
          renderCourses(filtered);
        }
  
        Object.values(filters).forEach(select => {
          select.addEventListener('change', applyFilters);
        });
  
        renderCourses(allCourses);
      });
  });
  fetch('/course.json')  