(function () {
    const profileTexts = {
        en: {
            greeting: "Hello, I'm",
            role: "Data Scientist",
            summary: "Data Scientist with 2 years of hands-on experience in AI and Machine Learning. Currently pursuing a Master's at UFV, I bridge research and engineering by building autonomous agents, RAG pipelines, and scalable AI solutions with FastAPI.",
            download: "Download CV",
            contact: "Contact"
        },
        pt: {
            greeting: "Olá, eu sou",
            role: "Cientista de Dados",
            summary: "Cientista de Dados com 2 anos de experiência prática em IA e Machine Learning. Mestrando na UFV, conecto pesquisa e engenharia criando agentes autônomos, pipelines de RAG e soluções escaláveis de IA com FastAPI.",
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
                ["Python", "Go", "C/C++", "SQL (Postgres/MySQL)", "NoSQL (MongoDB)"],
                ["LLMs & Fine-tuning", "RAG Pipelines", "Autonomous Agents", "Computer Vision", "Time-series Forecasting"],
                ["PyTorch", "LangChain", "LlamaIndex", "FastAPI", "AWS", "Docker"]
            ]
        },
        pt: {
            cards: [
                ["Python", "Go", "C/C++", "SQL (Postgres/MySQL)", "NoSQL (MongoDB)"],
                ["LLMs & Fine-tuning", "Pipelines de RAG", "Agentes Autônomos", "Visão Computacional", "Previsão de Séries Temporais"],
                ["PyTorch", "LangChain", "LlamaIndex", "FastAPI", "AWS", "Docker"]
            ]
        }
    };

    const projectsTexts = {
        en: { 
            title: "Projects", 
            items: [
                { title: "Multimodal RAG Agents", tags: ["LLM", "LangChain", "FastAPI"], desc: "Intelligent agents integrating text and images for automation.", actions: "Code" }, 
                { title: "Satellite Segmentation", tags: ["PyTorch", "GEE", "AWS"], desc: "Deep Learning models for agricultural monitoring.", actions: "Code" }
            ] 
        },
        pt: { 
            title: "Projetos", 
            items: [
                { title: "Agentes RAG Multimodais", tags: ["LLM", "LangChain", "FastAPI"], desc: "Agentes inteligentes integrando texto e imagens para automação.", actions: "Código" }, 
                { title: "Segmentação de Satélite", tags: ["PyTorch", "GEE", "AWS"], desc: "Modelos de Deep Learning para monitoramento agrícola.", actions: "Código" }
            ] 
        }
    };

    const switchBtn = document.getElementById("langSwitch");

    function applyLang(lang) {
        document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
        
        // Nav Links
        document.querySelectorAll(".nav-links a").forEach(a => {
            const text = a.getAttribute(`data-${lang}`);
            if(text) a.textContent = text;
        });

        // Profile Section
        const p = profileTexts[lang];
        document.querySelector(".section__text__p1").textContent = p.greeting;
        document.querySelector(".section__text__p2").textContent = p.role;
        document.querySelector(".summary").textContent = p.summary;

        // Experience Section
        const exp = experienceTexts[lang];
        document.querySelector("#experience .section-title").textContent = exp.title;
        document.querySelectorAll(".timeline-row").forEach((row, i) => {
            const item = exp.items[i];
            if(!item) return;
            row.querySelector(".time-badge").textContent = item.time;
            row.querySelector(".xp-role").textContent = item.role;
            row.querySelector(".xp-meta").textContent = item.meta;
            const ul = row.querySelector(".xp-points");
            ul.innerHTML = "";
            item.points.forEach(pt => { 
                const li = document.createElement("li"); 
                li.textContent = pt; 
                ul.appendChild(li); 
            });
        });

        // Education Section
        const edu = educationTexts[lang];
        document.querySelector(".education .section-title").textContent = edu.title;
        document.querySelectorAll(".edu-item").forEach((item, i) => {
            const data = edu.items[i];
            if(!data) return;
            item.querySelector(".edu-meta").textContent = data.meta;
            item.querySelector(".edu-desc").textContent = data.desc;
        });

        // Skills Section
        const sk = skillsTexts[lang];
        const skillTitles = document.querySelectorAll(".skill-card__title");
        document.querySelectorAll(".skill-card").forEach((card, i) => {
            // Update Title
            const titleEl = card.querySelector(".skill-card__title");
            if(titleEl) titleEl.textContent = titleEl.getAttribute(`data-${lang}`);

            // Update Tags
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

        // Projects Section
        const pr = projectsTexts[lang];
        document.querySelector("#projects .section-title").textContent = pr.title;
        document.querySelectorAll(".project-card").forEach((card, i) => {
            const item = pr.items[i];
            if(!item) return;
            card.querySelector(".project-title").textContent = item.title;
            card.querySelector(".project-desc").textContent = item.desc;
            card.querySelector(".btn-link span").textContent = item.actions;
            
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

    // Inicia em Português
    applyLang("pt");
})();

// Carrossel de Projetos
(function() {
    const carousel = document.querySelector(".projects-carousel");
    const btnL = document.querySelector(".scroll-btn.left");
    const btnR = document.querySelector(".scroll-btn.right");
    if(!carousel || !btnL || !btnR) return;
    btnL.onclick = () => carousel.scrollBy({ left: -350, behavior: 'smooth' });
    btnR.onclick = () => carousel.scrollBy({ left: 350, behavior: 'smooth' });
})();