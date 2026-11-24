// ==========================================================================
// PATEL ANSH - INTERACTIVE PORTFOLIO & PLACEMENT RESUME ENGINE
// ==========================================================================

// 1. Data Repository for In-Depth Project Architecture Modals
const projectSpecs = {
    ttt_lm: {
        title: "Test-Time Training (TTT) Language Modeling",
        subtitle: "TTT-Linear & TTT-E2E Recurrent Sequence Model Architectures vs. 31M Baseline",
        tech: ["Python", "PyTorch", "CUDA", "torch_ttt", "Test-Time Training (TTT)", "Transformers", "SwiGLU", "AdamW", "Streamlit", "Kaggle T4"],
        overview: "A deep learning research and implementation project investigating next-generation recurrent sequence modeling via Test-Time Training (TTT). Replaces static attention mechanisms with an expressive linear model whose hidden state is trained during inference on the input sequence via online gradient descent.",
        challenges: [
            "Overcoming the quadratic compute and memory bottleneck of standard Transformers on long contexts without losing model expressiveness.",
            "Designing stable training dynamics (AdamW weight decay 0.1, cosine LR scheduling) that prevent loss spikes and representation collapse on TinyStories-v2.",
            "Benchmarking and bridging TTT-Linear against the official E2E PyTorch package (torch_ttt) for reproducible local & cloud GPU training."
        ],
        specifications: [
            "<strong>TTT-Linear Architecture:</strong> Implemented causal language modeling with TTT-Linear mixer layers, maintaining an expressive linear model as the recurrent hidden state updated online via gradient descent during the forward pass.",
            "<strong>Matched 31M Baseline Comparison:</strong> Designed and trained a matched 31M parameter baseline causal Transformer (512d hidden size, 8 layers, 8 heads, SwiGLU 1536, vocab 8k) on TinyStories-v2 chunks to systematically contrast attention vs. TTT-Linear.",
            "<strong>Optimized Training Regimen:</strong> Tuned AdamW optimizer (beta1=0.9, beta2=0.95, decoupled weight decay 0.1) with warmup cosine decay floor (0.1 ratio), achieving healthy validation loss ~1.65, perplexity ~5.2–5.4, and ~60% next-token match without collapse.",
            "<strong>E2E PyTorch Integration (torch_ttt):</strong> Adapted the official test-time-training/e2e PyTorch module for single-GPU and cloud GPU (Kaggle T4 / Colab) training runs.",
            "<strong>Interactive Streamlit Inspector:</strong> Developed an interactive Streamlit UI for real-time comparative text generation, tracking step-wise validation metrics, and visualizing internal hidden states."
        ],
        impact: [
            "Demonstrated recurrent linear sequence scaling with comparable validation perplexity to attention baselines.",
            "Zero representation collapse achieved through decoupled weight decay and warmup learning rate scheduling.",
            "Built a modular codebase for fast experimentation with TTT-Linear, checkpoint packing, and real-time generation."
        ]
    },

    mudranivesh: {
        title: "Mudra Nivesh",
        subtitle: "Mutual Funds & Wealth Advisory Portal (Live Deployment on AWS Lightsail)",
        tech: ["React (v19)", "Vite", "TailwindCSS", "Express.js (v5)", "Node.js", "JSON Database", "JWT Security", "AWS Lightsail", "Lucide Icons"],
        overview: "A sleek, modern mutual fund distribution, portfolio tracker, and wealth advisory web portal. Fully deployed on AWS Lightsail to serve real-time client portfolios over a 6+ month engagement.",
        challenges: [
            "Preventing connection flood issues and denial-of-service attempts on public client lead intake forms.",
            "Enforcing strict session parameters and secure authentication protocols for financial partners.",
            "Safely escaping user input to block potential database injection and Cross-Site Scripting (XSS) hazards."
        ],
        specifications: [
            "<strong>AWS Lightsail Host Deployment:</strong> Configured and deployed a persistent Node.js Express server on AWS Lightsail to serve built production files and route client/transaction API queries.",
            "<strong>Custom JWT Session Vault:</strong> Programmed a lightweight JSON Web Token (JWT) generator and verifier utility using SHA-256 HMAC signatures to lock down partner access.",
            "<strong>IP-Based Rate Limiting:</strong> Designed custom server-side rate-limiting middleware to track visitor IP request counts and block DDoS flood triggers on public endpoints.",
            "<strong>Dynamically Updated Holdings:</strong> Coded automated calculation hooks that dynamically recalculate Assets Under Management (AUM), individual holdings valuations, and account transaction histories upon completion of SIP/Lump Sum orders.",
            "<strong>Input Sanitization Security:</strong> Implemented comprehensive escaping utilities and Indian PAN card pattern matching to safeguard client portfolios against system database tampering."
        ],
        impact: [
            "Maintained 100% server uptime on AWS Lightsail during real-time client operations.",
            "Blocked all malicious inputs and DDoS query attempts via custom rate limit thresholds.",
            "Provided automated real-time financial tracking for all client accounts."
        ]
    },

    orchestrate: {
        title: "AI Car Damage Claim Detection & Verification System",
        subtitle: "HackerRank Orchestrate — AI Agent Hackathon (Rank #950 / 1,773 Global)",
        tech: ["Python", "OpenCV", "OpenAI (gpt-4o-mini)", "OpenRouter", "CSV parser", "VLM Agent", "Car Damage AI"],
        overview: "A multimodal AI car damage claim verification agent designed to analyze conversational transcripts, customer history logs, and claim images to determine validity, verify the specific damaged car part, and assess severity metrics.",
        challenges: [
            "Enforcing precise structured JSON formats under strict schema boundaries from LLM completions.",
            "Mitigating rate limit throttle issues (TPM/RPM limits) during bulk claim uploads.",
            "Achieving high precision in identifying specific car parts (e.g. bumper, windshield, door) and validating claim-image alignment."
        ],
        specifications: [
            "<strong>Multi-Modal Strategy Pipeline:</strong> Coded two verification strategies: 1) Single-Stage Structured Output, sending claims text, history, and images to gpt-4o-mini in a single JSON-schema aligned payload. 2) Two-Stage Reasoning, extracting text elements first and performing target-focused image inspect calls on car parts.",
            "<strong>Rate Limit & Failover Protection:</strong> Designed a local heuristic fallback algorithm (`run_heuristic_fallback`) which scans text elements and outputs default values if the model triggers rate-limit exceptions or fails to return within timeout thresholds.",
            "<strong>Structured Output Compliance:</strong> Wrapped responses in strict CSV-compliant schemas using double-quoting formatting to prevent line-break corruptions on output generation.",
            "<strong>Evaluation Suite:</strong> Created a framework validating accuracy across claim_status, car_part, evidence_standard_met, valid_image, and Jaccard overlaps for risk flags and supporting images."
        ],
        impact: [
            "Secured a final rank of <strong>#950 out of 1,773</strong> participants globally.",
            "Achieved <strong>95.00% accuracy</strong> on claim status, car part identification, and severity classification.",
            "Strategy 1 ran with 30% lower latency and reduced API token costs compared to Strategy 2, making it the selected strategy for production run."
        ]
    },

    doctorfriend: {
        title: "Doctor's Friend",
        subtitle: "Clinic Practice Management Suite & Dual-Mode Broadcast Engine",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Twilio WhatsApp API", "WhatsApp Web Link Redirection"],
        overview: "A clinic automation system helping doctors manage patient records, clinical diagnostic history, and dispatch clinic announcements.",
        challenges: [
            "Providing a broadcast channel for clinic updates without requiring expensive Twilio subscription setups from local clinics.",
            "Structuring a responsive dashboard interface that runs smoothly on desktop and mobile clinics."
        ],
        specifications: [
            "<strong>Dual-Mode Broadcast Module:</strong> Engineered a messaging system supporting two modes: Automated Background Mode (calls Twilio WhatsApp APIs using saved credentials) and Manual Queue Mode (generates a queue of target patient numbers and prompts the doctor to send pre-filled messages one-by-one via free WhatsApp Web redirection with a single click).",
            "<strong>Smart Patient Segmentation:</strong> Created clinical sorting modules. Doctors can query patient database lists by disease type, last appointment parameters, or diagnostic keywords, creating target custom cohorts for broadcast dispatches.",
            "<strong>Appointment Pipelines:</strong> Coded responsive appointment booking grids, database updates for patient diagnoses, and prescription logs."
        ],
        impact: [
            "Reduced clinic marketing/notification costs to zero using the WhatsApp Web link generator fallback.",
            "Allowed doctors to send targeted disease alerts (e.g. diabetic health reminders) to segmented cohorts in under 2 minutes."
        ]
    },

    khedutbandhu: {
        title: "Khedut Bandhu",
        subtitle: "Farmer's Digital Ecosystem & AI Crop Diagnostics",
        tech: ["React.js", "Node.js", "Express.js", "FastAPI", "TensorFlow/Keras (CNN)", "Digio Aadhaar KYC API", "MongoDB"],
        overview: "A Gujarat-focused agrarian portal bridging the digital gap between farmers, local buyers, government subsidies, and AI-based diagnostics.",
        challenges: [
            "Deploying ML model weights on light architectures suitable for mobile agricultural network conditions.",
            "Allowing farmers to access direct crop markets and government subsidies securely without intermediate middlemen exploitation."
        ],
        specifications: [
            "<strong>FastAPI Deep Learning Agent:</strong> Built a separate Python FastAPI service loaded with a Convolutional Neural Network (CNN trained on the PlantVillage dataset) that takes uploaded crop leaf photos and returns instant disease diagnosis and treatment steps.",
            "<strong>APMC Market Rates Dashboard:</strong> Programmed a live commodity ticker using WebSockets to simulate APMC market trends, allowing farmers to evaluate crop worth before selling.",
            "<strong>Secure Onboarding & Refund Vault:</strong> Integrated Aadhaar KYC checking via Digio API. Built QR-code generated UPI refund logs for order cancellations.",
            "<strong>E-Commerce Marketplace:</strong> Developed an agricultural store with catalogs for seeds, tools, and pesticides alongside departmental admin dashboards to validate subsidy applications."
        ],
        impact: [
            "Enabled rural farmers to get instant diagnosis of leaf diseases with over 90% confidence scores.",
            "Provided direct market access, increasing farmers' trade margins by eliminating intermediate broker commissions."
        ]
    }
};

