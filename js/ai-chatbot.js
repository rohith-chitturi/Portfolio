/* ==========================================================================
   AI RESUME ASSISTANT (CLIENT-SIDE SEMANTIC ENGINE) - CHITTURI NAGA RAJA TEJA ROHITH
   ========================================================================== */

const KNOWLEDGE_BASE = {
    cgp: "Rohith has achieved outstanding academic records:\n• **B.E. Information Technology (CBIT)**: 9.05 CGPA (2024 — 2027)\n• **Diploma in Computer Science & Engineering**: 9.95 CGPA (2021 — 2024)\nHe is deeply grounded in core Computer Science and systems design.",
    languages: "Rohith is proficient in several programming languages including:\n• **Java** (Core OOP, algorithms)\n• **Python** (Data analytics, Generative AI pipelines, SARIMA forecasting)\n• **C / C++** (Structures, fundamental algorithm optimization)",
    databases: "Rohith has database engineering experience with:\n• **PostgreSQL** (with pgvector for AI semantic document matching)\n• **MongoDB** (Certified MongoDB Associate Developer)\n• **MySQL** (Relational storage and normalizations)",
    frameworks: "Rohith is skilled in modern full-stack web and server technologies:\n• **Next.js & React.js** (Frontend state routing)\n• **Node.js & Express.js** (Backend service logic)\n• **Socket.IO & WebSockets** (Low-latency broadcast loops)",
    smartretail: "### SmartRetail AI — Conversational Predictive Analytics\nRohith engineered this Generative AI Business Intelligence platform in 2026. Key features:\n• **Natural Language to SQL**: Utilizing **Vanna AI** for automated query compilation.\n• **Demand Forecasting**: Integrated **SARIMA** time-series forecasting for seasonal sales estimation.\n• **AI Recommender**: Builds automated inventory optimization insights for small business operations.",
    secondbrain: "### Second Brain AI — Knowledge Operating System\nAn AI-powered knowledge storage platform designed by Rohith in 2026:\n• **Semantic Search**: Sub-second matching of unstructured files using **Supabase pgvector**.\n• **Summarization**: Powered by **Gemini API** for automated metadata creation and summaries.\n• **API Resilience**: Designed error handling with automatic retry logic.",
    throwball: "### Throwball Live — Real-Time Event Infrastructure\nEngineered in 2025 using the MERN stack:\n• **WebSockets**: Leverages **Socket.IO** for low-latency scoring updates to spectator screens.\n• **Security**: Robust administrative role-based access tokens for referees.\n• **Reliability**: Maintained connection stability under concurrent live loads.",
    certifications: "Rohith holds professional industry certifications:\n• **MongoDB Associate Developer** (Python track)\n• **Salesforce Agentforce Specialist** (autonomous agent configuration)",
    achievements: "Rohith was the **Runner-up at the Abacus Technical Quiz 2025**, proving his speed and understanding of algorithms, systems architecture, and computing networks.",
    contact: "You can reach Rohith directly through these channels:\n• **Email**: chitturinagarajatejarohith@gmail.com\n• **Phone**: +91 8309149398\n• **LinkedIn**: linkedin.com/in/rohithchitturi-\n• **GitHub**: github.com/rohith-chitturi",
    help: "Ask me anything! Here are some things you can query:\n1. 'What did he build in 2026?'\n2. 'List his core programming languages.'\n3. 'What is his CGPA?'\n4. 'Tell me about Salesforce or MongoDB certificates.'\n5. 'Provide contact coordinates.'",
    fallback: "I detected your query. To provide the best details about Rohith, try asking about: \n• **His projects** (SmartRetail AI, Second Brain AI, Throwball Live)\n• **His education/CGPA** (CBIT, Samskruti, CGPA scores)\n• **His technical skills** (Java, Python, Next.js, pgvector)\n• **His certifications** (MongoDB, Salesforce)"
};

class AIChatbot {
    constructor() {
        this.widget = document.getElementById('ai-assistant-widget');
        this.toggleBtn = document.getElementById('ai-toggle-btn');
        this.chatWindow = document.getElementById('ai-chat-window');
        this.minimizeBtn = document.getElementById('chat-minimize');
        this.chatMessages = document.getElementById('chat-messages');
        this.chatInput = document.getElementById('chat-input');
        this.sendBtn = document.getElementById('chat-send-btn');
        this.suggestions = document.querySelectorAll('.suggestion-chip');
        
        this.isTyping = false;
        
        this.registerEvents();
    }

