function extract(content) {
    let text = document.getElementById(content)
    let pattern =/\(([^(]+)\)/g;
    let matches = text.textContent.matchAll(pattern);
    let arr = [];
    for (const el of matches) {
        arr.push(el[1]);
    }
    return arr.join('; ')
}