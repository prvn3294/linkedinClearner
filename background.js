function getDOM() {
  return Array.from(
    document.getElementsByTagName('div'),
    el => el.innerHTML
  );
}

chrome.tabs.onActivated.addListener(async info => {

  let domRes = await chrome.scripting.executeScript({
    target: {tabId: info.tabId},
    func: getDOM,
  }).catch(console.error);
  if (!domRes) return;

  console.log(domRes);
});


