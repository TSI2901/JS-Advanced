function rectangle(width, height, color) {
    let rectangle = {
        width: width,
        height: height,
        color: color[0].toUpperCase() + color.slice(1),
        calcArea() { return this.width * this.height }
    }

    return rectangle;
}