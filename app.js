/* ==========================================================================
   CORE APPLICATION CONTROLLER - CHITTURI NAGA RAJA TEJA ROHITH
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initializing Subsystems
    initTypewriter();
    initUniverseNodes();
    initScrollObserver();
    initResumeModal();
    initCommandTerminal();
    initContactForm();
});

/* ==========================================================================
   LANDING HERO TYPEWRITER
   ========================================================================== */

function initTypewriter() {
    const el = document.getElementById('typewriter-text');
    const details = document.getElementById('hero-details');
    if (!el) return;

    const sequence = [
        "Hello, I'm Rohith.",
        "I build software.",
        "I build intelligence.",
        "I build systems that think."
    ];

    let seqIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 90; // Default typing speed

    function type() {
        const currentText = sequence[seqIndex];
        
        if (isDeleting) {
            el.innerHTML = currentText.substring(0, charIndex) + '<span class="text-cursor">|</span>';
            charIndex--;
            delay = 35; // Faster deletion
        } else {
            el.innerHTML = currentText.substring(0, charIndex + 1) + '<span class="text-cursor">|</span>';
            charIndex++;
            delay = 80; // Standard typing speed
        }

        // Handle sequence end states
        if (!isDeleting && charIndex === currentText.length) {
            if (seqIndex === sequence.length - 1) {
                // End of entire sequence
                el.innerHTML = currentText + '<span class="text-cursor" style="animation: none;">_</span>';
                setTimeout(() => {
                    if (details) details.classList.add('visible');
                }, 300);
                return;
            }
            
            // Finished typing word, pause before deletion
            delay = 1400;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting word, transition to next
            isDeleting = false;
            seqIndex++;
            delay = 300;
        }

        setTimeout(type, delay);
    }

    // Start typewriter
    setTimeout(type, 800);
}

/* ==========================================================================
   3D-STYLED HERO UNIVERSE CANVAS
   ========================================================================== */

function initUniverseNodes() {
    const canvas = document.getElementById('universe-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const nodes = [
        { label: 'AI', x: width * 0.2, y: height * 0.45, vx: 0.1, vy: -0.05, r: 24, glow: '#22d3ee' },
        { label: 'DATA', x: width * 0.35, y: height * 0.7, vx: -0.05, vy: 0.08, r: 22, glow: '#3b82f6' },
        { label: 'SYSTEMS', x: width * 0.65, y: height * 0.35, vx: 0.08, vy: 0.06, r: 26, glow: '#818cf8' },
        { label: 'PEOPLE', x: width * 0.8, y: height * 0.6, vx: -0.06, vy: -0.06, r: 20, glow: '#f43f5e' },
        { label: 'DECISIONS', x: width * 0.5, y: height * 0.22, vx: 0.03, vy: -0.04, r: 28, glow: '#a855f7' }
    ];

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    function draw() {
        ctx.clearRect(0, 0, width, height);
        
        // Draw interconnected node lines
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const n1 = nodes[i];
                const n2 = nodes[j];
                ctx.beginPath();
                ctx.moveTo(n1.x, n1.y);
                ctx.lineTo(n2.x, n2.y);
                ctx.strokeStyle = 'rgba(59, 130, 246, 0.04)';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        // Draw and update node circles
        nodes.forEach(n => {
            n.x += n.vx;
            n.y += n.vy;

            // Bounce check
            if (n.x < n.r || n.x > width - n.r) n.vx *= -1;
            if (n.y < n.r || n.y > height - n.r) n.vy *= -1;

            // Circle backing
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(15, 23, 42, 0.5)';
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 1;
            ctx.fill();
            ctx.stroke();

            // Glowing outline
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r - 2, 0, Math.PI * 2);
            ctx.strokeStyle = n.glow + '22'; // low opacity glow hex
            ctx.lineWidth = 3;
            ctx.stroke();

            // Label text
            ctx.fillStyle = '#94a3b8';
            ctx.font = 'bold 8.5px "Fira Code", monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(n.label, n.x, n.y);
        });

        requestAnimationFrame(draw);
    }

    draw();
}

/* ==========================================================================
   SCROLL OBSERVING & COUNTER INCREMENTATIONS
   ========================================================================== */

