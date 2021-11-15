let millilitres = 0
input.onButtonPressed(Button.A, function () {
    millilitres += -1
})
input.onPinPressed(TouchPin.P2, function () {
    let tempature_10_degrees = 0
    if (tempature_10_degrees) {
        let add_milk = 0
        basic.showString("" + (add_milk))
    }
})
input.onButtonPressed(Button.AB, function () {
    let _2_millilitres = 0
    if (_2_millilitres) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (_2_millilitres) {
        let tell_alexa_turn_on_kettle = 0
        basic.showString("" + (tell_alexa_turn_on_kettle))
    }
})
input.onButtonPressed(Button.B, function () {
    millilitres += -2
})
input.onPinPressed(TouchPin.P1, function () {
    let cup_empty = 0
    if (cup_empty) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    millilitres += -5
})
