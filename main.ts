input.onButtonPressed(Button.A, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M4,
    255,
    SuperBit.enMotors.M2,
    255
    )
})
input.onButtonPressed(Button.B, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M4,
    -255,
    SuperBit.enMotors.M2,
    -255
    )
})
basic.forever(function () {
    basic.showString("I love Betty, Nathan and Ada")
    basic.showIcon(IconNames.Heart)
})
