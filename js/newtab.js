function newtabTitle() {
    document.getElementById('newtabTitle').innerHTML = chrome.i18n.getMessage('newtabTitle');
}
window.addEventListener('load', newtabTitle);