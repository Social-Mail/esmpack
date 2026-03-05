// Add Font awesome
function addStyleSheet(href, integrity) {
    if (!document.head.querySelector(`[href="${href}"]`)) {
        const fa = document.createElement("link");
        fa.href = href;
        fa.crossOrigin = "anonymous";
        fa.rel = "stylesheet";
        if (integrity) {
            fa.integrity = integrity;
        }
        document.head.appendChild(fa);
    }
}

addStyleSheet("https://cdn-npm-git.8ct.co/npm/package/@c8private/fa-icons@7.1.0/css/all.min.css");
addStyleSheet("https://cdn.jsdelivr.net/npm/@web-atoms/data-styles@latest/data-styles.css");
addStyleSheet("/dist/styles/GlobalStyles.global.css");
// addStyleSheet("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
//     "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3")

if (!/mobile/i.test(navigator.userAgent)) {
    document.body.style.minHeight = "500px";
    document.body.style.minWidth = "500px";
} else {
    document.body.style.width = "100%";
    document.body.style.height = "100%";
}

// const createElement = document.createElement;
// document.createElement = function (name) {
//     const e = createElement.apply(this, arguments);
//     if (name === "input") {
//         let i = 0;
//         function turnOffAutoComplete() {
//             if(!document.body.contains(e)) {
//                 i++;
//                 if (i < 100) {
//                     setTimeout(turnOffAutoComplete, 100);
//                     return;
//                 }
//             }
//             e.autocomplete = "google=stop";
//         }
//         setTimeout(turnOffAutoComplete, 100);
//     }
//     return e;
// };
// document.isAutoCompleteSet = true;