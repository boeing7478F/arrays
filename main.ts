input.onButtonPressed(Button.A, function () {
    basic.showNumber(list[index])
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(list[index])
    index += 1
})
let list: number[] = []
let index = 0
index = -1
list = [1, 2, 3]
