console.log('Portfolio initialized.');

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('ion-icon');

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);
}

themeToggleBtn.addEventListener('click', () => {
    let theme = body.getAttribute('data-theme');

    if (theme === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateIcon('light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateIcon('dark');
    }
});

function updateIcon(theme) {
    if (theme === 'dark') {
        icon.setAttribute('name', 'sunny-outline');
    } else {
        icon.setAttribute('name', 'moon-outline');
    }
}
