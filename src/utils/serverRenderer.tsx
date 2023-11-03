import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';
import { createMemoryHistory } from 'history';
import { StaticRouter } from 'react-router-dom/server';

export const render = (url: string): string => {
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App router="static" location={url} />
    </StaticRouter>
  );


  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React App with OpenLayers</title>
        <link rel="stylesheet" href="/public/style.css">
    </head>
    <body>
        <div id="root">${content}</div>
        <script src="/public/bundle.js"></script>
    </body>
    </html>
  `;

  return html;
};
