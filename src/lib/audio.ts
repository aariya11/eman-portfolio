// Audio Engine completely disabled per user preference
// All methods are strict no-ops to guarantee zero sound emissions.

class AmbientSoundEngine {
  public init() {}
  public async start(): Promise<boolean> {
    return false;
  }
  public stop() {}
  public toggle(): boolean {
    return false;
  }
  public getIsPlaying(): boolean {
    return false;
  }
  public playSubtleTick() {}
}

export const soundEngine = new AmbientSoundEngine();
