function optionsTitle() {
    document.getElementById('optionsTitle').innerHTML = chrome.i18n.getMessage('optionsTitle');
}
window.addEventListener('load', optionsTitle);