document.addEventListener('DOMContentLoaded', function () {
      const contentDiv = document.getElementById('content');
  
      const routes = {
          '/': 'qualitybean.html',
          '/team': '#/team',
      };
  
      function router() {
          const hash = window.location.hash || '#/';
          const route = hash.slice(1);
          contentDiv.innerHTML = routes[route] || '<h1>404</h1><p>Page not found.</p>';
      }
  
      window.addEventListener('hashchange', router);
      router(); // Call router to load the initial content
  });
  