// Mentor data
const mentors = [
    {
        name: "Zach Wagner",
        projectTag: "Analysis, Applied",
        researchArea: "Analysis, Applied Mathematics",
        website: "https://zachwagner.github.io/",
        researchDescription: "Mathematics of Electron Structure Theory, Applications of Machine Learning and Data Science to PDEs, Machine Assisted Proofs",
        projects: [
            "Data driven solutions to PDEs with applications to quantum chemistry, theory of PDEs with applications to quantum chemistry, formalizing basic theoretical mathematics using Lean."
        ]
    },
    {
        name: "Pranav Arrepu",
        projectTag: "Analysis, Applied",
        researchArea: "Analysis, Applied Mathematics",
        researchDescription: "Interested in analysis.",
        projects: [
            "One could work through a reading course on fluid mechanics."
        ]
    },
    {
        name: "Troy Kling",
        projectTag: "Algebra, Topology",
        researchArea: "Algebra, Topology",
        website: "https://www.troy.kli.ng/",
        researchDescription: "I am broadly interested in all areas of topology. My research mainly focuses on algebraic topology (key words: homotopy, homology, cohomology) and occasionally has some geometric flavor to it. I use rational homotopy theory and algebraic gadgetry to prove results about topological spaces.",
        projects: [
            "In general, I am very happy to tailor projects to individual students. Here are a few ideas for projects based on your level of mathematical expertise, but I'm happy to explore other topics in topology as well!",
            "For students with a background in linear algebra but not topology, we could study the basics of point-set topology and build up to something called rational homology -- a framework that lets you rigorously analyze how many holes a space has, without having to worry about annoying things like torsion. You will finally be able to tell your friends how many holes a pair of pants has!",
            "For students with some background in group theory but not topology, we could work through an introductory textbook on the subject, building up to the fundamental group and seeing some unusual proofs along the way (topological proofs of, for example, the infinitude of primes, the fundamental theory of algebra, the fact that every subgroup of a free group is free, etc.).",
            "For students who have taken MATH 111A and MATH 145, we could take a deeper dive into algebraic topology by working through Hatcher's textbook. This could involve a range of topics, including homotopy theory, homology theory, and all of the cool algebraic gadgetry you get along the way. Fun proofs encountered along the way might include Brouwer's fixed point theorem, the Borsuk-Ulam Theorem, and the ham sandwich theorem! We could even discuss cohomology if you've taken MATH 111B.",
            "For more advanced students, we could take a look at rational homotopy theory, why it's useful, and how it simplifies the absolute chaos found in the higher homotopy groups of topological spaces."
        ]
    },
    {
        name: "Kyle Hansen",
        projectTag: "Other",
        researchArea: "Geometry, Topology",
        website: "",
        researchDescription: "I study aperiodic tilings of nilpotent spaces through a topological lens. Generally, I enjoy discrete problems, and puzzles where a clever shift in perspective can unveil a whole world of understanding. ",
        projects: [
            "We will select an interesting problem from the American Mathematical Monthly (or other publisher of fun/interesting math problems), with the goal of submitting a well-written solution for publication in the magazine. If we have multiple students, each student will select a problem on their own, and during group meetings, each student will have time to report on their progress, and solicit ideas from their peers. "
        ]
    },
    {
        name: "Quinn Kolt",
        projectTag: "Algebra",
        researchArea: "Algebra, Topology",
        website: "https://web.math.ucsb.edu/~kolt/",
        researchDescription: "I am primarily interested in quantum algebra/topology. I specifically study tensor categories, Hopf algebras and their generalizations, and topological quantum field theories. These topics have immense applications throughout math, physics, and quantum computing.",
        projects: [
            "My DRP will be an introduction to categories, Hopf algebras, and categorical algebra using \"Hopf Algebras and Their Generalizations from a Category Theoretical Point of View\" by Gabriella Böhm. I request that you have taken/are taking (fall/winter) 111AB. In the first few weeks, we will focus on filling in the remaining prerequisites of the text. <br /> <br /> Groups are to Cartesian products of sets as Hopf algebras are to tensor products of vector spaces. This can be made precise in the language of category theory. The key feature of categorical algebra is seeing how these sorts of analogies extend to other monoidal categories."
        ]
    },
    {
        name: "Choomno Moos",
        projectTag: "Algebra, Applied",
        researchArea: "Algebra, Geometry, Topology",
        website: "",
        researchDescription: "I am interested in math of all types, however, my core research interest is the topology of 3- and 4-dimensional manifolds.",
        projects: [
            "Here are a few plans for projects that I have thought about, but I am by no means limited to these. I have some other ideas for projects in topology and algebra that may be preferable.",
            "Computational group theory project. Our goal will be to write a program to determine the isomorphism classes of groups up to a given order. It has been experimentally indicated that most finite groups up to isomorphism are p-groups; this is where most of our time will be spent. The primary thrust of this project will be to study and implement Newman and O'Brien's p-group generation algorithm. <br /> <br /> Topics of study: Group actions, Sylow theory, subnormal series, group extensions, representation theory of finite groups, permutation groups, p-group theory. <br /> <br /> Possible references: Paolo Aluffi, Algebra: Chapter 0 - Joseph Rotman, An Introduction to the Theory of Groups - Martin Isaacs, Finite Group Theory - Martin Isaacs, Character Theory of Finite Groups - Martin Hall, Theory of Groups - Susan McKay, Finite p-groups - Newman and O'Brien's paper <br />",
            "Algebraic graph theory. Graph theory is an area abundant with possible projects, so my intention here would be to figure out a project along the way. For example, it would be fun to take a crack at constructing a 57-regular, girth 5 Moore graph, or to say something about cores of strongly regular graphs. <br /> <br /> Topics of study: Transitivity and regularity of graphs, generalized polygons, graph homomorphisms, spectral graph theory. <br /> <br /> Possible references: Reinhard Diestel, Graph theory - Godsil and Royle, Algebraic Graph Theory - Norman Biggs, Algebraic Graph Theory <br />",
            "Applied math project. The qualitative behavior of systems defined by non-normal operators and matrices is poorly explained by spectral methods alone. Examples can be found, for example, in arrays of linear asymmetrically coupled oscillators, where the transient response of a system is difficult to determine without direct simulation. This is pertinent to a variety of practical matters, e.g., the control of platoons of self-propelled vehicles, and in mathematical biology towards understanding flocking behavior. One answer to this shortcoming is proferred by Trefethen et al's theory of pseudospectra. Understanding some of this theory is the goal of this project. <br /> <br /> Topics of study: If needed, we will cover the necessary background in linear algebra and functional analysis. Otherwise, we only need to study material directly pertinent to the project. <br /> <br /> Possible references: Hirsch, Smale, and Devaney, Differential Equations, Dynamical Systems, and an Introduction to Chaos - Carl Meyer, Matrix Analysis and Applied Linear Algebra - Alberto Bressan, Lecture Notes on Functional Analysis: With Applications to Linear Partial Differential Equations - Trefethen and Embree, Spectra and Pseudospectra: The Behavior of Nonnormal Matrices and Operators - Various papers and notes"
        ]
    },
    {
        name: "Yusen Xia",
        projectTag: "Geometry",
        researchArea: "Geometry",
        website: "https://sites.google.com/view/yusenxia",
        researchDescription: "Differential Geometry, Geometric Analysis",
        projects: [
            "",
            "Smooth manifold theory.",
            "Geometry of curves and surfaces. (Up to Gauss-Bonnet Theorem, Gauss' Theorema Egeriguim)",
            "Riemannian Geometry"
        ]
    },
    {
        name: "Rusiru Gambheera",
        projectTag: "Algebra, Number Theory",
        researchArea: "Algebra, Number Theory",
        website: "https://sites.google.com/view/rusiru-gambheera/home",
        researchDescription: "I do research on Algebraic Number Theory, more specifically, Iwasawa Theory.",
        projects: [
            "",
            "Introduction to Analytic Number Theory - Book by Tom M. Apostol",
            "Matrix Groups for Undergraduates - Book by Kristopher Tapp",
            "Algebraic Curves and Riemann Surfaces for Undergraduates : The Theory of the Donut - Book by Anil Nerode and Noam Greenberg  "
        ]
    },
    {
        name: "Mychelle Parker",
        projectTag: "Number Theory",
        researchArea: "Number Theory",
        website: "https://web.math.ucsb.edu/~mychelleparker/",
        researchDescription: "The math I have been studying recently involves Elliptic Curves, Modular Forms, Selmer Groups, and L-functions.",
        projects: [
            "Depending on a students background potential books to read with mentees include:",
            "A friendly Introduction to Number Theory by Joseph H. Silverman",
            "Intro to Metric & Topological Spaces by Sutherland",
            "Rational Points on Elliptic Curves by Silverman and Tate",
            "Algebraic Number Theory by J.S. Milne",
            "​Open to other books or topics of a similar nature that sound interesting."
        ]
    },
    {
        name: "Charles Kulick",
        projectTag: "Applied",
        researchArea: "Applied Mathematics",
        website: "", //"https://web.math.ucsb.edu/~charleskulick/",
        researchDescription: "I've been working on some learning theory projects recently. My academic focus is Gaussian Processes, sparsification, and assorted machine learning topics.",
        projects: [
            "Hi! This DRP will focus on cryptography and steganography, thе study of encrypting things in ways both obvious and unnoticeablе. Wе'd lеarn еnough to construct RSA, then lеarn a bit of thеoretical computer sciencе, then jump into interеsting tricks of stеganography through the lens of information thеory. This probably would takе about half of our time; after that, wе can lеarn coding thеory as a natural extеnsion, or dive dеepеr into thеorеtical computer sciencе and еxplore somе rеsults both famous and recent. I beliеvе this is a great way to gеt familiar with rеading math, and a fantastic introduction to some fundamental ideas from differеnt areas of study! I’m vеry opеn to tailoring our projеct specifically to thе interests of our group. In years past, I’vе always bеen compеlled to explorе any random cool math along the way, so it’s guarantееd we’d lеarn somе intеrеsting things. I look forward to this expеriеnce! (Bonus puzzlе: I’vе hid a mеssage in this blurb. Try to find it!)",
        ]
    },
    {
        name: "Xuyang Yu",
        projectTag: "Other",
        researchArea: "Physics: Quantum Gravity",
        website: "",
        researchDescription: "Research on quantum gravity. Physics topics I have learned/am learning include quantum field theory, general relativity, conformal field theory, string theory etc. Math topics I have learned/am learning: point-set topology, smooth manifolds, Lie algebra, etc.",
        projects: [
            "",
            "Nakahara: Geometry, Topology, and Physics (Whole book)",
            "Theodore Frankel: The Geometry of Physics (Emphasis on Ch13-22)",
            "Or physics books based on mentees' interest."
        ]
    },
    {
        name: "Sawyer Dobson",
        projectTag: "Algebra, Applied, Number Theory, Other",
        researchArea: "Algebra, Analysis, Applied Mathematics, Geometry, Number Theory, Topology, Theoretical CS",
        website: "",
        researchDescription: "I'm a first year student with a wide range of interests. I really like quantum computing, mathematical logic, number theory, representation theory, and theoretical computer science.",
        projects: [
            "Some possible topics include:",
            "Quantum computing (error correction, algorithms, complexity theory)",
            "Mathematical logic (ordinals and cardinals, axiom of choice, models, forcing, continuum hypothesis, incompleteness theorems)",
            "Number theory (arithmetic functions, möbius inversion, pentagonal numbers, two-square theorem, phi function, finite fields, quadratic reciprocity)",
            "Representation theory (group rings, semisimple algebras, multilinear algebra, character theory, induced representations)",
            "Theoretical CS (Turing machines, complexity theory, algorithms, cryptography, error correction)"
        ]
    },
    
    {
        name: "Christian Hong",
        projectTag: "Analysis, Applied",
        researchArea: "Analysis, Applied Mathematics",
        website: "",
        researchDescription: "Partial Differential Equations, Dynamical Systems, Analysis",
        projects: [
            "Fourier series / Transform, Dispersive equations, Specific PDE such as KdV / BBM / Camassa-Holm equation"
        ]
    },
    
    {
        name: "Daniel Ralston",
        projectTag: "Applied",
        researchArea: "Applied Mathematics",
        website: "",
        researchDescription: "Right now, I like probability and it's applications in applied mathematics.  In particular, I've recently been interested in the two (unrelated) topics: stochastic calculus and Bayesian methods.",
        projects: [
            "Two ideas I have in mind:",
            "A reading in financial mathematics, maybe covering some stochastic calculus/binomial models for pricing equity derivatives -- a book I have in mind is Mark Joshi's The Concepts and Practice of Mathematical Finance",
            "A reading in Bayesian Inference and Information Theory -- for this, one book I like is David MacKay's Information Theory, Inference, and Learning Algorithms. "
        ]
    },
    
    {
        name: "Connor Marrs",
        projectTag: "Analysis, Geometry",
        researchArea: "Analysis, Geometry",
        website: "",
        researchDescription: "I'm interested in the interplay between geometry and analysis. Sometimes studying random walks or differential equations on a space can tell you exciting things about the space itself, and sometimes hard problems in analysis are resolved by turning to geometry. That intersection is what really excites me.",
        projects: [
            "Basics of Information and Coding Theory, for example at the level of \"Information & Coding Theory\" by Jones and Jones. Alternatively, something in Geometric Group Theory at the level of \"Groups, Graphs, and Trees\" by John Meier."
        ]
    },
    
    {
        name: "Alex Bisnath",
        projectTag: "Algebra, Geometry, Topology",
        researchArea: "Algebra, Analysis, Geometry, Topology",
        website: "",
        researchDescription: "Mathematical Physics, Algebraic Topology, Algebraic Combinatorics, Representation Theory",
        projects: [
            "",
            "The Knot Book",
            "Topology by Munkres", 
            "A First Course in Representation Theory by Fulton-Harris",
            "Introduction to Representation Theory by Etingof"
        ]
    },
    {
        name: "Sam Sehayek",
        projectTag: "Geometry, Topology, Other",
        researchArea: "Geometry, Topology, Combinatorics",
        website: "Ssehayek.weebly.com",
        researchDescription: "My research interests can be broadly defined as the investigation of topological, geometric, and combinatorial objects (especially polytopes). The main topic I study is Geometric Group Theory especially through the lens of embedded combinatorial structures.",
        projects: [
            "",
            "Lectures on Polytopes by Ziegler",
            "Selected papers on Parking Functions",
            "Finite Reflection Groups by Grove and Benson"
        ]
    },
    {
        name: "Marcos Reyes",
        projectTag: "Algebra, Number Theory, Topology",
        researchArea: "Algebra, Number Theory, Topology",
        website: "",
        researchDescription: "I am interested in Elliptic curves and in particular the parity conjecture. I am also interested in Lie group, Lie algebras and algebraic groups. ",
        projects: [
            "",
            "One possible project is to read \"Rational points on Elliptic Curves\" by Silverman and Tate. The project would be to create an algorithm, in python, to compute the torsion of an elliptic curve over the rationals.",
            "Another project is to look at \"An introduction to Lie Algebras\" by Erdmann and Wildon. The main goal would be to understand basic Lie Theory and construct dynkin diagrams.",
            "Lastly, we can look at Fermat's last theorem but for matrices."
        ]
    },
    {
        name: "Katherine Merkl",
        projectTag: "Algebra, Topology",
        researchArea: "Algebra, Topology",
        website: "https://web.math.ucsb.edu/~kmerkl",
        researchDescription: "Low-dimensional Topology and hyperbolic geometry.",
        projects: [
            "We could read an introduction to topology or hyperbolic geometry."
        ]
    },
    {
        name: "Fabio Ricci",
        projectTag: "Analysis, Geometry",
        researchArea: "Analysis, Geometry",
        website: "",
        researchDescription: "Geometric analysis, comparison geometry, optimal transport, pde on manifolds.",
        projects: [
            "Riemannian geometry, optimal transport and geometry."
        ]
    },
    {
        name: "Mitchell Jubeir",
        projectTag: "Algebra, Other",
        researchArea: "Algebra, Topology",
        website: "",
        researchDescription: "I am currently interested in applying algebraic methods to topological problems. One such application is constructing homological knot invariants.",
        projects: [
            "The use of algebra in cryptography: Development of Cryptography from Caesar Cyphers to a Post-quantum world",
            "Intro Textbook: Simon Rubinstein Salzedo Cryptography",
            "Other books: The Code Book by Simon Singh"
        ]
    },
    {
        name: "Nico Gonzalez",
        projectTag: "Applied",
        researchArea: "Applied Mathematics, Numerical Analysis",
        website: "",
        researchDescription: "Solving differential equations",
        projects: [
            "Boundary Conditions"
        ]
    },
    {
        name: "Benedict Lee",
        projectTag: "Algebra, Topology",
        researchArea: "Algebra, Topology",
        website: "",
        researchDescription: "Geometric Group Theory/Topology",
        projects: [
            "",
            "Groups, Graphs and Trees (Meier)",
            "Introduction to Circle Packing (Stephenson)",
            "Hyperplane arrangements",
            "I am also open to reading anything that the student is interested in."
        ]
    },
    {
        name: "Debin Liu",
        projectTag: "Geometry",
        researchArea: "Geometry",
        website: "",
        researchDescription: "Differential geometry; analytic torsion; complex geometry; mirror symmetry; mathematical physics",
        projects: [
            "",
            "Differential Topology: \"Differential Forms in Algebraic Topology\" by Raoul Bott, Loring W. Tu",
            "Complex Geometry: \"Principles of Algebraic Geometry\" by Phillip Griffith, Joseph Harris",
            "Mirror Symmetry: \"Mirror Symmetry\" by Kentaro Hori, Sheldon Katz, etc.",
            "Seiberg-Witten theory: \"Lecture Notes on Seiberg-Witten Invariants\" by John Moore",
            "Any other topics in geometry my mentees suggest."
        ]
    },
    {
        name: "John White",
        projectTag: "Algebra, Geometry, Topology",
        researchArea: "Algebra, Geometry, Topology",
        website: "",
        researchDescription: "I am interested in anything differential geometry or algebraic topology flavored.",
        projects: [
            "Morse theory, differential geometry up to de rham cohomology, \"Category Theory in Context\" if the student wants to learn some category theory."
        ]
    },
    {
        name: "Ricky Lee",
        projectTag: "Geometry, Topology",
        researchArea: "Geometry, Topology",
        website: "",
        researchDescription: "Hyperbolic Geometry, Low-Dimensional Topology",
        projects: [
            "",
            "Milnor: Topology from a Differentiable Viewpoint",
            "Purcell: Hyperbolic Knot Theory",
            "Margalit: Office Hours with a Geometric Group Theorist",
            "We can figure out other possibilities as well, I am open to many different projects. The above reading list contains just a few good texts that come to mind at the moment."
        ]
    },
    {
        name: "Therese Basa Landry",
        projectTag: "Algebra, Analysis, Geometry, Topology",
        researchArea: "Analysis, Geometry, Operator Algebras, Noncommutative Geometry (Quantum Analogues of Riemannian Geometry, Quantum Analogues of Compact Metric Spaces), Fractal Geometry, Functional Analysis",
        website: "",
        researchDescription: "As a noncommutative fractal geometer, I look for new expressions of the geometry of a fractal through the lens of noncommutative geometry. At the quantum scale, the wave function of a particle, but not its path in space, can be studied. Riemannian methods often rely on smooth paths to encode the geometry of a space. Noncommutative geometry generalizes analysis on manifolds by replacing this requirement with operator algebraic data. These same \"point-free\" techniques can also be used to study the geometry of classically pathological spaces like fractals. By expanding the formalism of fractal geometry to include the mathematical language of quantum theory, developments in noncommutative fractal geometry give both mathematicians and physicists the tools to gain insights about quantum behaviors in solids and any new materials made possible by these phenomena.",
        projects: [
            "",
            "Quantum Metrics on Discrete Spaces",
            "The Rauzy Gasket",
            "Bratteli Diagrams, Quantum Topological Computation, and Markov Processes",
            "Quantum Metrics on Graphs/Finite Graph Approximations of Fractals",
            "Quantum Topological Insulators",
            "Noncommutative Geometry and Noncommutative Solenoids"
        ]
    },
    {
        name: "Will Sheppard",
        projectTag: "Analysis, Applied",
        researchArea: "Analysis, Applied Mathematics, Foundations, Physics, Chemistry",
        website: "",
        researchDescription: "I use large-scale simulation techniques to inform the design of novel materials. My interests lie all along the bridge from mathematical foundations of physical processes to data collection and scientific computing.",
        projects: [
            "Possible projects might explore the foundations of a physical theory or a phenomenon in nature, such as hurricanes, earthquakes, electromagnetism, crystallography, phase transitions etc. A possible text: A Khinchin's Mathematical Foundations of Statistical Mechanics."
        ]
    },
    //{
    //   name: "Alexander Sabater",
    //    projectTag: "",
    //    researchArea: "Applied Mathematics",
    //    website: "",
    //    researchDescription: "Numerical analysis",
    //    projects: [
    //        "Mathematical music theory."
    //    ]
    //},
    //{
    //    name: "Qing Zhang",
    //    projectTag: "",
    //    researchArea: "",
    //    website: "",
    //    researchDescription: "TBA",
    //    projects: [
    //        ""
    //    ]
    //},
    // Add more mentors as they apply
];

