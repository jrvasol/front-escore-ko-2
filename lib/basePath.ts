// Base path for GitHub Pages deployment
export const basePath = '/front-escore-ko-2';

// Helper function to prefix paths with basePath
export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
}
