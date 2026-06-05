/* ==========================================================================
   INTERACTIVE ARCHITECTURE GALLERY - CHITTURI NAGA RAJA TEJA ROHITH
   ========================================================================== */

const SVG_DIAGRAMS = {
    smartretail: `
        <svg class="svg-diag" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Definitions for markers and filters -->
            <defs>
                <linearGradient id="blue-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#3b82f6" />
                    <stop offset="100%" stop-color="#22d3ee" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <drop-shadow dx="0" dy="0" stdDeviation="4" flood-color="#22d3ee" flood-opacity="0.3"/>
                </filter>
            </defs>

            <!-- Background grid lines -->
            <line x1="50" y1="150" x2="750" y2="150" stroke="rgba(255,255,255,0.02)" stroke-dasharray="4" />
            <line x1="220" y1="50" x2="220" y2="250" stroke="rgba(255,255,255,0.02)" stroke-dasharray="4" />
            <line x1="400" y1="50" x2="400" y2="250" stroke="rgba(255,255,255,0.02)" stroke-dasharray="4" />
            <line x1="580" y1="50" x2="580" y2="250" stroke="rgba(255,255,255,0.02)" stroke-dasharray="4" />

            <!-- Inter-node connection paths -->
            <path id="sr-path-1" d="M 110 150 C 165 150, 165 100, 220 100" stroke="rgba(59, 130, 246, 0.4)" stroke-width="1.5" fill="none" class="diag-line" />
            <path id="sr-path-2" d="M 220 100 C 310 100, 310 150, 400 150" stroke="rgba(34, 211, 238, 0.4)" stroke-width="1.5" fill="none" class="diag-line" />
            <path id="sr-path-3" d="M 110 150 C 165 150, 165 200, 220 200" stroke="rgba(59, 130, 246, 0.4)" stroke-width="1.5" fill="none" class="diag-line" />
            <path id="sr-path-4" d="M 220 200 C 310 200, 310 150, 400 150" stroke="rgba(34, 211, 238, 0.4)" stroke-width="1.5" fill="none" class="diag-line" />
            <path id="sr-path-5" d="M 400 150 C 490 150, 490 150, 580 150" stroke="rgba(168, 85, 247, 0.4)" stroke-width="1.5" fill="none" class="diag-line" />
            <path id="sr-path-6" d="M 580 150 C 665 150, 665 150, 750 150" stroke="rgba(34, 211, 238, 0.4)" stroke-width="1.5" fill="none" class="diag-line" />

            <!-- Animated flowing packets -->
            <circle r="4" fill="#22d3ee" filter="url(#glow)">
                <animateMotion dur="4s" repeatCount="indefinite">
                    <mpath href="#sr-path-1" />
                </animateMotion>
            </circle>
            <circle r="4" fill="#3b82f6" filter="url(#glow)">
                <animateMotion dur="5s" repeatCount="indefinite">
                    <mpath href="#sr-path-2" />
                </animateMotion>
            </circle>
            <circle r="4" fill="#22d3ee" filter="url(#glow)">
                <animateMotion dur="4.5s" repeatCount="indefinite">
                    <mpath href="#sr-path-3" />
                </animateMotion>
            </circle>
            <circle r="4" fill="#a855f7" filter="url(#glow)">
                <animateMotion dur="6s" repeatCount="indefinite">
                    <mpath href="#sr-path-5" />
                </animateMotion>
            </circle>
            <circle r="4" fill="#22d3ee" filter="url(#glow)">
                <animateMotion dur="3.5s" repeatCount="indefinite">
                    <mpath href="#sr-path-6" />
                </animateMotion>
            </circle>

            <!-- Node Elements (Glow / Box) -->
            <!-- NODE 1: User NL Query -->
            <g class="diag-node" style="color: #3b82f6;">
                <circle cx="110" cy="150" r="24" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="110" y="153" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">USER</text>
                <text x="110" y="190" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Natural Language</text>
            </g>

            <!-- NODE 2A: Vanna AI Core -->
            <g class="diag-node" style="color: #a855f7;">
                <rect x="180" y="76" width="80" height="48" rx="8" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="220" y="100" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">Vanna AI</text>
                <text x="220" y="112" fill="#94a3b8" font-size="7" font-family="monospace" text-anchor="middle">NL to SQL</text>
                <text x="220" y="62" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">AI Pipeline</text>
            </g>

            <!-- NODE 2B: SARIMA Model -->
            <g class="diag-node" style="color: #eab308;">
                <rect x="180" y="176" width="80" height="48" rx="8" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="220" y="200" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">SARIMA</text>
                <text x="220" y="212" fill="#94a3b8" font-size="7" font-family="monospace" text-anchor="middle">Time-Series</text>
                <text x="220" y="242" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Forecasting Engine</text>
            </g>

            <!-- NODE 3: Data Store -->
            <g class="diag-node" style="color: #10b981;">
                <circle cx="400" cy="150" r="28" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="400" y="152" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">Database</text>
                <text x="400" y="162" fill="#94a3b8" font-size="6" font-family="monospace" text-anchor="middle">PostgreSQL</text>
                <text x="400" y="195" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Data Store</text>
            </g>

            <!-- NODE 4: Recommendation Engine -->
            <g class="diag-node" style="color: #6366f1;">
                <rect x="540" y="126" width="80" height="48" rx="8" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="580" y="150" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">Recommender</text>
                <text x="580" y="161" fill="#94a3b8" font-size="6" font-family="monospace" text-anchor="middle">AI Insights</text>
                <text x="580" y="112" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Analytics Hub</text>
            </g>

            <!-- NODE 5: Dashboard / Action Decisions -->
            <g class="diag-node" style="color: #22d3ee;">
                <circle cx="750" cy="150" r="24" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="750" y="153" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">DECISION</text>
                <text x="750" y="190" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Business Impact</text>
            </g>
        </svg>
    `,
    secondbrain: `
        <svg class="svg-diag" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="cyan-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <drop-shadow dx="0" dy="0" stdDeviation="4" flood-color="#22d3ee" flood-opacity="0.3"/>
                </filter>
            </defs>

            <!-- Connection paths -->
            <path id="sb-path-1" d="M 110 150 C 180 150, 180 150, 250 150" stroke="rgba(59, 130, 246, 0.4)" stroke-width="1.5" fill="none" class="diag-line" />
            <path id="sb-path-2" d="M 250 150 C 330 150, 330 150, 410 150" stroke="rgba(34, 211, 238, 0.4)" stroke-width="1.5" fill="none" class="diag-line" />
            <path id="sb-path-3" d="M 410 150 C 490 150, 490 100, 570 100" stroke="rgba(168, 85, 247, 0.4)" stroke-width="1.5" fill="none" class="diag-line" />
            <path id="sb-path-4" d="M 410 150 C 490 150, 490 200, 570 200" stroke="rgba(168, 85, 247, 0.4)" stroke-width="1.5" fill="none" class="diag-line" />
            <path id="sb-path-5" d="M 570 100 C 650 100, 650 150, 730 150" stroke="rgba(34, 211, 238, 0.4)" stroke-width="1.5" fill="none" class="diag-line" />
            <path id="sb-path-6" d="M 570 200 C 650 200, 650 150, 730 150" stroke="rgba(34, 211, 238, 0.4)" stroke-width="1.5" fill="none" class="diag-line" />

            <!-- Animated flowing packets -->
            <circle r="4.5" fill="#3b82f6" filter="url(#cyan-glow)">
                <animateMotion dur="3s" repeatCount="indefinite">
                    <mpath href="#sb-path-1" />
                </animateMotion>
            </circle>
            <circle r="4.5" fill="#22d3ee" filter="url(#cyan-glow)">
                <animateMotion dur="3.5s" repeatCount="indefinite">
                    <mpath href="#sb-path-2" />
                </animateMotion>
            </circle>
            <circle r="4" fill="#a855f7" filter="url(#cyan-glow)">
                <animateMotion dur="4.2s" repeatCount="indefinite">
                    <mpath href="#sb-path-3" />
                </animateMotion>
            </circle>
            <circle r="4" fill="#a855f7" filter="url(#cyan-glow)">
                <animateMotion dur="4.8s" repeatCount="indefinite">
                    <mpath href="#sb-path-4" />
                </animateMotion>
            </circle>

            <!-- Nodes -->
            <!-- NODE 1: Ingestion -->
            <g class="diag-node" style="color: #3b82f6;">
                <circle cx="110" cy="150" r="24" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="110" y="153" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">FILES</text>
                <text x="110" y="190" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Knowledge Ingestion</text>
            </g>

            <!-- NODE 2: Gemini Embeddings -->
            <g class="diag-node" style="color: #a855f7;">
                <rect x="210" y="126" width="80" height="48" rx="8" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="250" y="148" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">Gemini LLM</text>
                <text x="250" y="160" fill="#94a3b8" font-size="6" font-family="monospace" text-anchor="middle">Embeddings</text>
                <text x="250" y="112" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Vectorization</text>
            </g>

            <!-- NODE 3: Vector Store -->
            <g class="diag-node" style="color: #10b981;">
                <circle cx="410" cy="150" r="28" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="410" y="150" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">pgvector</text>
                <text x="410" y="160" fill="#94a3b8" font-size="6" font-family="monospace" text-anchor="middle">Supabase DB</text>
                <text x="410" y="195" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Memory Layer</text>
            </g>

            <!-- NODE 4A: Semantic Search -->
            <g class="diag-node" style="color: #22d3ee;">
                <rect x="530" y="76" width="80" height="48" rx="8" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="570" y="100" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">Search Core</text>
                <text x="570" y="111" fill="#94a3b8" font-size="6" font-family="monospace" text-anchor="middle">Similarity</text>
                <text x="570" y="62" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Semantic Query</text>
            </g>

            <!-- NODE 4B: Summary Engine -->
            <g class="diag-node" style="color: #eab308;">
                <rect x="530" y="176" width="80" height="48" rx="8" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="570" y="200" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">Summarizer</text>
                <text x="570" y="211" fill="#94a3b8" font-size="6" font-family="monospace" text-anchor="middle">Auto-tagging</text>
                <text x="570" y="242" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Extraction Node</text>
            </g>

            <!-- NODE 5: User client -->
            <g class="diag-node" style="color: #3b82f6;">
                <circle cx="730" cy="150" r="24" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="730" y="153" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">Next.js</text>
                <text x="730" y="190" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Interface Hub</text>
            </g>
        </svg>
    `,
    throwball: `
        <svg class="svg-diag" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="green-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <drop-shadow dx="0" dy="0" stdDeviation="4" flood-color="#10b981" flood-opacity="0.3"/>
                </filter>
            </defs>

            <!-- WS connection lines -->
            <path id="tb-path-1" d="M 110 150 C 180 150, 180 150, 250 150" stroke="rgba(239, 68, 68, 0.4)" stroke-width="1.5" fill="none" class="diag-line" />
            <path id="tb-path-2" d="M 250 150 C 335 150, 335 150, 420 150" stroke="rgba(16, 185, 129, 0.4)" stroke-width="2" fill="none" class="diag-line" />
            <path id="tb-path-3" d="M 420 150 C 500 150, 500 150, 580 150" stroke="rgba(16, 185, 129, 0.4)" stroke-width="2" fill="none" class="diag-line" />
            <path id="tb-path-4" d="M 580 150 C 655 150, 655 150, 730 150" stroke="rgba(34, 211, 238, 0.4)" stroke-width="1.5" fill="none" class="diag-line" />

            <!-- Dynamic Fast packets -->
            <circle r="4" fill="#ef4444" filter="url(#green-glow)">
                <animateMotion dur="2s" repeatCount="indefinite">
                    <mpath href="#tb-path-1" />
                </animateMotion>
            </circle>
            <circle r="5" fill="#10b981" filter="url(#green-glow)">
                <animateMotion dur="1s" repeatCount="indefinite">
                    <mpath href="#tb-path-2" />
                </animateMotion>
            </circle>
            <circle r="5" fill="#10b981" filter="url(#green-glow)">
                <animateMotion dur="1.2s" repeatCount="indefinite">
                    <mpath href="#tb-path-3" />
                </animateMotion>
            </circle>
            <circle r="4.5" fill="#22d3ee" filter="url(#green-glow)">
                <animateMotion dur="1.5s" repeatCount="indefinite">
                    <mpath href="#tb-path-4" />
                </animateMotion>
            </circle>

            <!-- Nodes -->
            <!-- NODE 1: Admin client -->
            <g class="diag-node" style="color: #ef4444;">
                <circle cx="110" cy="150" r="24" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="110" y="153" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">REF CORE</text>
                <text x="110" y="190" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Referee Client (Auth)</text>
            </g>

            <!-- NODE 2: Express App / Socket Gateway -->
            <g class="diag-node" style="color: #10b981;">
                <rect x="210" y="114" width="80" height="72" rx="8" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="250" y="142" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">Socket.IO</text>
                <text x="250" y="154" fill="#94a3b8" font-size="6" font-family="monospace" text-anchor="middle">Express / Node</text>
                <text x="250" y="166" fill="#94a3b8" font-size="6" font-family="monospace" text-anchor="middle">JWT Verification</text>
                <text x="250" y="100" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">WebSocket Gateway</text>
            </g>

            <!-- NODE 3: MongoDB Store -->
            <g class="diag-node" style="color: #10b981;">
                <circle cx="420" cy="150" r="28" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="420" y="152" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">MongoDB</text>
                <text x="420" y="195" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Persistence Layer</text>
            </g>

            <!-- NODE 4: State Sync Manager -->
            <g class="diag-node" style="color: #a855f7;">
                <rect x="540" y="126" width="80" height="48" rx="8" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="580" y="148" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">State Sync</text>
                <text x="580" y="160" fill="#94a3b8" font-size="6" font-family="monospace" text-anchor="middle">Broadcast Loop</text>
                <text x="580" y="112" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">State Manager</text>
            </g>

            <!-- NODE 5: Spectator web app -->
            <g class="diag-node" style="color: #22d3ee;">
                <circle cx="730" cy="150" r="24" fill="#070b15" stroke="currentColor" stroke-width="1.5" />
                <text x="730" y="153" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">SPECTATOR</text>
                <text x="730" y="190" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Spectator Client</text>
            </g>
        </svg>
    `
};

