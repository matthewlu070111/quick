function versionVer() {
    document.getElementById('versionVer').innerHTML = chrome.i18n.getMessage('versionVer');
}
window.addEventListener('load', versionVer);