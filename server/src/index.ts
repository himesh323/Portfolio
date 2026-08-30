import app from './app.js';
import { connectDB } from './config/db.js';
import { env } from './config/env.js';

async function startServer() {
  await connectDB();

  app.listen(env.PORT, () => {
    console.log(`🚀 Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
    console.log(`👉 Health check: http://localhost:${env.PORT}/api/health`);
    console.log(`👉 Client app: http://localhost:5173`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
