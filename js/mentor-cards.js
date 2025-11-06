// Mentor data
const mentors = [

    {
        name: "Choomno Moos",
        projectTag: "Algebra, Topology",
        researchArea: "Algebra, Topology",
        website: "",
        researchDescription: "I am interested in the intersection of low-dimensional topology, representation theory, and physics sometimes dubbed 'quantum topology'.",
        projects: [
            "I am open to a large range of projects. We will figure out a project together that suits your preparation and needs. In the past, I have done projects on knot theory, low-dimensional topology, representation theory, category theory, mathematical logic, and algebra."
        ]
    },
    {
        name: "Connor Lane",
         projectTag: "Number Theory",
         researchArea: "Number Theory",
         website: "https://connorlane04.github.io/",
         researchDescription: "General terms: algebraic number theory and arithmetic geometry. Precise words: elliptic curves, Galois cohomology, arithmetic duality, Iwasawa theory. Relevant famous problems: The Birch and Swinnerton-Dyer Conjecture.",
         projects: [
             "",
             "Number Fields (ex. Marcus Number Fields or Neukirch Algebraic Number Theory)",
             "p-adic Numbers (ex. Gouvea p-adic Analysis)",
             "Elliptic Curves (ex. Tate-Silverman Rational Points on Elliptic Curves or Silverman Arithmetic of Elliptic Curves)",
             "Class Field Theory (ex. Milne Class Field Theory)"
         ]
     },
     {
        name: "Arthur Jiang",
         projectTag: "Analysis, Geometry",
         researchArea: "Analysis, Geometry, Mathematical physics",
         website: "https://arthurjphysics.github.io/",
         researchDescription: "I'm interested in applications of geometry and functional analysis to physics, including GR and QFT.",
         projects: [
            "",
            "Main topics: Smooth manifolds, Riemannian manifolds, Lie groups and Lie algebras, general relativity, quantum field theory",
            "Sample books: Lee's textbooks on manifolds, Gravitation by MTW",
            "Other topics: Tractor calculus and conformal geometry, von Neumann algebras",
         ]
     },
    {
        name: "Qirui Peng",
         projectTag: "Analysis, Applied",
         researchArea: "Analysis, PDEs",
         website: "https://sites.google.com/uic.edu/qiruipeng/home",
         researchDescription: "Partial Differential Equations, Mathematical fluid mechanics",
         projects: [
            "Textbook: The Three-Dimensional Navier-Stokes Equations Classical Theory by James C. Robinson, et al. Weak solutions of Euler and Navier-Stokes Equations, Onsager's Conjecture."
         ]
     },
     {
        name: "Alexander Sabater",
         projectTag: "Applied",
         researchArea: "Applied mathematics",
         website: "",
         researchDescription: "Machine learning techniques for numerical simulations of polymers",
         projects: [
            "Group actions and music theory (see Lewin and Fiore on transformational theory), xentonality and theory of dissonance (see Sethares - Tuning, Timbre, Spectrum, Scale and Deriushkin - Set theoretic solution for the tuning problem)."
         ]
     },
     {
        name: "Mike Gulas",
         projectTag: "Analysis, Applied",
         researchArea: "Analysis, Applied Mathematics, PDEs and Fluid Mechanics",
         website: "https://mikegulas.wordpress.com/",
         researchDescription: "I study fluid mechanics, this involves PDEs and analysis. Previous work I did was about quantum mechanics and Hilbert spaces. I would like to learn about stochastic differential equations this following year.",
         projects: [
            "Hilbert Spaces, Fluid Mechanics, Applied Functional Analysis, Partial Differential Equations, Differential Geometry and Partial Differential Equations, Stochastic Differential Equations"
         ]
     },
     {
        name: "Hasan M. El-Hasan",
         projectTag: "Geometry",
         researchArea: "Geometry",
         website: "https://www.hmelhasan.com",
         researchDescription: "Comparison geometry for manifolds with positive and nonnegative curvature",
         projects: [
            "",
            "Intrinsic vs extrinsic curvature of manifolds",
            "A geometer's approach to general relativity",
            "Survey of comparison theorems in Riemannian geometry",
         ]
     },
     {
        name: "Andrew Ortegaray",
         projectTag: "Algebra, Topology",
         researchArea: "Algebra, Topology",
         website: "",
         researchDescription: "I am broadly interested in algebra/topology and occasionally quantum variations.",
         projects: [
            "",
            "Reading through The Knot Book",
            "Reading through Topology by Munkres",
            "Fourier Analysis on Finite Abelian Groups and Number Theoretic Transforms",
            "Persistent Homology and Implementations",
            'The Toric Code and Generalizations <a href="https://arxiv.org/abs/2506.15130v1">Link to Paper</a>',
            'Arc Diagrams on 3-Manifold Spines <a href="https://arxiv.org/abs/2202.02007">Link to Paper</a>',
            "Homological Algebra"
         ]
     },
     {
        name: "Nayeong Kim",
         projectTag: "Applied, Other",
         researchArea: "Algebra",
         website: "https://www.nayeong.dev/teaching/drp",
         researchDescription: "I'm studying Topological Quantum Field Theory. Topological Quantum Field Theory (TQFT) studies the deep interplay between topology and algebra by assigning algebraic invariants—such as vector spaces and linear maps—to manifolds and their cobordisms in a way that is compatible with gluing. It provides a categorical framework connecting geometry, topology, and quantum physics, often realized through tensor categories and functorial constructions.",
         projects: [
            "Here are some suggestions and references.",
            "Logics: Introduction to logics and Gödel's incompleteness theorem. We start from learning basic notion of set theory and move on to introduction to logics/model theory. Our goal is to understand Gödel's incompleteness theorem. References: <a href='https://people.maths.ox.ac.uk/bays/teaching/b1set/B1.2.pdf'>Set Theory</a>, <a href='https://github.com/hongseok-yang/logic25'>Logics</a>, <a href='https://adam.math.hhu.de/#/g/leanprover-community/nng4'>Lean Tutorial</a>",
            "Applied Math: Grokking. Grokking in machine interpretability is a phenomenon where a machine learning model, after a long period of simply memorizing the training data, suddenly and rapidly generalizes to understand the underlying patterns and perform well on new, unseen data. References: <a href='https://www.neelnanda.io/grokking-paper'>Grokking</a>",
            "Applied Math: Graph Learning. We will learn some concepts in graph learning and simplicial complex framework. References: <a href='https://arxiv.org/abs/2108.06547'>Paper</a>",
         ]
     },
     {
        name: "Cash Cherry",
         projectTag: "Applied",
         researchArea: "Applied mathematics",
         website: "",
         researchDescription: "I am interested in rigorous uncertainty quantification of and improvements to parameter estimation algorithms for (geo)physical inverse problems, particularly the nonlinear inverse problem posed by seismic imaging with Full Waveform Inversion.",
         projects: [
            "Kernel-based Approximation Methods, following the book Kernel-based Approximation Methods using MATLAB (A copy of the book will be provided). These ideas represent an application of mathematical theory to develop elegant computational methods with a wide range of applications. Depending on student interest and time, we can focus on applications in Inverse Problems, Operator Learning, Numerical Methods for PDEs, or Spatial Statistics, among other areas."
         ]
     },
     {
        name: "Charles Kulick",
         projectTag: "Applied",
         researchArea: "Applied mathematics, machine learning",
         website: "https://web.math.ucsb.edu/~charleskulick/",
         researchDescription: "I work on the accurate prediction of dynamics with data-driven methods, through applying both classical mathematical tools and new machine learning methods.",
         projects: [
            "We'll dive into modern machine learning from a mathematical perspective. I plan to survey recent seminal papers across multiple domains, examining common foundational theoretical frameworks and comparing the performance of various methods. We will place a particular emphasis on the transformer architecture and demystifying the mathematics of its operation. "
         ]
     },
     {
        name: "Clive Chan",
         projectTag: "Geometry",
         researchArea: "Geometry",
         website: "https://sites.google.com/view/clivetszhongchan",
         researchDescription: "My research interests lie in differential geometry and non-smooth geometry. Simply speaking, we can say that regular surfaces/ smooth manifolds are good because we can talk about differential calculus. How about an (ideal) ice-cream cone with a sharp tip? It is non-smooth but not as rough as a snowflake. In fact, it looks almost smooth. What can we talk about the geometry of these kinds of non-smooth but not-too-rough objects?",
         projects: [
            "For a directed reading program I would be interested in reading some Ricci flow. I am also interested in the geometry of Poincare and Sobolev inequalities, but for this direction I have a (pretty long) list of books and papers, so I would like to discuss with the students on which one we should read. Note: this is geometry but we might not be able to visualize theorems all the time.",
            "Differential Harnack Inequalities and the Ricci Flow (Müller)",
            "Hamilton's Ricci Flow (Sheridan)",
            "Poincare and Sobolev inequalities",
         ]
     },
     {
        name: "Christian Hong",
         projectTag: "Analysis, Applied",
         researchArea: "Analysis, Applied Mathematics",
         website: "",
         researchDescription: "I am interested in dispersive differential equations. I am also interested in harmonic analysis and other kinds of differential equations.",
         projects: [
            "Fourier Transform / Harmonic Analysis, Perturbation theory, Elliptic PDE, Wavelet theory, PDE in fluid mechanics, Kinetic theory (emphasis on the math)."
         ]
     },
     {
        name: "Kelsey Delk",
         projectTag: "Algebra, Geometry, Topology",
         researchArea: "Topology, Geometric Group Theory",
         website: "",
         researchDescription: "I am interested in geometric group theory which tries to understand how groups act on spaces. I also like learning about small cancellation theory and basic topology and homology.",
         projects: [
            "I was thinking that we could learn about a topic from \"Office Hours with a Geometric Group Theorist\" or I have my thesis from my Master's program that we can look at that studies small cancellation theory, Van Kampen Diagrams, and the word problem. I am also happy with just going through some topics from basic topology, homology, basic geometric group theory. I am pretty flexible with a potential project as long as I am familiar with it."
         ]
     },
     {
        name: "Jeremy Khoo",
         projectTag: "Algebra, Topology, Other",
         researchArea: "Algebra, Topology",
         website: "",
         researchDescription: "My research involves the geometric properties of special smooth embeddings of k-spheres into an n-sphere called Haefliger knots, which are determined up to isotopy by an integer-valued invariant and only exist for certain pairs (k,n). Currently I am trying to find bounds on this invariant based on geometric information about the embedding. Outside of my research I occasionally keep tabs on problems which involve combinatorics, algebra, or graph theory.",
         projects: [
            "Fair division problems, in particular fair division of rent for a multi-room apartment. A first paper will be Su, \"Rental Harmony: Sperner's Lemma in Fair Division\". We will also consider variations which may include: multiple occupants of the same room (rental harmony with roommates), occupants with budget constraints, or otherwise."
         ]
     },
     {
        name: "Joel Pion",
         projectTag: "Algebra, Other",
         researchArea: "Algebra, Algebraic Geometry, Combinatorics",
         website: "",
         researchDescription: "I do Algebraic Geometry in a derived category context. I also enjoy working on combinatorial puzzley research questions",
         projects: [
            "We could read Huybrechts Fourier Mukai Transforms or we could do a combinatorial research problem involving sensors and signalers."
         ]
     },
     {
        name: "Jitendra Rathore",
         projectTag: "Algebra, Number Theory",
         researchArea: "Algebra, Number Theory, Algebraic and Arithmetic Geometry, Algebraic K-Theory",
         website: "https://sites.google.com/view/jitendra-rathore/home",
         researchDescription: "My mathematical research interests lie in the fields of algebraic geometry, algebraic K-theory, and arithmetic geometry. More specifically, I study various algebraic and arithmetic invariants, such as étale fundamental groups, algebraic K-groups, Brauer groups, Chow groups, and étale cohomology groups. These are important invariants associated with an algebraic variety and contain significant arithmetic information about the variety. The techniques I use to study these invariants come from algebra, topology, number theory, and algebraic geometry.",
         projects: [
            "I would be happy to mentor students on various projects lies in the fields of algebra, number theory and Topology. Few potential topics for Reading Projects are as follows:",
            "Algebraic Varieties (Algebraic Geometry).",
            "Group Cohomology and Galois Cohomology (Number Theory).",
            "Homotopy Groups (Algebraic Topology).",
            "Singular Homology and Cohomology (Algebraic Topology).",
            "Algebraic K-groups and their Connections to Number Theory (Algebraic K-groups).",
            "Division Rings and the Theory of Brauer Group (Arithmetic Geometry).",
            "Galois groups and Fundamental groups (Arithmetic Geometry).",
            "Class Field Theory (Number Theory).",
            "Profinite Groups (Algebra).",
            "Etale Cohomology Groups (Arithmetic Geometry).",
            "Theory of Categories and Functor (Categories and Functor).",
            "Representation theory of Finite group (Group Theory)."
         ]
     },
     {
        name: "Meghan Lee",
         projectTag: "Algebra, Number Theory, Other",
         researchArea: "Algebra, Number Theory, Topology",
         website: "https://meghanhlee.github.io/",
         researchDescription: "I'm broadly interested in algebra, topology, and number theory. My recent projects have involved elliptic curves, modular curves, and Galois representations, and also computational tools in number theory.",
         projects: [
            "I'm planning to mentor a project on the basic theory of elliptic curves, using the book \"Rational Points on Elliptic Curves\" by Silverman and Tate. Topics will include the group structure of an elliptic curve, the Mordell-Weil Theorem, the Nagell-Lutz Theorem, and Mazur's Theorem. We can also discuss connections to factorization algorithms and cryptography. Advances in computing technology have contributed greatly to this area in the 21st century, so I think it'll be fun to supplement these topics with an introduction to some popular computational resources (including the Python package SageMath, the computer algebra software Magma, and the LMFDB database). No programming experience necessary!"
         ]
     },
     {
        name: "Rhea Palak Bakshi",
         projectTag: "Topology",
         researchArea: "Topology",
         website: "https://rheapalakbakshi.com",
         researchDescription: "My research interests are in quantum topology, low-dimensional topology, and knot theory. I focus primarily on the study of skein modules and skein algebras of 3-manifolds and their connections to algebraic geometry, hyperbolic geometry, categorification, Topological Quantum Field Theories, Jones-Wenzl projectors, and cluster algebras. More recently I have taken up an interest in skein lasagna modules, which are generalisations of the Khovanov and Khovanov-Rozansky homology theories to 4-manifolds with links in their boundary. I also study self-distributive structures, and their generalisations, whose axioms are motivated by the Reidemeister moves in knot theory. Quandles and racks are prime examples of such structures.",
         projects: [
            "",
            "Categorification of skein modules",
            "Quantum groups",
            "Hyperbolic knot theory",
            "Braid groups",
            "SL_n and stated skein modules",
            "Classical knot theory",
         ]
     },
     {
        name: "Michael Keith",
         projectTag: "Analysis, Applied",
         researchArea: "Analysis, Applied Mathematics",
         website: "",
         researchDescription: "My research lies at the interface of mathematics and the natural sciences. Our lab studies the packaging of DNA inside of bacteriophages—these are viruses that infect bacteria. On the biological side, I work on creating 3D reconstructions of viral proteins using cryo-electron microscopy (cryo-EM). On the mathematical side, I model the interactions between DNA and ions inside of the bacteriophage capsid. To this aim, I utilise tools from the calculus of variations, numerical analysis, PDEs, and the theory of liquid crystals to derive an energy for and to analyse the DNA-ion system. Then, I validate my results experimentally via single-particle analysis following image collection from cryo-EM. Together, science and mathematics help us glean info about how life works, which is essential to our development of treatments for disease and for understanding how living and non-living things interact.",
         projects: [
            "Some things we can do include learning the fundamentals for the Calculus of Variations, applying it to simple/model problems, and/or reading a paper related to my research and reproducing the results. <br><br>Readings: <br><br>Topics in Applied Mathematics and Modeling: Concise Theory with Case Studies (Oscar Gonzalez) <br><br>Helical organization of DNA-like liquid crystal filaments in cylindrical viral capsids (Liu et al., 2022)"
         ]
     },
     {
        name: "Alex Bisnath",
         projectTag: "Algebra, Geometry, Topology, Other",
         researchArea: "Analysis, Geometry, Physics, Gauge Theory, QFT, String Theory",
         website: "",
         researchDescription: "Anything related to mathematical physics! QFT, Gauge Theory, String Theory. Differential Geometry, 3 Manifolds, Ricci Flow.",
         projects: [
            "The Dirac Equation, Representation Theory in Physics, The Poincare Group and its Representations, Spin / spinors, Gauge Theory, Algebraic Topology in Low Energy Physics"
         ]
     },
     {
        name: "Jia-Lin Hsu",
         projectTag: "Geometry",
         researchArea: "Geometry",
         website: "",
         researchDescription: "My research is in geometric analysis, with a primary focus on geometric flows and their applications. My past work involved using the harmonic map heat flow to study the rigidity of maps between closed manifolds by their singular values. <br><br>My interests in this area also extend to other key flows, including mean curvature flow, inverse mean curvature flow, and the Ricci flow. Beyond this, I am also interested in minimal submanifold theory and Kähler geometry.",
         projects: [
            "I plan to use Schoen and Yau's book, Lectures on Harmonic Maps, with a focus on its application to minimal surfaces."
         ]
     },
     {
        name: "Evan Tufte",
         projectTag: "Analysis, Applied",
         researchArea: "Analysis, Applied Mathematics",
         website: "",
         researchDescription: "I research mathematical quantum mechanics. I am interested in most topics within analysis and geometry.",
         projects: [
            "I am open to a wide variety of projects. Here are a couple of ideas for topics: Calculus of Variations, Chaotic Dynamics (Strogatz book), or Riemann Surfaces."
         ]
     },
     {
        name: "Sawyer Dobson",
         projectTag: "Applied, Other",
         researchArea: "CS Theory",
         website: "",
         researchDescription: "I'm studying questions quantum complexity theory, with a specific focus on topological quantum computing.",
         projects: [
            "Quantum computing, classical or quantum complexity theory."
         ]
     }

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