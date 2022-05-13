function mainBtnOptions() {
    document.getElementById('mainBtnOptions').innerHTML = chrome.i18n.getMessage('mainBtnOptions');
}
window.addEventListener('load', mainBtnOptions);
function mainBtnVersion() {
    document.getElementById('mainBtnVersion').innerHTML = chrome.i18n.getMessage('mainBtnVersion');
}
window.addEventListener('load', mainBtnVersion);
function mainBtnRAP() {
    document.getElementById('mainBtnRAP').innerHTML = chrome.i18n.getMessage('mainBtnRAP');
}
window.addEventListener('load', mainBtnRAP);