// Function to extract last name from the full name
function extractLastName(fullName) {
    const parts = fullName.split(' ');
    return parts.length > 1 ? parts[parts.length - 1] : fullName;
}

// Function to generate mentor cards
function generateMentorCards() {

    mentors.sort((a, b) => extractLastName(a.name).localeCompare(extractLastName(b.name)));

    const mentorContainer = document.querySelector('.mentor-container');

    mentors.forEach((mentor, index) => {
        const templateClass = index % 2 === 0 ? 'mentor-card-light' : 'mentor-card-dark'; // Alternate themes
        const card = createMentorCard(mentor, templateClass);

        mentorContainer.appendChild(card);

        // Add click event listener to toggle mentor body visibility
        const mentorHeader = card.querySelector('.card-header');
        const mentorBody = card.querySelector('.card-body');
        
        mentorHeader.addEventListener('click', () => {
            mentorBody.style.display = ((mentorBody.style.display!='block') ? 'block' : 'none');
        });
    });
}

// Function to create a mentor card based on the template class
function createMentorCard(mentor, templateClass) {
    const card = document.createElement('div');
    card.classList.add('mentor-card', templateClass);

    // Generate card content dynamically based on mentor data
    card.innerHTML = `
        <div class="row">
            <div class="col-md-12">
                <div class="card ${templateClass === 'mentor-card-dark' ? 'text-white' : ''} mb-3" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, ${templateClass === 'mentor-card-dark' ? '0.4' : '0.1'}), rgba(0, 0, 0, ${templateClass === 'mentor-card-dark' ? '0.4' : '0.1'})); background-position: top left; background-size: 100%; background-repeat: repeat;">
                    <div class="card-header">
                        <div class="align-container">
                            <h3>${mentor.name}</h3>
                            <p>${mentor.projectTag}</p>
                        </div>
                    </div>
                    <div class="card-body">
                        ${mentor.website ? `<h4><a href="${mentor.website}" style="${templateClass === 'mentor-card-dark' ? 'color: #6adbf7' : 'color: #10a094'}">Personal Website Link</a></h4>` : ''}
                        <h4>Research Interests:</h4>
                        <p>${mentor.researchArea}</p>
                        <h4>Research Description:</h4>
                        <p>${mentor.researchDescription}</p>
                        <h4>Potential Projects:</h4>
                        <p>${mentor.projects[0]}</p>
                        ${mentor.projects.length > 1 ? generateProjectList(mentor.projects.slice(1)) : ''}
                    </div>
                </div>
            </div>
        </div>
    `;

    return card;
}

