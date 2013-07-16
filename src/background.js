

function openQueryTab(info, tab)
{
    var query_url = "http://www.iciba.com/" + encodeURIComponent(info.selectionText);
    chrome.tabs.create({
        "url": query_url,
        "index": tab.index + 1,
        "openerTabId": tab.id,
        "active": true
    });
}


var title = chrome.i18n.getMessage("contextTitle");
var ID = chrome.contextMenus.create({
        "title": title,
        "contexts": ["selection"],
        "onclick": openQueryTab
    });


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-42446561-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

