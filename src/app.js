import express from 'express';
import helmet from 'helmet';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import publicRoutes from './routes/public.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export function createApp() {
  const app = express();
  app.disable('x-powered-by');
  app.use(helmet());
  app.set('view engine', 'ejs');
  app.set('views', path.join(root, 'src/views'));
  app.use('/static', express.static(path.join(root, 'public')));
  app.get('/health', (_req, res) => res.json({ status: 'ok' }));
  app.use('/', publicRoutes);
  app.use((_req, res) => res.status(404).render('error', { title: 'Page not found', message: 'This page is not available.' }));
  app.use((err, _req, res, _next) => {
    console.error('Request failed:', err);
    res.status(500).render('error', { title: 'Server error', message: 'Something went wrong.' });
  });
  return app;
}
