function 设置RGB灯颜色 () {
    R = randint(0, 255)
    G = randint(0, 255)
    B = randint(0, 255)
}
function 流水灯2 () {
    for (let index = 0; index < 4; index++) {
        设置RGB灯颜色()
        keyboard.showMatrixColor(x, y, keyboard.rgb(R, G, B))
        y += 1
        basic.pause(100)
    }
    y = 3
    for (let index = 0; index < 4; index++) {
        设置RGB灯颜色()
        keyboard.showMatrixColor(x, y, 0x000000)
        y = y - 1
        basic.pause(100)
    }
}
let B = 0
let G = 0
let R = 0
let y = 0
let x = 0
x = 0
y = 0
for (let index = 0; index < 16; index++) {
    设置RGB灯颜色()
    keyboard.showMatrixColor(x, y, keyboard.rgb(R, G, B))
    x += 1
    if (3 < x) {
        x = 0
        y += 1
    }
    basic.pause(100)
}
y = 0
for (let index = 0; index < 16; index++) {
    设置RGB灯颜色()
    keyboard.showMatrixColor(x, y, 0x000000)
    x += 1
    if (3 < x) {
        x = 0
        y += 1
    }
    basic.pause(100)
}
basic.forever(function () {
    x = 0
    y = 0
    for (let index = 0; index < 4; index++) {
        流水灯2()
        x += 1
        y = 0
    }
})
