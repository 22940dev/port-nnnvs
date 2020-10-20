import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'pages/projects');

export function getSortedPostsData() {
   // Get file names under /posts
   const fileNames = fs.readdirSync(postsDirectory);
   return fileNames;
}
