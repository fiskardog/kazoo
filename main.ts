function tone (num: number, w: number) {
    music.play(music.createSoundExpression(shape[0], num, num, 500, 500, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.tonePlayable(Note.C, music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.A, function () {
    for (let i = 0; i <= 3; i++) {
        tone(440, i)
        tone(660, i)
        tone(880, i)
        music.stopAllSounds()
    }
})
let shape = [
WaveShape.Sine,
WaveShape.Triangle,
WaveShape.Square,
WaveShape.Noise
]
for (let j = 0; j <= 3; j++) {
    tone(440, j)
    tone(660, j)
    tone(880, j)
    music.stopAllSounds()
}
basic.forever(function () {
	
})
