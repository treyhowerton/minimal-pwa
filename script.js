document.addEventListener('DOMContentLoaded', function() {
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/serviceWorker.js', { scope: '/' });
    }
});