// Function to generate a list of potential projects
function generateProjectList(projects) {
    if (!projects || !projects.length) {
        return '';
    }

    const listItems = projects.map((project) => `<li>${project}</li>`).join('');
    return `
        <ul class="project-list">${listItems}</ul>
    `;
}



// Function to expand or collapse a mentor card
function toggleMentorCard(mentorCard) {
    const mentorBody = mentorCard.querySelector('.card-body');
    mentorBody.style.display = mentorBody.style.display === 'none' ? 'block' : 'none';
}

// Function to expand all mentor cards
function expandAllCards() {
    const mentorBodies = document.querySelectorAll('.mentor-card .card-body');
    mentorBodies.forEach((mentorBody) => {
        mentorBody.style.display = 'block';
    });
}

// Function to collapse all mentor cards to just the header
function collapseAllCards() {
    const mentorCards = document.querySelectorAll('.mentor-card');
    mentorCards.forEach((mentorCard) => {
        const mentorBody = mentorCard.querySelector('.card-body');
        mentorBody.style.display = 'none';
    });
}

// Add click event listeners to the buttons
document.addEventListener('DOMContentLoaded', () => {
    const expandAllButton = document.getElementById('expand-all-button');
    const collapseAllButton = document.getElementById('collapse-all-button');
    
    expandAllButton.addEventListener('click', expandAllCards);
    collapseAllButton.addEventListener('click', collapseAllCards);
});