// 2. Typewriter Effect
const typewriterPhrases = [
    "PyTorch & Test-Time Training (TTT) Researcher",
    "Full-Stack Systems Engineer (React 19, Express v5, AWS)",
    "Deep Learning & Multimodal VLM Integrator",
    "Competitive Programmer (100+ LeetCode DSA Solved)",
    "High-Performance Cloud Architect on AWS Lightsail"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElem = document.getElementById("typewriter");

function typeEffect() {
    if (!typewriterElem) return;

    const currentPhrase = typewriterPhrases[phraseIndex];

    if (isDeleting) {
        typewriterElem.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElem.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 65;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
        typeSpeed = 400; // Pause before new phrase
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
    initProjectFilters();
});

// 3. Project Filter Tabs
function initProjectFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");
                if (filterValue === "all" || category.includes(filterValue)) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}

// 4. Modal Open & Render Function
function openProjectModal(projectId) {
    const modal = document.getElementById("project-modal");
    const bodyContent = document.getElementById("modal-body-content");
    const data = projectSpecs[projectId];
    
    if (!data) return;

    let techTagsHtml = data.tech.map(t => `<span class="tech-pill">${t}</span>`).join("");
    let challengesHtml = data.challenges.map(c => `<li>${c}</li>`).join("");
    let specsHtml = data.specifications.map(s => `<li>${s}</li>`).join("");
    let impactHtml = data.impact.map(i => `<li>${i}</li>`).join("");

    bodyContent.innerHTML = `
        <div class="modal-title">
            <h2>${data.title}</h2>
            <div class="modal-subtitle">${data.subtitle}</div>
        </div>
        <div class="modal-tech-list">${techTagsHtml}</div>
        
        <div class="modal-section">
            <h4><i class="fa-solid fa-compass"></i> Project Overview</h4>
            <p>${data.overview}</p>
        </div>

        <div class="modal-section">
            <h4><i class="fa-solid fa-triangle-exclamation"></i> Engineering Challenges Solved</h4>
            <ul class="modal-bullet-list">${challengesHtml}</ul>
        </div>

        <div class="modal-section">
            <h4><i class="fa-solid fa-microchip"></i> Technical Specifications</h4>
            <ul class="modal-bullet-list">${specsHtml}</ul>
        </div>

        <div class="modal-section">
            <h4><i class="fa-solid fa-chart-line"></i> Key Impact & Metrics</h4>
            <ul class="modal-bullet-list">${impactHtml}</ul>
        </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

// Modal Close Function
function closeProjectModal() {
    const modal = document.getElementById("project-modal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.addEventListener("click", (event) => {
    const modal = document.getElementById("project-modal");
    if (event.target === modal) {
        closeProjectModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeProjectModal();
    }
});

// 5. Contact Click to Copy
function copyContact(type, text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied ${type}: ${text} to clipboard!`);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

