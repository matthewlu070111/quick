chrome.runtime.onInstalled.addListener(function() {
    //右键菜单
    chrome.contextMenus.create({
        title: chrome.i18n.getMessage("swOne"),
        contexts: ['selection'],
        id: 'quicker-1',
        type: 'normal'
    });
    chrome.contextMenus.create({
        title: chrome.i18n.getMessage("swTwo"),
        contexts: ['selection'],
        id: 'quicker-2',
        type: 'normal'
    });
    chrome.contextMenus.create({
        title: chrome.i18n.getMessage("swThree"),
        contexts: ['selection'],
        id: 'quicker-3',
        type: 'normal'
    });
    chrome.contextMenus.create({
        title: chrome.i18n.getMessage("swFour"),
        contexts: ['selection'],
        id: "quicker-4",
        type: 'normal'
    })
    function contextClick(info, tabs) {
        const { menuItemId } = info
        if (menuItemId === 'quicker-1') {       
            chrome.tabs.create({ url: chrome.i18n.getMessage("swOneURL") + encodeURI(info.selectionText) });
        }
        else if (menuItemId === "quicker-2") {
            chrome.tabs.create({ url: chrome.i18n.getMessage("swTwoURL") + encodeURI(info.selectionText) });
        }
        else if (menuItemId === "quicker-3") {
            chrome.tabs.create({ url: chrome.i18n.getMessage("swThreeURL") + encodeURI(info.selectionText) });
        }
        else if (menuItemId === "quicker-4") {
            chrome.tabs.create({ url: chrome.i18n.getMessage("swFourURL") + encodeURI(info.selectionText) });
        }
    }
    chrome.contextMenus.onClicked.addListener(contextClick);
});