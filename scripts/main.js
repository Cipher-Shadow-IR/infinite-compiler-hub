const compilers = {
    "python": "https://trinket.io/embed/python3/a5bd54189b",
    "c": "https://www.onlinegdb.com/online_c_compiler",
    "c++": "https://www.onlinegdb.com/online_c++_compiler",
    "c#": "https://www.onlinegdb.com/online_csharp_compiler",
    "java": "https://www.jdoodle.com/online-java-compiler",
    "javascript": "https://jsfiddle.net/",
    "ruby": "https://www.onlinegdb.com/online_ruby_compiler",
    "php": "https://nextleap.app/online-compiler/php-programming",
    "go": "https://go.dev/play/",
    "swift": "https://online.swiftplayground.run/",
    "r": "http://jdoodle.com/execute-r-online"
};

const languages = [
    { name: "Python", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png" },
    { name: "C", icon: "https://cdn-icons-png.flaticon.com/128/3665/3665923.png" },
    { name: "C++", icon: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png" },
    { name: "C#", icon: "https://cdn-icons-png.flaticon.com/128/6132/6132221.png" },
    { name: "Java", icon: "https://cdn-icons-png.flaticon.com/128/919/919854.png" },
    { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/128/919/919828.png" },
    { name: "Ruby", icon: "https://cdn-icons-png.flaticon.com/128/919/919842.png" },
    { name: "PHP", icon: "https://cdn-icons-png.flaticon.com/128/919/919830.png" },
    { name: "Go", icon: "assets/icons/Go_icon.png" },
    { name: "Swift", icon: "https://cdn-icons-png.flaticon.com/128/919/919853.png" },
    { name: "R", icon: "assets/icons/R_icon.png" }
];

const gridContainer = document.getElementById('gridContainer');

// Generate icons dynamically
languages.forEach(lang => {
    const iconContainer = document.createElement('div');
    iconContainer.className = 'icon-container';
    iconContainer.onclick = () => redirectToCompiler(lang.name.toLowerCase());

    const icon = document.createElement('img');
    icon.src = lang.icon;
    icon.className = 'icon';
    icon.alt = lang.name;

    const languageName = document.createElement('div');
    languageName.className = 'language-name';
    languageName.textContent = lang.name;

    iconContainer.appendChild(icon);
    iconContainer.appendChild(languageName);
    gridContainer.appendChild(iconContainer);
});

function redirectToCompiler(lang) {
    if (compilers[lang]) {
        window.location.href = compilers[lang];
    } else {
        alert("Compiler not available for this language yet.");
    }
}

// Search functionality
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const icons = document.querySelectorAll('.icon-container');
    icons.forEach(icon => {
        const languageName = icon.querySelector('.language-name').textContent.toLowerCase();
        if (languageName.includes(searchTerm)) {
            icon.style.display = 'flex';
        } else {
            icon.style.display = 'none';
        }
    });
});

/* Randomly generate particles */

document.addEventListener("DOMContentLoaded", function() {
	const particleCount = 50;
	const body = document.body;

	for (let i = 0; i < particleCount; i++) {
		let particle = document.createElement("div");
		particle.classList.add("particle");
		let size = Math.random() * 5 + 2;
		particle.style.width = ${size}px;
		particle.style.height = ${size}px;
		particle.style.left = ${Math.random() * 100}vw;
		particle.style.top = ${Math.random() * 100}vh;
		particle.style.animationDuration = ${Math.random() * 5 + 5}s;
		body.appendChild(particle);
	}
});
