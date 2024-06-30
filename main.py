def tone(num: number,w: number):
    music.play(music.create_sound_expression(shape[i],
            num,
            num,
            500,
            500,
            1000,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)

def on_button_pressed_a():
    for i in range(4):
        tone(440,i)
        tone(660,i)
        tone(880,i)
        music.stop_all_sounds()
input.on_button_pressed(Button.A, on_button_pressed_a)

shape = [WaveShape.SINE,
    WaveShape.TRIANGLE,
    WaveShape.SQUARE,
    WaveShape.NOISE]

def on_forever():
    pass
basic.forever(on_forever)

for i in range(4):
        tone(440,i)
        tone(660,i)
        tone(880,i)
        music.stop_all_sounds()