// Call the function to generate mentor cards when the page loads
document.addEventListener("DOMContentLoaded", generateMentorCards);

// Function to show only mentor cards with a specific research area
function showMentorsByResearchArea(researchArea) {
    const mentorCards = document.querySelectorAll('.mentor-card');
    
    mentorCards.forEach((mentorCard) => {
        const mentorResearch = mentorCard.querySelector('.card-header p').textContent;
        if (mentorResearch.includes(researchArea)) {
            mentorCard.style.display = 'block';
        } else {
            mentorCard.style.display = 'none';
        }
    });
}

// Function to show all mentor cards
function showAllMentors() {
    const mentorCards = document.querySelectorAll('.mentor-card');
    mentorCards.forEach((mentorCard) => {
        mentorCard.style.display = 'block';
    });
}

// Add click event listener to the "Show Analysis Mentors" button
document.addEventListener('DOMContentLoaded', () => {
    const filterAnalysisButton = document.getElementById('filter-analysis-button');
    
    filterAnalysisButton.addEventListener('click', () => {
        showMentorsByResearchArea('Analysis');
    });
});

// Function to show all mentor cards
function showAllMentors() {
    const mentorCards = document.querySelectorAll('.mentor-card');
    mentorCards.forEach((mentorCard) => {
        mentorCard.style.display = 'block';
    });
}

