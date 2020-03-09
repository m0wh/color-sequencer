import { closeHat, hiConga, cowbell, snare, kick } from './assets/samples/tr808/index'

function pad (n: string, width: number): string {
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n
}

function color2rythm (colorHex: string): Array<boolean> {
  const hex: string = colorHex.replace('#', '')
  const bin: string = parseInt(hex, 16).toString(2).padStart(8, '0')
  return pad(bin, 24).split('').map(val => val === '1')
}

class Sequencer {
  private bpm: number = 120
  private interval: number
  public sequences: Array<{ pattern: Array<boolean>, sample: HTMLAudioElement }> = []
  public currentStep: number = 0

  constructor (sequences: Array<{ pattern: Array<boolean>, sampleSrc: string }>, tempo: number = 120) {
    this.sequences = sequences.map(sequence => ({
      pattern: sequence.pattern,
      sample: new Audio(sequence.sampleSrc)
    }))
    this.bpm = tempo
  }

  public play (callback: (number) => void): void {
    this.currentStep = 0
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      callback(this.currentStep)
      this.step()
    }, (60 * 1000) / this.bpm)
  }

  private step (): void {
    this.sequences.forEach(sequence => {
      const shouldPlay = sequence.pattern[this.currentStep]

      if (shouldPlay) {
        sequence.sample.pause()
        sequence.sample.currentTime = 0
        sequence.sample.play()
      }
    })

    this.currentStep = (this.currentStep + 1) % this.sequences[0].pattern.length
  }
}

const sequences = [
  { color: '#4285F4', sample: cowbell },
  { color: '#DB4437', sample: snare },
  { color: '#F4B400', sample: closeHat },
  { color: '#0F9D58', sample: hiConga },
  { color: '#AAAAAA', sample: kick }
]

const seq = new Sequencer(sequences.map(s => ({ pattern: color2rythm(s.color), sampleSrc: s.sample })), 120)

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

const physicalScl = 30
const scl = physicalScl * devicePixelRatio
canvas.style.height = physicalScl * seq.sequences.length + 'px'
canvas.style.widows = physicalScl * seq.sequences[0].pattern.length + 'px'
canvas.height = scl * seq.sequences.length
canvas.width = scl * seq.sequences[0].pattern.length

function draw (sequencerInstance: Sequencer, currentStep: number): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  sequencerInstance.sequences.forEach((sequence, y) => {
    sequence.pattern.forEach((step, x) => {
      ctx.fillStyle = step ? sequences[y].color : '#eceff1'
      const margin = x === currentStep ? 10 : 2
      ctx.fillRect(x * scl + margin, y * scl + margin, scl - 2 * margin, scl - 2 * margin)
    })
  })
}

draw(seq, 0)

document.body.append(canvas)

document.querySelector('button').addEventListener('click', () => {
  seq.play(currentStep => {
    draw(seq, currentStep)
  })
})
