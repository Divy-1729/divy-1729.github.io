<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <!-- MathJax for LaTeX support -->
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <script>
        window.MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']],
                displayMath: [['$$', '$$'], ['\\[', '\\]']]
            }
        };
    </script>
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="nav-brand">
                <a href="index.html">Home</a>
            </div>
            <div class="nav-links">
                <a href="index.html" class="nav-link">Home</a>
                <a href="blog.html" class="nav-link">Blog</a>
                <a href="about.html" class="nav-link">About</a>
                <a href="https://github.com/Divy-1729" class="nav-link" target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                </a>
            </div>
        </nav>
    </header>

    <main class="main">
        <div class="container">
            <h1 class="page-title">Blog</h1>

            <!-- Rendered by script.js: script looks for #blogPosts -->
            <div id="blogPosts" class="coming-soon-container"></div>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-links">
                <a href="index.html" class="footer-link">Home</a>
                <a href="blog.html" class="footer-link">Blog</a>
                <a href="about.html" class="footer-link">About</a>
                <a href="https://github.com/Divy-1729" class="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div class="footer-copyright">
                © 2025
            </div>
        </div>
    </footer>

    <script>
        // Create snowflakes (kept as-is)
        function createSnowflakes() {
            const snowContainer = document.createElement('div');
            snowContainer.className = 'snow-container';
            document.body.appendChild(snowContainer);
            
            const snowflakeSymbols = ['❄', '❅', '❆', '•'];
            const numSnowflakes = 30;
            
            for (let i = 0; i < numSnowflakes; i++) {
                const snowflake = document.createElement('div');
                snowflake.className = 'snowflake';
                snowflake.textContent = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
                
                snowflake.style.left = Math.random() * 100 + '%';
                const duration = 15 + Math.random() * 10;
                snowflake.style.animationDuration = duration + 's';
                snowflake.style.animationDelay = Math.random() * 5 + 's';
                const size = 0.5 + Math.random() * 1;
                snowflake.style.fontSize = size + 'em';
                snowflake.style.opacity = 0.4 + Math.random() * 0.4;
                
                snowContainer.appendChild(snowflake);
            }
            
            const snowAccumulation = document.createElement('div');
            snowAccumulation.className = 'snow-accumulation';
            document.body.appendChild(snowAccumulation);
        }
        
        document.addEventListener('DOMContentLoaded', createSnowflakes);
    </script>

    <!-- Link to your external script file. Adjust path if script.js is not next to blog.html -->
    <script src="script.js" defer></script>
</body>
</html>