// Add click event listeners to the filter buttons
document.addEventListener('DOMContentLoaded', () => {
    const filterAnalysisButton = document.getElementById('filter-analysis-button');
    const filterAlgebraButton = document.getElementById('filter-algebra-button');
    const filterTopologyButton = document.getElementById('filter-topology-button');
    const filterAppliedButton = document.getElementById('filter-applied-button');
    const filterNumberButton = document.getElementById('filter-number-button');
    const filterGeometryButton = document.getElementById('filter-geometry-button');
    const filterOtherButton = document.getElementById('filter-other-button');
    const showAllButton = document.getElementById('show-all-button'); // Add this line
    
    filterAnalysisButton.addEventListener('click', () => {
        showMentorsByResearchArea('Analysis');
    });

    filterAlgebraButton.addEventListener('click', () => {
        showMentorsByResearchArea('Algebra');
    });

    filterTopologyButton.addEventListener('click', () => {
        showMentorsByResearchArea('Topology');
    });

    filterAppliedButton.addEventListener('click', () => {
        showMentorsByResearchArea('Applied');
    });

    filterNumberButton.addEventListener('click', () => {
        showMentorsByResearchArea('Number Theory');
    });

    filterGeometryButton.addEventListener('click', () => {
        showMentorsByResearchArea('Geometry');
    });

    filterOtherButton.addEventListener('click', () => {
        showMentorsByResearchArea('Other');
    });
    
    // Add event listener for the "Show All" button
    showAllButton.addEventListener('click', () => {
        showAllMentors();
    });
});