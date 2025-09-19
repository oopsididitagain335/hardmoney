document.addEventListener('DOMContentLoaded', function () {

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Cookie Consent Logic
    const cookieBanner = document.getElementById('cookie-banner');
    const userConsent = localStorage.getItem('cookieConsent');

    if (!userConsent) {
        cookieBanner.classList.add('active');
    }

    document.getElementById('cookie-accept')?.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.classList.remove('active');
        console.log("✅ Cookies Accepted");
        // Load analytics here if needed
    });

    document.getElementById('cookie-deny')?.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'denied');
        cookieBanner.classList.remove('active');
        console.log("❌ Cookies Denied");
    });

    document.getElementById('cookie-customize')?.addEventListener('click', function () {
        alert("Cookie customization coming soon. For now, please Accept or Deny.");
    });

});
