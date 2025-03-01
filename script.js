const translations = {
    en: {
        job: "Web & Mobile Developer",
        subtitle: "Looking for a 6-month internship",
        profileTitle: "Profile",
        profileText: "Passionate about web development, I combine technical expertise and creativity to design high-performance web solutions tailored to user needs. Curious and detail-oriented, I have a strong drive for continuous learning, staying up to date with emerging technologies and best development practices. With strong teamwork skills and effective communication, I collaborate seamlessly with teams to deliver high-quality projects while meeting deadlines.",
        contactTitle: "Contact",
        experienceTitle: "Professional Experience",
        experience: "Sales in Commerce",
        experienceDate: "2019 - 2024",
        experienceText: "Throughout my professional journey, I have gained valuable experience in the retail industry, progressing from Sales Associate to Store Manager. I have worked with various well-known brands, including Courir, Petit Bateau, Action, Fésti, and Capstone Box, developing strong skills in customer service, team management, and sales strategy.",
        educationTitle: "Education",
        education: "Web Developer",
        educationDate: "DonkeySchool - Sept 2024 to Present",
        educationText: "During my training, I developed a strong command of front-end technologies such as HTML, CSS, and JavaScript. I had the opportunity to work on a hands-on project where, together with my team, we designed and developed a WordPress website for a cleaning company. This project allowed me to strengthen my skills in user interface design, feature integration, and user experience optimization. Additionally, this experience enhanced my understanding of client requirements and taught me how to collaborate effectively within a team.",
        skillsTitle: "Skills",
        contactMe: "📩 Contact Me",
        langBtn: "🇫🇷 Français"
    },
    fr: {
        job: "Développeur Web & Mobile",
        subtitle: "À la recherche d'un stage d'une durée de 6 mois",
        profileTitle: "Profil",
        profileText: "Passionné, j’allie expertise technique et créativité pour concevoir des solutions web performantes et adaptées aux besoins des utilisateurs. Curieux et rigoureux, j’ai un fort attrait pour l’apprentissage constant des nouvelles technologies et des meilleures pratiques de développement. Grâce à mon esprit d’équipe et à mon sens de la communication, je collabore efficacement avec les équipes pour livrer des projets de qualité tout en respectant les délais.",
        contactTitle: "Contact",
        experienceTitle: "Expérience Professionnelle",
        experience: "Vente en Commerce",
        experienceDate: "2019 - 2024",
        experienceText: "Durant mon parcours professionnel jai pu acquérir de l’experience dans ce domaine, de vendeur à Responsable de boutique, dans différentes enseignes. (Courir, Petit Bateau, Action, Fésti et Capstone Box)",
        educationTitle: "Formation",
        education: "Développeur Web",
        educationDate: "DonkeySchool - Sept 2024 à Présent",
        educationText: "Durant ma formation, j’ai acquis une solide maîtrise des technologies front-end telles que HTML, CSS et JavaScript. J’ai eu l’opportunité de travailler sur un projet concret où, avec mon équipe, nous avons conçu et développé un site web sur WordPress pour une société de ménage. Ce projet m’a permis de renforcer mes compétences en conception d’interfaces utilisateur, en intégration de fonctionnalités spécifiques et en optimisation de l’expérience utilisateur. De plus, cette expérience m’a sensibilisé aux exigences d’un client et m’a appris à travailler en équipe de manière efficace..",
        skillsTitle: "Compétences",
        contactMe: "📩 Contactez-moi",
        langBtn: "🇬🇧 English"
    }
};

let currentLang = "fr";

function switchLanguage() {
    currentLang = currentLang === "fr" ? "en" : "fr";

  
    document.getElementById("job-title").textContent = translations[currentLang].job;
    document.getElementById("subtitle").textContent = translations[currentLang].subtitle;
    document.getElementById("profile-title").textContent = translations[currentLang].profileTitle;
    document.getElementById("profile-text").textContent = translations[currentLang].profileText;
    document.getElementById("contact-title").textContent = translations[currentLang].contactTitle;
    document.getElementById("experience-title").textContent = translations[currentLang].experienceTitle;
    document.getElementById("experience").textContent = translations[currentLang].experience;
    document.getElementById("experience-date").textContent = translations[currentLang].experienceDate;
    document.getElementById("experience-text").textContent = translations[currentLang].experienceText;
    document.getElementById("education-title").textContent = translations[currentLang].educationTitle;
    document.getElementById("education").textContent = translations[currentLang].education;
    document.getElementById("education-date").textContent = translations[currentLang].educationDate;
    document.getElementById("education-text").textContent = translations[currentLang].educationText;
    document.getElementById("skills-title").textContent = translations[currentLang].skillsTitle;
    document.querySelector(".mailto").textContent = translations[currentLang].contactMe;
    document.getElementById("lang-btn").textContent = translations[currentLang].langBtn;
}
document.getElementById("lang-btn").addEventListener("click", switchLanguage);
