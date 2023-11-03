import { readFile } from 'bun';

export async function serveStaticFile(path: string): Promise<Response> {
  try {
    const fileContents = await readFile(new URL(path, import.meta.url));
    const contentType = determineContentType(path);
    return new Response(fileContents, {
      headers: { 'Content-Type': contentType },
    });
  } catch (error) {
    return new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }
}

function determineContentType(path: string): string {
  const extension = path.split('.').pop();
  switch (extension) {
    case 'js':
      return 'text/javascript';
    case 'css':
      return 'text/css';
    case 'html':
      return 'text/html';
    default:
      return 'application/octet-stream';
  }
}
