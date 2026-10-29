import { Router } from 'express';
const router = Router();
router.get('/', (_req, res) => res.render('home', { title: 'Home' }));
const pages = new Map([
  ['/about', 'About Us'], ['/divisions', 'Divisions'], ['/leadership', 'Leadership'],
  ['/news', 'News & Announcements'], ['/recruitment', 'Recruitment'],
  ['/resources', 'Resources'], ['/contact', 'Contact'], ['/requests', 'Public Requests'],
  ['/login', 'Sign In'], ['/portal', 'Personnel Portal'], ['/admin', 'Administration']
]);
for (const [route, title] of pages) {
  router.get(route, (_req, res) => res.render('placeholder', { title }));
}
export default router;