class ArchitectureGallery {
    constructor() {
        this.tabs = document.querySelectorAll('.gallery-tabs .tab-btn');
        this.containers = document.querySelectorAll('.diagram-container');
        this.exploreButtons = document.querySelectorAll('.system-explore-btn');
        
        this.init();
        this.registerEvents();
    }

    init() {
        // Inject SVG markup into their respective wrappers
        const srWrapper = document.getElementById('svg-smartretail-wrapper');
        const sbWrapper = document.getElementById('svg-secondbrain-wrapper');
        const tbWrapper = document.getElementById('svg-throwball-wrapper');

        if (srWrapper) srWrapper.innerHTML = SVG_DIAGRAMS.smartretail;
        if (sbWrapper) sbWrapper.innerHTML = SVG_DIAGRAMS.secondbrain;
        if (tbWrapper) tbWrapper.innerHTML = SVG_DIAGRAMS.throwball;
    }

    registerEvents() {
        // Tab switching events
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-target');
                this.switchTab(target);
            });
        });

        // Flagship System Explore triggers scroll and auto tab switch
        this.exploreButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const system = btn.getAttribute('data-system');
                let targetId = '';
                
                if (system === 'smartretail') targetId = 'arch-smartretail';
                else if (system === 'secondbrain') targetId = 'arch-secondbrain';
                else if (system === 'throwball') targetId = 'arch-throwball';

                if (targetId) {
                    this.switchTab(targetId);
                    
                    // Smooth scroll to architecture gallery section
                    const section = document.getElementById('architecture-gallery');
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }

    switchTab(targetId) {
        // Reset tabs and containers
        this.tabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
            if (t.getAttribute('data-target') === targetId) {
                t.classList.add('active');
                t.setAttribute('aria-selected', 'true');
            }
        });

        this.containers.forEach(c => {
            c.classList.remove('active');
            if (c.getAttribute('id') === targetId) {
                c.classList.add('active');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.architectureGallery = new ArchitectureGallery();
});
