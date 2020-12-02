document.addEventListener('DOMContentLoaded', () => {
    today = new Date();
    yesterday = new Date();
    yesterday.setDate(today.getDate()-1)

    // localStorage.setItem('privacy_banner_acknowledged', yesterday);
    if (localStorage.getItem('privacy_banner_acknowledged')) {
        last_acknowledgement = new Date(localStorage.getItem('privacy_banner_acknowledged'));
        // Display banner if not acknowledged within 24 hours
        if (last_acknowledgement < yesterday) {
            console.log("Banner displayed.");
            document.querySelector('.privacy-banner').setAttribute('style', 'display: block;');
        } else {
            console.log(`Banner not displayed. Last clicked on ${last_acknowledgement}`);
            $('.privacy-banner').alert('dispose')
        }

    } else {
        console.log("No last_acknowledgement -- banner displayed.");
    }
})

document.querySelector('.banner_close').onclick = () => {
    // When banner close button is clicked, add date of click to localStorage
    now = new Date()
    localStorage.setItem('privacy_banner_acknowledged', now);
    $('.privacy-banner').alert('dispose')
}
