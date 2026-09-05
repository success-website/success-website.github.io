/**
 * Helper function to prefix asset URLs (images, public files) with the Next.js basePath.
 * Essential for GitHub Pages project deployments hosted under subpaths like /repo-name/.
 */
export function getAssetPath(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
