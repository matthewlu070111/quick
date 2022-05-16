//i18n
function versionTitle() {
    document.getElementById('versionTitle').innerHTML = chrome.i18n.getMessage('versionTitle');
}
window.addEventListener('load', versionTitle);
function versionVer() {
    document.getElementById('versionVer').innerHTML = chrome.i18n.getMessage('versionVer');
}
window.addEventListener('load', versionVer);