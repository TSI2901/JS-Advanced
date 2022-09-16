function f(arr) {
    const result = arr.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    });
    return result.join('\n');
}