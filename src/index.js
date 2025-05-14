// This file serves as a compatibility entry point
// It re-exports the main entry point of the application

import './src/main.tsx';

// This ensures that older bundlers or systems looking for index.js can find it
// For Vite, the actual entry point is still configured in index.html via the script tag