import { createApp } from './app.js';

const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? '0.0.0.0';

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('PORT must be an integer between 1 and 65535.');
  process.exit(1);
}

const server = createApp().listen(port, host, () => {
  console.log(`DUCCOM demonstration website listening on ${host}:${port}`);
});

function shutdown(signal) {
  console.log(`${signal} received, stopping server`);
  server.close(() => process.exit(0));
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
