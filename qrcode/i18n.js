function qrcodeRClk() {
    document.getElementById('qrcodeRClk').innerHTML = chrome.i18n.getMessage('qrcodeRClk');
}
window.addEventListener('load', qrcodeRClk);