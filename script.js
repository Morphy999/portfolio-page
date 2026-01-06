(function () {
    const profileTexts = {
        en: {
            greeting: "Hello, I'm",
            role: "Data Scientist",
            summary: "Computer Science graduate, currently pursuing a Master's at UFV focused on LLMs, RAG, and Computer Vision. Experience in Deep Learning and AWS.",
            download: "Download CV",
            contact: "Contact"
        },
        pt: {
            greeting: "Olá, eu sou",
            role: "Cientista de Dados",
            summary: "Graduado em Ciência da Computação, cursando Mestrado na UFV com foco em LLMs, RAG e Visão Computacional. Experiência em Deep Learning e AWS.",
            download: "Baixar CV",
            contact: "Contato"
        }
    };

    const educationTexts = {
        en: {
            title: "Education",
            items: [
                { meta: "M.Sc. · 2025–Present", desc: "Deep Learning, NLP and RAG." },
                { meta: "B.Sc. · 2021–2025", desc: "Computer Science." }
            ]
        },
        pt: {
            title: "Educação",
            items: [
                { meta: "Mestrado · 2025–Presente", desc: "Aprendizado Profundo, NLP e RAG." },
                { meta: "Bacharelado · 2021–2025", desc: "Ciência da Computação." }
            ]
        }
    };

    const experienceTexts = {
        en: {
            title: "Professional Experience",
            items: [
                {
                    time: "2025 – Present",
                    role: "Junior Data Scientist",
                    meta: "Tarken Software · Remote",
                    points: ["Time-series with Google Earth Engine.", "DL model optimization for Satellite images.", "AWS Pipelines (Lambda, Step Functions)."]
                },
                {
                    time: "2024 – 2025",
                    role: "Data Science Intern",
                    meta: "Tarken Software · Remote",
                    points: ["RAG pipelines for LLMs.", "Crop forecasting with XGBoost/LSTM.", "Semantic segmentation training."]
                }
            ]
        },
        pt: {
            title: "Experiência Profissional",
            items: [
                {
                    time: "2025 – Presente",
                    role: "Cientista de Dados Junior",
                    meta: "Tarken Software · Remoto",
                    points: ["Séries temporais com Google Earth Engine.", "Otimização de modelos DL para satélite.", "Pipelines AWS (Lambda, Step Functions)."]
                },
                {
                    time: "2024 – 2025",
                    role: "Estagiário de Ciência de Dados",
                    meta: "Tarken Software · Remoto",
                    points: ["Pipelines de RAG para LLMs.", "Previsão de safras com XGBoost/LSTM.", "Treinamento de segmentação semântica."]
                }
            ]
        }
    };

    const skillsTexts = {
        en: { levels: { adv: "Advanced", int: "Intermediate" }, cards: [["Python", "Go", "C++", "SQL"], ["LLMs", "RAG", "Computer Vision", "Deep Learning"], ["AWS", "Docker", "PyTorch", "LangChain"]] },
        pt: { levels: { adv: "Avançado", int: "Intermediário" }, cards: [["Python", "Go", "C++", "SQL"], ["LLMs", "RAG", "Visão Computacional", "Deep Learning"], ["AWS", "Docker", "PyTorch", "LangChain"]] }
    };

    const projectsTexts = {
        en: { title: "Projects", items: [{ title: "Multimodal RAG", tags: ["LLM", "Python"], desc: "Intelligent agents for automation.", actions: ["Code"] }, { title: "Satellite Vision", tags: ["PyTorch", "AWS"], desc: "Semantic segmentation models.", actions: ["Code"] }] },
        pt: { title: "Projetos", items: [{ title: "RAG Multimodal", tags: ["LLM", "Python"], desc: "Agentes inteligentes para automação.", actions: ["Código"] }, { title: "Visão Satélite", tags: ["PyTorch", "AWS"], desc: "Modelos de segmentação semântica.", actions: ["Código"] }] }
    };

    const switchBtn = document.getElementById("langSwitch");

    function applyLang(lang) {
        document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
        
        // Nav
        document.querySelectorAll(".nav-links a").forEach(a => a.textContent = a.dataset[lang]);

        // Profile
        const p = profileTexts[lang];
        document.querySelector(".section__text__p1").textContent = p.greeting;
        document.querySelector(".section__text__p2").textContent = p.role;
        document.querySelector(".summary").textContent = p.summary;

        // Experience
        const exp = experienceTexts[lang];
        document.querySelector("#experience .section-title").textContent = exp.title;
        document.querySelectorAll(".timeline-row").forEach((row, i) => {
            const item = exp.items[i];
            row.querySelector(".time-badge").textContent = item.time;
            row.querySelector(".xp-role").textContent = item.role;
            row.querySelector(".xp-meta").textContent = item.meta;
            const ul = row.querySelector(".xp-points");
            ul.innerHTML = "";
            item.points.forEach(pt => { const li = document.createElement("li"); li.textContent = pt; ul.appendChild(li); });
        });

        // Skills
        const sk = skillsTexts[lang];
        document.querySelectorAll(".skill-card").forEach((card, i) => {
            const container = card.querySelector(".skill-card__tags");
            container.innerHTML = "";
            sk.cards[i].forEach(s => {
                const span = document.createElement("span");
                span.className = "tag";
                span.textContent = s;
                container.appendChild(span);
            });
        });

        // Projects
        const pr = projectsTexts[lang];
        document.querySelector("#projects .section-title").textContent = pr.title;
        document.querySelectorAll(".project-card").forEach((card, i) => {
            card.querySelector(".project-title").textContent = pr.items[i].title;
            card.querySelector(".project-desc").textContent = pr.items[i].desc;
        });
    }

    switchBtn.addEventListener("click", () => {
        const next = switchBtn.dataset.lang === "pt" ? "en" : "pt";
        switchBtn.dataset.lang = next;
        applyLang(next);
    });

    applyLang("pt");
})();

// Lógica de Carrossel
(function() {
    const carousel = document.querySelector(".projects-carousel");
    const btnL = document.querySelector(".scroll-btn.left");
    const btnR = document.querySelector(".scroll-btn.right");
    if(!carousel) return;
    btnL.onclick = () => carousel.scrollBy({ left: -300, behavior: 'smooth' });
    btnR.onclick = () => carousel.scrollBy({ left: 300, behavior: 'smooth' });
})();