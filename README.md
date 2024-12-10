
# Portfolio Homepage

[https://steven2k2.github.io/](https://steven2k2.github.io/)

## Overview

This is the source code for my personal portfolio homepage, which showcases my front-end and mobile development skills. The site demonstrates the use of **Material Design** principles combined with **Bootstrap 5** to create a modern, responsive layout that works seamlessly across different screen sizes and devices.

This project is currently a **Work In Progress (WIP)**, and additional sections, features, and optimizations will be implemented iteratively.

## Features

- **Responsive Design**: Adapts effortlessly to desktop, tablet, and mobile devices using Bootstrap 5's grid system and utilities.
- **Material Design Integration**: Adheres to Material Design guidelines for a clean and intuitive user interface. **Material Design Icons** are utilized for consistent iconography.
- **Performance-Optimized**: Regularly tested and optimized for best practices, accessibility, and SEO.
- **SASS Support**: Modular SCSS structure for easy customization and maintenance.
- **Bootstrap 5**: Leverages the latest version of Bootstrap for a robust, mobile-first design system.

## Sections

- **Hero Section**: A welcoming banner to introduce the portfolio and highlight key skills.
- **About Me**: An overview of background, expertise, and professional journey.
- **Skills**: A showcase of core skills such as HTML5, CSS3, JavaScript, and Mobile Development.
- **Work Experience**: Summarizes past roles, responsibilities, and achievements.
- **Achievements**: Features notable accomplishments in software development and design.
- **Contact Information**: Provides easy methods to get in touch, including email and LinkedIn links.

## Technologies Used

- **Bootstrap 5**: For grid layouts, responsive utilities, and components.
- **Material Design Icons**: Provides consistent and visually appealing icons.
- **Google Fonts (Roboto)**: Used for a modern and clean typographic design.
- **SASS**: Enables modular and maintainable stylesheets.

## File Structure

```plaintext
├── .github/                # GitHub workflows for CI/CD
│   └── workflows/
├── assets/                 # Static assets (CSS, JS, images)
│   ├── css/                # Compiled CSS files
│   ├── js/                 # Custom JavaScript files
│   └── img/                # Project images
├── badges/                 # Lighthouse performance badges
├── sass/                   # Source SASS/SCSS files
│   ├── main.scss           # Main SASS file (imports all partials)
│   ├── _variables.scss     # Custom Bootstrap variables
│   ├── _custom.scss        # Additional custom styles
│   └── bootstrap/          # Optional: Bootstrap source files (if not using CDN)
├── vendor/                 # Third-party libraries (e.g., Bootstrap, jQuery)
├── aboutme.html            # About Me page
├── achievements.html       # Achievements page
├── contact.html            # Contact page
├── experience.html         # Experience page
├── index.html              # Main entry point
├── skills.html             # Skills showcase
├── README.md               # Project documentation
├── package.json            # NPM configuration (if applicable)
├── .gitignore              # Ignore unnecessary files
```

## Performance Overview

The site is continuously tested with [Lighthouse](https://developers.google.com/web/tools/lighthouse) to ensure it meets modern web standards.

![Performance](https://steven2k2.github.io/badges/performance.svg)
![Accessibility](https://steven2k2.github.io/badges/accessibility.svg)
![SEO](https://steven2k2.github.io/badges/seo.svg)
![Best Practices](https://steven2k2.github.io/badges/best-practices.svg)

👉 [View Full Lighthouse Report](https://steven2k2.github.io/lighthouse-report.html)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [SASS](https://sass-lang.com/) (for compiling SCSS files)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/steven2k2/steven2k2.github.io.git
   cd steven2k2.github.io
   ```

2. Install dependencies (if applicable):
   ```bash
   npm install
   ```

3. Compile SCSS:
   ```bash
   npm run build-css
   ```

4. Run a development server:
   ```bash
   npm start
   ```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Bootstrap**: For providing the foundation of the UI.
- **Material Design Icons**: For the consistent and elegant icon set.
- **Lighthouse**: For performance testing and optimization recommendations.
- **GitHub Pages**: For hosting the site.
