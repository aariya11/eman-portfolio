// Web Audio API generative ambient soundscape
// Default: strictly muted, no autoplay.

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying = false;
  private oscillators: OscillatorNode[] = [];

  public init() {
    if (typeof window === "undefined") return;
    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
  }

  public async start(): Promise<boolean> {
    this.init();
    if (!this.ctx) return false;

    if (this.ctx.state === "suspended") {
      await this.ctx.resume();
    }

    if (this.isPlaying) return true;

    // Create master gain
    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    // Smooth fade in over 2.5 seconds to avoid sudden loud bursts
    masterGain.gain.exponentialRampToValueAtTime(0.035, this.ctx.currentTime + 2.5);

    // Low-pass filter for warm, dark, luxurious room ambience
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(280, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.8, this.ctx.currentTime);

    // Fundamental warm frequencies (A=432Hz harmonic base: 108Hz, 216Hz, 324Hz)
    const freqs = [108, 162, 216, 324];
    this.oscillators = [];

    freqs.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Subtle detune for organic texture
      osc.detune.setValueAtTime((idx - 1.5) * 3, this.ctx.currentTime);

      oscGain.gain.setValueAtTime(0.25 / (idx + 1), this.ctx.currentTime);

      osc.connect(oscGain);
      oscGain.connect(filter);
      osc.start();
      this.oscillators.push(osc);
    });

    filter.connect(masterGain);
    masterGain.connect(this.ctx.destination);
    this.masterGain = masterGain;
    this.isPlaying = true;

    return true;
  }

  public stop() {
    if (!this.ctx || !this.isPlaying || !this.masterGain) return;

    const currentTime = this.ctx.currentTime;
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, currentTime + 1.2);

    setTimeout(() => {
      this.oscillators.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore already stopped
        }
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 1250);
  }

  // Subtle luxury UI click/hover feedback tick
  public playSubtleTick() {
    if (!this.ctx || !this.isPlaying) return;

    try {
      const tickOsc = this.ctx.createOscillator();
      const tickGain = this.ctx.createGain();

      tickOsc.type = "sine";
      tickOsc.frequency.setValueAtTime(1200, this.ctx.currentTime);
      tickOsc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);

      tickGain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      tickGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04);

      tickOsc.connect(tickGain);
      tickGain.connect(this.ctx.destination);

      tickOsc.start();
      tickOsc.stop(this.ctx.currentTime + 0.045);
    } catch {
      // Audio context might be dormant
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const soundEngine = new AmbientSoundEngine();
