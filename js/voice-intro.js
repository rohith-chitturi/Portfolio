/* ==========================================================================
   VOICE INTRODUCTION & AUDIO CONTROL - CHITTURI NAGA RAJA TEJA ROHITH
   ========================================================================== */

class VoiceIntro {
    constructor() {
        this.btn = document.getElementById('voice-intro-btn');
        if (!this.btn) return;

        this.isPlaying = false;
        this.synth = window.speechSynthesis;
        this.utterance = null;
        
        this.introText = "Hi, I'm Rohith. I'm a software engineer and AI systems builder. I engineer intelligent systems that transform complex data into actionable decisions.";

        this.registerEvents();
    }

    registerEvents() {
        this.btn.addEventListener('click', () => {
            this.toggleSpeech();
        });

        // Cancel speech if user leaves the tab
        window.addEventListener('beforeunload', () => {
            if (this.synth) {
                this.synth.cancel();
            }
        });
    }

    toggleSpeech() {
        if (!this.synth) {
            console.warn("Speech Synthesis is not supported in this browser.");
            return;
        }

        if (this.isPlaying) {
            this.stopSpeech();
        } else {
            this.startSpeech();
        }
    }

    startSpeech() {
        // Stop any currently ongoing speech
        this.synth.cancel();

        this.isPlaying = true;
        this.btn.classList.add('playing');
        this.btn.querySelector('.wave-text').innerText = "Speaking...";

        this.utterance = new SpeechSynthesisUtterance(this.introText);
        
        // Custom configurations
        this.utterance.rate = 1.0;  // Standard speed
        this.utterance.pitch = 1.05; // Slightly warm/bright tone

        // Select a high quality english voice if available
        const voices = this.synth.getVoices();
        const preferredVoice = voices.find(voice => 
            (voice.lang.includes('en') && (voice.name.includes('Google') || voice.name.includes('Natural') || voice.name.includes('Microsoft')))
        );
        if (preferredVoice) {
            this.utterance.voice = preferredVoice;
        }

        // On complete callback
        this.utterance.onend = () => {
            this.stopSpeech();
        };

        this.utterance.onerror = (e) => {
            console.error("Speech Synthesis error:", e);
            this.stopSpeech();
        };

        // Speak
        this.synth.speak(this.utterance);
    }

    stopSpeech() {
        if (this.synth) {
            this.synth.cancel();
        }
        
        this.isPlaying = false;
        this.btn.classList.remove('playing');
        this.btn.querySelector('.wave-text').innerText = "Voice Intro";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.voiceIntro = new VoiceIntro();
    
    // Voices load asynchronously, populate options if needed
    if (window.speechSynthesis && window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
            // Hot load voices
            if (window.voiceIntro) {
                const voices = window.speechSynthesis.getVoices();
                console.log(`Loaded ${voices.length} system speech voices.`);
            }
        };
    }
});
