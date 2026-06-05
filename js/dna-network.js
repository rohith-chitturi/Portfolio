/* ==========================================================================
   INTERACTIVE NEURAL NETWORK (ENGINEERING DNA) - CHITTURI NAGA RAJA TEJA ROHITH
   ========================================================================== */

const DNA_TELEMETRY = {
    software_engineering: {
        title: "Software Engineering",
        tagline: "Rigorous standards, modular builds, and scalable logic.",
        concepts: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "SDLC & Git Workflow", "Agile Methodologies"],
        stack: ["Java", "Python", "C++", "C", "Git & GitHub"],
        impact: "Applied across all systems to ensure low-latency calculations, sub-second API lookups, and clear, documented, maintainable codebase structures."
    },
    system_design: {
        title: "System Design",
        tagline: "Architecting fault-tolerant services and low-latency nodes.",
        concepts: ["API Gateway Infrastructure", "Microservices vs. Monoliths", "Load Balancing & Caching", "Database Normalization"],
        stack: ["REST APIs", "MVC Pattern", "Auth Layers", "WebSocket Gateways"],
        impact: "Formed the architectural blueprint for Throwball Live Event score servers, managing active data propagation with zero connection dropping."
    },
    distributed_systems: {
        title: "Distributed Systems",
        tagline: "Managing asynchronous synchronization across networked clients.",
        concepts: ["Real-Time WebSocket Sync", "Low-Latency Data Pipelines", "Event-Driven Architecture", "Auth Gateways"],
        stack: ["Socket.IO", "Node.js", "Express.js", "WebSockets"],
        impact: "Built real-time scoring platforms handling multiple concurrent referees and spectators syncing scores sub-50ms."
    },
    artificial_intelligence: {
        title: "Artificial Intelligence",
        tagline: "Engineering reasoning layers and predictive data models.",
        concepts: ["Generative AI Pipelines", "Conversational BI Engines", "Time-Series Seasonal Forecasts", "Semantic Vector Search"],
        stack: ["Gemini API", "Vanna AI", "SARIMA Engine", "pgvector / Embeddings"],
        impact: "Automated business forecasting in SmartRetail AI and enabled multi-document semantic retrieval in Second Brain AI."
    },
    full_stack: {
        title: "Full Stack Development",
        tagline: "Connecting beautiful user flows to optimized backend clusters.",
        concepts: ["State Synchronization", "Responsive Layout Architecture", "Session Management", "Database Index Tuning"],
        stack: ["Next.js", "React.js", "Node.js", "Supabase", "PostgreSQL", "MongoDB"],
        impact: "Engineered responsive, highly performant SPAs syncing state directly with relational and document database engines."
    },
    problem_solving: {
        title: "Problem Solving",
        tagline: "Formulating optimal algorithms for complex computational limits.",
        concepts: ["Asymptotic Time Complexity", "Space Complexity Optimization", "Graph Traversal & Partitioning", "Dynamic Programming"],
        stack: ["LeetCode Practice", "System Debugging", "Memory Optimization"],
        impact: "Maintained a strong track record (CGPA 9.05 / 9.95) and finished as Runner-up in the Abacus Technical Quiz 2025."
    }
};

class DNANetwork {
    constructor() {
        this.canvas = document.getElementById('dna-network-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.panel = document.getElementById('dna-details-panel');
        this.nodes = [];
        this.selectedKey = null;
        this.time = 0;

        this.colors = {
            baseBlue: '#3b82f6',
            accentCyan: '#22d3ee',
            slateDark: '#0f172a',
            slateMuted: '#94a3b8'
        };

        this.init();
        this.animate();
        this.registerEvents();
    }

    init() {
        this.resize();
        this.createNodes();
    }

    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height || 450;
    }

