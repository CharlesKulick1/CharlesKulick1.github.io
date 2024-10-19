// Mentor data
const mentors = [

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
        name: "Arthur Jiang",
         projectTag: "Geometry, Other",
         researchArea: "Topics in GR and QFT",
         website: "https://arthurjphysics.github.io/",
         researchDescription: "Numerical analysis",
         projects: [
             "",
             "Either Lee book on manifold theory",
             "MTW",
             "Gravitation"
         ]
     },
     {
        name: "Hongjie David Zeng",
         projectTag: "Analysis, Algebra, Geometry",
         researchArea: "Algebra, Analysis, Geometry, Number Theory, Several Complex Variables, Complex Geometry, Algebraic Geometry",
         website: "",
         researchDescription: "I have always been fascinated by the elegance of complex analysis and its applications (e.g. number theory, physics). In fact, it was complex analysis which led me to complex geometry, a subject which I am currently learning about. Complex geometry studies geometric structures which are described by complex numbers, such as complex manifolds and complex algebraic varieties. It is a highly attractive branch of modern mathematics which interacts with various other fields (differential, algebraic, and arithmetic geometry; sting theory), and is a great example of unity in mathematics.",
         projects: [
            "",
             "Complex Analysis/ Several Complex Variables: <br /><br /> Complex Analysis by Lars Ahlfors <br /> Functions of One Complex Variable, I, II, by John B. Conway <br /> Analytic Functions of Several Complex Variables, by Robert Gunning, Hugo Rossi <br /><br />",
            "Riemann surfaces/Algebraic Curves: <br /> <br /> Algebraic Curves and Riemann Surfaces by Rick Miranda <br /><br />",
            "Complex Geometry: <br /> <br /> Principles of Algebraic Geometry by Phillip Griffiths, Joe Harris <br /> Introduction of Complex Manifolds by John M. Lee",
         ]
     },
     {
        name: "Nayeong Kim",
         projectTag: "Algebra, Applied, Geometry, Topology",
         researchArea: "Algebra, Topology, Machine Learning",
         website: "https://www.nayeong.dev/",
         researchDescription: "I'm interested in Representation Theory, especially interested in Tensor Categories and their application in TQFT. Since I was majored in Computer Science when I was undergrad, I'm also interested in ML or algorithms.",
         projects: [
            "",
            "Introduction to Logic, Spring 2024, KAIST: We are going to cover some course materials uploaded in <a href='https://github.com/hongseok-yang/logic24'>this repository.</a>",
            "Introduction to Representation Theory, Etingof: We are going to cover representation theory of finite groups.",
            "Introduction to Lie Groups and Lie Algebras, Kirillov: See <a href='https://www.math.stonybrook.edu/~kirillov/mat552/liegroups.pdf'>this resource.</a>",
            "Doing some Kaggle Project using linear/logistic regression, basic clustering algorithms etc."
         ]
     },
     {
        name: "Choomno Moos",
         projectTag: "Algebra, Applied, Topology, Other",
         researchArea: "Algebra, Geometry, Topology",
         website: "",
         researchDescription: "My research area is quantum topology and algebra. However, I have broad recreational interests and as such have a lot of room for accomodation.",
         projects: [
             "",
             "Knot theory",
             "Computational group theory",
             "Categorical logic",
             "I can also be compelled to do an \"applied\" project"
         ]
     },
     {
        name: "Edward Chen",
         projectTag: "Algebra, Geometry, Other",
         researchArea: "Algebra, Geometry, Physics",
         website: "https://sheepness.github.io/",
         researchDescription: "I'm interested in mathematical physics and other maths subfields related to physics, mainly those leaning towards algebra",
         projects: [
             "",
             "Mathematical gauge theory",
             "Lie theory/representation theory of lie algebras",
             "Supersymmetry"
         ]
     },
     {
        name: "Jack Pfaffinger",
         projectTag: "Analysis, Applied",
         researchArea: "Analysis, Applied Mathematics",
         website: "",
         researchDescription: "Machine learning, applied analysis, computing",
         projects: [
             "",
             "Random matrix theory",
             "Theoretical machine learning",
             "Stochastic calculus",
             "Generating functions in combinatorics"
         ]
     },
     {
        name: "Jeremy Khoo",
         projectTag: "Applied, Other",
         researchArea: "Algebra, Topology",
         website: "",
         researchDescription: "I am currently looking at a family of non-isotopic embeddings of a lower-dimensional sphere into a higher-dimensional sphere called Haefliger knots, and trying to find geometric bounds on an integer-valued invariant of these knots. The work that I've done so far has drawn from rational homotopy theory, vector bundles and Thom spaces, and other aspects of differential topology and differential geometry. <br /><br /> I'm also interested in a few problems in algebra and graph theory, though these are more casual interests.",
         projects: [
             "",
             "Lattice-based cryptography (using the book \"An Introduction to Mathematical Cryptography\", Hoffstein et al, specifically Chapter 7 on Lattices and Cryptography).",
             "The Game of Cops and Robbers on Graphs (book by Bonato and Nowakowski on a 2-player game played on connected graphs)",
             "\"How Bad is Selfish Routing?\" (paper by Roughgarden and Tardos). Mostly a starting point to talk about Braess's Paradox."
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
             "Persistent Homology and Implementations"
         ]
     },
     {
        name: "Alfredo Ramirez",
         projectTag: "Topology",
         researchArea: "Topology",
         website: "",
         researchDescription: "Geometric Group Theory and Topology in general",
         projects: [
             "I was thinking of doing a project from \"Office Hours with a Geometric Group Theorist\" but open to other topology topics like knot theory and such."
         ]
     },
     {
        name: "Rhea Palak Bakshi",
         projectTag: "Topology",
         researchArea: "Topology",
         website: "http://rheapalakbakshi.com",
         researchDescription: "My research interests are in quantum topology, low-dimensional topology, and knot theory. I focus primarily on the study of skein modules and skein algebras of 3-manifolds and their connections to algebraic geometry, hyperbolic geometry, categorification, Topological Quantum Field Theories, Jones-Wenzl projectors, and cluster algebras. More recently I have taken up interest in skein lasagna modules, which are generalisations of the Khovanov and Khovanov-Rozansky homology theories to 4-manifolds with links in their boundary. I also study self-distributive structures, and their generalisations, whose axioms are motivated by the Reidemeister moves in knot theory. Quandles and racks are prime examples of such structures.",
         projects: [
            "Potential topics for the DRP include:<br /> <ul class='project-list'> <li>Knot Polynomials </li> <li>What is a skein module/algebra?</li> <li>Basics of 3-manifold topology</li> <li>What is a Topological Quantum Field Theory?</li> <li>What are the Witten-Reshetikhin-Turaev 3-manifold invariants?</li> <li>What are skein lasagna modules?</li> <li>The 4D smooth Poincaré conjecture</li> <li>Khovanov homology</li> <li>Jones-Wenzl idempotents and the coloured Jones polynomials</li></ul> These topics make for nice projects in the Winter and Spring quarters. The goal is to get the essence of quantum topology."
         ]
     },
     {
        name: "Sawyer Dobson",
         projectTag: "Other",
         researchArea: "Algebra, Topology, CS theory",
         website: "",
         researchDescription: "I am interested in topological quantum computing, quantum error correction, and classical/quantum complexity theory.",
         projects: [
             "I am planning on mentoring a project on classical complexity theory. We will formalize what it means for a problem to be solvable by an algorithm, and give examples of problems that are unsolvable. Then, we'll define complexity classes such as P, NP, PSPACE, L, and NL, and give examples of complete problems for each class. We'll discuss the famous P != NP conjecture and use oracle Turing machines to see one reason why proving or disproving it is so difficult. I plan on using Michael Sipser's Introduction to the Theory of Computation (3rd edition) as the main reference."
         ]
     },
     {
        name: "Christine Alar",
         projectTag: "Number Theory",
         researchArea: "Number Theory",
         website: "",
         researchDescription: "Iwasawa theory, elliptic curves",
         projects: [
             "Introductions to Iwasawa theory and elliptic curves."
         ]
     },
     {
        name: "Marcos Reyes",
         projectTag: "Algebra, Number Theory, Other",
         researchArea: "Algebra, Analysis, Number Theory, Topology",
         website: "",
         researchDescription: "I am interested in elliptic curves over number fields. In particular the parity and other invariants of an elliptic curve. I want to use machine learning to conjecture some new invariants/useful data.",
         projects: [
             "",
             "One project would be to study elliptic curves over the rationals and try to find some new data. It would be great if you knew some machine learning. Only Math 8 knowledge is required but some group theory would be helpful. Two good books are: <br /><br /> Rational Points on Elliptic Curves by Silverman and Tate <br />Elliptic Curves, Modular Forms, and Their L-functions by Álvaro Lozano-Robledo<br /><br />",
             "The second project would be to study the Spectrum of a ring R. An understanding of topology and ring theory is needed. Two great books on this subject are: <br /><br />The Geometry Of Schemes by Eisenbud and Harris<br />Algebraic Geometry 1 From Algebraic Varieties to Schemes by Kenji Ueno"
         ]
     },
     {
        name: "Kyle Hansen",
         projectTag: "Algebra, Topology, Other",
         researchArea: "Geometry, Topology, Discrete Mathematics",
         website: "https://web.math.ucsb.edu/~kylehansen/",
         researchDescription: "How does abstract \"algebraic\" information get translated into quantifiable \"geometric\" data? What are the patterns lurking behind seemingly chaotic behavior? And how do the answers in Euclidean space change if we look at nilpotent spaces?",
         projects: [
             "",
             "Problem Solving \"Seminar\" (requires 3-4 students for a successful program) — communally solve a problem from a math journal, and write up a solution (or more!) for possible publication",
             "(Nilpotent) Lie Groups — learn about the relationship between algebraic and geometric complexity",
             "Percolation — find out why percolation on lattices is hard in dimensions 3 and higher, and model some percolation in this setting."
         ]
     },
     {
        name: "Qing Zhang",
         projectTag: "Algebra, Topology",
         researchArea: "Algebra, Topology",
         website: "https://zhangqing2513.github.io",
         researchDescription: "Tensor categories, topological quantum computation, braid group representation, low-dimensional topology.",
         projects: [
             "Ribbon finite tensor categories. Invariants of finite tensor categories."
         ]
     },
     {
        name: "Mary Zimmerman",
         projectTag: "Geometry, Topology",
         researchArea: "Algebra, Topology",
         website: "",
         researchDescription: "I'm still mostly undecided but leaning towards topology.",
         projects: [
             "I'm thinking either The Knot Book, or maybe something geometry related like \"The Four Pillars of Geometry\"."
         ]
     },
     {
        name: "Benedict Lee",
         projectTag: "Algebra, Geometry, Topology",
         researchArea: "Algebra, Geometry, Topology",
         website: "",
         researchDescription: "I mainly work in Geometric Group Theory which tries to understand groups based on how they act on spaces. I am also interested in most things related to algebra and topology.",
         projects: [
             "Here are some books that we can read:",
             "Hyperplane Arrangements (Dimca) ",
             "Unitary Reflection Groups (Taylor and Lehrer)",
             "Geometric and topological aspects of Coxeter groups and buildings (Thomas)",
             "Regular solids and isolated singularities (Lamotke)"
         ]
     },
     {
        name: "Michael Keith",
         projectTag: "Analysis, Applied",
         researchArea: "Analysis, Applied Mathematics",
         website: "",
         researchDescription: "I'm interested in mathematical biology. My research focuses on the mathematical modelling of DNA ejection in the P4 bacteriophage. Principal mathematical methods include continuum mechanics (liquid crystal models) and cryo-electron microscopy (cryo-EM).",
         projects: [
             "A key topic that arises in liquid crystal modelling is the Calculus of Variations since we often seek to minimise an energy when determining a protein structure. Thus, we will study the essentials of the Calculus of Variations with the goal of presenting an application of it. We will use a book titled \"Topics in Applied Mathematics and Modeling\" to develop the basics of the theory."
         ]
     },
     {
        name: "Evan Tufte",
         projectTag: "Analysis, Applied, Other",
         researchArea: "Analysis, Applied Mathematics",
         website: "",
         researchDescription: "I study quantum mechanics--usually models for how electrons flow through metals. The math I use to do this is some blend of functional analysis and partial differential equations. I also enjoy probability, measure theory, and differential geometry.",
         projects: [
             "One topic I think would be a lot of fun is the calculus of variations--we could read about some classical examples (brachistochrone, catenary, etc.), learn about techniques for solving calculus of variation problems/figuring out if solutions exist, then study some more modern examples. Two other possible topics are stochastic processes or quantum mechanics."
         ]
     },
     {
        name: "Mychelle Parker",
         projectTag: "Algebra, Number Theory, Topology",
         researchArea: "Number Theory",
         website: "https://web.math.ucsb.edu/~mychelleparker/",
         researchDescription: "The math I have been studying recently involves Elliptic Curves, Modular Forms, Selmer Groups, and L-functions.",
         projects: [
             "Possible books including:<ul class='project-list'> <li>A Friendly Introduction to Number Theory by Joseph H. Silverman</li><li>Intro to Metric & Topological Spaces by Sutherland</li><li>Rational Points on Elliptic Curves by Silverman and Tate</li><li>Algebraic Number Theory by J.S. Milne</li> </ul>Possible topics from the Arizona Winter School including:<br /> <ul class='project-list'> <li>Abelian varieties over finite fields </li> <li>Elliptic curves with complex multiplication </li> <li>Geometry and arithmetic of moduli spaces of abelian varieties in positive characteristic </li> <li>Symmetries of root systems</li> <li>Local fields</li></ul>"
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