/// <reference lib="dom" />
//import { JSDOM } from 'jsdom';


// const window = new Window({
//   url: 'http://localhost:3000',
//   width: 1024,
//   height: 768
// });

// Set the global
//global.window = window as any;
//global.document = window.document as any;

// Mock the navigator with the properties you need
// global.navigator = {
//   userAgent: 'node.js',
// } as any;

// Skip createElement warnings
//const originalCreateElement = document.createElement;
// document.createElement = (name: string) => {
//   if (name === 'script') {
//     const scriptElement = originalCreateElement.call(document, name) as HTMLScriptElement;
//     scriptElement.type = 'text/javascript';
//     return scriptElement;
//   }
//   return originalCreateElement.call(document, name);
// };

// Ignore certain resource loading errors
// window.addEventListener('error', (event) => {
//   if (event.message === 'Not implemented: window.alert') {
//     event.preventDefault();
//   }
// });

export * from '@testing-library/react'