function showMessage() {
    document.getElementById('message').textContent = "Welcome to your PWA!";
}

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('Service Worker registered', reg))
            .catch(err => console.error('Service Worker failed', err));
    });
}