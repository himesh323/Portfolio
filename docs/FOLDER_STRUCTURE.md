# Project Directory Structure

```
portfolio/
├── client/                          # React Frontend (Vite + TypeScript)
│   ├── public/                      # Static assets & SEO files
│   ├── src/
│   │   ├── components/              # UI components grouped by feature
│   │   │   ├── admin/               # Admin dashboard & login components
│   │   │   ├── effects/             # Particle background & magnetic animations
│   │   │   ├── layout/              # Navbar, Footer, ScrollProgress, BackToTop
│   │   │   ├── sections/            # Hero, About, Skills, Projects, Journey, Certs, Achievements, Contact
│   │   │   └── ui/                  # Reusable UI primitives (SectionHeading, TypeWriter, AnimatedCounter)
│   │   ├── context/                 # React Context (Theme, Auth)
│   │   ├── data/                    # Preserved portfolio data
│   │   ├── hooks/                   # Custom hooks (useIntersection, useMediaQuery)
│   │   ├── lib/                     # Axios API client, utility functions
│   │   ├── pages/                   # Home, Admin, NotFound pages
│   │   ├── types/                   # TypeScript re-exports
│   │   ├── App.tsx                  # App root with routing and providers
│   │   ├── index.css                # Global CSS & Tailwind design tokens
│   │   └── main.tsx                 # React entry point
│   ├── index.html                   # HTML shell with SEO meta tags
│   ├── tailwind.config.ts           # Tailwind configuration
│   └── vite.config.ts               # Vite configuration
│
├── server/                          # Express Backend (Node.js + TypeScript)
│   ├── src/
│   │   ├── config/                  # DB connection & environment config
│   │   ├── controllers/             # Request handlers (auth, project, skill, cert, message, blog, analytics, upload)
│   │   ├── middleware/              # Auth, Rate Limiter, Error Handler, Zod validator
│   │   ├── models/                  # Mongoose schemas (User, Project, Skill, Certificate, Message, Blog, Visitor)
│   │   ├── routes/                  # API routes
│   │   ├── services/                # Email & Cloudinary services
│   │   ├── utils/                   # Logger helper
│   │   ├── app.ts                   # Express app setup
│   │   └── index.ts                 # Server entry point
│   └── .env.example                 # Example environment configuration
│
├── shared/                          # Shared TypeScript types for client & server
│   └── types.ts
│
├── docker/                          # Containerization configuration
│   ├── Dockerfile.client
│   ├── Dockerfile.server
│   └── docker-compose.yml
│
├── scripts/                         # Seeder script
│   └── seed.ts
│
├── docs/                            # Documentation
├── package.json                     # Root workspace configuration
└── README.md                        # Master documentation
```