function initScrollObserver() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    const options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                
                // Trigger counters specifically on the Dashboard section
                if (entry.target.id === 'dashboard') {
                    startDashboardCounters();
                }
                obs.unobserve(entry.target);
            }
        });
    }, options);

    reveals.forEach(r => observer.observe(r));
}

function startDashboardCounters() {
    const counterElements = [
        { id: 'count-languages', target: 4, isFloat: false },
        { id: 'count-projects', target: 3, isFloat: false },
        { id: 'count-databases', target: 3, isFloat: false },
        { id: 'count-frameworks', target: 6, isFloat: false },
        { id: 'count-ai', target: 2, isFloat: false },
        { id: 'count-cgpa', target: 9.05, isFloat: true }
    ];

    counterElements.forEach(item => {
        const el = document.getElementById(item.id);
        if (!el) return;

        const duration = 1500; // Counter total run duration
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease-out cubic calculation
            const ease = 1 - Math.pow(1 - progress, 3);
            
            let val = ease * item.target;
            
            if (item.isFloat) {
                el.innerText = val.toFixed(2);
            } else {
                el.innerText = Math.floor(val) + '+';
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                // Force precise final value
                if (item.isFloat) {
                    el.innerText = item.target;
                } else {
                    el.innerText = item.target + '+';
                }
                // Animate parent metric bar width indicator
                el.closest('.dashboard-metric').classList.add('visible');
            }
        }

        requestAnimationFrame(update);
    });
}

/* ==========================================================================
   RESUME VIEWER MODAL
   ========================================================================== */

function initResumeModal() {
    const modal = document.getElementById('resume-modal');
    const openBtn = document.getElementById('view-resume-btn');
    const closeBtn = document.getElementById('close-resume-btn');
    const printBtn = document.getElementById('print-resume-btn');
    const downloadBtn = document.getElementById('download-resume-btn');

    if (!modal) return;

    // Open Modal
    openBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Stop page scrolling
    });

    // Close Modal helpers
    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Print command (saves/prints resume content as neat PDF layout)
    printBtn.addEventListener('click', () => {
        window.print();
    });

    // Download dynamic PDF triggers print to PDF workflow or serving raw asset
    downloadBtn.addEventListener('click', () => {
        // Trigger save/print PDF workflow
        window.print();
    });
}

/* ==========================================================================
   GITHUB-STYLE COMMAND CENTER TERMINAL
   ========================================================================== */

function initCommandTerminal() {
    const input = document.getElementById('terminal-cmd-input');
    const history = document.getElementById('terminal-history');
    if (!input || !history) return;

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.trim();
            input.value = '';
            
            if (cmd) {
                handleTerminalCommand(cmd);
            }
        }
    });

    function printRow(text, className = '') {
        const row = document.createElement('div');
        if (className) row.className = className;
        row.innerHTML = text;
        history.appendChild(row);
        history.scrollTop = history.scrollHeight;
    }

    function handleTerminalCommand(cmd) {
        printRow(`tejarohith$ ${cmd}`, 'highlight');
        const cleanCmd = cmd.toLowerCase().trim();

        switch (cleanCmd) {
            case 'help':
                printRow('Available operations:');
                printRow('  <span class="highlight">1</span> or <span class="highlight">github</span>   : Explore GitHub repository matrices.');
                printRow('  <span class="highlight">2</span> or <span class="highlight">linkedin</span> : Open professional LinkedIn link.');
                printRow('  <span class="highlight">3</span> or <span class="highlight">leetcode</span> : Review algorithmic solving index.');
                printRow('  <span class="highlight">skills</span>            : Check core language & concepts configuration.');
                printRow('  <span class="highlight">stats</span>             : Load latest live production telemetry metrics.');
                printRow('  <span class="highlight">clear</span>             : Reset terminal logging diagnostics.');
                break;

            case '1':
            case 'github':
            case 'git':
                printRow('Redirecting connection parameters to GitHub [rohith-chitturi]...', 'success');
                setTimeout(() => window.open('https://github.com/rohith-chitturi', '_blank'), 600);
                break;

            case '2':
            case 'linkedin':
                printRow('Establishing handshake protocol with LinkedIn network...', 'success');
                setTimeout(() => window.open('https://linkedin.com/in/rohithchitturi-', '_blank'), 600);
                break;

            case '3':
            case 'leetcode':
                printRow('Fetching algorithmic solving index from LeetCode...', 'success');
                setTimeout(() => window.open('https://leetcode.com/u/rohith_chitturi/', '_blank'), 600);
                break;

            case 'skills':
                printRow('Reading Core Configurations:');
                printRow('• Languages  : Java, Python, C, C++');
                printRow('• Systems    : Distributed Architecture, AI Pipelines, MERN');
                printRow('• Databases  : PostgreSQL, Supabase, MongoDB, MySQL');
                printRow('• Frameworks : Next.js, Socket.IO, Express.js, Node.js');
                break;

            case 'stats':
                printRow('Retrieving operational stats...');
                printRow('• Host System: CBIT Student Infrastructure Node');
                printRow('• Projects Active: 3 (SmartRetail, SecondBrain, Throwball)');
                printRow('• Performance Index: 9.05 CGPA / 9.95 Diploma');
                printRow('• Core Languages Compiled: 4');
                break;

            case 'clear':
                history.innerHTML = '';
                printRow('Terminal diagnostics records reset.', 'success');
                break;

            default:
                printRow(`Command not recognized: "${cmd}". Type <span class="highlight">help</span> to explore list of available query scripts.`, 'error');
        }
    }

    // Initialize the visual graph canvas inside the terminal
    initTerminalVisualGraph();
}

