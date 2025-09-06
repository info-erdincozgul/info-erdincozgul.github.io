const projects = {
  frontend: [
    {
      name: "Movie Database Axios Hook",
      description:
        "This project is a movie database application built using React. It allows users to view a list of movies, see movie details, add new movies, and edit or delete existing ones. The application manages movies through an API and offers additional features like a favorite movie list.",
      vimeoId: "1116205415",
      tags: [
        "Axios",
        "CRUD",
        "Custom Hooks",
        "Local Storage",
        "React",
        "React Hook Form",
        "React Roouter",
        "REST API",
        "Tailwind",
        "Vite",
      ],
      github: "https://github.com/info-erdincozgul/Split-9-Proje-3-MovieData",
      vercel: "https://moviedata-erdinc.vercel.app/",
    },
    {
      name: "Friend List",
      description:
        "This project is a simple web application that includes a user login system and friend list management. The application uses the React Context API to handle user authentication and a custom hook, useLocalStorage, to persist user information in the browser's local storage. The project uses protected routes (PrivateRoute) to ensure that only logged-in users can access certain pages.",
      vimeoId: "1116216370",
      tags: [
        "Axios",
        "CRUD",
        "Custom Hooks",
        "localStorage",
        "React Context API",
        "React Hook Form",
        "React Router",
        "React",
        "REST API",
      ],
      github: "https://github.com/info-erdincozgul/Split-9-Proje-2-friendList",
      vercel: "https://friendlist-erdinc.vercel.app/",
    },
    {
      name: "Book Shopping Cart",
      description:
        "This project is a simple e-commerce application developed using the React Context API. Users can browse a list of products, add them to a shopping cart, and view the contents of the cart. The most important feature of the application is that its state management is handled by the central Context API, and the cart data is persisted in the browser's local storage.",
      vimeoId: "1116220261",
      tags: [
        "Context API",
        "E-commerce",
        "Local Storage",
        "React",
        "React Hooks",
        "React Router",
        "State Management",
        "Styled-Components",
      ],
      github: "https://github.com/info-erdincozgul/Split-9-Proje-1-bookStore",
      vercel: "https://bookstore-erdinc.vercel.app",
    },
    {
      name: "Contacts",
      description:
        "This project is a contact management application where users can list contacts fetched from an API, view their details, add new contacts, and delete existing ones. The application uses the TanStack Query (formerly React Query) library for data management and effectively handles server-side state. Interface navigation is provided by React Router, while backend API requests are mocked using axios and Mock Service Worker (MSW).",
      vimeoId: "1116228349",
      tags: [
        "Axios",
        "CRUD",
        "React",
        "React Hook Form",
        "React Router",
        "REST API",
        "TanStack Query",
      ],
      github:
        "https://github.com/info-erdincozgul/Split-8-Proje-4-contactTanstack/",
      vercel: "https://contact-erdinc.vercel.app",
    },
    {
      name: "Movie List",
      description:
        "This project is a movie database application developed with React and Redux, featuring a centralized state management architecture. Users can view a list of movies, see their details, add movies to their own list, and remove them. The most important feature of the application is that all application state is managed by the Redux Store in a single, central location.",
      vimeoId: "1116238619",
      tags: [
        "React",
        "React Redux",
        "React Router",
        "Redux",
        "Redux Logger",
        "State Management",
      ],
      github:
        "https://github.com/info-erdincozgul/Split-8-Proje-3-reduxMovies-2",
      vercel: "https://movielist-erdinc.vercel.app",
    },
    {
      name: "Movie Database Redux",
      description:
        "This project is a comprehensive movie database application built with the Redux centralized state management architecture. Users can view a list of movies, check out their details, add new movies, delete existing ones, and manage their favorite movies. The most important feature of the application is that its entire state is managed by the Redux Store.",
      vimeoId: "1116246190",
      tags: [
        "CRUD",
        "React",
        "React Redux",
        "React Router",
        "Redux",
        "State Management",
        "Tailwind CSS",
      ],
      github: "https://github.com/info-erdincozgul/Split-8-Proje-2-reduxMovies",
      vercel: "https://movieredux-erdinc.vercel.app",
    },
    {
      name: "Calculator",
      description:
        "This project is a basic calculator application. Users can perform simple calculations using numbers and arithmetic operations (+, -, *, /). The application displays the values entered by the user and calculates the result with the = button. It also includes memory functions (M+, MR, MC).",
      vimeoId: "1116258035",
      tags: [
        "Calculator",
        "Component-Based Architecture",
        "Custom Hooks",
        "React Hooks",
        "React",
        "Reducer",
        "State Management",
      ],
      github:
        "https://github.com/info-erdincozgul/Split-8-Proje-1-reducerCalculator",
      vercel: "https://calculator-erdinc.vercel.app",
    },
    {
      name: "Vitest",
      description:
        "The project handles form management with the useState hook and tests that the application is working correctly using Vitest and React Testing Library. This is a modern approach that increases the reliability of the software development process and helps detect potential errors at an early stage.",
      media: "https://i.hizliresim.com/456i27s.png",
      tags: [
        "Conditional Rendering",
        "Form Handling",
        "Form Validation",
        "React Hooks",
        "React",
        "Testing",
        "useState",
      ],
      github: "https://github.com/info-erdincozgul/Split-7-Proje-4-vitest",
      vercel: null,
    },
    {
      name: "Task Management",
      description: `This project is an updated version of a previous to-do list application, enhanced with date-fns and Tailwind CSS. Users can add new tasks and new team members. The application displays the added tasks in two separate columns, "To Do" and "Completed," and allows users to mark tasks as complete.`,
      vimeoId: "1116386004",
      tags: [
        "Component-Based Architecture",
        "date-fns",
        "Form Handling",
        "React Hooks",
        "React",
        "react-hook-form",
        "Third-Party Libraries",
        "useState",
      ],
      github:
        "https://github.com/info-erdincozgul/Split-7-Proje-2-taskManagement2",
      vercel: "https://taskmanagement-erdinc.vercel.app",
    },
    {
      name: "Login Valid",
      description: `This project is a form page built with React that applies specific rules to validate user login information (email and password). The project uses the reactstrap library to provide a modern form interface, while the useState hook manages form data, error states, and button activation.`,
      vimeoId: "1116391267",
      tags: [
        "Client-side Routing",
        "Component-Based Architecture",
        "Form Handling",
        "React Hooks",
        "React Router",
        "React",
        "Reactstrap",
        "useState",
      ],
      github: "https://github.com/info-erdincozgul/Split-6-Proje-3-login",
      vercel: "https://loginvalid-erdinc.vercel.app",
    },
    {
      name: "E-Commerse",
      description: `This project is a simple e-commerce application built with React. Its main purpose is to dynamically list products by interacting with an external API (fakestoreapi.com) and filter products based on the category selected by the user. This application practically demonstrates component data flow, state management, and asynchronous data fetching.`,
      media: "https://i.hizliresim.com/247auuw.png",
      tags: ["Axios", "CSS", "Props", "React Hooks", "React", "REST API"],
      github: "https://github.com/info-erdincozgul/Split-5-Proje-3-eTicaret",
      vercel: "https://ecommerce-erdinc.vercel.app",
    },
    {
      name: "Squares",
      description: `This project is a simple, interactive interface application built with React that changes the state of squares when they are clicked. `,
      vimeoId: "1116395592",
      tags: ["CSS", "React", "React Hooks"],
      github: "https://github.com/info-erdincozgul/Split-5-Proje-1-kareler",
      vercel: "https://squares-erdinc.vercel.app",
    },
    {
      name: "Techo News",
      description: `This project is a web application that uses JavaScript to create and manage entirely dynamic content for a technology news portal. Instead of static HTML, the page content is populated from JavaScript data objects (e.g., the data array for news and the menuElemanlari array for the menu).`,
      media: "https://i.hizliresim.com/c1jq48x.png",
      tags: [
        "CSS",
        "DOM Manipulation",
        "Event Handling",
        "JavaScript",
        "Vanilla JS",
      ],
      github:
        "https://github.com/info-erdincozgul/Split-4-Proje-3-dinamikPortal",
      vercel: null,
    },
    {
      name: "Dom Site",
      description: `This project aims to dynamically create the content of a web page using JavaScript. In this project, the page's texts and images are not taken from a static HTML file but are instead retrieved from a JavaScript object (siteContent) and placed on the page.`,
      media: "https://i.hizliresim.com/j6wr7at.jpg",
      tags: [
        "CSS",
        "DOM Manipulation",
        "JavaScript",
        "Responsive Design",
        "Vanilla JS",
      ],
      github: "https://github.com/info-erdincozgul/Split-4-Proje-1-domIcerik",
      vercel: null,
    },
  ],
  // backend: [
  //   {
  //     name: "Blog API",
  //     description:
  //       "Gönderi ve yorum işlemleri için Node.js ve Express.js ile geliştirilmiş RESTful API.",
  //     media: "https://via.placeholder.com/400x250.png?text=Blog+API",
  //     tags: ["Node.js", "Express.js", "MongoDB", "REST API"],
  //     github: "https://github.com/ornek/blog-api",
  //     vercel: null,
  //   },
  //   // Diğer backend projelerinizi buraya ekleyin
  // ],
};

