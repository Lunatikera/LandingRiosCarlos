document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('#contenido-principal .content-section');
    
    document.getElementById('hobbies').classList.add('active');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            
            this.classList.add('active');
            
            sections.forEach(s => s.classList.remove('active'));
            
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
});

let idioma = "es";

const traducciones = {
    "es": {
        "Translate to English": "Ver en Español",
        "Traducir a Inglés": "Translate to English",
        "Carlos Juveen": "Carlos Juveen",
        "Bienvenido a mi página personal. Aquí comparto un poco sobre mí, mis intereses y cómo contactarme.":
            "Welcome to my personal page. Here I share a bit about me, my interests, and how to contact me.",
        "Hobbies": "Hobbies",
        "Series": "Series",
        "Películas": "Movies",
        "Mis Hobbies": "My Hobbies",
        "Tocar la guitarra": "Playing Guitar",
        "Me gusta mucho la musica y me gusta sacar canciones mientras las escucho. Me gusta aprender y notar la diferencia a medida que aprendo":
            "I enjoy music and figuring out songs by ear. I love learning and noticing my progress.",
        "Programar": "Programming",
        "Disfruto crear aplicaciones y soluciones tecnológicas. La programación es mi pasión y profesión, siempre aprendiendo nuevas tecnologías.":
            "I enjoy creating applications and tech solutions. Programming is my passion and profession.",
        "Ajedrez": "Chess",
        "Practico y juego ajedrez desde que tengo memoria. Me gusta por que mantiene mi mente activa y pienso que hay belleza en las partidas":
            "I’ve played chess since I can remember. It keeps my mind active and I find beauty in the game.",
        "Videojuegos": "Video Games",
        "Me gusta jugar videojuegos, especialmente los de estrategia. Disfruto de tanto juegos con amigos, como de juegos single player.":
            "I like playing video games, especially strategy ones. I enjoy both multiplayer and single player games.",
        "Series Favoritas": "Favorite Series",
        "Star Trek": "Star Trek",
        "Es una de las series favoritas de mi infancia, ya que mi papa es muy fan de ella.":
            "One of my childhood favorites because my dad is a big fan.",
        "Peaky Blinders": "Peaky Blinders",
        "La ultima serie que me vi, creo que tiene una historia muy buena y unos actores muy muy buenos.":
            "The last series I watched. Great story and amazing actors.",
        "The Sopranos": "The Sopranos",
        "Yo diria que es mi serie favorita por todos sus detalles, su historia y sus personajes.":
            "Probably my favorite series for its details, story, and characters.",
        "One Piece": "One Piece",
        "Una historia que empece hace mas de once años. Increible como el autor nunca deja de sorpredernos.":
            "A story I started more than eleven years ago. Amazing how the author keeps surprising us.",
        "Full Metal Alchemist": "Full Metal Alchemist",
        "Mi anime favorito, me gusta mucho su historia y sus personajes. la he visto varias veces.":
            "My favorite anime. I love its story and characters. I’ve watched it several times.",
        "Películas Favoritas": "Favorite Movies",
        "Snatch": "Snatch",
        "Mi pelicula favorita, me gustan mucho sus dialogos, su musica y sus actores. Una pelicula que me hace reir cada vez que la veo y ademas me atrapa en su historia":
            "My favorite movie. I love its dialogue, music, and actors. It makes me laugh and captivates me every time.",
        "Señor de los anillos": "Lord of the Rings",
        "Es mi universo de fantasia favorito. Me he leido los libros una y otra vez, asi como tambien sus otras obras. Las peliculas son tan buena como los libros":
            "My favorite fantasy universe. I’ve read the books many times, including other related works. The movies are just as great.",
        "Whiplash": "Whiplash",
        "Se me hace una pelicula tan simple, pero a la vez tan compleja y entretenida. Me gustan los personajes y el mensaje que quiere transmitir con cada uno de ellos":
            "A movie that seems simple, yet complex and engaging. I like the characters and the message behind each of them.",
        "Inception": "Inception",
        "Una de las mejores peliculas que he visto tambien, me gusta mucho el concepto. Mi totem seria un peon de ajedrez":
            "One of the best movies I’ve seen. I love the concept. My totem would be a chess pawn.",
        "Contacto": "Contact",
        "Puedes contactarme a través del siguiente correo:":
            "You can contact me through the following email:",
        "O a través de mis redes sociales:": "Or through my social media:"
    }
};

const reverse = {};
for (const [key, value] of Object.entries(traducciones["es"])) {
    reverse[value] = key;
}

function translateElement(element, translations) {
    const original = element.innerText.trim();
    if (translations[original]) {
        element.innerText = translations[original];
        return true;
    }
    
    const normalized = original.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (translations[normalized]) {
        element.innerText = translations[normalized];
        return true;
    }
    
    return false;
}

function translatePage() {
    const elementos = document.querySelectorAll('.traducible');
    const translations = (idioma === "es") ? traducciones["es"] : reverse;
    
    elementos.forEach(el => {
        if (!translateElement(el, translations)) {
            const children = el.querySelectorAll('span.traducible, p.traducible, h3.traducible');
            if (children.length > 0) {
                children.forEach(child => {
                    translateElement(child, translations);
                });
            }
        }
    });
    
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        if (idioma === "es") {
            tooltip.textContent = "Traducir a Inglés";
        } else {
            tooltip.textContent = "Translate to Spanish";
        }
    }
}

document.getElementById("btn-translate").addEventListener("click", () => {
    idioma = (idioma === "es") ? "en" : "es";
    translatePage();
});