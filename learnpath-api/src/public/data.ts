export const Coursedata = [
  {
    id: "backend-development",
    title: "Backend Development",
    submodules: [
      {
        id: "programming-foundations",
        title: "Programming Foundations",
        topics: [
          {
            topic: "Programming with JavaScript/TypeScript",
            rating: 4.6,
            prerequisites: [],
            industry_demand: 5,
            difficulty: 1,
            subtopics: [
              {
                id: "prog-1",
                subtopic: "Variables, Data Types, and Operators",
                url: "https://learnpath.com/js-variables",
              },
              {
                id: "prog-2",
                subtopic: "Functions and Scope",
                url: "https://learnpath.com/js-functions",
              },
              {
                id: "prog-3",
                subtopic: "Control Flow and Loops",
                url: "https://learnpath.com/js-control-flow",
              },
              {
                id: "prog-4",
                subtopic: "Error Handling and Debugging",
                url: "https://learnpath.com/js-debugging",
              },
            ],
          },
        ],
      },
      {
        id: "server-runtime",
        title: "Server Environment & Runtime",
        topics: [
          {
            topic: "Node.js Basics",
            rating: 4.7,
            prerequisites: ["Programming with JavaScript/TypeScript"],
            industry_demand: 5,
            difficulty: 1,
            subtopics: [
              {
                id: "node-1",
                subtopic: "Node.js Setup and Basics",
                url: "https://learnpath.com/node-setup",
              },
              {
                id: "node-2",
                subtopic: "Working with File System",
                url: "https://learnpath.com/node-fs",
              },
              {
                id: "node-3",
                subtopic: "Event Loop and EventEmitter",
                url: "https://learnpath.com/node-eventloop",
              },
              {
                id: "node-4",
                subtopic: "Modules and Package Management",
                url: "https://learnpath.com/node-modules",
              },
            ],
          },
        ],
      },
      {
        id: "web-framework",
        title: "Web Frameworks",
        topics: [
          {
            topic: "Express.js Basics",
            rating: 4.7,
            prerequisites: ["Node.js Basics"],
            industry_demand: 5,
            difficulty: 2,
            subtopics: [
              {
                id: "express-1",
                subtopic: "Setting Up Express Project",
                url: "https://learnpath.com/express-setup",
              },
              {
                id: "express-2",
                subtopic: "Routing and Middleware",
                url: "https://learnpath.com/express-routing",
              },
              {
                id: "express-3",
                subtopic: "Handling Requests and Responses",
                url: "https://learnpath.com/express-requests",
              },
              {
                id: "express-4",
                subtopic: "Error Handling in Express",
                url: "https://learnpath.com/express-errors",
              },
            ],
          },
        ],
      },
      {
        id: "database",
        title: "Database Management",
        topics: [
          {
            topic: "SQL and Relational Databases",
            rating: 4.6,
            prerequisites: [],
            industry_demand: 5,
            difficulty: 2,
            subtopics: [
              {
                id: "sql-1",
                subtopic: "Introduction to SQL",
                url: "https://learnpath.com/sql-intro",
              },
              {
                id: "sql-2",
                subtopic: "CRUD Operations",
                url: "https://learnpath.com/sql-crud",
              },
              {
                id: "sql-3",
                subtopic: "Joins and Relationships",
                url: "https://learnpath.com/sql-joins",
              },
              {
                id: "sql-4",
                subtopic: "Indexes and Transactions",
                url: "https://learnpath.com/sql-indexes",
              },
            ],
          },
          {
            topic: "NoSQL Databases (MongoDB)",
            rating: 4.7,
            prerequisites: [],
            industry_demand: 5,
            difficulty: 2,
            subtopics: [
              {
                id: "mongo-1",
                subtopic: "MongoDB Basics",
                url: "https://learnpath.com/mongodb-basics",
              },
              {
                id: "mongo-2",
                subtopic: "CRUD in MongoDB",
                url: "https://learnpath.com/mongodb-crud",
              },
              {
                id: "mongo-3",
                subtopic: "Schema Design and Validation",
                url: "https://learnpath.com/mongodb-schema",
              },
              {
                id: "mongo-4",
                subtopic: "Aggregation Framework",
                url: "https://learnpath.com/mongodb-aggregation",
              },
            ],
          },
        ],
      },
      {
        id: "advanced-backend",
        title: "Advanced Backend Concepts",
        topics: [
          {
            topic: "Authentication and Authorization",
            rating: 4.8,
            prerequisites: ["Express.js Basics", "Databases"],
            industry_demand: 5,
            difficulty: 3,
            subtopics: [
              {
                id: "auth-1",
                subtopic: "Session vs JWT Authentication",
                url: "https://learnpath.com/auth-jwt",
              },
              {
                id: "auth-2",
                subtopic: "OAuth2 and Social Login",
                url: "https://learnpath.com/auth-oauth",
              },
              {
                id: "auth-3",
                subtopic: "Role-Based Access Control",
                url: "https://learnpath.com/auth-rbac",
              },
              {
                id: "auth-4",
                subtopic: "Securing APIs",
                url: "https://learnpath.com/auth-secure-api",
              },
            ],
          },
          {
            topic: "API Design and Documentation",
            rating: 4.6,
            prerequisites: ["Express.js Basics"],
            industry_demand: 5,
            difficulty: 2,
            subtopics: [
              {
                id: "api-1",
                subtopic: "RESTful API Principles",
                url: "https://learnpath.com/rest-api",
              },
              {
                id: "api-2",
                subtopic: "OpenAPI & Swagger",
                url: "https://learnpath.com/swagger",
              },
              {
                id: "api-3",
                subtopic: "Versioning and Best Practices",
                url: "https://learnpath.com/api-versioning",
              },
              {
                id: "api-4",
                subtopic: "Rate Limiting and Throttling",
                url: "https://learnpath.com/api-throttling",
              },
            ],
          },
        ],
      },
      {
        id: "deployment-devops",
        title: "Deployment & DevOps Basics",
        topics: [
          {
            topic: "Deployment and Hosting",
            rating: 4.5,
            prerequisites: ["Node.js Basics"],
            industry_demand: 4,
            difficulty: 2,
            subtopics: [
              {
                id: "deploy-1",
                subtopic: "Using PM2 and Nginx",
                url: "https://learnpath.com/pm2-nginx",
              },
              {
                id: "deploy-2",
                subtopic: "Docker for Developers",
                url: "https://learnpath.com/docker-basics",
              },
              {
                id: "deploy-3",
                subtopic: "Deploying to Platforms (Render, Vercel)",
                url: "https://learnpath.com/render-vercel",
              },
              {
                id: "deploy-4",
                subtopic: "CI/CD with GitHub Actions",
                url: "https://learnpath.com/github-actions",
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
                id: "html-html-basics-structure",
                subtopic: "HTML Basics and Structure",
                url: "https://learnpath.com/html-basics",
              },
              {
                id: "html-html5-semantics",
                subtopic: "HTML5 Semantic Elements",
                url: "https://learnpath.com/html5-semantics",
              },
              {
                id: "html-forms-input-validation",
                subtopic: "Forms and Input Validation",
                url: "https://learnpath.com/html-forms-validation",
              },
              {
                id: "html-media-tags",
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
                id: "css-syntax-selectors",
                subtopic: "CSS Syntax and Selectors",
                url: "https://learnpath.com/css-syntax-selectors",
              },
              {
                id: "css-box-model",
                subtopic: "CSS Box Model",
                url: "https://learnpath.com/css-box-model",
              },
              {
                id: "css-flexbox-grid",
                subtopic: "CSS Flexbox & Grid",
                url: "https://learnpath.com/css-flexbox-grid",
              },
              {
                id: "css-media-queries",
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
                id: "css-animations-transitions",
                subtopic: "CSS Animations and Transitions",
                url: "https://learnpath.com/css-animations",
              },
              {
                id: "css-preprocessors",
                subtopic: "CSS Preprocessors (SASS/SCSS)",
                url: "https://learnpath.com/css-preprocessors",
              },
              {
                id: "css-grid-layouts",
                subtopic: "CSS Grid and Advanced Layouts",
                url: "https://learnpath.com/css-grid-layouts",
              },
              {
                id: "css-variables",
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
                id: "js-syntax-variables",
                subtopic: "JavaScript Syntax and Variables",
                url: "https://learnpath.com/js-syntax-variables",
              },
              {
                id: "js-data-types",
                subtopic: "Data Types and Operators",
                url: "https://learnpath.com/js-data-types",
              },
              {
                id: "js-control-flow",
                subtopic: "Control Flow and Loops",
                url: "https://learnpath.com/js-control-flow",
              },
              {
                id: "js-dom-basics",
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
                id: "js-async-await",
                subtopic: "Asynchronous JavaScript (Promises, Async/Await)",
                url: "https://learnpath.com/js-async-await",
              },
              {
                id: "js-closures",
                subtopic: "JavaScript Closures and Scope",
                url: "https://learnpath.com/js-closures",
              },
              {
                id: "js-prototype",
                subtopic: "Prototype and Inheritance",
                url: "https://learnpath.com/js-prototype",
              },
              {
                id: "js-error-handling",
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
                id: "js-dom-traversal",
                subtopic: "DOM Traversal and Manipulation",
                url: "https://learnpath.com/dom-traversal",
              },
              {
                id: "js-event-handling",
                subtopic: "Event Handling and Delegation",
                url: "https://learnpath.com/event-handling",
              },
              {
                id: "js-form-validation",
                subtopic: "Form Validation with JavaScript",
                url: "https://learnpath.com/form-validation-js",
              },
              {
                id: "js-storage",
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
                id: "react-jsx",
                subtopic: "React Basics and JSX",
                url: "https://learnpath.com/react-jsx",
              },
              {
                id: "react-components",
                subtopic: "Components and Props",
                url: "https://learnpath.com/react-components",
              },
              {
                id: "react-usestate",
                subtopic: "State Management with useState",
                url: "https://learnpath.com/react-usestate",
              },
              {
                id: "react-events",
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
                id: "react-lifecycle",
                subtopic: "Component Lifecycle Methods",
                url: "https://learnpath.com/react-lifecycle",
              },
              {
                id: "react-useeffect",
                subtopic: "Using useEffect and Cleanup",
                url: "https://learnpath.com/react-useeffect",
              },
              {
                id: "react-custom-hooks",
                subtopic: "Custom Hooks and Reusability",
                url: "https://learnpath.com/react-custom-hooks",
              },
              {
                id: "react-context-api",
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
                id: "react-router",
                subtopic: "React Router and SPA",
                url: "https://learnpath.com/react-router",
              },
              {
                id: "react-hoc",
                subtopic: "Higher Order Components (HOC)",
                url: "https://learnpath.com/react-hoc",
              },
              {
                id: "react-redux",
                subtopic: "Redux for State Management",
                url: "https://learnpath.com/react-redux",
              },
              {
                id: "react-memo",
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
                id: "ts-vs-js",
                subtopic: "TypeScript vs JavaScript",
                url: "https://learnpath.com/ts-vs-js",
              },
              {
                id: "ts-setup",
                subtopic: "Setting Up TypeScript Project",
                url: "https://learnpath.com/ts-setup",
              },
              {
                id: "ts-basic-types",
                subtopic: "Basic Types and Interfaces",
                url: "https://learnpath.com/ts-basic-types",
              },
              {
                id: "ts-inference",
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
                id: "ts-generics",
                subtopic: "Generics and Utility Types",
                url: "https://learnpath.com/ts-generics",
              },
              {
                id: "ts-decorators",
                subtopic: "Decorators and Metadata",
                url: "https://learnpath.com/ts-decorators",
              },
              {
                id: "ts-type-guards",
                subtopic: "Type Guards and Type Narrowing",
                url: "https://learnpath.com/ts-type-guards",
              },
              {
                id: "ts-modules",
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
                id: "nextjs-setup",
                subtopic: "Next.js Project Setup",
                url: "https://learnpath.com/nextjs-setup",
              },
              {
                id: "nextjs-routing",
                subtopic: "Pages and Routing in Next.js",
                url: "https://learnpath.com/nextjs-routing",
              },
              {
                id: "nextjs-rendering",
                subtopic: "Static and Server-Side Rendering",
                url: "https://learnpath.com/nextjs-rendering",
              },
              {
                id: "nextjs-api-routes",
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
                id: "nextjs-auth",
                subtopic: "Authentication with NextAuth",
                url: "https://learnpath.com/nextjs-auth",
              },
              {
                id: "nextjs-middleware",
                subtopic: "Middleware and Custom API Handlers",
                url: "https://learnpath.com/nextjs-middleware",
              },
              {
                id: "nextjs-isr",
                subtopic: "Incremental Static Regeneration (ISR)",
                url: "https://learnpath.com/nextjs-isr",
              },
              {
                id: "nextjs-optimization",
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
            id: "intro-to-ml",
            topic: "Introduction to Machine Learning",
            rating: 4.6,
            difficulty: 1,
            industry_demand: 5,
            prerequisites: [],
            subtopics: [
              {
                id: "what-is-ml",
                subtopic: "What is Machine Learning?",
                url: "https://learnpath.com/ml-intro",
              },
              {
                id: "types-of-ml",
                subtopic: "Types of Machine Learning",
                url: "https://learnpath.com/ml-types",
              },
              {
                id: "supervised-vs-unsupervised",
                subtopic: "Supervised vs Unsupervised Learning",
                url: "https://learnpath.com/ml-supervised-unsupervised",
              },
              {
                id: "ml-applications",
                subtopic: "Applications of Machine Learning",
                url: "https://learnpath.com/ml-applications",
              },
            ],
          },
          {
            id: "math-for-ml",
            topic: "Mathematics for Machine Learning",
            rating: 4.5,
            difficulty: 3,
            industry_demand: 4,
            prerequisites: ["Introduction to Machine Learning"],
            subtopics: [
              {
                id: "linear-algebra-basics",
                subtopic: "Linear Algebra Basics",
                url: "https://learnpath.com/ml-linear-algebra",
              },
              {
                id: "probability-stats",
                subtopic: "Probability and Statistics",
                url: "https://learnpath.com/ml-probability-stats",
              },
              {
                id: "calculus-optimization",
                subtopic: "Calculus for Optimization",
                url: "https://learnpath.com/ml-calculus",
              },
              {
                id: "gradient-descent",
                subtopic: "Gradient Descent and Loss Functions",
                url: "https://learnpath.com/ml-gradient-descent",
              },
            ],
          },
          {
            id: "data-preprocessing",
            topic: "Data Preprocessing and Feature Engineering",
            rating: 4.7,
            difficulty: 2,
            industry_demand: 5,
            prerequisites: ["Mathematics for Machine Learning"],
            subtopics: [
              {
                id: "data-cleaning",
                subtopic: "Data Cleaning and Imputation",
                url: "https://learnpath.com/ml-data-cleaning",
              },
              {
                id: "feature-handling",
                subtopic: "Handling Categorical and Numerical Features",
                url: "https://learnpath.com/ml-feature-handling",
              },
              {
                id: "feature-scaling",
                subtopic: "Feature Scaling and Normalization",
                url: "https://learnpath.com/ml-feature-scaling",
              },
              {
                id: "feature-selection",
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
            id: "linear-regression",
            topic: "Linear Regression",
            rating: 4.6,
            difficulty: 2,
            industry_demand: 5,
            prerequisites: ["Data Preprocessing and Feature Engineering"],
            subtopics: [
              {
                id: "simple-linear-regression",
                subtopic: "Simple Linear Regression",
                url: "https://learnpath.com/ml-linear-regression",
              },
              {
                id: "multiple-linear-regression",
                subtopic: "Multiple Linear Regression",
                url: "https://learnpath.com/ml-multiple-regression",
              },
              {
                id: "polynomial-regression",
                subtopic: "Polynomial Regression",
                url: "https://learnpath.com/ml-polynomial-regression",
              },
              {
                id: "regression-evaluation",
                subtopic: "Evaluating Regression Models",
                url: "https://learnpath.com/ml-regression-evaluation",
              },
            ],
          },
          {
            id: "classification-algorithms",
            topic: "Classification Algorithms",
            rating: 4.7,
            difficulty: 3,
            industry_demand: 5,
            prerequisites: ["Data Preprocessing and Feature Engineering"],
            subtopics: [
              {
                id: "logistic-regression",
                subtopic: "Logistic Regression",
                url: "https://learnpath.com/ml-logistic-regression",
              },
              {
                id: "decision-trees",
                subtopic: "Decision Trees and Random Forest",
                url: "https://learnpath.com/ml-decision-trees",
              },
              {
                id: "svm",
                subtopic: "Support Vector Machines (SVM)",
                url: "https://learnpath.com/ml-svm",
              },
              {
                id: "knn",
                subtopic: "K-Nearest Neighbors (KNN)",
                url: "https://learnpath.com/ml-knn",
              },
            ],
          },
          {
            id: "model-evaluation",
            topic: "Model Evaluation and Metrics",
            rating: 4.6,
            difficulty: 3,
            industry_demand: 4,
            prerequisites: ["Linear Regression", "Classification Algorithms"],
            subtopics: [
              {
                id: "confusion-matrix",
                subtopic: "Confusion Matrix and Classification Report",
                url: "https://learnpath.com/ml-confusion-matrix",
              },
              {
                id: "roc-auc",
                subtopic: "ROC Curve and AUC",
                url: "https://learnpath.com/ml-roc-auc",
              },
              {
                id: "cross-validation",
                subtopic: "Cross-Validation Techniques",
                url: "https://learnpath.com/ml-cross-validation",
              },
              {
                id: "hyperparameter-tuning",
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
            id: "clustering-algorithms",
            topic: "Clustering Algorithms",
            rating: 4.5,
            difficulty: 3,
            industry_demand: 4,
            prerequisites: ["Data Preprocessing and Feature Engineering"],
            subtopics: [
              {
                id: "kmeans",
                subtopic: "K-Means Clustering",
                url: "https://learnpath.com/ml-kmeans",
              },
              {
                id: "hierarchical-clustering",
                subtopic: "Hierarchical Clustering",
                url: "https://learnpath.com/ml-hierarchical",
              },
              {
                id: "dbscan",
                subtopic: "DBSCAN Clustering",
                url: "https://learnpath.com/ml-dbscan",
              },
              {
                id: "cluster-evaluation",
                subtopic: "Evaluating Clustering Models",
                url: "https://learnpath.com/ml-cluster-evaluation",
              },
            ],
          },
          {
            id: "dimensionality-reduction",
            topic: "Dimensionality Reduction",
            rating: 4.6,
            difficulty: 3,
            industry_demand: 4,
            prerequisites: ["Mathematics for Machine Learning"],
            subtopics: [
              {
                id: "pca",
                subtopic: "Principal Component Analysis (PCA)",
                url: "https://learnpath.com/ml-pca",
              },
              {
                id: "tsne",
                subtopic: "t-Distributed Stochastic Neighbor Embedding (t-SNE)",
                url: "https://learnpath.com/ml-tsne",
              },
              {
                id: "autoencoders",
                subtopic: "Autoencoders for Dimensionality Reduction",
                url: "https://learnpath.com/ml-autoencoders",
              },
              {
                id: "feature-extraction",
                subtopic: "Feature Extraction and Selection Techniques",
                url: "https://learnpath.com/ml-feature-extraction",
              },
            ],
          },
          {
            id: "anomaly-detection",
            topic: "Anomaly Detection",
            rating: 4.5,
            difficulty: 4,
            industry_demand: 4,
            prerequisites: ["Clustering Algorithms"],
            subtopics: [
              {
                id: "isolation-forest",
                subtopic: "Isolation Forests",
                url: "https://learnpath.com/ml-isolation-forest",
              },
              {
                id: "one-class-svm",
                subtopic: "One-Class SVM",
                url: "https://learnpath.com/ml-one-class-svm",
              },
              {
                id: "autoencoder-anomaly",
                subtopic: "Autoencoder-based Anomaly Detection",
                url: "https://learnpath.com/ml-autoencoder-anomaly",
              },
              {
                id: "anomaly-applications",
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
            id: "intro-neural-networks",
            topic: "Introduction to Neural Networks",
            rating: 4.7,
            difficulty: 3,
            industry_demand: 5,
            prerequisites: ["Mathematics for Machine Learning"],
            subtopics: [
              {
                id: "perceptron-mlp",
                subtopic: "Perceptron and Multilayer Perceptron (MLP)",
                url: "https://learnpath.com/ml-perceptron",
              },
              {
                id: "activation-functions",
                subtopic: "Activation Functions and Forward Propagation",
                url: "https://learnpath.com/ml-activation-functions",
              },
              {
                id: "backpropagation",
                subtopic: "Backpropagation and Optimization",
                url: "https://learnpath.com/ml-backpropagation",
              },
              {
                id: "loss-regularization",
                subtopic: "Loss Functions and Regularization",
                url: "https://learnpath.com/ml-loss-functions",
              },
            ],
          },
          {
            id: "cnn",
            topic: "Convolutional Neural Networks (CNNs)",
            rating: 4.8,
            difficulty: 4,
            industry_demand: 5,
            prerequisites: ["Introduction to Neural Networks"],
            subtopics: [
              {
                id: "conv-pooling",
                subtopic: "Convolution and Pooling Layers",
                url: "https://learnpath.com/ml-convolution-pooling",
              },
              {
                id: "cnn-architectures",
                subtopic: "CNN Architectures (LeNet, AlexNet, etc.)",
                url: "https://learnpath.com/ml-cnn-architectures",
              },
              {
                id: "transfer-learning",
                subtopic: "Transfer Learning and Fine-Tuning",
                url: "https://learnpath.com/ml-transfer-learning",
              },
              {
                id: "object-detection",
                subtopic: "Object Detection and Segmentation",
                url: "https://learnpath.com/ml-object-detection",
              },
            ],
          },
          {
            id: "rnn-lstm",
            topic: "Recurrent Neural Networks (RNNs) and LSTM",
            rating: 4.7,
            difficulty: 4,
            industry_demand: 5,
            prerequisites: ["Introduction to Neural Networks"],
            subtopics: [
              {
                id: "rnn-basics",
                subtopic: "Recurrent Neural Networks (RNNs) Basics",
                url: "https://learnpath.com/ml-rnn-basics",
              },
              {
                id: "lstm",
                subtopic: "Long Short-Term Memory (LSTM)",
                url: "https://learnpath.com/ml-lstm",
              },
              {
                id: "gru",
                subtopic: "Gated Recurrent Units (GRU)",
                url: "https://learnpath.com/ml-gru",
              },
              {
                id: "sequence-modeling",
                subtopic: "Sequence Modeling Applications",
                url: "https://learnpath.com/ml-sequence-modeling",
              },
            ],
          },
          {
            id: "transformers",
            topic: "Attention Mechanisms and Transformers",
            rating: 4.9,
            difficulty: 4,
            industry_demand: 5,
            prerequisites: ["Recurrent Neural Networks (RNNs) and LSTM"],
            subtopics: [
              {
                id: "self-attention",
                subtopic: "Self-Attention and Multi-Head Attention",
                url: "https://learnpath.com/ml-self-attention",
              },
              {
                id: "transformer-arch",
                subtopic: "Transformer Architecture",
                url: "https://learnpath.com/ml-transformer",
              },
              {
                id: "bert-gpt",
                subtopic: "BERT and GPT Models",
                url: "https://learnpath.com/ml-bert-gpt",
              },
              {
                id: "transformer-apps",
                subtopic: "Applications of Transformers",
                url: "https://learnpath.com/ml-transformer-applications",
              },
            ],
          },
          {
            id: "dl-hyperparameter-tuning",
            topic: "Hyperparameter Tuning in Deep Learning",
            rating: 4.6,
            difficulty: 3,
            industry_demand: 4,
            prerequisites: ["Introduction to Neural Networks"],
            subtopics: [
              {
                id: "dl-grid-search",
                subtopic: "Grid Search and Random Search",
                url: "https://learnpath.com/ml-grid-search",
              },
              {
                id: "bayesian-optimization",
                subtopic: "Bayesian Optimization",
                url: "https://learnpath.com/ml-bayesian-optimization",
              },
              {
                id: "early-stopping",
                subtopic: "Early Stopping and Regularization Techniques",
                url: "https://learnpath.com/ml-early-stopping",
              },
              {
                id: "tuning-cnn-rnn",
                subtopic: "Tuning CNN and RNN Architectures",
                url: "https://learnpath.com/ml-tuning-cnn-rnn",
              },
            ],
          },
          {
            id: "deployment-dl",
            topic: "Deployment and Optimization of DL Models",
            rating: 4.5,
            difficulty: 3,
            industry_demand: 5,
            prerequisites: ["Introduction to Neural Networks"],
            subtopics: [
              {
                id: "deployment-flask-django",
                subtopic: "Model Deployment with Flask/Django",
                url: "https://learnpath.com/ml-model-deployment",
              },
              {
                id: "model-compression",
                subtopic: "Model Compression and Quantization",
                url: "https://learnpath.com/ml-model-compression",
              },
              {
                id: "onnx-tensorrt",
                subtopic: "ONNX and TensorRT for Optimization",
                url: "https://learnpath.com/ml-onnx-tensorrt",
              },
              {
                id: "model-monitoring",
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
