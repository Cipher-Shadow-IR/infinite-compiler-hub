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
    "r": "http://jdoodle.com/execute-r-online",
    "assembly": "https://www.tutorialspoint.com/compile_assembly_online.php",
    "bash": "https://www.tutorialspoint.com/execute_bash_online.php",
    "clojure": "https://www.jdoodle.com/clojure-online-compiler",
    "coffeescript": "https://www.tutorialspoint.com/execute_coffee_script_online.php",
    "dart": "https://dartpad.dev/",
    "elixir": "https://www.jdoodle.com/elixir-online-compiler",
    "erlang": "https://www.jdoodle.com/erlang-online-compiler",
    "f#": "https://www.jdoodle.com/fsharp-online-compiler",
    "haskell": "https://www.jdoodle.com/haskell-online-compiler",
    "html": "https://jsfiddle.net/",
    "julia": "https://www.jdoodle.com/julia-online-compiler",
    "kotlin": "https://www.jdoodle.com/kotlin-online-compiler",
    "lisp": "https://www.jdoodle.com/lisp-online-compiler",
    "lua": "https://www.jdoodle.com/lua-online-compiler",
    "matlab": "https://www.jdoodle.com/matlab-online-compiler",
    "objective-c": "https://www.jdoodle.com/objective-c-online-compiler",
    "ocaml": "https://www.jdoodle.com/ocaml-online-compiler",
    "perl": "https://www.jdoodle.com/perl-online-compiler",
    "prolog": "https://www.jdoodle.com/prolog-online-compiler",
    "rust": "https://www.jdoodle.com/rust-online-compiler",
    "scala": "https://www.jdoodle.com/scala-online-compiler",
    "sql": "https://www.jdoodle.com/sql-online-compiler",
    "typescript": "https://www.jdoodle.com/typescript-online-compiler",
    "vbscript": "https://www.tutorialspoint.com/execute_vbscript_online.php",
    "react.js": "https://www.jdoodle.com/reactjs"
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
    { name: "Go", icon: "https://cdn-icons-png.flaticon.com/128/919/919857.png" },
    { name: "Swift", icon: "https://cdn-icons-png.flaticon.com/128/919/919853.png" },
    { name: "R", icon: "https://cdn-icons-png.flaticon.com/128/919/919861.png" },
    { name: "Assembly", icon: "https://cdn-icons-png.flaticon.com/128/919/919860.png" },
    { name: "Bash", icon: "https://cdn-icons-png.flaticon.com/128/919/919859.png" },
    { name: "Clojure", icon: "https://cdn-icons-png.flaticon.com/128/919/919858.png" },
    { name: "CoffeeScript", icon: "https://cdn-icons-png.flaticon.com/128/919/919856.png" },
    { name: "Dart", icon: "https://cdn-icons-png.flaticon.com/128/919/919855.png" },
    { name: "Elixir", icon: "https://cdn-icons-png.flaticon.com/128/919/919852.png" },
    { name: "Erlang", icon: "https://cdn-icons-png.flaticon.com/128/919/919851.png" },
    { name: "F#", icon: "https://cdn-icons-png.flaticon.com/128/919/919850.png" },
    { name: "Haskell", icon: "https://cdn-icons-png.flaticon.com/128/919/919849.png" },
    { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/128/919/919848.png" },
    { name: "Julia", icon: "https://cdn-icons-png.flaticon.com/128/919/919847.png" },
    { name: "Kotlin", icon: "https://cdn-icons-png.flaticon.com/128/919/919846.png" },
    { name: "Lisp", icon: "https://cdn-icons-png.flaticon.com/128/919/919845.png" },
    { name: "Lua", icon: "https://cdn-icons-png.flaticon.com/128/919/919844.png" },
    { name: "Matlab", icon: "https://cdn-icons-png.flaticon.com/128/919/919843.png" },
    { name: "Objective-C", icon: "https://cdn-icons-png.flaticon.com/128/919/919842.png" },
    { name: "OCaml
::contentReference[oaicite:4]{index=4}

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
		particle.style.width = `${size}px`;
		particle.style.height = `${size}px`;
		particle.style.left = `${Math.random() * 100}vw`;
		particle.style.top = `${Math.random() * 100}vh`;
		particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
		body.appendChild(particle);
	}
});
