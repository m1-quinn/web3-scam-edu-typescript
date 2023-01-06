export const DirectPage = async () => {
    if(window.location.href.includes('scam-education')) {
        window.open("https://scam-edu-blocklist.com", '_blank');
    } else if(window.location.href.includes('scam-edu-blocklist'))
        window.open("https://scam-education.web.app/", '_blank');
}