import reactLogo from './react.svg'
import viteLogo from './vite.svg'
import heroImg from './hero.png'

const articles = [
  {
    id: 'clean-layout',
    title: 'Clean Layout',
    tag: 'Design',
    image: '/santos-logo.png',
    excerpt:
      'A simple layout makes the page easier to read and keeps every section in the right place.',
    body:
      'For this activity, I kept the page close to the wireframe sample. The border, hero area, overview blocks, and cards help the content feel organized without making the page look too crowded.',
  },
  {
    id: 'react-components',
    title: 'React Components',
    tag: 'Code',
    image: reactLogo,
    excerpt:
      'Small components help the app stay cleaner when the same UI parts are used again.',
    body:
      'The navbar, footer, button, and article list are separated into components. This makes the project easier to update because I can change one component instead of editing the same layout in many files.',
  },
  {
    id: 'page-routing',
    title: 'Page Routing',
    tag: 'Navigation',
    image: viteLogo,
    excerpt:
      'Routing lets the app move between pages while still staying inside the React project.',
    body:
      'The app now has a home page, about page, article list, article details, and a not found page. The links feel like a normal website, but React handles the page changes.',
  },
  {
    id: 'student-profile',
    title: 'Student Profile',
    tag: 'Content',
    image: heroImg,
    excerpt:
      'The project includes my own details, logo, and short writeups for the activity.',
    body:
      'I used my name, section, email, and logo so the output is not just a copied sample. The content is short and direct, so it still matches the wireframe style.',
  },
]

export default articles
