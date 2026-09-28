# Ahmed Mwafy | Robotics & Autonomous Systems Portfolio

**Live site:** YOUR_VERCEL_URL

This is my personal portfolio website. I built it to present myself as a robotics and autonomous-systems engineer: my projects, skills, experience, education and training, all in one place.

I am a Mechatronics Engineering student at Mansoura University (B.Sc., expected 2027), and my main interests are robotics, autonomous systems, AI, embedded systems and industrial automation. Since I am still learning JavaScript and web development, I kept the code simple on purpose so I can understand it and edit it myself.

## What I used

| Tool | Why I chose it |
| --- | --- |
| Next.js + React | A standard way to build a fast website, and it deploys easily on Vercel |
| JavaScript | The language I am learning; no TypeScript to keep things simple |
| Tailwind CSS | I style elements directly in the code instead of managing big CSS files |
| Vercel | Free hosting that updates my site every time I push to GitHub |

I did not add any extra libraries. The animations are plain CSS and a few lines of React.

## What is on the site

1. **Home:** my name, a short introduction, buttons for my projects and CV, and links to GitHub, LinkedIn and email. Next to the text is a small animation of a car following a racing line. The dashed circle is the lookahead distance and the white dot is the target point, which is the basic idea behind the Pure Pursuit controller I use in my autonomous racing work.
2. **About:** a short introduction and my GPA, rank, degree and graduation year.
3. **Featured Projects:** Autonomous Racing Car, ROS-Based Camera Line Follower, and Motion Planning & Control.
4. **Technical Skills:** grouped into Robotics, Programming, Embedded Systems, Industrial Automation, Sensors and Tools. I used simple badges instead of fake percentages.
5. **Experience:** a timeline with Karthikesh Robotics, Alexandria Shipyard, Mansoura Motorsport and Momentum.
6. **Education:** Mansoura University.
7. **Training:** embedded systems and Linux, MATLAB Onramp, industrial automation, ROS, Training of Trainers and Management.
8. **Contact:** "Let's Build Something", with my links and a CV download button.

## Design choices

- **Dark theme** with white and light gray text and a cyan accent, so it feels technical without being cluttered.
- **Fonts:** Barlow Condensed for headings and Barlow for text. They have an industrial, engineering look.
- **Animations are subtle:** sections fade in as they appear, cards lift slightly on hover, and scrolling is smooth. Everything switches off if a visitor has "reduce motion" enabled on their device.
- **Responsive:** it works on desktop, laptop, tablet and mobile. On smaller screens the menu becomes a hamburger button.
- **Accessible:** semantic HTML, alt text on images, keyboard-friendly navigation, visible focus outlines and a "Skip to content" link.
- **SEO:** the page title and description are set in `src/app/layout.js`.

## Folder structure

```
portfolio/
├── public/
│   ├── CV.pdf                 <- my CV (the Download CV buttons use this file)
│   └── images/                <- my project pictures
├── src/
│   ├── data/
│   │   └── portfolio.js       <- ALL my information lives here
│   ├── components/            <- one file per section (Hero, About, Projects...)
│   ├── app/
│   │   ├── page.js            <- puts the sections in order
│   │   ├── layout.js          <- fonts and SEO title/description
│   │   └── globals.css        <- shared styles and animations
│   └── lib/helpers.js         <- small helper for the social links
├── tailwind.config.js         <- colors and fonts
└── package.json
```

The most important idea: **I only edit `src/data/portfolio.js` to update my content.** The components read from that file and build the page automatically.

## Run it on my computer

1. Install Node.js (LTS version) from https://nodejs.org
2. Open the project folder in VS Code and open a terminal
3. Install the dependencies (only needed once):
   ```
   npm install
   ```
4. Start the site:
   ```
   npm run dev
   ```
5. Open http://localhost:3000. The page updates every time I save a file. Stop it with `Ctrl + C`.

## How I update things

**Change my text or links:** open `src/data/portfolio.js`, change the text between the quotation marks and save. Anything that starts with `YOUR_` is a placeholder I still need to replace (GitHub, LinkedIn, email).

**Add a new project:** in `src/data/portfolio.js`, find `export const projects`, copy one whole block from `{` to `},`, paste it after the last block, and change the text:

```js
{
  title: "My New Project",
  description: "One or two sentences about it.",
  technologies: ["ROS 2", "Python"],
  image: "/images/my-new-project.jpg",
  github: "https://github.com/...",
  demo: "",
},
```

**Add a project image:** save the picture in `public/images/` and write its name in the `image` field. If the file is missing, the site shows a placeholder instead of a broken image.

**Update my CV:** replace `public/CV.pdf` with my new PDF. The file name must stay exactly `CV.pdf`.

**Change colors:** edit the `colors` section in `tailwind.config.js`.

## Publish it

1. Push the project to a GitHub repository:
   ```
   git init
   git add .
   git commit -m "My portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```
2. On https://vercel.com, sign in with GitHub, choose Add New > Project, select the repository and click Deploy. The default settings are correct.
3. After that, every `git push` updates the live site automatically.

## Still to do

- Replace `YOUR_GITHUB_URL`, `YOUR_LINKEDIN_URL` and `YOUR_EMAIL` in `src/data/portfolio.js`
- Replace `public/CV.pdf` with my real CV
- Add my project images to `public/images/`
- Replace the `[Placeholder]` lines in the Experience section with my real responsibilities
- Add dates for Mansoura Motorsport and Momentum
- Put my live Vercel link at the top of this file

## Contact

- GitHub: YOUR_GITHUB_URL
- LinkedIn: YOUR_LINKEDIN_URL
- Email: YOUR_EMAIL
