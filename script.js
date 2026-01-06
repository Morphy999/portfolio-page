const texts = {
  en: {
    name: "Walter Bueno",
    role: "Data Scientist • AI Engineer • LLMs & RAG",
    summary:
      "MSc Computer Science student focused on Large Language Models, Retrieval-Augmented Generation and Computer Vision.",
    about_title: "About",
    about_text:
      "I work with Applied Machine Learning, from classical models to deep neural networks.",
    skills_title: "Skills",
    projects_title: "Projects",
    project_rag:
      "Retrieval-Augmented Generation using FAISS and modern LLMs.",
  },

  pt: {
    name: "Walter Bueno",
    role: "Cientista de Dados • Engenheiro de IA • LLMs & RAG",
    summary:
      "Mestrando em Ciência da Computação com foco em Modelos de Linguagem de Grande Escala, RAG e Visão Computacional.",
    about_title: "Sobre",
    about_text:
      "Atuo com Aprendizado de Máquina Aplicado, de modelos clássicos a redes neurais profundas.",
    skills_title: "Habilidades",
    projects_title: "Projetos",
    project_rag:
      "Sistema de Geração Aumentada por Recuperação utilizando FAISS e LLMs modernos.",
  },
};

const btn = document.getElementById("langToggle");
const elements = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (texts[lang][key]) {
      el.textContent = texts[lang][key];
    }
  });

  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  btn.textContent = lang === "pt" ? "EN" : "PT";
  localStorage.setItem("lang", lang);
}

btn.addEventListener("click", () => {
  const current = localStorage.getItem("lang") || "en";
  setLanguage(current === "en" ? "pt" : "en");
});

setLanguage(localStorage.getItem("lang") || "en");
