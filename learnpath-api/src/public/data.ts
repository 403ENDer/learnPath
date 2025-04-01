export const Coursedata = [
  {
    id: "backend-development",
    title: "Backend Development",
    submodules: [
      {
        id: "nodejs",
        title: "Node.js Fundamentals",
        topics: [
          {
            topic: "Introduction to Node.js",
            rating: 4.5,
            prerequisites: [],
            industry_demand: 5,
            difficulty_level: 1,
            subtopics: [
              {
                subtopic: "What is Node.js?",
                url: "https://learnpath.com/what-is-nodejs",
              },
              {
                subtopic: "Node.js Installation",
                url: "https://learnpath.com/nodejs-installation",
              },
              {
                subtopic: "Node.js Core Modules",
                url: "https://learnpath.com/nodejs-core-modules",
              },
              {
                subtopic: "REPL and CLI Basics",
                url: "https://learnpath.com/nodejs-repl-cli",
              },
              {
                subtopic: "Node.js Package Management (npm & yarn)",
                url: "https://learnpath.com/nodejs-package-management",
              },
            ],
          },
          {
            topic: "Event Loop & Asynchronous I/O",
            rating: 4.6,
            prerequisites: ["Introduction to Node.js"],
            industry_demand: 5,
            difficulty_level: 2,
            subtopics: [
              {
                subtopic: "Understanding Event Loop",
                url: "https://learnpath.com/understanding-event-loop",
              },
              {
                subtopic: "Non-blocking I/O",
                url: "https://learnpath.com/non-blocking-io",
              },
              {
                subtopic: "Callback, Promises, and Async/Await",
                url: "https://learnpath.com/callback-promises-async-await",
              },
              {
                subtopic: "Handling Multiple Async Operations",
                url: "https://learnpath.com/handling-multiple-async",
              },
              {
                subtopic: "Timers and NextTick in Node.js",
                url: "https://learnpath.com/timers-nexttick",
              },
            ],
          },
          {
            topic: "File System Operations",
            rating: 4.4,
            prerequisites: ["Introduction to Node.js"],
            industry_demand: 3,
            difficulty_level: 2,
            subtopics: [
              {
                subtopic: "Reading and Writing Files",
                url: "https://learnpath.com/read-write-files",
              },
              {
                subtopic: "Working with Streams",
                url: "https://learnpath.com/working-with-streams",
              },
              {
                subtopic: "File Manipulation and fs Module",
                url: "https://learnpath.com/file-manipulation-fs",
              },
              {
                subtopic: "File Uploads and Downloads",
                url: "https://learnpath.com/file-uploads-downloads",
              },
            ],
          },
          {
            topic: "Express.js Basics",
            rating: 4.7,
            prerequisites: ["Introduction to Node.js"],
            industry_demand: 5,
            difficulty_level: 1,
            subtopics: [
              {
                subtopic: "Setting Up Express App",
                url: "https://learnpath.com/setup-express-app",
              },
              {
                subtopic: "Middleware in Express",
                url: "https://learnpath.com/middleware-express",
              },
              {
                subtopic: "Routing Basics in Express",
                url: "https://learnpath.com/routing-basics-express",
              },
              {
                subtopic: "Handling Form Data with Body Parser",
                url: "https://learnpath.com/form-data-body-parser",
              },
            ],
          },
          {
            topic: "Advanced Routing in Express",
            rating: 4.7,
            prerequisites: ["Express.js Basics"],
            industry_demand: 5,
            difficulty_level: 2,
            subtopics: [
              {
                subtopic: "Defining Routes",
                url: "https://learnpath.com/defining-routes",
              },
              {
                subtopic: "Route Parameters",
                url: "https://learnpath.com/route-parameters",
              },
              {
                subtopic: "Handling Multiple Routes",
                url: "https://learnpath.com/handling-multiple-routes",
              },
              {
                subtopic: "Nested Routes & Middleware Chaining",
                url: "https://learnpath.com/nested-routes",
              },
            ],
          },
          {
            topic: "Authentication & Authorization",
            rating: 4.8,
            prerequisites: ["RESTful API Basics"],
            industry_demand: 5,
            difficulty_level: 4,
            subtopics: [
              {
                subtopic: "JWT Basics",
                url: "https://learnpath.com/jwt-basics",
              },
              {
                subtopic: "OAuth2 & SSO",
                url: "https://learnpath.com/oauth2-sso",
              },
              {
                subtopic: "Role-Based Access Control (RBAC)",
                url: "https://learnpath.com/rbac",
              },
              {
                subtopic: "Session-Based Authentication",
                url: "https://learnpath.com/session-authentication",
              },
              {
                subtopic: "Token Revocation & Refresh Tokens",
                url: "https://learnpath.com/token-revocation",
              },
            ],
          },
          {
            topic: "Database Integration",
            rating: 4.7,
            prerequisites: ["Introduction to Node.js"],
            industry_demand: 5,
            difficulty_level: 2,
            subtopics: [
              {
                subtopic: "Connecting to MongoDB with Mongoose",
                url: "https://learnpath.com/mongodb-mongoose",
              },
              {
                subtopic: "CRUD Operations with MongoDB",
                url: "https://learnpath.com/crud-mongodb",
              },
              {
                subtopic: "Working with SQL Databases using Sequelize",
                url: "https://learnpath.com/sql-sequelize",
              },
              {
                subtopic: "ORM and ODM Basics",
                url: "https://learnpath.com/orm-odm",
              },
            ],
          },
          {
            topic: "RESTful API Basics",
            rating: 4.7,
            prerequisites: ["Event Loop & Asynchronous I/O"],
            industry_demand: 5,
            difficulty_level: 2,
            subtopics: [
              {
                subtopic: "Understanding REST Architecture",
                url: "https://learnpath.com/understanding-rest",
              },
              {
                subtopic: "CRUD Operations with REST",
                url: "https://learnpath.com/crud-operations-rest",
              },
              {
                subtopic: "REST API Design Principles",
                url: "https://learnpath.com/rest-api-design-principles",
              },
              {
                subtopic: "API Versioning and Best Practices",
                url: "https://learnpath.com/api-versioning",
              },
            ],
          },
          {
            topic: "Error Handling in Express",
            rating: 4.7,
            prerequisites: ["Routing in Express"],
            industry_demand: 5,
            difficulty_level: 2,
            subtopics: [
              {
                subtopic: "Centralized Error Handling",
                url: "https://learnpath.com/centralized-error-handling",
              },
              {
                subtopic: "Custom Error Middleware",
                url: "https://learnpath.com/custom-error-middleware",
              },
              {
                subtopic: "Handling Different Error Types",
                url: "https://learnpath.com/handling-error-types",
              },
              {
                subtopic: "Handling Async Errors with Middleware",
                url: "https://learnpath.com/handling-async-errors",
              },
            ],
          },
          {
            topic: "Testing & Debugging",
            rating: 4.5,
            prerequisites: ["RESTful API Basics"],
            industry_demand: 3,
            difficulty_level: 2,
            subtopics: [
              {
                subtopic: "Unit Testing with Jest",
                url: "https://learnpath.com/unit-testing-jest",
              },
              {
                subtopic: "Integration Testing with Supertest",
                url: "https://learnpath.com/integration-testing-supertest",
              },
              {
                subtopic: "Debugging Node.js Applications",
                url: "https://learnpath.com/debugging-nodejs",
              },
              {
                subtopic: "Writing Mocks and Stubs",
                url: "https://learnpath.com/mocks-stubs",
              },
            ],
          },
          {
            topic: "WebSockets & Real-Time Applications",
            rating: 4.6,
            prerequisites: ["RESTful API Basics"],
            industry_demand: 5,
            difficulty_level: 4,
            subtopics: [
              {
                subtopic: "Introduction to WebSockets",
                url: "https://learnpath.com/websockets-intro",
              },
              {
                subtopic: "Real-Time Communication with Socket.io",
                url: "https://learnpath.com/socketio-realtime",
              },
              {
                subtopic: "Handling Bi-Directional Communication",
                url: "https://learnpath.com/bidirectional-communication",
              },
              {
                subtopic: "Implementing Chat Applications",
                url: "https://learnpath.com/chat-apps-socketio",
              },
            ],
          },
          {
            topic: "API Security & Rate Limiting",
            rating: 4.7,
            prerequisites: ["RESTful API Basics"],
            industry_demand: 5,
            difficulty_level: 4,
            subtopics: [
              {
                subtopic: "Securing APIs with JWT",
                url: "https://learnpath.com/api-security-jwt",
              },
              {
                subtopic: "Rate Limiting and Throttling",
                url: "https://learnpath.com/rate-limiting",
              },
              {
                subtopic: "Preventing XSS and CSRF Attacks",
                url: "https://learnpath.com/xss-csrf-prevention",
              },
              {
                subtopic: "Input Validation and Sanitization",
                url: "https://learnpath.com/input-validation",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    submodules: [
      {
        id: "html-css",
        title: "HTML & CSS Basics",
        topics: [
          {
            topic: "Introduction to HTML",
            rating: 4.5,
            prerequisites: [],
            industry_demand: 5,
            difficulty: 1,
            subtopics: [
              {
                subtopic: "HTML Basics and Structure",
                url: "https://learnpath.com/html-basics",
              },
              {
                subtopic: "HTML5 Semantic Elements",
                url: "https://learnpath.com/html5-semantics",
              },
              {
                subtopic: "Forms and Input Validation",
                url: "https://learnpath.com/html-forms-validation",
              },
              {
                subtopic: "Audio, Video, and Media Tags",
                url: "https://learnpath.com/html-media-tags",
              },
            ],
          },
          {
            topic: "Introduction to CSS",
            rating: 4.5,
            prerequisites: ["Introduction to HTML"],
            industry_demand: 5,
            difficulty: 1,
            subtopics: [
              {
                subtopic: "CSS Syntax and Selectors",
                url: "https://learnpath.com/css-syntax-selectors",
              },
              {
                subtopic: "CSS Box Model",
                url: "https://learnpath.com/css-box-model",
              },
              {
                subtopic: "CSS Flexbox & Grid",
                url: "https://learnpath.com/css-flexbox-grid",
              },
              {
                subtopic: "CSS Media Queries & Responsive Design",
                url: "https://learnpath.com/css-media-queries",
              },
            ],
          },
          {
            topic: "Advanced CSS Techniques",
            rating: 4.6,
            prerequisites: ["Introduction to CSS"],
            industry_demand: 3,
            difficulty: 2,
            subtopics: [
              {
                subtopic: "CSS Animations and Transitions",
                url: "https://learnpath.com/css-animations",
              },
              {
                subtopic: "CSS Preprocessors (SASS/SCSS)",
                url: "https://learnpath.com/css-preprocessors",
              },
              {
                subtopic: "CSS Grid and Advanced Layouts",
                url: "https://learnpath.com/css-grid-layouts",
              },
              {
                subtopic: "CSS Variables and Custom Properties",
                url: "https://learnpath.com/css-variables",
              },
            ],
          },
        ],
      },
      {
        id: "javascript",
        title: "JavaScript Basics & Advanced Concepts",
        topics: [
          {
            topic: "Introduction to JavaScript",
            rating: 4.6,
            prerequisites: ["Introduction to HTML"],
            industry_demand: 5,
            difficulty: 1,
            subtopics: [
              {
                subtopic: "JavaScript Syntax and Variables",
                url: "https://learnpath.com/js-syntax-variables",
              },
              {
                subtopic: "Data Types and Operators",
                url: "https://learnpath.com/js-data-types",
              },
              {
                subtopic: "Control Flow and Loops",
                url: "https://learnpath.com/js-control-flow",
              },
              {
                subtopic: "DOM Manipulation Basics",
                url: "https://learnpath.com/js-dom-basics",
              },
            ],
          },
          {
            topic: "Advanced JavaScript Concepts",
            rating: 4.7,
            prerequisites: ["Introduction to JavaScript"],
            industry_demand: 5,
            difficulty: 3,
            subtopics: [
              {
                subtopic: "Asynchronous JavaScript (Promises, Async/Await)",
                url: "https://learnpath.com/js-async-await",
              },
              {
                subtopic: "JavaScript Closures and Scope",
                url: "https://learnpath.com/js-closures",
              },
              {
                subtopic: "Prototype and Inheritance",
                url: "https://learnpath.com/js-prototype",
              },
              {
                subtopic: "Error Handling and Debugging",
                url: "https://learnpath.com/js-error-handling",
              },
            ],
          },
          {
            topic: "JavaScript DOM & Event Handling",
            rating: 4.6,
            prerequisites: ["Introduction to JavaScript"],
            industry_demand: 5,
            difficulty: 2,
            subtopics: [
              {
                subtopic: "DOM Traversal and Manipulation",
                url: "https://learnpath.com/dom-traversal",
              },
              {
                subtopic: "Event Handling and Delegation",
                url: "https://learnpath.com/event-handling",
              },
              {
                subtopic: "Form Validation with JavaScript",
                url: "https://learnpath.com/form-validation-js",
              },
              {
                subtopic: "Local Storage and Session Storage",
                url: "https://learnpath.com/local-session-storage",
              },
            ],
          },
        ],
      },
      {
        id: "react",
        title: "React.js Basics & Advanced Concepts",
        topics: [
          {
            topic: "Introduction to React",
            rating: 4.7,
            prerequisites: ["JavaScript Basics"],
            industry_demand: 5,
            difficulty: 1,
            subtopics: [
              {
                subtopic: "React Basics and JSX",
                url: "https://learnpath.com/react-jsx",
              },
              {
                subtopic: "Components and Props",
                url: "https://learnpath.com/react-components",
              },
              {
                subtopic: "State Management with useState",
                url: "https://learnpath.com/react-usestate",
              },
              {
                subtopic: "Handling Events in React",
                url: "https://learnpath.com/react-events",
              },
            ],
          },
          {
            topic: "React Component Lifecycle & Hooks",
            rating: 4.8,
            prerequisites: ["Introduction to React"],
            industry_demand: 5,
            difficulty: 2,
            subtopics: [
              {
                subtopic: "Component Lifecycle Methods",
                url: "https://learnpath.com/react-lifecycle",
              },
              {
                subtopic: "Using useEffect and Cleanup",
                url: "https://learnpath.com/react-useeffect",
              },
              {
                subtopic: "Custom Hooks and Reusability",
                url: "https://learnpath.com/react-custom-hooks",
              },
              {
                subtopic: "State Management with Context API",
                url: "https://learnpath.com/react-context-api",
              },
            ],
          },
          {
            topic: "Advanced React Concepts",
            rating: 4.7,
            prerequisites: ["React Component Lifecycle & Hooks"],
            industry_demand: 4,
            difficulty: 3,
            subtopics: [
              {
                subtopic: "React Router and SPA",
                url: "https://learnpath.com/react-router",
              },
              {
                subtopic: "Higher Order Components (HOC)",
                url: "https://learnpath.com/react-hoc",
              },
              {
                subtopic: "Redux for State Management",
                url: "https://learnpath.com/react-redux",
              },
              {
                subtopic: "Optimizing Performance with React.memo",
                url: "https://learnpath.com/react-memo",
              },
            ],
          },
        ],
      },
      {
        id: "typescript",
        title: "TypeScript Essentials",
        topics: [
          {
            topic: "Introduction to TypeScript",
            rating: 4.5,
            prerequisites: ["JavaScript Basics"],
            industry_demand: 5,
            difficulty: 1,
            subtopics: [
              {
                subtopic: "TypeScript vs JavaScript",
                url: "https://learnpath.com/ts-vs-js",
              },
              {
                subtopic: "Setting Up TypeScript Project",
                url: "https://learnpath.com/ts-setup",
              },
              {
                subtopic: "Basic Types and Interfaces",
                url: "https://learnpath.com/ts-basic-types",
              },
              {
                subtopic: "Type Inference and Type Safety",
                url: "https://learnpath.com/ts-inference",
              },
            ],
          },
          {
            topic: "Advanced TypeScript Concepts",
            rating: 4.6,
            prerequisites: ["Introduction to TypeScript"],
            industry_demand: 3,
            difficulty: 2,
            subtopics: [
              {
                subtopic: "Generics and Utility Types",
                url: "https://learnpath.com/ts-generics",
              },
              {
                subtopic: "Decorators and Metadata",
                url: "https://learnpath.com/ts-decorators",
              },
              {
                subtopic: "Type Guards and Type Narrowing",
                url: "https://learnpath.com/ts-type-guards",
              },
              {
                subtopic: "Handling Modules and Namespaces",
                url: "https://learnpath.com/ts-modules",
              },
            ],
          },
        ],
      },
      {
        id: "nextjs",
        title: "Next.js Framework",
        topics: [
          {
            topic: "Getting Started with Next.js",
            rating: 4.7,
            prerequisites: ["React Basics"],
            industry_demand: 5,
            difficulty: 2,
            subtopics: [
              {
                subtopic: "Next.js Project Setup",
                url: "https://learnpath.com/nextjs-setup",
              },
              {
                subtopic: "Pages and Routing in Next.js",
                url: "https://learnpath.com/nextjs-routing",
              },
              {
                subtopic: "Static and Server-Side Rendering",
                url: "https://learnpath.com/nextjs-rendering",
              },
              {
                subtopic: "API Routes in Next.js",
                url: "https://learnpath.com/nextjs-api-routes",
              },
            ],
          },
          {
            topic: "Advanced Next.js Concepts",
            rating: 4.8,
            prerequisites: ["Getting Started with Next.js"],
            industry_demand: 4,
            difficulty: 3,
            subtopics: [
              {
                subtopic: "Authentication with NextAuth",
                url: "https://learnpath.com/nextjs-auth",
              },
              {
                subtopic: "Middleware and Custom API Handlers",
                url: "https://learnpath.com/nextjs-middleware",
              },
              {
                subtopic: "Incremental Static Regeneration (ISR)",
                url: "https://learnpath.com/nextjs-isr",
              },
              {
                subtopic: "Performance Optimization Techniques",
                url: "https://learnpath.com/nextjs-optimization",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    submodules: [
      {
        id: "ml-fundamentals",
        title: "Machine Learning Fundamentals",
        topics: [
          {
            topic: "Introduction to Machine Learning",
            rating: 4.6,
            difficulty: 1,
            industry_demand: 5,
            prerequisites: [],
            subtopics: [
              {
                subtopic: "What is Machine Learning?",
                url: "https://learnpath.com/ml-intro",
              },
              {
                subtopic: "Types of Machine Learning",
                url: "https://learnpath.com/ml-types",
              },
              {
                subtopic: "Supervised vs Unsupervised Learning",
                url: "https://learnpath.com/ml-supervised-unsupervised",
              },
              {
                subtopic: "Applications of Machine Learning",
                url: "https://learnpath.com/ml-applications",
              },
            ],
          },
          {
            topic: "Mathematics for Machine Learning",
            rating: 4.5,
            difficulty: 3,
            industry_demand: 4,
            prerequisites: ["Introduction to Machine Learning"],
            subtopics: [
              {
                subtopic: "Linear Algebra Basics",
                url: "https://learnpath.com/ml-linear-algebra",
              },
              {
                subtopic: "Probability and Statistics",
                url: "https://learnpath.com/ml-probability-stats",
              },
              {
                subtopic: "Calculus for Optimization",
                url: "https://learnpath.com/ml-calculus",
              },
              {
                subtopic: "Gradient Descent and Loss Functions",
                url: "https://learnpath.com/ml-gradient-descent",
              },
            ],
          },
          {
            topic: "Data Preprocessing and Feature Engineering",
            rating: 4.7,
            difficulty: 2,
            industry_demand: 5,
            prerequisites: ["Mathematics for Machine Learning"],
            subtopics: [
              {
                subtopic: "Data Cleaning and Imputation",
                url: "https://learnpath.com/ml-data-cleaning",
              },
              {
                subtopic: "Handling Categorical and Numerical Features",
                url: "https://learnpath.com/ml-feature-handling",
              },
              {
                subtopic: "Feature Scaling and Normalization",
                url: "https://learnpath.com/ml-feature-scaling",
              },
              {
                subtopic: "Feature Selection and Dimensionality Reduction",
                url: "https://learnpath.com/ml-feature-selection",
              },
            ],
          },
        ],
      },
      {
        id: "supervised-learning",
        title: "Supervised Learning",
        topics: [
          {
            topic: "Linear Regression",
            rating: 4.6,
            difficulty: 2,
            industry_demand: 5,
            prerequisites: ["Data Preprocessing and Feature Engineering"],
            subtopics: [
              {
                subtopic: "Simple Linear Regression",
                url: "https://learnpath.com/ml-linear-regression",
              },
              {
                subtopic: "Multiple Linear Regression",
                url: "https://learnpath.com/ml-multiple-regression",
              },
              {
                subtopic: "Polynomial Regression",
                url: "https://learnpath.com/ml-polynomial-regression",
              },
              {
                subtopic: "Evaluating Regression Models",
                url: "https://learnpath.com/ml-regression-evaluation",
              },
            ],
          },
          {
            topic: "Classification Algorithms",
            rating: 4.7,
            difficulty: 3,
            industry_demand: 5,
            prerequisites: ["Data Preprocessing and Feature Engineering"],
            subtopics: [
              {
                subtopic: "Logistic Regression",
                url: "https://learnpath.com/ml-logistic-regression",
              },
              {
                subtopic: "Decision Trees and Random Forest",
                url: "https://learnpath.com/ml-decision-trees",
              },
              {
                subtopic: "Support Vector Machines (SVM)",
                url: "https://learnpath.com/ml-svm",
              },
              {
                subtopic: "K-Nearest Neighbors (KNN)",
                url: "https://learnpath.com/ml-knn",
              },
            ],
          },
          {
            topic: "Model Evaluation and Metrics",
            rating: 4.6,
            difficulty: 3,
            industry_demand: 4,
            prerequisites: ["Linear Regression", "Classification Algorithms"],
            subtopics: [
              {
                subtopic: "Confusion Matrix and Classification Report",
                url: "https://learnpath.com/ml-confusion-matrix",
              },
              {
                subtopic: "ROC Curve and AUC",
                url: "https://learnpath.com/ml-roc-auc",
              },
              {
                subtopic: "Cross-Validation Techniques",
                url: "https://learnpath.com/ml-cross-validation",
              },
              {
                subtopic: "Hyperparameter Tuning (Grid Search & Random Search)",
                url: "https://learnpath.com/ml-hyperparameter-tuning",
              },
            ],
          },
        ],
      },
      {
        id: "unsupervised-learning",
        title: "Unsupervised Learning",
        topics: [
          {
            topic: "Clustering Algorithms",
            rating: 4.5,
            difficulty: 3,
            industry_demand: 4,
            prerequisites: ["Data Preprocessing and Feature Engineering"],
            subtopics: [
              {
                subtopic: "K-Means Clustering",
                url: "https://learnpath.com/ml-kmeans",
              },
              {
                subtopic: "Hierarchical Clustering",
                url: "https://learnpath.com/ml-hierarchical",
              },
              {
                subtopic: "DBSCAN Clustering",
                url: "https://learnpath.com/ml-dbscan",
              },
              {
                subtopic: "Evaluating Clustering Models",
                url: "https://learnpath.com/ml-cluster-evaluation",
              },
            ],
          },
          {
            topic: "Dimensionality Reduction",
            rating: 4.6,
            difficulty: 3,
            industry_demand: 4,
            prerequisites: ["Mathematics for Machine Learning"],
            subtopics: [
              {
                subtopic: "Principal Component Analysis (PCA)",
                url: "https://learnpath.com/ml-pca",
              },
              {
                subtopic: "t-Distributed Stochastic Neighbor Embedding (t-SNE)",
                url: "https://learnpath.com/ml-tsne",
              },
              {
                subtopic: "Autoencoders for Dimensionality Reduction",
                url: "https://learnpath.com/ml-autoencoders",
              },
              {
                subtopic: "Feature Extraction and Selection Techniques",
                url: "https://learnpath.com/ml-feature-extraction",
              },
            ],
          },
          {
            topic: "Anomaly Detection",
            rating: 4.5,
            difficulty: 4,
            industry_demand: 4,
            prerequisites: ["Clustering Algorithms"],
            subtopics: [
              {
                subtopic: "Isolation Forests",
                url: "https://learnpath.com/ml-isolation-forest",
              },
              {
                subtopic: "One-Class SVM",
                url: "https://learnpath.com/ml-one-class-svm",
              },
              {
                subtopic: "Autoencoder-based Anomaly Detection",
                url: "https://learnpath.com/ml-autoencoder-anomaly",
              },
              {
                subtopic: "Real-World Applications of Anomaly Detection",
                url: "https://learnpath.com/ml-anomaly-applications",
              },
            ],
          },
        ],
      },
      {
        id: "neural-networks",
        title: "Neural Networks and Deep Learning",
        topics: [
          {
            topic: "Introduction to Neural Networks",
            rating: 4.7,
            difficulty: 3,
            industry_demand: 5,
            prerequisites: ["Mathematics for Machine Learning"],
            subtopics: [
              {
                subtopic: "Perceptron and Multilayer Perceptron (MLP)",
                url: "https://learnpath.com/ml-perceptron",
              },
              {
                subtopic: "Activation Functions and Forward Propagation",
                url: "https://learnpath.com/ml-activation-functions",
              },
              {
                subtopic: "Backpropagation and Optimization",
                url: "https://learnpath.com/ml-backpropagation",
              },
              {
                subtopic: "Loss Functions and Regularization",
                url: "https://learnpath.com/ml-loss-functions",
              },
            ],
          },
          {
            topic: "Convolutional Neural Networks (CNNs)",
            rating: 4.8,
            difficulty: 4,
            industry_demand: 5,
            prerequisites: ["Introduction to Neural Networks"],
            subtopics: [
              {
                subtopic: "Convolution and Pooling Layers",
                url: "https://learnpath.com/ml-convolution-pooling",
              },
              {
                subtopic: "CNN Architectures (LeNet, AlexNet, etc.)",
                url: "https://learnpath.com/ml-cnn-architectures",
              },
              {
                subtopic: "Transfer Learning and Fine-Tuning",
                url: "https://learnpath.com/ml-transfer-learning",
              },
              {
                subtopic: "Object Detection and Segmentation",
                url: "https://learnpath.com/ml-object-detection",
              },
            ],
          },
          {
            topic: "Recurrent Neural Networks (RNNs) and LSTM",
            rating: 4.7,
            difficulty: 4,
            industry_demand: 5,
            prerequisites: ["Introduction to Neural Networks"],
            subtopics: [
              {
                subtopic: "Recurrent Neural Networks (RNNs) Basics",
                url: "https://learnpath.com/ml-rnn-basics",
              },
              {
                subtopic: "Long Short-Term Memory (LSTM)",
                url: "https://learnpath.com/ml-lstm",
              },
              {
                subtopic: "Gated Recurrent Units (GRU)",
                url: "https://learnpath.com/ml-gru",
              },
              {
                subtopic: "Sequence Modeling Applications",
                url: "https://learnpath.com/ml-sequence-modeling",
              },
            ],
          },
          {
            topic: "Attention Mechanisms and Transformers",
            rating: 4.9,
            difficulty: 4,
            industry_demand: 5,
            prerequisites: ["Recurrent Neural Networks (RNNs) and LSTM"],
            subtopics: [
              {
                subtopic: "Self-Attention and Multi-Head Attention",
                url: "https://learnpath.com/ml-self-attention",
              },
              {
                subtopic: "Transformer Architecture",
                url: "https://learnpath.com/ml-transformer",
              },
              {
                subtopic: "BERT and GPT Models",
                url: "https://learnpath.com/ml-bert-gpt",
              },
              {
                subtopic: "Applications of Transformers",
                url: "https://learnpath.com/ml-transformer-applications",
              },
            ],
          },
          {
            topic: "Hyperparameter Tuning in Deep Learning",
            rating: 4.6,
            difficulty: 3,
            industry_demand: 4,
            prerequisites: ["Introduction to Neural Networks"],
            subtopics: [
              {
                subtopic: "Grid Search and Random Search",
                url: "https://learnpath.com/ml-grid-search",
              },
              {
                subtopic: "Bayesian Optimization",
                url: "https://learnpath.com/ml-bayesian-optimization",
              },
              {
                subtopic: "Early Stopping and Regularization Techniques",
                url: "https://learnpath.com/ml-early-stopping",
              },
              {
                subtopic: "Tuning CNN and RNN Architectures",
                url: "https://learnpath.com/ml-tuning-cnn-rnn",
              },
            ],
          },
          {
            topic: "Deployment and Optimization of DL Models",
            rating: 4.5,
            difficulty: 3,
            industry_demand: 5,
            prerequisites: ["Introduction to Neural Networks"],
            subtopics: [
              {
                subtopic: "Model Deployment with Flask/Django",
                url: "https://learnpath.com/ml-model-deployment",
              },
              {
                subtopic: "Model Compression and Quantization",
                url: "https://learnpath.com/ml-model-compression",
              },
              {
                subtopic: "ONNX and TensorRT for Optimization",
                url: "https://learnpath.com/ml-onnx-tensorrt",
              },
              {
                subtopic: "Monitoring and Retraining Models",
                url: "https://learnpath.com/ml-model-monitoring",
              },
            ],
          },
        ],
      },
    ],
  },
];
