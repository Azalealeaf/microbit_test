input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 400), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . # . #
        # . # . #
        # # # . #
        # . # . #
        # . # . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showLeds(`
        . . # . .
        . . . . .
        # . . . #
        . . . . .
        . . # . .
        `)
    basic.clearScreen()
})
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
