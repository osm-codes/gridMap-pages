import { serve } from 'bun';
import { render } from '../utils/serverRenderer';
import { serveStaticFile } from './static';

serve({
  fetch(req: Request) {
    const url = new URL(req.url);

    // Serve static assets from the public directory
    if (url.pathname.startsWith('/public/')) {
      return serveStaticFile(`./public${url.pathname}`);
    }

    // API Endpoint example
    if (url.pathname.startsWith('/api/')) {
      // Handle API requests
      return new Response(JSON.stringify({ data: 'API Response' }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // SSR for all other routes
    return new Response(render(url.pathname), {
      headers: {
        'Content-Type': 'text/html'
      }
    });
  },
  port: 3000
});

console.log(`Server is listening on port 3000`);
