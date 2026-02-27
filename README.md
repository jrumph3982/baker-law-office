# Baker Law Office, PLC — Website

Static HTML/CSS/JS website rebuilt from bakerlawplc.com for platform-independent hosting.

## Project Structure

```
bakerlawplc/
├── index.html              # Home page
├── areas-of-practice.html  # All practice areas
├── about.html              # Attorney bio & office locations
├── css/
│   └── style.css           # All styles
├── js/
│   └── main.js             # Navigation, slider, animations
└── README.md
```

## Hosting Options

This is a plain static site — no build step required. Upload the entire folder to any static host:

| Platform        | How to deploy                                      |
|-----------------|----------------------------------------------------|
| **GitLab Pages**| Push to `main` branch, CI/CD auto-deploys          |
| **Netlify**     | Drag & drop the folder or connect Git repo         |
| **Vercel**      | Import Git repo, select "Other" as framework       |
| **GitHub Pages**| Push to `gh-pages` branch or configure Pages settings |
| **Cloudflare Pages** | Connect repo, no build command needed        |
| **AWS S3**      | Upload files, enable static website hosting        |

## GitLab Pages Deployment

A `.gitlab-ci.yml` is included. Just push to GitLab and Pages will be live at:
`https://<your-username>.gitlab.io/<project-name>/`

## Customization

- **Replace attorney photo**: The About page has a placeholder. Add your image and replace the `.about-image-placeholder` div with an `<img>` tag.
- **Colors**: Edit CSS variables at the top of `css/style.css`
- **Phone number**: Search/replace `2699453999` and `(269) 945-3999`
- **Content**: All text is plain HTML — edit directly in each `.html` file

## Fonts Used

- **Cormorant Garamond** — serif display font (headings, hero)
- **Jost** — clean sans-serif (body, nav, labels)

Both loaded via Google Fonts (internet connection required for visitors).
