/// <reference lib="dom" />
import { JSDOM } from 'jsdom';

// Setup the jsdom environment
const jsdom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost' });
const { window } = jsdom;

// Assign the window and document from jsdom to the global object
global.window = window as any;
global.document = window.document;

// Mock the navigator with the properties you need
global.navigator = {
  userAgent: 'node.js',
} as any;

// Skip createElement warnings
const originalCreateElement = document.createElement;
document.createElement = (name: string) => {
  if (name === 'script') {
    const scriptElement = originalCreateElement.call(document, name) as HTMLScriptElement;
    scriptElement.type = 'text/javascript';
    return scriptElement;
  }
  return originalCreateElement.call(document, name);
};

// Ignore certain resource loading errors
window.addEventListener('error', (event) => {
  if (event.message === 'Not implemented: window.alert') {
    event.preventDefault();
  }
});
