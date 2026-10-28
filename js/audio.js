/**
 * Audio Pronunciation Module
 * Uses HTML5 SpeechSynthesis API (zero external network dependencies, offline-ready)
 */

const AudioPlayer = {
  voice: null,

  init() {
    if ('speechSynthesis' in window) {
      this.loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  },

  loadVoices() {
    const voices = window.speechSynthesis.getVoices();
    // Prefer high quality English voices: British or US natural voices
    const preferredVoices = [
      'Daniel', 'Samantha', 'Karen', 'Serena', 'Moira', 'Google US English', 'Google UK English Female', 'en-US', 'en-GB'
    ];
    for (const name of preferredVoices) {
      const match = voices.find(v => v.name.includes(name) || v.lang.startsWith(name));
      if (match) {
        this.voice = match;
        break;
      }
    }
    if (!this.voice && voices.length > 0) {
      this.voice = voices.find(v => v.lang.startsWith('en')) || voices[0];
    }
  },

  speak(text, onEnd) {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported in this browser.');
      if (onEnd) onEnd();
      return;
    }

    window.speechSynthesis.cancel(); // Stop any pending speech

    const utterance = new SpeechSynthesisUtterance(text);
    if (this.voice) {
      utterance.voice = this.voice;
    }
    utterance.rate = 0.88; // Slightly slower for crisp articulation
    utterance.pitch = 1.0;

    utterance.onend = () => {
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  }
};

if (typeof window !== 'undefined') {
  window.AudioPlayer = AudioPlayer;
}