function renderProjects(category, containerId, searchTerm = "") {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const filteredProjects = projects[category].filter((project) => {
    const searchLower = searchTerm.toLowerCase();
    const nameMatch = project.name.toLowerCase().includes(searchLower);
    const tagMatch = project.tags.some((tag) =>
      tag.toLowerCase().includes(searchLower)
    );
    return nameMatch || tagMatch;
  });

  filteredProjects.forEach((project) => {
    const projectHtml = `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                <div>
                    <div class="mb-4">
                        ${
                          project.vimeoId
                            ? `
                            <div class="relative overflow-hidden pt-[56.25%] rounded-md">
                                <iframe 
                                    src="https://player.vimeo.com/video/${project.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479" 
                                    frameborder="0" 
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                                    allowfullscreen
                                    class="absolute top-0 left-0 w-full h-full" 
                                    title="${project.name}"
                                ></iframe>
                            </div>
                        `
                            : `
                            <a href="${project.media}" target="_blank" class="block mb-4">
                                <img src="${project.media}" alt="${project.name}" class="w-full h-48 object-cover rounded-md">
                            </a>
                        `
                        }
                    </div>

                    <h3 class="text-2xl font-bold text-gray-700 mb-2">${
                      project.name
                    }</h3>
                    <p class="text-gray-600 text-sm mb-4">${
                      project.description
                    }</p>
                    
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.tags
                          .map(
                            (tag) => `
                            <span class="bg-gray-200 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full cursor-pointer hover:bg-gray-300 transition-colors duration-300 tag-filter">${tag}</span>
                        `
                          )
                          .join("")}
                    </div>
                </div>
                
                <div class="flex justify-between items-center mt-auto">
                    <a href="${
                      project.github
                    }" target="_blank" class="inline-flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors duration-300">
                        <i class="fab fa-github"></i>
                        <span>GitHub</span>
                    </a>
                    
                    ${
                      project.vercel
                        ? `
                    <a href="${project.vercel}" target="_blank" class="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                        <i class="fas fa-external-link-alt"></i>
                        <span>Canlı Demo</span>
                    </a>
                    `
                        : ""
                    }
                </div>
            </div>
        `;
    container.innerHTML += projectHtml;
  });
}


document.addEventListener("DOMContentLoaded", () => {
  renderProjects("frontend", "frontend-projects");
  renderProjects("backend", "backend-projects");

  document.getElementById("frontend-search").addEventListener("input", (e) => {
    renderProjects("frontend", "frontend-projects", e.target.value);
  });

  document.getElementById("backend-search").addEventListener("input", (e) => {
    renderProjects("backend", "backend-projects", e.target.value);
  });

  document
    .getElementById("frontend-projects")
    .addEventListener("click", (e) => {
      if (e.target.classList.contains("tag-filter")) {
        document.getElementById("frontend-search").value = e.target.textContent;
        renderProjects("frontend", "frontend-projects", e.target.textContent);
      }
    });

  document.getElementById("backend-projects").addEventListener("click", (e) => {
    if (e.target.classList.contains("tag-filter")) {
      document.getElementById("backend-search").value = e.target.textContent;
      renderProjects("backend", "backend-projects", e.target.textContent);
    }
  });
});
