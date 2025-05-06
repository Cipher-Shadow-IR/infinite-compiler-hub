const languages = [
    { name: "Python", key: "python", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png", compiler: "https://trinket.io/embed/python3/a5bd54189b" },
    { name: "C", key: "c", icon: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png", compiler: "https://www.onlinegdb.com/online_c_compiler" },
    { name: "C++", key: "cpp", icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", compiler: "https://www.onlinegdb.com/online_c++_compiler" },
    { name: "C#", key: "csharp", icon: "https://cdn-icons-png.flaticon.com/128/6132/6132221.png", compiler: "https://dotnetfiddle.net/" },
    { name: "Java", key: "java", icon: "https://cdn-icons-png.flaticon.com/128/226/226777.png", compiler: "https://www.jdoodle.com/online-java-compiler" },
    { name: "JavaScript", key: "javascript", icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", compiler: "https://jsfiddle.net/" },
    { name: "Ruby", key: "ruby", icon: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg", compiler: "https://www.onlinegdb.com/online_ruby_compiler" },
    { name: "PHP", key: "php", icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg", compiler: "https://nextleap.app/online-compiler/php-programming" },
    { name: "Go", key: "go", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg", compiler: "https://go.dev/play/" },
    { name: "Swift", key: "swift", icon: "https://cdn-icons-png.flaticon.com/128/919/919853.png", compiler: "https://online.swiftplayground.run/" },
    { name: "R", key: "r", icon: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg", compiler: "http://jdoodle.com/execute-r-online" },
    { name: "Kotlin", key: "kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css", compiler: "https://replit.com/@kotlin/Kotlin" },
    { name: "TypeScript", key: "typescript", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", compiler: "https://replit.com/@typescript/TypeScript" },
    { name: "Rust", key: "rust", icon: "", compiler: "https://replit.com/@rust/Rust" },
    { name: "Scala", key: "scala", icon: "", compiler: "https://replit.com/@scala/Scala" },
    { name: "Perl", key: "perl", icon: "", compiler: "https://www.onlinegdb.com/online_perl_compiler" },
    { name: "Lua", key: "lua", icon: "", compiler: "https://www.lua.org/cgi-bin/demo" },
    { name: "Haskell", key: "haskell", icon: "", compiler: "https://replit.com/@haskell/Haskell" },
    { name: "Julia", key: "julia", icon: "", compiler: "https://replit.com/@julia/Julia" },
    { name: "Bash", key: "bash", icon: "", compiler: "https://replit.com/@bash/Bash" },
    { name: "PowerShell", key: "powershell", icon: "", compiler: "https://dotnetfiddle.net/" },
    { name: "Dart", key: "dart", icon: "", compiler: "https://dartpad.dev/" },
    { name: "Assembly", key: "assembly", icon: "", compiler: "https://www.onlinegdb.com/online_asm_compiler" },
    { name: "Objective-C", key: "objectivec", icon: "", compiler: "https://www.onlinegdb.com/online_objc_compiler" },
    { name: "VB.NET", key: "vbnet", icon: "", compiler: "https://dotnetfiddle.net/" },
    { name: "Scheme", key: "scheme", icon: "", compiler: "https://replit.com/@scheme/Scheme" },
    { name: "CoffeeScript", key: "coffeescript", icon: "", compiler: "https://replit.com/@coffeescript/CoffeeScript" },
    { name: "F#", key: "fsharp", icon: "", compiler: "https://dotnetfiddle.net/" },
    { name: "Elixir", key: "elixir", icon: "", compiler: "https://replit.com/@elixir/Elixir" },
    { name: "Erlang", key: "erlang", icon: "", compiler: "https://replit.com/@erlang/Erlang" },
    { name: "Clojure", key: "clojure", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg", compiler: "https://replit.com/@clojure/Clojure" },
    { name: "Fortran", key: "fortran", icon: "", compiler: "https://www.onlinegdb.com/online_fortran_compiler" },
    { name: "Ada", key: "ada", icon: "", compiler: "https://www.onlinegdb.com/online_ada_compiler" },
    { name: "Lisp", key: "lisp", icon: "", compiler: "https://www.tutorialspoint.com/execute_lisp_online.php" },
    { name: "Prolog", key: "prolog", icon: "", compiler: "https://www.tutorialspoint.com/execute_prolog_online.php" },
    { name: "COBOL", key: "cobol", icon: "", compiler: "https://www.tutorialspoint.com/execute_cobol_online.php" },
    { name: "Pascal", key: "pascal", icon: "", compiler: "https://www.onlinegdb.com/online_pascal_compiler" },
    { name: "Racket", key: "racket", icon: "", compiler: "https://replit.com/@racket/Racket" },
    { name: "TCL", key: "tcl", icon: "", compiler: "https://www.tutorialspoint.com/execute_tcl_online.php" },
    { name: "MATLAB", key: "matlab", icon: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png", compiler: "https://octave-online.net/" },
    { name: "Octave", key: "octave", icon: "", compiler: "https://octave-online.net/" },
    { name: "Groovy", key: "groovy", icon: "", compiler: "https://replit.com/@groovy/Groovy" },
    { name: "Smalltalk", key: "smalltalk", icon: "", compiler: "https://www.tutorialspoint.com/execute_smalltalk_online.php" }
];
  

const gridContainer = document.getElementById('gridContainer');

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
    window.open(compilers[lang], "_blank");
    } else {
    alert("Compiler not available for this language yet.");
    }
}

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const icons = document.querySelectorAll('.icon-container');
    icons.forEach(icon => {
    const languageName = icon.querySelector('.language-name').textContent.toLowerCase();
    icon.style.display = languageName.includes(searchTerm) ? 'flex' : 'none';
    });
});
