//parameters translation

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
        experienceTitle: "Expériences Professionnelles",
        experience: "Vente en Commerce",
        experienceDate: "2019 - 2024",
        experienceText: "Tout au long de mon parcours professionnel, j'ai acquis une précieuse expérience dans le secteur de la vente au détail, évoluant du poste de Vendeur à celui de Responsable de Magasin. J'ai travaillé avec plusieurs marques renommées, notamment Courir, Petit Bateau, Action, Fésti et Capstone Box, développant de solides compétences en service client, gestion d'équipe et stratégie commerciale.",
        educationTitle: "Formations",
        education: "Développeur Web",
        educationDate: "DonkeySchool - Sept 2024 à Présent",
        educationText: "Durant ma formation, j’ai acquis une solide maîtrise des technologies front-end telles que HTML, CSS et JavaScript. J’ai eu l’opportunité de travailler sur un projet concret où, avec mon équipe, nous avons conçu et développé un site web sur WordPress pour une société de ménage. Ce projet m’a permis de renforcer mes compétences en conception d’interfaces utilisateur, en intégration de fonctionnalités spécifiques et en optimisation de l’expérience utilisateur. De plus, cette expérience m’a sensibilisé aux exigences d’un client et m’a appris à travailler en équipe de manière efficace..",
        skillsTitle: "Compétences",
        contactMe: "📩 Contactez-moi",
        langBtn: "🇬🇧 English"
    }
};
//parameters language
let currentLang = "fr";

function switchLanguage() {
    currentLang = currentLang === "fr" ? "en" : "fr";

  //change the language of the page
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

//parameters dark mode 
const darkModeBtn = document.getElementById("dark-mode-btn");

// check if dark mode is enabled
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// activate dark mode
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // save the state of dark mode
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

/* script.js  for a chatbot */
function sendQuestion(question) {
    const chatBox = document.getElementById("chat-box");
    const userMessage = `<div class='chat-message user'>${question}</div>`;
    chatBox.innerHTML += userMessage;
    
    setTimeout(() => {
        let response = "";
        switch(question) {
            case "Que recherchez vous comme poste ?":
                response = "Je suis à la recherche d’un stage de développeur d'une durée de six mois.";
                break;
            case "Quand êtes-vous disponnible ?":
                response = "Je suis actuellement en formation chez Donkeyschool et disponible dès le 16 septembre 2025.";
                break;
            case "Comment vous contacter ?":
                response = "Vous pouvez me joindre par mail à math.9408@gmail.com.";
                break;
            case "Quel est votre parcours ?":
                response = "J’ai débuté ma carrière en tant que vendeur chez Courir, où j’ai rapidement évolué pour devenir adjoint de magasin. J’ai ensuite occupé des postes d’adjoint chez Petit Bateau et Action, avant de devenir responsable de magasin chez Festi. Mon parcours m’a ensuite conduit à un rôle de responsable de centre de stockage chez Capstone Box, où j’ai pu développer mes compétences en gestion, logistique et management. Aujourd’hui, je suis en reconversion professionnelle et je suis une formation de développeur web et mobile, avec pour objectif d’acquérir de nouvelles compétences et d’évoluer dans le domaine du numérique.";
                break;
            case "Pourquoi devenir développeur web ?":
                response = "Après 15 ans dans la vente, j’ai décidé de me reconvertir dans le développement web, un domaine qui m’a toujours passionné. Depuis longtemps attiré par l’informatique et les nouvelles technologies, j’ai vu dans ce métier une opportunité d’allier créativité et logique, tout en relevant de nouveaux défis chaque jour. Le développement web est un secteur en constante évolution, offrant de nombreuses perspectives d’avenir et la possibilité de travailler de partout, en toute flexibilité. Cette reconversion me permet aujourd’hui d’explorer un univers qui me passionne et de construire des projets concrets et innovants.";
                break;
            case "Quels sont vos centres d interet ?":
                response = "Passionné par le codage informatique, j’aime explorer de nouvelles technologies et créer des projets innovants qui allient performance et créativité.J’accorde également une grande importance aux moments en famille et entre amis, que ce soit lors de sorties conviviales ou à travers des jeux vidéo et jeux de société, qui renforcent les liens et stimulent la réflexion stratégique.";
                break;
            /* QUESTION A RAJOUTER case "Comment vous contacter ?":
                response = "Vous pouvez me joindre par mail à math.9408@gmail.com.";
                break;; */
            default:
                response = "Je n’ai pas compris votre question.";
        }
        chatBox.innerHTML += `<div class='chat-message bot'>${response}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

function toggleChat() {
    const chatContainer = document.getElementById("chat-container");
    const toggleIcon = document.getElementById("toggle-icon");
    chatContainer.classList.toggle("minimized");

    if (chatContainer.classList.contains("minimized")) {
        toggleIcon.textContent = "▲";
    } else {
        toggleIcon.textContent = "▼";
    }
}

function toggleQuestions() {
    const extraQuestions = document.getElementById("extra-questions");
    const toggleButton = document.getElementById("toggle-questions-btn");

    if (extraQuestions.classList.contains("hidden")) {
        extraQuestions.classList.remove("hidden");
        toggleButton.textContent = "Voir moins";
    } else {
        extraQuestions.classList.add("hidden");
        toggleButton.textContent = "Voir plus";
    }
}