    createNodes() {
        const cx = this.canvas.width / 2;
        const cy = this.canvas.height / 2;
        
        // Define positioning for the 6 core areas in a circular grid surrounding a central core
        const keys = Object.keys(DNA_TELEMETRY);
        const radius = Math.min(cx, cy) * 0.7;

        this.nodes = [];

        // Central core node
        this.nodes.push({
            key: 'core',
            label: 'ROHITH DNA',
            x: cx,
            y: cy,
            baseX: cx,
            baseY: cy,
            radius: 36,
            glow: 15,
            phase: 0,
            amplitude: 4,
            isCore: true
        });

        // Outer nodes
        keys.forEach((key, index) => {
            const angle = (index * (2 * Math.PI)) / keys.length;
            const x = cx + Math.cos(angle) * radius;
            const y = cy + Math.sin(angle) * radius;

            this.nodes.push({
                key: key,
                label: DNA_TELEMETRY[key].title,
                x: x,
                y: y,
                baseX: x,
                baseY: y,
                radius: 12,
                glow: 6,
                phase: index * 0.8,
                amplitude: 12,
                isCore: false
            });
        });
    }

    registerEvents() {
        window.addEventListener('resize', () => {
            this.init();
        });

        // Mouse Move Hover State check
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const mx = e.clientX - rect.left;
            const my = e.clientY - rect.top;

            let hoveredNode = null;
            this.nodes.forEach(node => {
                const dist = Math.hypot(node.x - mx, node.y - my);
                // Check within expanded hover radius
                if (dist < node.radius + 15) {
                    hoveredNode = node;
                }
            });

            if (hoveredNode && !hoveredNode.isCore) {
                this.canvas.style.cursor = 'pointer';
                this.hoveredKey = hoveredNode.key;
            } else {
                this.canvas.style.cursor = 'default';
                this.hoveredKey = null;
            }
        });

        // Click event select node
        this.canvas.addEventListener('click', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const mx = e.clientX - rect.left;
            const my = e.clientY - rect.top;

            this.nodes.forEach(node => {
                const dist = Math.hypot(node.x - mx, node.y - my);
                if (dist < node.radius + 15 && !node.isCore) {
                    this.selectNode(node.key);
                }
            });
        });
    }

    selectNode(key) {
        this.selectedKey = key;
        const data = DNA_TELEMETRY[key];
        
        // Dynamic HTML injection in details panel
        this.panel.innerHTML = `
            <div class="dna-node-expanded">
                <div class="dna-node-metrics-label">Core Specialization Telemetry</div>
                <h3 class="dna-node-expanded-title">${data.title}</h3>
                <p class="dna-node-expanded-desc">${data.tagline}</p>
                
                <div class="dna-node-metrics-label">Theoretical Concepts</div>
                <ul class="opportunities-list" style="margin-bottom: 24px; gap: 8px;">
                    ${data.concepts.map(c => `
                        <li style="font-size: 0.9rem;">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-cyan);"><polyline points="20 6 9 17 4 12"/></svg>
                            <span>${c}</span>
                        </li>
                    `).join('')}
                </ul>
                
                <div class="dna-node-metrics-label">Technology Stack</div>
                <div class="dna-tech-tags" style="margin-bottom: 24px;">
                    ${data.stack.map(s => `<span class="dna-tech-tag">${s}</span>`).join('')}
                </div>
                
                <div class="dna-node-metrics-label">System Realization</div>
                <p class="dna-node-expanded-desc" style="color: var(--text-slate); font-size: 0.9rem;">${data.impact}</p>
            </div>
        `;
    }

    animate() {
        this.time += 0.015;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update positions (Floating nodes)
        this.nodes.forEach(node => {
            if (node.isCore) {
                node.y = node.baseY + Math.sin(this.time + node.phase) * node.amplitude;
            } else {
                node.x = node.baseX + Math.cos(this.time + node.phase) * (node.amplitude * 0.5);
                node.y = node.baseY + Math.sin(this.time + node.phase) * node.amplitude;
            }
        });

        const coreNode = this.nodes[0];

        // Draw connecting connections
        for (let i = 1; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            const isHovered = (this.hoveredKey === node.key);
            const isSelected = (this.selectedKey === node.key);

            this.ctx.beginPath();
            this.ctx.moveTo(coreNode.x, coreNode.y);
            this.ctx.lineTo(node.x, node.y);
            
            // Set styles based on hover/selection state
            if (isSelected) {
                this.ctx.strokeStyle = this.colors.accentCyan;
                this.ctx.lineWidth = 2;
            } else if (isHovered) {
                this.ctx.strokeStyle = 'rgba(34, 211, 238, 0.6)';
                this.ctx.lineWidth = 1.5;
            } else {
                this.ctx.strokeStyle = 'rgba(59, 130, 246, 0.15)';
                this.ctx.lineWidth = 1;
            }
            this.ctx.stroke();

            // Draw floating packets along lines
            const t = (this.time * 0.4 + i * 0.3) % 1;
            const px = coreNode.x + (node.x - coreNode.x) * t;
            const py = coreNode.y + (node.y - coreNode.y) * t;
            
            this.ctx.beginPath();
            this.ctx.arc(px, py, 2.5, 0, Math.PI * 2);
            this.ctx.fillStyle = isSelected || isHovered ? this.colors.accentCyan : this.colors.baseBlue;
            this.ctx.shadowBlur = 6;
            this.ctx.shadowColor = this.colors.accentCyan;
            this.ctx.fill();
            this.ctx.shadowBlur = 0; // Reset shadow
        }

        // Draw nodes
        this.nodes.forEach(node => {
            const isHovered = (this.hoveredKey === node.key);
            const isSelected = (this.selectedKey === node.key);

            // Node outer glow ring
            if (node.isCore) {
                this.ctx.beginPath();
                this.ctx.arc(node.x, node.y, node.radius + 8, 0, Math.PI * 2);
                this.ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
            }

            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.isCore ? node.radius : (isSelected || isHovered ? 15 : node.radius), 0, Math.PI * 2);
            
            // Fill color
            if (node.isCore) {
                const grad = this.ctx.createRadialGradient(node.x, node.y, 2, node.x, node.y, node.radius);
                grad.addColorStop(0, '#1d4ed8');
                grad.addColorStop(1, '#0b0f19');
                this.ctx.fillStyle = grad;
                this.ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)';
            } else {
                this.ctx.fillStyle = isSelected || isHovered ? '#083344' : '#070b15';
                this.ctx.strokeStyle = isSelected || isHovered ? this.colors.accentCyan : 'rgba(59, 130, 246, 0.4)';
            }

            this.ctx.lineWidth = node.isCore ? 2.5 : 1.5;
            this.ctx.fill();
            this.ctx.stroke();

            // Label text inside or near node
            this.ctx.fillStyle = node.isCore ? '#ffffff' : (isSelected || isHovered ? this.colors.accentCyan : this.colors.slateMuted);
            this.ctx.font = node.isCore ? `bold 9px ${this.colors.fontMono}` : `500 10px ${this.colors.fontSans}`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            
            if (node.isCore) {
                this.ctx.fillText(node.label, node.x, node.y);
            } else {
                // Draw text slightly below or above outer node to avoid crowding
                this.ctx.font = isSelected || isHovered ? `bold 10px ${this.colors.fontSans}` : `500 10px ${this.colors.fontSans}`;
                const textY = node.y + (node.baseY >= this.canvas.height / 2 ? 22 : -22);
                
                // Text backer for visibility
                this.ctx.fillStyle = 'rgba(3, 7, 18, 0.6)';
                const textWidth = this.ctx.measureText(node.label).width;
                this.ctx.fillRect(node.x - textWidth / 2 - 4, textY - 6, textWidth + 8, 12);

                this.ctx.fillStyle = isSelected || isHovered ? this.colors.accentCyan : '#94a3b8';
                this.ctx.fillText(node.label, node.x, node.y + (node.baseY >= this.canvas.height / 2 ? 22 : -22));
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Instantiate DNA Network
    window.dnaNetwork = new DNANetwork();
    
    // Select software_engineering node as default to show panel content
    setTimeout(() => {
        if (window.dnaNetwork) {
            window.dnaNetwork.selectNode('software_engineering');
        }
    }, 100);
});
