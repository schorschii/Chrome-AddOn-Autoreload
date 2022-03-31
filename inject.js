function init() {
    const el = document.createElement("meta")
    el.setAttribute('http-equiv', 'refresh');
    el.setAttribute('content', '120');
    document.head.appendChild(el);
}

init()