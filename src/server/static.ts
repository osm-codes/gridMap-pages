import { readFile } from 'fs/promises'; 
import { join } from 'path'; 

export async function serveStaticFile(path: string): Promise<Response> {
  try {
    const resolvedPath = join(process.cwd(), 'public', path);
    console.log(`Attempting to serve: ${resolvedPath}`);

    const fileContents = await readFile(resolvedPath); 
    const contentType = determineContentType(path);
    return new Response(fileContents, {
      headers: { 'Content-Type': contentType },
    });
  } catch (error) {
    console.error(`Error serving file: ${path}`, error);
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
