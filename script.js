(function () {
    const profileTexts = {
        en: {
            greeting: "Hello, I'm",
            role: "Data Scientist",
            summary: "Computer Science graduate, currently pursuing a Master's at UFV focused on Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and Computer Vision. Passionate about AI and high-impact projects.",
            download: "Download CV",
            contact: "Contact"
        },
        pt: {
            greeting: "Olá, eu sou",
            role: "Cientista de Dados",
            summary: "Graduado em Ciência da Computação, cursando Mestrado na UFV com foco em Modelos de Linguagem de Grande Escala (LLMs), Geração Aumentada por Recuperação (RAG) e Visão Computacional. Apaixonado por IA e projetos de impacto.",
            download: "Baixar CV",
            contact: "Contato"
        }
    };

    const educationTexts = {
        en: {
            title: "Education",
            items: [
                { meta: "M.Sc. · 2025–Present", desc: "Computer Science (Deep Learning, NLP, RAG, LLM)." },
                { meta: "B.Sc. · 2021–2025", desc: "Computer Science." }
            ]
        },
        pt: {
            title: "Educação",
            items: [
                { meta: "Mestrado · 2025–Presente", desc: "Ciência da Computação (Deep Learning, NLP, RAG, LLM)." },
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
                    points: [
                        "Developing time-series features with Google Earth Engine for crop prediction models.",
                        "Optimizing Deep Learning models for satellite imagery segmentation, improving accuracy and performance.",
                        "Implementing automated data pipelines using AWS Step Functions and AWS Lambda.",
                        "Extracting structured content from digitized documents using OCR (Amazon Textract, Tesseract).",
                        "Building multimodal agents integrating text, images, and tabular data in RAG workflows."
                    ]
                },
                {
                    time: "2024 – 2025",
                    role: "Data Science Intern",
                    meta: "Tarken Software · Remote",
                    points: [
                        "Trained semantic segmentation models for land use and crop identification.",
                        "Modeled time-series for crop forecasting using Random Forest, XGBoost, and LSTM.",
                        "Developed RAG pipelines to integrate external knowledge bases with LLM applications.",
                        "Applied Clean Code and Clean Architecture to build scalable and maintainable data pipelines.",
                        "Performed data preprocessing and model evaluation using metrics like IoU and F1-score."
                    ]
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
                    points: [
                        "Desenvolvimento de features de séries temporais com Google Earth Engine para modelos de previsão de cultivo.",
                        "Otimização de modelos de Deep Learning para segmentação de satélite, aumentando precisão e desempenho.",
                        "Implementação de pipelines de dados automatizados com AWS Step Functions e AWS Lambda.",
                        "Extração de conteúdo estruturado de documentos usando OCR (Amazon Textract, Tesseract OCR).",
                        "Criação de agentes multimodais integrando texto, imagens e dados tabulares em fluxos de RAG."
                    ]
                },
                {
                    time: "2024 – 2025",
                    role: "Estagiário de Ciência de Dados",
                    meta: "Tarken Software · Remoto",
                    points: [
                        "Treinamento de modelos de segmentação semântica para identificação de uso do solo.",
                        "Modelagem de séries temporais para previsão de safras com XGBoost, Random Forest e LSTM.",
                        "Implementação de pipelines de RAG para integrar bases de conhecimento em aplicações com LLMs.",
                        "Aplicação de Clean Code e Clean Architecture em pipelines de dados escaláveis.",
                        "Avaliação de modelos com métricas técnicas (IoU, acurácia, F1-score)."
                    ]
                }
            ]
        }
    };

    const skillsTexts = {
        en: { 
            cards: [
                ["Python", "Go", "C/C++", "SQL (PostgreSQL)"], // Languages [cite: 41, 40]
                ["LLMs (RAG)", "Computer Vision", "Deep Learning", "NLP"], // AI/ML [cite: 13, 42]
                ["AWS (Step Functions/Lambda)", "Docker", "PyTorch", "LangChain"] // Tools [cite: 24, 39, 42]
            ] 
        },
        pt: { 
            cards: [
                ["Python", "Go", "C/C++", "SQL (PostgreSQL)"], // Linguagens [cite: 41, 40]
                ["LLMs (RAG)", "Visão Computacional", "Deep Learning", "NLP"], // IA/ML [cite: 13, 42]
                ["AWS (Step Functions/Lambda)", "Docker", "PyTorch", "LangChain"] // Ferramentas [cite: 24, 39, 42]
            ] 
        }
    };

    const projectsTexts = {
        en: { title: "Projects", items: [{ title: "Multimodal RAG Agents", tags: ["LLM", "LangChain"], desc: "Intelligent agents integrating text and images for automation.", actions: ["Code"] }, { title: "Satellite Segmentation", tags: ["PyTorch", "GEE"], desc: "Deep Learning models for agricultural monitoring.", actions: ["Code"] }] },
        pt: { title: "Projetos", items: [{ title: "Agentes RAG Multimodais", tags: ["LLM", "LangChain"], desc: "Agentes inteligentes integrando texto e imagens para automação.", actions: ["Código"] }, { title: "Segmentação de Satélite", tags: ["PyTorch", "GEE"], desc: "Modelos de Deep Learning para monitoramento agrícola.", actions: ["Código"] }] }
    };

    const switchBtn = document.getElementById("langSwitch");

    function applyLang(lang) {
        document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
        
        // Nav
        document.querySelectorAll(".nav-links a").forEach(a => {
            const text = a.getAttribute(`data-${lang}`);
            if(text) a.textContent = text;
        });

        // Profile
        const p = profileTexts[lang];
        const greetingEl = document.querySelector(".section__text__p1");
        const roleEl = document.querySelector(".section__text__p2");
        const summaryEl = document.querySelector(".summary");
        if(greetingEl) greetingEl.textContent = p.greeting;
        if(roleEl) roleEl.textContent = p.role;
        if(summaryEl) summaryEl.textContent = p.summary;

        // Experience
        const exp = experienceTexts[lang];
        const expTitle = document.querySelector("#experience .section-title");
        if(expTitle) expTitle.textContent = exp.title;
        document.querySelectorAll(".timeline-row").forEach((row, i) => {
            const item = exp.items[i];
            if(!item) return;
            row.querySelector(".time-badge").textContent = item.time;
            row.querySelector(".xp-role").textContent = item.role;
            row.querySelector(".xp-meta").textContent = item.meta;
            const ul = row.querySelector(".xp-points");
            ul.innerHTML = "";
            item.points.forEach(pt => { const li = document.createElement("li"); li.textContent = pt; ul.appendChild(li); });
        });

        // Education
        const edu = educationTexts[lang];
        document.querySelectorAll(".edu-item").forEach((item, i) => {
            const data = edu.items[i];
            if(!data) return;
            const meta = item.querySelector(".edu-meta");
            const desc = item.querySelector(".edu-desc");
            if(meta) meta.textContent = data.meta;
            if(desc) desc.textContent = data.desc;
        });

        // Skills
        const sk = skillsTexts[lang];
        document.querySelectorAll(".skill-card").forEach((card, i) => {
            const container = card.querySelector(".skill-card__tags");
            if(!container || !sk.cards[i]) return;
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
        const prTitle = document.querySelector("#projects .section-title");
        if(prTitle) prTitle.textContent = pr.title;
        document.querySelectorAll(".project-card").forEach((card, i) => {
            const item = pr.items[i];
            if(!item) return;
            card.querySelector(".project-title").textContent = item.title;
            card.querySelector(".project-desc").textContent = item.desc;
            const tagContainer = card.querySelector(".tags");
            tagContainer.innerHTML = "";
            item.tags.forEach(t => {
                const li = document.createElement("li");
                li.textContent = t;
                tagContainer.appendChild(li);
            });
        });
    }

    switchBtn.addEventListener("click", () => {
        const next = switchBtn.dataset.lang === "pt" ? "en" : "pt";
        switchBtn.dataset.lang = next;
        applyLang(next);
    });

    // Inicia em PT
    applyLang("pt");
})();

// Lógica de Carrossel
(function() {
    const carousel = document.querySelector(".projects-carousel");
    const btnL = document.querySelector(".scroll-btn.left");
    const btnR = document.querySelector(".scroll-btn.right");
    if(!carousel || !btnL || !btnR) return;
    btnL.onclick = () => carousel.scrollBy({ left: -350, behavior: 'smooth' });
    btnR.onclick = () => carousel.scrollBy({ left: 350, behavior: 'smooth' });
})();