function initTerminalVisualGraph() {
    const canvas = document.getElementById('terminal-graph-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height - 24;

    const cols = 22;
    const rows = 9;
    const cellSize = 10;
    const gap = 3;

    function drawGraph() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const startX = (canvas.width - (cols * (cellSize + gap))) / 2;
        const startY = (canvas.height - (rows * (cellSize + gap))) / 2;

        for (let col = 0; col < cols; col++) {
            for (let row = 0; row < rows; row++) {
                // Generate random contribution calendar values
                const rand = Math.random();
                let fillStyle = '#0f172a'; // Empty dark slate
                
                if (rand > 0.88) fillStyle = '#10b981'; // Bright green
                else if (rand > 0.75) fillStyle = '#047857'; // Medium green
                else if (rand > 0.5) fillStyle = '#064e3b'; // Low green
                else if (rand > 0.3) fillStyle = '#1e293b'; // Slate grid dot

                ctx.fillStyle = fillStyle;
                ctx.fillRect(
                    startX + col * (cellSize + gap),
                    startY + row * (cellSize + gap),
                    cellSize,
                    cellSize
                );
            }
        }
    }

    // Initial render & poll simulation to animate contributions live
    drawGraph();
    setInterval(drawGraph, 8000);
}

/* ==========================================================================
   CONTACT FORM HANDLER
   ========================================================================== */

function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (!form || !status) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        const message = document.getElementById('form-message').value;
        const btn = form.querySelector('.submit-btn');
        const btnText = btn.querySelector('.btn-text');

        // Disable elements during transit
        btn.disabled = true;
        btnText.innerText = "Transmitting...";
        status.className = "form-status";
        status.innerText = "";

        const steps = [
            { text: "Initializing SMTP secure gateway...", delay: 600, class: "" },
            { text: "Encrypting message packets...", delay: 1200, class: "" },
            { text: "Transmitting payload to chitturinagarajatejarohith@gmail.com...", delay: 1800, class: "" },
            { text: "Message synced! Launching native mail client to finalize transmission...", delay: 2400, class: "success" }
        ];

        steps.forEach(step => {
            setTimeout(() => {
                status.innerText = step.text;
                if (step.class) {
                    status.className = `form-status ${step.class}`;
                }
            }, step.delay);
        });

        // Trigger mailto composer
        setTimeout(() => {
            const subject = encodeURIComponent(`System Transmission: Message from ${name}`);
            const body = encodeURIComponent(
                `Sender Name: ${name}\n` +
                `Sender Corporate Email: ${email}\n\n` +
                `Transmission Details:\n` +
                `--------------------------------------------------\n` +
                `${message}\n\n` +
                `--------------------------------------------------\n` +
                `Sent via Chitturi Naga Raja Teja Rohith's Systems Portal.`
            );
            
            const mailtoUrl = `mailto:chitturinagarajatejarohith@gmail.com?subject=${subject}&body=${body}`;
            
            // Open native client
            window.location.href = mailtoUrl;

            // Reset form state
            btn.disabled = false;
            btnText.innerText = "Transmit Message";
            form.reset();
        }, 3000);
    });
}
