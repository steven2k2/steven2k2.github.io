# Ticket: Incremental Improvement of Lighthouse Performance Score

## Title
Incremental Improvement of Lighthouse Performance Score

## Description
The current Lighthouse performance score for the website is at 77%, which impacts user experience and SEO rankings. The goal is to implement incremental improvements to enhance the website's performance score. Each improvement should be 
measurable and trackable to ensure progress is visible and effective.

---

## Acceptance Criteria
1. Performance score improves by at least **5%** in the next iteration, aiming for **82%** or higher.
2. Ensure the improvements do not negatively impact design or functionality.
3. Each task is documented with before-and-after metrics.

---

## Tasks
1. **Reduce Unused CSS/JS**
    - Use tools like [PurgeCSS](https://purgecss.com/) to remove unused Bootstrap styles.
    - Audit and minimise custom CSS and JavaScript files.

2. **Optimize Image Assets**
    - Compress images using tools like TinyPNG or ImageOptim.
    - Implement responsive images with `srcset` and lazy loading (`loading="lazy"`).

3. **Defer Non-Critical Resources**
    - Add `defer` or `async` attributes to non-critical JavaScript files.
    - Load Google Fonts with `font-display: swap` to reduce render-blocking.

4. **Implement Browser Caching**
    - Configure `Cache-Control` headers for static assets.

5. **Optimise Resource Delivery**
    - Preload critical resources (e.g. fonts, hero images) using `<link rel="preload">`.
    - Review and minimise HTTP requests.

6. **Test and Verify Improvements**
    - Run Lighthouse tests after each improvement to measure progress.
    - Record before-and-after scores for performance, accessibility, and SEO.

---

## Priority
Medium

## Story Points
3

## Sprint
Optimise

## Assigned To
Steven

## Additional Notes
- Focus on low-hanging fruits for quick wins in this iteration.
- Larger tasks, such as refactoring legacy code or migrating to a modern build system, will be planned in later tickets.  