    registerEvents() {
        // Toggle chat state
        this.toggleBtn.addEventListener('click', () => this.toggleChat());
        this.minimizeBtn.addEventListener('click', () => this.toggleChat(false));

        // Send message
        this.sendBtn.addEventListener('click', () => this.handleSend());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSend();
        });

        // Click on suggestion chips
        this.suggestions.forEach(chip => {
            chip.addEventListener('click', () => {
                const query = chip.innerText;
                this.chatInput.value = query;
                this.handleSend();
            });
        });
    }

    toggleChat(forceState = null) {
        const isHidden = this.chatWindow.classList.contains('hidden');
        const shouldShow = forceState !== null ? forceState : isHidden;

        if (shouldShow) {
            this.chatWindow.classList.remove('hidden');
            this.toggleBtn.querySelector('.chat-icon').classList.add('hidden');
            this.toggleBtn.querySelector('.close-icon').classList.remove('hidden');
            this.chatInput.focus();
        } else {
            this.chatWindow.classList.add('hidden');
            this.toggleBtn.querySelector('.chat-icon').classList.remove('hidden');
            this.toggleBtn.querySelector('.close-icon').classList.add('hidden');
        }
    }

    handleSend() {
        const text = this.chatInput.value.trim();
        if (!text || this.isTyping) return;

        this.chatInput.value = '';
        this.appendMessage(text, 'user-msg');
        
        // Show typing indicator
        this.showTypingIndicator();

        // Process response with simulated network delay
        setTimeout(() => {
            const answer = this.processQuery(text);
            this.hideTypingIndicator();
            this.streamResponse(answer);
        }, 800 + Math.random() * 400);
    }

    processQuery(query) {
        const q = query.toLowerCase();
        
        if (q.includes('help') || q.includes('question') || q.includes('what can you do')) {
            return KNOWLEDGE_BASE.help;
        }
        if (q.includes('cgpa') || q.includes('gpa') || q.includes('marks') || q.includes('score') || q.includes('education') || q.includes('college') || q.includes('cbit') || q.includes('samskruti') || q.includes('diploma') || q.includes('academic')) {
            return KNOWLEDGE_BASE.cgp;
        }
        if (q.includes('smartretail') || q.includes('retail') || q.includes('vanna') || q.includes('sarima') || q.includes('forecast') || q.includes('sales')) {
            return KNOWLEDGE_BASE.smartretail;
        }
        if (q.includes('second brain') || q.includes('knowledge') || q.includes('supabase') || q.includes('pgvector') || q.includes('gemini') || q.includes('summarize') || q.includes('semantic')) {
            return KNOWLEDGE_BASE.secondbrain;
        }
        if (q.includes('throwball') || q.includes('live scoring') || q.includes('socket.io') || q.includes('websocket') || q.includes('latency') || q.includes('mern')) {
            return KNOWLEDGE_BASE.throwball;
        }
        if (q.includes('language') || q.includes('python') || q.includes('java') || q.includes('c++') || q.includes('c ') || q.includes('code')) {
            return KNOWLEDGE_BASE.languages;
        }
        if (q.includes('database') || q.includes('postgresql') || q.includes('mongodb') || q.includes('mysql') || q.includes('sql')) {
            return KNOWLEDGE_BASE.databases;
        }
        if (q.includes('framework') || q.includes('next.js') || q.includes('react') || q.includes('node') || q.includes('express') || q.includes('web dev')) {
            return KNOWLEDGE_BASE.frameworks;
        }
        if (q.includes('cert') || q.includes('mongodb associate') || q.includes('salesforce') || q.includes('agentforce')) {
            return KNOWLEDGE_BASE.certifications;
        }
        if (q.includes('quiz') || q.includes('runner-up') || q.includes('abacus') || q.includes('achievement')) {
            return KNOWLEDGE_BASE.achievements;
        }
        if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('linkedin') || q.includes('github') || q.includes('reach') || q.includes('hire')) {
            return KNOWLEDGE_BASE.contact;
        }
        
        return KNOWLEDGE_BASE.fallback;
    }

    appendMessage(text, className) {
        const msg = document.createElement('div');
        msg.className = `message ${className}`;
        
        // Simple markdown formatter helper for bold texts and bullet points
        msg.innerHTML = this.formatMarkdown(text);
        
        this.chatMessages.appendChild(msg);
        this.scrollToBottom();
        return msg;
    }

    formatMarkdown(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/### (.*?)\n/g, '<h5>$1</h5>')
            .replace(/• (.*?)\n/g, '<li>$1</li>')
            .replace(/\n/g, '<br>');
    }

    showTypingIndicator() {
        this.isTyping = true;
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.id = 'typing-indicator-node';
        indicator.innerHTML = `
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
        `;
        this.chatMessages.appendChild(indicator);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const indicator = document.getElementById('typing-indicator-node');
        if (indicator) {
            indicator.remove();
        }
        this.isTyping = false;
    }

    streamResponse(text) {
        const msgNode = this.appendMessage('', 'ai-msg');
        let index = 0;
        
        // Prepare formatting steps (raw HTML tags are fed immediately, normal letters stream)
        const formatText = this.formatMarkdown(text);
        
        const timer = setInterval(() => {
            if (index < formatText.length) {
                // If we encounter a tag, parse it entirely to avoid rendering broken tag string
                if (formatText[index] === '<') {
                    const closeIndex = formatText.indexOf('>', index);
                    if (closeIndex !== -1) {
                        msgNode.innerHTML += formatText.substring(index, closeIndex + 1);
                        index = closeIndex + 1;
                        return;
                    }
                }
                
                msgNode.innerHTML += formatText[index];
                index++;
                this.scrollToBottom();
            } else {
                clearInterval(timer);
            }
        }, 12);
    }

    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.aiChatbot = new AIChatbot();
});
