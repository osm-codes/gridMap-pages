import { serve } from 'bun';
import { serveStaticFile } from './static';

serve({
  fetch(req: Request) {
    const url = new URL(req.url);
    console.log(`Received request for: ${url.pathname}`); // Log the requested path

    // API Endpoint example
    if (url.pathname.startsWith('/api/')) {
      // Handle API requests
      return new Response(JSON.stringify({ data: 'API Response' }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Serve static assets from the public directory
    if (url.pathname.startsWith('/')) {
      return serveStaticFile(`${url.pathname}`);
    }

    // Serve the index.html for all other routes (Client-side routing)
    return serveStaticFile('index.html');
  },
  port: 3000
});


console.log(`Server is listening on port 3000`);
