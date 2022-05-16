//i18n
function popupGenCode() {
    document.getElementById('popupGenCode').innerHTML = chrome.i18n.getMessage('popupGenCode');
}
window.addEventListener('load', popupGenCode);
function popupTitle() {
    document.getElementById('popupTitle').innerHTML = chrome.i18n.getMessage('popupTitle');
}
window.addEventListener('load', popupTitle);
function popupOptions() {
    document.getElementById('popupOptions').innerHTML = chrome.i18n.getMessage('popupOptions');
}
window.addEventListener('load', popupOptions);

//onClick Options
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('popupOptions');
    // onClick's logic below:
    link.addEventListener('click', function() {
        chrome.runtime.openOptionsPage();
    });
});