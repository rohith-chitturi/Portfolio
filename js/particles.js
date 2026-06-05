/* ==========================================================================
   DYNAMIC BACKGROUND PARTICLES SYSTEM - CHITTURI NAGA RAJA TEJA ROHITH
   ========================================================================== */

class BackgroundParticles {
    constructor() {
        this.canvas = document.getElementById('particles-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.connectionDistance = 110;
        this.particleCount = 75;
        this.mouse = { x: null, y: null, radius: 150 };

        this.init();
        this.animate();
        this.registerEvents();
    }

    init() {
        this.resizeCanvas();
        this.particles = [];
        
        // Populate particles
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                radius: Math.random() * 1.5 + 1
            });
        }
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    registerEvents() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.init();
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Render & Update Particles
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];

            // Motion update
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off boundaries
            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

            // Draw particle dot
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(148, 163, 184, 0.15)'; // Slate light dot
            this.ctx.fill();

            // Connections to other particles
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distance = Math.hypot(dx, dy);

                if (distance < this.connectionDistance) {
                    const alpha = (1 - distance / this.connectionDistance) * 0.08;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`; // Blue connecting line
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }

            // Connection to mouse
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const mdx = p.x - this.mouse.x;
                const mdy = p.y - this.mouse.y;
                const mDistance = Math.hypot(mdx, mdy);

                if (mDistance < this.mouse.radius) {
                    const mAlpha = (1 - mDistance / this.mouse.radius) * 0.12;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.strokeStyle = `rgba(34, 211, 238, ${mAlpha})`; // Cyan mouse pull
                    this.ctx.lineWidth = 0.6;
                    this.ctx.stroke();

                    // Soft interactive drift towards/away
                    p.x -= mdx * 0.003;
                    p.y -= mdy * 0.003;
                }
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

// Instantiate globally once document completes
document.addEventListener('DOMContentLoaded', () => {
    window.bgParticles = new BackgroundParticles();
});
