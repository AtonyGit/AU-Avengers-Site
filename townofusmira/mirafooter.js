class MiraFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <nav class="content">
                    <div class="footer-content">
                        <ul class="footer-links">
                            <a href="/">Home</a>
                            <a href="projects.html">Projects</a>
                            <a href="socials.html">Socials</a>
                            <a href="about.html">About</a>
                        </ul>
                    </div>
                </nav>
            
                <nav class="content">
                    <div class="footer-content">
                        <ul class="footer-links">
                            <a href="https://github.com/AU-Avengers">Github Organization</a>
                            <a href="https://github.com/AtonyGit/AU-Avengers-Site">Site Source Code</a>
                        </ul>
                    </div>
                </nav>
            
                <nav class="content">
                </nav>
            </footer>
            <footer class="footer-basic">
                Copyright © 2026 AU Avengers. All rights reserved.
            </footer>
        `;
    }
}
customElements.define('mira-footer', MiraFooter);