// Show Toast Alerts
function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}

// 6. Direct Placement Resume PDF Download Engine
function triggerResumeDownload() {
    const printBtn = document.getElementById("print-btn");
    const originalText = printBtn ? printBtn.innerHTML : "Save PDF";
    
    if (printBtn) {
        printBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Generating PDF...`;
        printBtn.disabled = true;
    }

    // Apply printing layout styles
    document.body.classList.add("printing");

    // Select the formal placement resume container
    const element = document.getElementById('printable-resume');
    const opt = {
        margin:       [10, 10, 10, 10], // top, left, bottom, right in mm
        filename:     'Patel_Ansh_Resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, logging: false },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        document.body.classList.remove("printing");
        if (printBtn) {
            printBtn.innerHTML = originalText;
            printBtn.disabled = false;
        }
        showToast("Placement Resume PDF Downloaded Successfully!");
    }).catch(err => {
        console.error("PDF generation failed: ", err);
        document.body.classList.remove("printing");
        if (printBtn) {
            printBtn.innerHTML = originalText;
            printBtn.disabled = false;
        }
        // Fallback to browser print dialog
        window.print();
    });
}

document.getElementById("print-btn")?.addEventListener("click", triggerResumeDownload);

// 7. Theme Toggle
const themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.body.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        document.body.setAttribute("data-theme", newTheme);
        themeToggleBtn.innerHTML = newTheme === "light" 
            ? '<i class="fa-solid fa-sun"></i>' 
            : '<i class="fa-solid fa-moon"></i>';
        showToast(`Switched to ${newTheme} theme`);
    });
}

// 8. Mobile Menu Toggle
const mobileToggle = document.getElementById("mobile-menu-toggle");
const mobileDrawer = document.getElementById("mobile-drawer");

if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
        mobileDrawer.classList.toggle("open");
    });
}

function closeMobileMenu() {
    if (mobileDrawer) {
        mobileDrawer.classList.remove("open");
    }
}
