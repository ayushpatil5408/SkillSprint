/**
 * SkillSprint — Modern Outcome-Based Career Learning Prototype
 * Brand Line: Learn. Build. Prove.
 * 
 * PROTOTYPE DEMO NOTICE:
 * All user identities, mentor personas, assessment scores, rubric reviews,
 * verification seals, and credential links in this application are simulated
 * sample data for platform demonstration purposes only.
 */

// ============================================================================
// Default Sample Data & State Definitions (All Simulated Sample Data)
// ============================================================================

const DEFAULT_SPRINTS = [
  {
    id: 'sprint-fullstack',
    title: 'Full-Stack SaaS Engineering with Node, Postgres & React',
    category: 'web',
    categoryLabel: 'Web Development',
    duration: '5 Weeks',
    level: 'Intermediate',
    price: '₹1,499 (Sample Demo Fee)',
    enrolledCount: 148,
    rating: '4.9/5 (Demo Rating)',
    summary: 'Master production web architecture by building a multi-tenant collaboration engine with role-based auth, SQL migrations, and real-time events.',
    project: {
      title: 'TaskFlow: Multi-Tenant Team Workspace Platform',
      deliverables: 'PostgreSQL normalized DB schema, REST API with JWT/refresh tokens, Jest automated test suite, React responsive client dashboard.',
      proofOutputs: ['GitHub Repository', 'Live Staging Deployment', 'OpenAPI 3.0 Documentation', 'Mentor Rubric Assessment']
    },
    outcomes: [
      'Architect relational database schemas with foreign keys, indexes & transactional integrity.',
      'Implement enterprise JWT authentication with HTTP-only refresh tokens and role-based access control (RBAC).',
      'Design clean RESTful APIs adhering to RFC-7807 problem details and cursor pagination.',
      'Write end-to-end integration tests using Jest and Supertest with >80% coverage.',
      'Deploy containerized applications with Docker and automated GitHub Actions CI pipelines.'
    ],
    syllabus: [
      {
        week: 'Week 1',
        title: 'Foundation & Relational Schema Modeling',
        summary: 'Entity Relationship Diagrams, PostgreSQL constraints, and Knex/Prisma migration pipelines.',
        status: 'completed'
      },
      {
        week: 'Week 2',
        title: 'Backend API Engine & Protected Auth',
        summary: 'Express middleware, bcrypt hashing, JWT access/refresh token rotation, and workspace scoping.',
        status: 'active'
      },
      {
        week: 'Week 3',
        title: 'Frontend State & Real-time Integration',
        summary: 'React query state management, optimistic UI updates, and WebSocket notification channels.',
        status: 'upcoming'
      },
      {
        week: 'Week 4',
        title: 'Testing, Hardening & Security Audit',
        summary: 'Rate limiting, SQL injection defense, CORS configuration, and Supertest suite.',
        status: 'upcoming'
      },
      {
        week: 'Week 5',
        title: 'Deployment, Capstone Milestone & SkillProof',
        summary: 'Docker containers, Render/Fly.io deployment, mentor rubric review, and portfolio proof artifact generation.',
        status: 'upcoming'
      }
    ],
    mentor: {
      name: 'Priya Sharma',
      role: 'Staff Software Engineer (Simulated Mentor Role • Ex-Razorpay)',
      avatar: 'PS',
      bio: 'Simulated industry mentor persona for demonstration purposes. Over 8 years scaling distributed systems.'
    }
  },
  {
    id: 'sprint-ai',
    title: 'Applied AI & LLM Systems: RAG, Embeddings & Agents',
    category: 'ai',
    categoryLabel: 'AI & Data Science',
    duration: '4 Weeks',
    level: 'Intermediate',
    price: '₹1,499 (Sample Demo Fee)',
    enrolledCount: 215,
    rating: '4.95/5 (Demo Rating)',
    summary: 'Build production-ready Retrieval Augmented Generation (RAG) applications with vector databases, semantic re-ranking, and structured function calling.',
    project: {
      title: 'DocuSense: Intelligent Legal & Technical Research Assistant',
      deliverables: 'Vector indexing pipeline, Hybrid lexical + dense search, hallucination evaluation harness, and streaming UI.',
      proofOutputs: ['Vector Database Index', 'Evaluation Benchmark Report', 'Live Streamlit/Next.js App', 'GitHub Repo']
    },
    outcomes: [
      'Chunk and embed large documents with LangChain/LlamaIndex and OpenAI/Ollama embeddings.',
      'Implement vector similarity search with ChromaDB and Pinecone, tuning top-k and MMR.',
      'Build evaluation harnesses measuring context precision and answer faithfulness.',
      'Implement guardrails and rate-limiting for resilient AI microservices.'
    ],
    syllabus: [
      { week: 'Week 1', title: 'Vector Embeddings & Semantic Search Pipelines', summary: 'Chunking strategies, cosine similarity, and vector store indexing.', status: 'upcoming' },
      { week: 'Week 2', title: 'Advanced RAG, Re-ranking & Context Compression', summary: 'BM25 + vector hybrid search, cross-encoder re-ranking, and prompt caching.', status: 'upcoming' },
      { week: 'Week 3', title: 'Tool Use & Function Calling Agents', summary: 'Dynamic tool dispatch, schema-enforced JSON generation, and error recovery.', status: 'upcoming' },
      { week: 'Week 4', title: 'Evaluation Framework & Capstone Defense', summary: 'Ragas evaluation benchmarks, cost profiling, and portfolio showcase.', status: 'upcoming' }
    ],
    mentor: {
      name: 'Arjun Sen',
      role: 'AI Research Engineer (Simulated Mentor Role • HyperScale AI)',
      avatar: 'AS',
      bio: 'Simulated industry mentor persona. Specialist in low-latency LLM serving and vector retrieval architectures.'
    }
  },
  {
    id: 'sprint-data',
    title: 'Data Analytics & Predictive Retention Modeling',
    category: 'ai',
    categoryLabel: 'AI & Data Science',
    duration: '4 Weeks',
    level: 'Beginner-Friendly',
    price: '₹1,299 (Sample Demo Fee)',
    enrolledCount: 310,
    rating: '4.85/5 (Demo Rating)',
    summary: 'Transform raw product event streams into executive business insights and build a predictive churn model with Python & SQL.',
    project: {
      title: 'SaaS Customer Retention & Churn Prediction Pipeline',
      deliverables: 'Exploratory data analysis Jupyter notebook, SQL cohort retention matrix, Scikit-learn predictive model, and interactive dashboard.',
      proofOutputs: ['Interactive Dashboard', 'Jupyter Analysis Notebook', 'Executive Slide Deck', 'Mentor Review']
    },
    outcomes: [
      'Master advanced SQL queries with CTEs, window functions, and time-series aggregation.',
      'Cleanse and engineer features from noisy real-world product usage event datasets.',
      'Train, validate and interpret churn classification models using logistic regression and Random Forest.',
      'Present findings in high-impact visualization dashboards that drive product decisions.'
    ],
    syllabus: [
      { week: 'Week 1', title: 'Advanced SQL & Data Cleaning Pipelines', summary: 'Window functions, cohort segmentation, and handling missing data.', status: 'upcoming' },
      { week: 'Week 2', title: 'Exploratory Data Analysis & Feature Engineering', summary: 'Feature extraction from user session logs, correlation analysis, and distributions.', status: 'upcoming' },
      { week: 'Week 3', title: 'Supervised Modeling & Classification Metrics', summary: 'ROC-AUC, Precision-Recall tradeoffs, and Scikit-Learn pipelines.', status: 'upcoming' },
      { week: 'Week 4', title: 'Executive Dashboard & Capstone Presentation', summary: 'Streamlit/Metabase visualizations, strategic recommendations, and portfolio validation.', status: 'upcoming' }
    ],
    mentor: {
      name: 'Kavita Nambiar',
      role: 'Senior Analytics Lead (Simulated Mentor Role • Freshworks)',
      avatar: 'KN',
      bio: 'Simulated industry mentor persona. B2B SaaS metrics specialist with focus on practical business data analysis.'
    }
  },
  {
    id: 'sprint-cloud',
    title: 'Cloud Infrastructure, Docker & Automated CI/CD with AWS',
    category: 'cloud',
    categoryLabel: 'Cloud & Systems',
    duration: '5 Weeks',
    level: 'Advanced',
    price: '₹1,699 (Sample Demo Fee)',
    enrolledCount: 96,
    rating: '4.92/5 (Demo Rating)',
    summary: 'Containerize multi-service applications, write Infrastructure-as-Code with Terraform, and configure resilient GitHub Actions deployment pipelines.',
    project: {
      title: 'Resilient Microservices Infrastructure with Auto-Scaling & Metrics',
      deliverables: 'Multi-stage Dockerfiles, Terraform scripts for VPC & ECS, GitHub Actions workflow, Prometheus/Grafana monitoring dashboard.',
      proofOutputs: ['Terraform Repository', 'Live Cloud Health Dashboard', 'CI/CD Pipeline Run Evidence', 'Mentor Code Audit']
    },
    outcomes: [
      'Write optimized multi-stage Dockerfiles with minimal attack surfaces.',
      'Provision VPCs, security groups, and container clusters using Terraform HCL.',
      'Configure zero-downtime rolling updates with GitHub Actions.',
      'Implement centralized logging and real-time latency dashboards.'
    ],
    syllabus: [
      { week: 'Week 1', title: 'Docker Deep-Dive & Multi-Stage Image Optimization', summary: 'Alpine images, non-root users, layer caching, and docker-compose.', status: 'upcoming' },
      { week: 'Week 2', title: 'Terraform IaC Fundamentals & Cloud Provisioning', summary: 'HCL syntax, state management, modular VPCs, and IAM policies.', status: 'upcoming' },
      { week: 'Week 3', title: 'ECS & Kubernetes Orchestration', summary: 'Container task definitions, load balancers, and health check routing.', status: 'upcoming' },
      { week: 'Week 4', title: 'Automated GitHub Actions CI/CD Pipelines', summary: 'Secret scanning, unit test checks, Docker registry push, and automated deployment.', status: 'upcoming' },
      { week: 'Week 5', title: 'Observability & Portfolio Capstone', summary: 'Prometheus metrics, alerts, portfolio artifact verification, and live demo audit.', status: 'upcoming' }
    ],
    mentor: {
      name: 'Rohan Mehra',
      role: 'Lead DevOps Engineer (Simulated Mentor Role • Swiggy)',
      avatar: 'RM',
      bio: 'Simulated industry mentor persona. Infrastructure architect focused on automated pipelines.'
    }
  }
];

const DEFAULT_LESSONS = {
  'sprint-fullstack': [
    {
      id: 'lesson-fs-1',
      moduleTitle: 'Module 1: Relational Architecture',
      title: 'Designing Normalized Relational Schemas & Foreign Keys',
      readTime: '15 min read + 30 min exercise',
      content: `
        <p>In this milestone, you will design the relational database schema for <strong>TaskFlow</strong>. Rather than storing unvalidated JSON objects, real-world multi-tenant platforms depend on strict relational integrity to guarantee data boundaries between organizations.</p>
        
        <h3>Multi-Tenant Data Modeling Pattern</h3>
        <p>A workspace represents a tenant. Every major entity (Projects, Tasks, Comments, AuditLogs) must link back to an <code>organization_id</code>. This guarantees row-level segregation and prevents accidental cross-tenant data leaks.</p>

        <div class="code-snippet-box">
-- Multi-Tenant Workspace &amp; Membership Schema
CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(120) NOT NULL,
    slug VARCHAR(60) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE organization_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(20) NOT NULL CHECK (role IN ('owner', 'admin', 'member')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(organization_id, user_id)
);
        </div>

        <h3>Key Architectural Considerations</h3>
        <ul>
          <li><strong>Indexes:</strong> Create composite indexes on <code>(organization_id, user_id)</code> for ultra-fast permission lookups.</li>
          <li><strong>Foreign Key Cascades:</strong> When a workspace is deleted, decide whether its projects should soft-delete or cascade-delete.</li>
          <li><strong>Migration Scripts:</strong> Write rollback methods (<code>down</code> migrations) so database changes can be safely reverted.</li>
        </ul>
      `,
      checklist: [
        { id: 'chk-schema-1', text: 'Write SQL migration script creating organizations & organization_members tables', done: true },
        { id: 'chk-schema-2', text: 'Add unique composite constraint to prevent duplicate member enrollment', done: true },
        { id: 'chk-schema-3', text: 'Define foreign key relationships with ON DELETE CASCADE behavior', done: false },
        { id: 'chk-schema-4', text: 'Run migration up & rollback down test in local PostgreSQL instance', done: false }
      ]
    },
    {
      id: 'lesson-fs-2',
      moduleTitle: 'Module 2: Backend Architecture',
      title: 'Building Resilient REST APIs with Express & RFC-7807 Errors',
      readTime: '20 min read + 45 min exercise',
      content: `
        <p>A production-ready API must handle failures predictably. Returning inconsistent errors like <code>{ error: "something failed" }</code> confuses client developers and breaks automated clients.</p>
        
        <h3>The RFC-7807 Problem Details Standard</h3>
        <p>In this milestone, you will configure an Express centralized error-handling middleware that formats every operational error into standard Problem Details:</p>

        <div class="code-snippet-box">
// middleware/errorHandler.js
export function errorHandler(err, req, res, next) {
  const status = err.statusCode || 500;
  const errorResponse = {
    type: err.type || 'https://api.taskflow.dev/errors/internal-server-error',
    title: err.title || 'Internal Server Error',
    status: status,
    detail: err.message || 'An unexpected error occurred.',
    instance: req.originalUrl,
    timestamp: new Date().toISOString()
  };

  if (process.env.NODE_ENV !== 'production' && err.stack) {
    errorResponse.stack = err.stack;
  }

  res.status(status).json(errorResponse);
}
        </div>

        <p>Notice how every error response contains the HTTP status code, a human-readable title, an exact machine-readable type URI, and the resource instance path.</p>
      `,
      checklist: [
        { id: 'chk-api-1', text: 'Create custom AppError class extending native JavaScript Error', done: true },
        { id: 'chk-api-2', text: 'Implement centralized RFC-7807 error-handling middleware', done: true },
        { id: 'chk-api-3', text: 'Verify 400 Bad Request, 401 Unauthorized, and 404 Not Found formats', done: true },
        { id: 'chk-api-4', text: 'Add unit tests for error formatting logic using Supertest', done: false }
      ]
    },
    {
      id: 'lesson-fs-3',
      moduleTitle: 'Module 2: Backend Architecture',
      title: 'Protected Endpoints: JWT Authentication & Refresh Rotation',
      readTime: '25 min read + 60 min milestone',
      content: `
        <div class="demo-disclaimer-callout" style="margin-bottom: 1.25rem;">
          <div>📚</div>
          <div>
            <strong>Simulated Learning Curriculum:</strong> This lesson is conceptual courseware for students building the sample "TaskFlow" capstone project. 
            The SkillSprint prototype itself runs locally as a client demo and does NOT implement or require custom JWT authentication or external keys.
          </div>
        </div>

        <p>In this backend curriculum module for your capstone project, you explore the theory and mechanics behind dual-token authentication (Access Token + Refresh Token).</p>
        <ul>
          <li><strong>Access Token:</strong> Short-lived JWT (e.g. 15 minutes) signed with <code>HMAC-SHA256</code> or asymmetric keys. Passed in <code>Authorization: Bearer &lt;token&gt;</code>.</li>
          <li><strong>Refresh Token:</strong> Longer-lived credential, stored in a secure <code>HttpOnly</code>, <code>SameSite=Strict</code> cookie.</li>
        </ul>

        <h3>Token Refresh Architecture (Conceptual Reference)</h3>
        <p>A resilient refresh mechanism requires strict server-side safeguards. Below is a conceptual backend reference illustrating the lifecycle requirements:</p>

        <div class="code-snippet-box">
// [CURRICULUM EXAMPLE ONLY] server/controllers/authController.js
// NOTE: This runs exclusively on your backend Node.js server.
// REFRESH_TOKEN_SECRET is a server-side environment secret (e.g., process.env), NEVER a browser API key.

export async function refreshAccessToken(req, res) {
  const incomingRefreshToken = req.cookies.refreshToken;
  if (!incomingRefreshToken) {
    return res.status(401).json({ title: 'Unauthorized', detail: 'Refresh token missing' });
  }

  try {
    // 1. Verify token cryptographic signature using SERVER-SIDE secret
    const payload = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);

    // 2. ATOMIC SINGLE-USE ROTATION (Production Requirement):
    // In production, token lookup, reuse detection, and rotation MUST execute within
    // a single atomic database transaction:
    // - Check if the hashed token exists in the active whitelist/family.
    // - If already used: flag token reuse breach -> revoke entire token family -> deny access.
    // - If valid: revoke current token and atomically persist new hashed refresh token.
    const rotationResult = await authService.rotateTokenAtomically({
      userId: payload.userId,
      oldTokenPlaintext: incomingRefreshToken
    });

    // 3. Issue fresh short-lived access token and rotated refresh cookie
    res.cookie('refreshToken', rotationResult.newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      path: '/api/auth'
    });

    return res.json({ accessToken: rotationResult.newAccessToken });
  } catch (err) {
    return res.status(403).json({ title: 'Forbidden', detail: 'Invalid or expired token' });
  }
}
        </div>

        <h3>Production Architectural Requirements</h3>
        <ul>
          <li><strong>Server-Side Secret Management:</strong> <code>REFRESH_TOKEN_SECRET</code> is a private environment variable managed strictly on the backend server. It must never be exposed to the client, frontend code, or browser storage.</li>
          <li><strong>Atomic Single-Use Rotation:</strong> Refresh tokens must be single-use. The check-and-replace operation must be atomic in the database to eliminate race conditions.</li>
          <li><strong>Hashed Persistence:</strong> Never store plaintext refresh tokens in your database. Store salted hashes (e.g. SHA-256) so database breaches do not compromise active user sessions.</li>
        </ul>

        <p>Once you design this flow for your capstone project, submit your sample repository link on the right sidebar for mentor rubric review.</p>
      `,
      checklist: [
        { id: 'chk-auth-1', text: 'Implement jwt.sign and jwt.verify helpers with environment secrets', done: true },
        { id: 'chk-auth-2', text: 'Store refresh tokens in HttpOnly secure cookies', done: false },
        { id: 'chk-auth-3', text: 'Add authentication guard middleware for protected project routes', done: false },
        { id: 'chk-auth-4', text: 'Write end-to-end auth test validating 401 when token is expired', done: false }
      ]
    }
  ],
  'sprint-ai': [
    {
      id: 'lesson-ai-1',
      moduleTitle: 'Module 1: Vector Embeddings & Indexing',
      title: 'Document Chunking Strategies & Vector Store Indexing',
      readTime: '20 min read + 40 min exercise',
      content: `
        <p>In this milestone for <strong>DocuSense</strong>, you will build an automated document ingestion pipeline that transforms PDF/markdown documents into high-dimensional vector representations.</p>

        <h3>Chunking Trade-offs</h3>
        <p>Choosing the right chunk size is critical for retrieval quality: chunks that are too small lose context, while chunks that are too large dilute semantic specificity.</p>

        <div class="code-snippet-box">
// ingestion/pipeline.py
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=512,
    chunk_overlap=64,
    separators=["\\n\\n", "\\n", " ", ""]
)

docs = text_splitter.split_documents(raw_documents)
vector_db = Chroma.from_documents(docs, OpenAIEmbeddings(), persist_directory="./chroma_db")
        </div>
      `,
      checklist: [
        { id: 'chk-ai-1', text: 'Implement recursive character chunker with 64-token overlap', done: true },
        { id: 'chk-ai-2', text: 'Configure local ChromaDB vector store with persistence directory', done: true },
        { id: 'chk-ai-3', text: 'Add metadata tags for document source and page number', done: false }
      ]
    },
    {
      id: 'lesson-ai-2',
      moduleTitle: 'Module 2: Advanced RAG Architecture',
      title: 'Hybrid Dense + Lexical Search & Cross-Encoder Re-Ranking',
      readTime: '25 min read + 50 min exercise',
      content: `
        <p>Pure cosine similarity frequently fails when queries contain exact legal codes or technical identifiers. Hybrid retrieval combines BM25 keyword matching with dense embeddings.</p>
      `,
      checklist: [
        { id: 'chk-ai-4', text: 'Implement reciprocal rank fusion (RRF) algorithm', done: false },
        { id: 'chk-ai-5', text: 'Add cross-encoder re-ranking pass for top-5 candidates', done: false }
      ]
    }
  ],
  'sprint-data': [
    {
      id: 'lesson-data-1',
      moduleTitle: 'Module 1: Cohort Analysis',
      title: 'Analyzing Retention with SQL Window Functions',
      readTime: '20 min read + 35 min exercise',
      content: `
        <p>Learn how to calculate rolling 30-day user retention curves from raw application event logs using PostgreSQL window functions and CTEs.</p>
      `,
      checklist: [
        { id: 'chk-dt-1', text: 'Write SQL query grouping users by signup cohort week', done: true },
        { id: 'chk-dt-2', text: 'Compute retention rates across weeks 1, 2, 3, and 4', done: true },
        { id: 'chk-dt-3', text: 'Export dataset to Pandas dataframe for visualization', done: false }
      ]
    }
  ],
  'sprint-cloud': [
    {
      id: 'lesson-cloud-1',
      moduleTitle: 'Module 1: Docker Engineering',
      title: 'Optimizing Multi-Stage Dockerfiles for Production',
      readTime: '20 min read + 40 min exercise',
      content: `
        <p>Reduce production image size by 85% and eliminate security vulnerabilities using multi-stage builds and unprivileged non-root Linux users.</p>
      `,
      checklist: [
        { id: 'chk-cl-1', text: 'Create build and runtime stages in Dockerfile', done: true },
        { id: 'chk-cl-2', text: 'Run process under non-root appuser UID 10001', done: false },
        { id: 'chk-cl-3', text: 'Scan final container image with Trivy for CVEs', done: false }
      ]
    }
  ]
};

const DEFAULT_RUBRIC_EVALUATION = {
  sprintId: 'sprint-fullstack',
  studentName: 'Aarav Patel (Sample Student)',
  mentor: {
    name: 'Priya Sharma',
    title: 'Staff Software Engineer (Simulated Mentor Role • Ex-Razorpay)',
    reviewDate: 'Oct 01, 2026'
  },
  overallScore: 84,
  maxScore: 100,
  status: 'needs_revision', // 'needs_revision' | 'resubmitted' | 'approved'
  statusLabel: 'Action Required: Revisions Requested (Simulated Review)',
  summary: '[SIMULATED PEER/MENTOR REVIEW FOR PROTOTYPE DEMO]\nSolid architectural foundation! The PostgreSQL schema design demonstrates strong relational fundamentals and the RFC-7807 error format is cleanly implemented. However, two security edge-cases need attention before final SkillProof verification: refresh tokens are not hashed before persistence, and workspace deletion needs an explicit confirmation transaction.',
  criteria: [
    {
      name: 'Database Architecture & Schema Design',
      score: 18,
      max: 20,
      badge: 'score-high',
      notes: 'Excellent relational normalization. Clean foreign key constraints with ON DELETE CASCADE on task assignments. Composite indexes are well planned.'
    },
    {
      name: 'API Contract & Error Standardization',
      score: 18,
      max: 20,
      badge: 'score-high',
      notes: 'Clean REST endpoints. Strict adherence to RFC-7807 problem details specification. OpenAPI 3.0 documentation matches API behavior.'
    },
    {
      name: 'Auth Security & Token Lifecycle',
      score: 15,
      max: 20,
      badge: 'score-med',
      notes: 'JWT access token verification is solid. Revision needed: Currently, raw refresh tokens are stored in the database. Please hash them using SHA-256 before saving to protect against DB leaks.'
    },
    {
      name: 'Code Cleanliness & Separation of Concerns',
      score: 17,
      max: 20,
      badge: 'score-high',
      notes: 'Controllers, services, and data access layers are well-separated. Good use of dependency injection and clean async/await patterns.'
    },
    {
      name: 'Edge Case Testing & Automated Coverage',
      score: 16,
      max: 20,
      badge: 'score-med',
      notes: 'Auth happy path is tested with Jest. Missing test coverage for expired refresh token edge cases and invalid workspace slug characters.'
    }
  ],
  requestedRevisions: [
    'Hash refresh tokens with crypto.createHash("sha256") before database insertion.',
    'Add an automated test verifying that an expired access token correctly triggers the refresh flow.',
    'Ensure workspace member removal invalidates active sessions for that specific tenant.'
  ],
  resubmission: null
};

const DEFAULT_AI_PROMPTS = [
  {
    label: 'DB Schema Advice',
    query: 'How should I structure the database schema for multi-tenant workspace members?',
    response: `Great question for TaskFlow! Here is an architectural hint to guide your design rather than handing you boilerplate:
    
1. **Separation of Concerns:** Keep your <code>users</code> table agnostic of any single organization. Users exist globally.
2. **Junction Table:** Create an <code>organization_members</code> table containing:
   - <code>organization_id</code> (Foreign Key referencing organizations)
   - <code>user_id</code> (Foreign Key referencing users)
   - <code>role</code> (e.g. 'owner', 'admin', 'member')
3. **Crucial Constraint:** Add a UNIQUE constraint on <code>(organization_id, user_id)</code> so a user cannot be enrolled twice in the same workspace.

*Hint for your mentor rubric:* Don't forget to index <code>(organization_id, user_id)</code>—this query runs on almost every protected API request!`
  },
  {
    label: 'Debugging JWT 401',
    query: 'Why is my JWT refresh token returning 401 on route refresh?',
    response: `Let's troubleshoot this methodically. A 401 on refresh usually happens because of three common gotchas:

1. **Cookie Parser Configuration:** Is <code>cookie-parser</code> mounted before your authentication routes in your Express app? Without it, <code>req.cookies</code> will be <code>undefined</code>.
2. **CORS Credentials:** On your client request (e.g., Axios or Fetch), did you set <code>credentials: 'include'</code>? Browsers will block HttpOnly cookies from being sent across ports unless credentials are explicitly enabled.
3. **Secret Key Mismatch:** Verify that your server backend verifies the refresh token with <code>process.env.REFRESH_TOKEN_SECRET</code> (a private server-side environment secret, never a client-side API key).

Check your server console logs for: <code>JsonWebTokenError: invalid signature</code>.`
  },
  {
    label: 'Rubric Criteria Check',
    query: 'How will my mentor evaluate edge-case error handling in the rubric?',
    response: `Mentor Priya Sharma looks for **production resilience** rather than just "happy path" code. Here is what your rubric assesses:

- **Predictable Error Structure:** Does every error return standard JSON (preferably RFC-7807 with <code>type</code>, <code>title</code>, <code>status</code>, and <code>detail</code>)?
- **No Uncaught Exceptions:** Are async handlers wrapped with an <code>asyncHandler</code> utility or native Express 5 promise catching?
- **Information Leakage:** In production mode (<code>NODE_ENV=production</code>), does your error middleware strip the internal stack trace so sensitive DB details are hidden?

Address these three points and you'll easily score 18-20/20 in that category!`
  },
  {
    label: 'Ask AI to write whole project',
    query: 'Can you write the complete code for my TaskFlow project?',
    response: `⚠️ **Academic & SkillProof Integrity Notice:**

As your SkillSprint AI Coach, I cannot write complete project assignments or provide full copy-paste repositories for you. 

SkillSprint's core philosophy is **Learn → Practice → Build → Prove**. If the code is generated by AI rather than built and understood by you, your **SkillProof™ verified portfolio** cannot be legitimately certified to hiring managers.

Instead, tell me which specific component or function you're designing (e.g., token signing, database constraints, error middleware) and I will coach you through the logic, provide minimal architectural patterns, and help you debug your own code!`
  }
];

// ============================================================================
// State Management & LocalStorage Handler
// ============================================================================

const STORAGE_KEY = 'skillsprint_prototype_v2';

class Store {
  constructor() {
    this.state = this.loadState();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load state from localStorage:', e);
    }

    return {
      currentView: 'dashboard',
      selectedSprintId: 'sprint-fullstack',
      enrolledSprintIds: ['sprint-fullstack'],
      sprints: DEFAULT_SPRINTS,
      activeLessonId: 'lesson-fs-3',
      lessons: DEFAULT_LESSONS,
      rubricEvaluation: DEFAULT_RUBRIC_EVALUATION,
      portfolioVisibility: 'public',
      chatHistory: [
        {
          sender: 'ai',
          text: 'Hello Aarav! I am your SkillSprint AI Learning Coach (Demo Mode). I guide you with architectural hints, debugging tips, and rubric preparation. How can I help you with your TaskFlow milestone today?'
        }
      ],
      studentProfile: {
        name: 'Aarav Patel (Demo)',
        degree: 'B.E. Computer Engineering (Sample Persona)',
        year: '3rd Year Undergraduate',
        college: 'Pune Institute of Computer Technology (PICT)',
        avatarInitials: 'AP',
        sprintsCompleted: 1,
        skillsVerified: 6,
        hoursInvested: 38
      }
    };
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Failed to save state to localStorage:', e);
    }
  }

  resetState() {
    localStorage.removeItem(STORAGE_KEY);
    this.state = this.loadState();
    this.saveState();
  }

  getEnrolledSprint() {
    const id = this.state.selectedSprintId;
    return this.state.sprints.find(s => s.id === id) || this.state.sprints[0];
  }

  isEnrolled(sprintId) {
    return this.state.enrolledSprintIds.includes(sprintId);
  }

  enrollInSprint(sprintId) {
    if (!this.state.enrolledSprintIds.includes(sprintId)) {
      this.state.enrolledSprintIds.push(sprintId);
    }
    this.state.selectedSprintId = sprintId;
    // Set active lesson for that sprint
    const sprintLessons = this.state.lessons[sprintId];
    if (sprintLessons && sprintLessons.length > 0) {
      this.state.activeLessonId = sprintLessons[0].id;
    }
    this.saveState();
  }

  toggleChecklist(lessonId, itemId) {
    const sprintLessons = this.state.lessons[this.state.selectedSprintId] || [];
    const lesson = sprintLessons.find(l => l.id === lessonId);
    if (lesson) {
      const item = lesson.checklist.find(i => i.id === itemId);
      if (item) {
        item.done = !item.done;
        this.saveState();
      }
    }
  }

  calculateProgress(sprintId) {
    const sprintLessons = this.state.lessons[sprintId] || [];
    let totalItems = 0;
    let completedItems = 0;

    sprintLessons.forEach(lesson => {
      lesson.checklist.forEach(item => {
        totalItems++;
        if (item.done) completedItems++;
      });
    });

    if (totalItems === 0) return 40;
    return Math.min(100, Math.round((completedItems / totalItems) * 75 + 15));
  }

  resubmitProject(notes, githubPrUrl) {
    this.state.rubricEvaluation.status = 'resubmitted';
    this.state.rubricEvaluation.statusLabel = 'Resubmission Under Review (Simulated Turnaround: ~4 hrs)';
    this.state.rubricEvaluation.resubmission = {
      submittedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      notes: notes,
      githubPrUrl: githubPrUrl || 'https://github.com/aaravpatel-dev/taskflow-api/pull/4'
    };
    this.saveState();
  }

  simulateMentorApproval() {
    this.state.rubricEvaluation.status = 'approved';
    this.state.rubricEvaluation.statusLabel = 'Project Approved & Verified (Simulated Distinction)';
    this.state.rubricEvaluation.overallScore = 95;
    this.state.rubricEvaluation.criteria.forEach(c => {
      c.score = c.max;
      c.badge = 'score-high';
    });
    this.state.rubricEvaluation.summary = '[SIMULATED APPROVAL]: Outstanding revisions! Refresh tokens are now securely hashed with SHA-256 before storage, and the test suite passes with 100% assertion coverage. Ready for SkillProof portfolio demonstration.';
    this.saveState();
  }

  setPortfolioVisibility(visibility) {
    this.state.portfolioVisibility = visibility;
    this.saveState();
  }

  addChatMessage(sender, text) {
    this.state.chatHistory.push({ sender, text });
    this.saveState();
  }
}

const store = new Store();

// ============================================================================
// UI Renderers & Views
// ============================================================================

const appMain = document.getElementById('appMain');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalContainer = document.getElementById('modalDialogContainer');
const toastStack = document.getElementById('toastStack');
const aiDrawer = document.getElementById('aiDrawer');
const aiMessagesContainer = document.getElementById('aiMessagesContainer');
const quickPromptsList = document.getElementById('quickPromptsList');
const aiUserInput = document.getElementById('aiUserInput');
const aiInputForm = document.getElementById('aiInputForm');
const mentorActionBadge = document.getElementById('mentorActionBadge');

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;
  toastStack.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 200ms ease';
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

function updateNavBadges() {
  const status = store.state.rubricEvaluation.status;
  if (status === 'needs_revision') {
    mentorActionBadge.textContent = 'Revise (Demo)';
    mentorActionBadge.className = 'nav-badge-pill';
    mentorActionBadge.style.background = 'rgba(240, 180, 66, 0.15)';
    mentorActionBadge.style.color = '#F7CA75';
    mentorActionBadge.style.borderColor = 'rgba(240, 180, 66, 0.35)';
  } else if (status === 'resubmitted') {
    mentorActionBadge.textContent = 'In Review';
    mentorActionBadge.className = 'nav-badge-pill';
    mentorActionBadge.style.background = 'rgba(32, 217, 229, 0.15)';
    mentorActionBadge.style.color = '#72EFF8';
    mentorActionBadge.style.borderColor = 'rgba(32, 217, 229, 0.4)';
  } else {
    mentorActionBadge.textContent = 'Approved ✓';
    mentorActionBadge.className = 'nav-badge-pill';
    mentorActionBadge.style.background = 'rgba(42, 212, 158, 0.15)';
    mentorActionBadge.style.color = '#62EABF';
    mentorActionBadge.style.borderColor = 'rgba(42, 212, 158, 0.4)';
  }
}

// ----------------------------------------------------------------------------
// VIEW 1: Dashboard View
// ----------------------------------------------------------------------------
function renderDashboard() {
  const activeSprint = store.getEnrolledSprint();
  const progressPercent = store.calculateProgress(activeSprint.id);

  return `
    <section class="view-panel dashboard-view">
      <!-- Demo Disclaimer Box -->
      <div class="demo-disclaimer-callout">
        <div>💡</div>
        <div>
          <strong>Live Prototype Demo Mode:</strong> This dashboard presents a sample student journey for <strong>Aarav Patel</strong>.
          All enrolled sprints, milestones, mentor feedback, and verification stamps are simulated mock data to demonstrate the platform flow.
        </div>
      </div>

      <!-- Hero Greeting -->
      <div class="dashboard-hero">
        <div class="hero-header-row">
          <div class="hero-student-meta">
            <span class="hero-welcome-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              SAMPLE STUDENT PERSONA • 3RD YEAR UNDERGRAD
            </span>
            <h1 class="hero-title">Welcome back, Aarav!</h1>
            <p class="hero-subtitle">You are actively building towards your simulated <strong>SkillProof™ Portfolio</strong>. Complete Milestone 2.3 to unlock your simulated mentor feedback.</p>
          </div>
          <div class="hero-action-col">
            <button class="btn btn-primary btn-lg" id="dashContinueBtn" data-nav="workspace">
              <span>Continue Active Sprint</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="dashboard-metrics-grid">
        <div class="metric-card">
          <div class="metric-icon-box" style="background: rgba(32, 217, 229, 0.1); color: #20D9E5;">🎯</div>
          <div class="metric-info">
            <span class="metric-value">Week 2 of 5</span>
            <span class="metric-label">Active Sprint Timeline</span>
          </div>
        </div>
        <div class="metric-card">
          <div class="metric-icon-box" style="background: rgba(42, 212, 158, 0.1); color: #2AD49E;">⚡</div>
          <div class="metric-info">
            <span class="metric-value" id="dashMetricProgress">${progressPercent}%</span>
            <span class="metric-label">Milestone Completion</span>
          </div>
        </div>
        <div class="metric-card">
          <div class="metric-icon-box" style="background: rgba(240, 180, 66, 0.1); color: #F0B442;">📝</div>
          <div class="metric-info">
            <span class="metric-value">1 Review</span>
            <span class="metric-label">Simulated Feedback Ready</span>
          </div>
        </div>
        <div class="metric-card">
          <div class="metric-icon-box" style="background: rgba(8, 127, 134, 0.2); color: #72EFF8;">🏆</div>
          <div class="metric-info">
            <span class="metric-value">6 Skills</span>
            <span class="metric-label">Demonstrated in SkillProof™</span>
          </div>
        </div>
      </div>

      <!-- Current Sprint Focus & Next Task -->
      <div class="active-sprint-container">
        <div class="active-sprint-main">
          <div>
            <div class="sprint-header-top">
              <div class="sprint-tag-row">
                <span class="badge badge-brand">Active Sprint</span>
                <span class="badge badge-gray">${activeSprint.duration}</span>
                <span class="badge badge-gray">${activeSprint.level}</span>
                <span class="badge badge-amber">Demo Data</span>
              </div>
              <button class="btn btn-outline-brand btn-sm" id="viewCatalogueFromDash" data-nav="catalogue">Browse Other Sprints</button>
            </div>
            <h2 class="active-sprint-title">${activeSprint.title}</h2>
            <p class="active-sprint-desc">${activeSprint.summary}</p>

            <!-- Next Actionable Task Callout -->
            <div class="next-task-banner">
              <div class="next-task-meta">
                <span class="next-task-badge">NEXT ACTIONABLE TASK</span>
                <div class="next-task-name">Milestone 2.3: Protected Endpoints &amp; JWT Refresh Token Rotation</div>
                <div class="next-task-sub">Estimated time: 45 mins • Practical coding milestone with test validation</div>
              </div>
              <button class="btn btn-primary btn-sm" id="nextTaskActionBtn" data-nav="workspace">Resume Task →</button>
            </div>

            <!-- Overall Progress Bar -->
            <div class="progress-container">
              <div class="progress-header">
                <span>Sprint Progress</span>
                <span><strong id="dashProgressLabel">${progressPercent}%</strong> Completed</span>
              </div>
              <div class="progress-bar-bg">
                <div class="progress-bar-fill" id="dashProgressBarFill" style="width: ${progressPercent}%;"></div>
              </div>
            </div>
          </div>

          <!-- Weekly Milestones Roadmap Track -->
          <div class="weekly-milestones-row">
            <div class="weekly-milestones-title">Sprint Roadmap &amp; Checkpoints</div>
            <div class="milestones-track">
              <div class="milestone-step-card completed">
                <div class="step-card-header">
                  <span>WEEK 1</span>
                  <span style="color: #059669;">✓ Completed</span>
                </div>
                <div class="step-card-title">Relational Schema</div>
                <div class="step-card-status">Postgres migrations</div>
              </div>
              <div class="milestone-step-card active">
                <div class="step-card-header">
                  <span>WEEK 2</span>
                  <span style="color: #4f46e5;">● In Progress</span>
                </div>
                <div class="step-card-title">REST &amp; Auth Tokens</div>
                <div class="step-card-status">Milestone 2.3 active</div>
              </div>
              <div class="milestone-step-card">
                <div class="step-card-header">
                  <span>WEEK 3</span>
                  <span>Upcoming</span>
                </div>
                <div class="step-card-title">React &amp; WebSockets</div>
                <div class="step-card-status">Starts next phase</div>
              </div>
              <div class="milestone-step-card">
                <div class="step-card-header">
                  <span>WEEKS 4-5</span>
                  <span>Upcoming</span>
                </div>
                <div class="step-card-title">CI/CD &amp; Defense</div>
                <div class="step-card-status">Portfolio artifact generation</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar: Assigned Mentor & Support -->
        <div class="active-sprint-side">
          <div class="mentor-support-card">
            <div class="mentor-profile-header">
              <div class="mentor-avatar">${activeSprint.mentor.avatar}</div>
              <div class="mentor-info-text">
                <h4>${activeSprint.mentor.name}</h4>
                <p>${activeSprint.mentor.role}</p>
              </div>
            </div>
            <p style="font-size: 0.85rem; color: #475569; margin-bottom: 1.25rem;">
              Simulated mentor persona performing rubric evaluations to demonstrate the review &amp; revision cycle.
            </p>
            <div style="display: flex; flex-direction: column; gap: 0.6rem;">
              <button class="btn btn-secondary btn-sm" id="dashReviewMentorBtn" data-nav="mentor-feedback">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                <span>View Mentor Feedback (${store.state.rubricEvaluation.overallScore}/100)</span>
              </button>
              <button class="btn btn-outline-brand btn-sm" id="dashOpenAiCoachBtn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"></path></svg>
                <span>Ask AI Coach a Question</span>
              </button>
            </div>
          </div>

          <!-- Proof-of-work preview card -->
          <div class="card" style="background: linear-gradient(135deg, #101F25 0%, #0D1619 100%); border-color: rgba(32, 217, 229, 0.3);">
            <div style="font-size: 0.72rem; font-weight: 800; color: #20D9E5; text-transform: uppercase; margin-bottom: 0.35rem; letter-spacing: 0.05em;">Sample Capstone Deliverable</div>
            <h4 style="font-size: 0.95rem; font-weight: 800; margin-bottom: 0.4rem; color: #F2F7F8;">${activeSprint.project.title}</h4>
            <p style="font-size: 0.82rem; color: #9AADB1; margin-bottom: 1rem; line-height: 1.5;">
              Complete weekly milestones to unlock the simulated SkillProof™ portfolio showcase.
            </p>
            <button class="btn btn-secondary btn-sm" data-nav="portfolio" style="width: 100%; justify-content: center;">
              <span>View SkillProof™ Preview</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ----------------------------------------------------------------------------
// VIEW 2: Sprint Catalogue View
// ----------------------------------------------------------------------------
let currentFilterCategory = 'all';

function renderCatalogue() {
  const filtered = currentFilterCategory === 'all'
    ? store.state.sprints
    : store.state.sprints.filter(s => s.category === currentFilterCategory);

  const cardsHtml = filtered.map(sprint => {
    const isEnrolled = store.isEnrolled(sprint.id);
    return `
      <div class="sprint-card" data-sprint-id="${sprint.id}">
        <div class="sprint-card-banner">
          <span class="badge ${sprint.category === 'web' ? 'badge-brand' : sprint.category === 'ai' ? 'badge-purple' : 'badge-blue'}">
            ${sprint.categoryLabel}
          </span>
          <span style="font-size: 0.78rem; font-weight: 700; color: #64748b;">
            ★ ${sprint.rating}
          </span>
        </div>
        <div class="sprint-card-body">
          <div style="display: flex; gap: 0.5rem; margin-bottom: 0.6rem;">
            <span class="badge badge-gray">${sprint.duration}</span>
            <span class="badge badge-gray">${sprint.level}</span>
          </div>
          <h3 class="sprint-card-title">${sprint.title}</h3>
          <p class="sprint-card-desc">${sprint.summary}</p>

          <div class="sprint-project-callout">
            <div class="project-callout-label">Capstone Project Output (Sample)</div>
            <div class="project-callout-name">${sprint.project.title}</div>
          </div>

          <div class="sprint-skills-list">
            ${sprint.project.proofOutputs.map(po => `<span class="skill-tag">✓ ${po}</span>`).join('')}
          </div>

          <div class="sprint-card-footer">
            <div class="sprint-price-col">
              <span class="price-main">${sprint.price}</span>
              <span class="price-meta">Simulated student enrollment</span>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn btn-secondary btn-sm btn-inspect-sprint" data-sprint-id="${sprint.id}">
                Syllabus &amp; Plan
              </button>
              ${isEnrolled ? `
                <button class="btn btn-outline-brand btn-sm btn-enrolled-sprint" data-sprint-id="${sprint.id}">
                  Enrolled ✓
                </button>
              ` : `
                <button class="btn btn-primary btn-sm btn-enroll-trigger" data-sprint-id="${sprint.id}">
                  Enroll (Demo)
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="view-panel catalogue-view">
      <div class="demo-disclaimer-callout info">
        <div>📋</div>
        <div>
          <strong>Sample Sprint Catalogue:</strong> All 4 sample sprints are clickable. Selecting "Syllabus &amp; Plan" opens the detailed weekly roadmap. Enrolling in any sprint updates your active workspace and dashboard.
        </div>
      </div>

      <div class="catalogue-header-section">
        <div class="catalogue-headline">
          <h2>Outcome-Based Learning Sprints</h2>
          <p>Every sprint is 4–6 weeks of structured practice culminating in a practical capstone project and simulated mentor review.</p>
        </div>
        <div class="catalogue-filters-bar">
          <button class="filter-chip ${currentFilterCategory === 'all' ? 'active' : ''}" data-filter="all">All Sprints</button>
          <button class="filter-chip ${currentFilterCategory === 'web' ? 'active' : ''}" data-filter="web">Web Development</button>
          <button class="filter-chip ${currentFilterCategory === 'ai' ? 'active' : ''}" data-filter="ai">AI &amp; Data</button>
          <button class="filter-chip ${currentFilterCategory === 'cloud' ? 'active' : ''}" data-filter="cloud">Cloud &amp; DevOps</button>
        </div>
      </div>

      <div class="sprints-grid">
        ${cardsHtml}
      </div>
    </section>
  `;
}

// ----------------------------------------------------------------------------
// VIEW 3: Sprint Detail View
// ----------------------------------------------------------------------------
function renderSprintDetail(sprintId) {
  const sprint = store.state.sprints.find(s => s.id === sprintId) || store.state.sprints[0];
  const isEnrolled = store.isEnrolled(sprint.id);

  const outcomesHtml = sprint.outcomes.map(item => `
    <li class="outcome-item">
      <div class="outcome-icon">✓</div>
      <div>${item}</div>
    </li>
  `).join('');

  const syllabusHtml = sprint.syllabus.map(week => `
    <div class="syllabus-week-item">
      <div class="week-badge-pill">${week.week}</div>
      <div class="week-title">${week.title}</div>
      <div style="font-size: 0.88rem; color: #475569;">${week.summary}</div>
    </div>
  `).join('');

  return `
    <section class="view-panel detail-view">
      <div class="detail-back-bar">
        <button class="btn btn-secondary btn-sm" id="detailBackToCatalogueBtn" data-nav="catalogue">
          ← Back to Sprint Catalogue
        </button>
      </div>

      <div class="detail-layout-grid">
        <div class="detail-main-content">
          <!-- Main Hero -->
          <div class="detail-hero-card">
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span class="badge badge-brand">${sprint.categoryLabel}</span>
              <span class="badge badge-gray">${sprint.duration}</span>
              <span class="badge badge-gray">${sprint.level}</span>
              <span class="badge badge-amber">Sample Demo Syllabus</span>
            </div>
            <h1 class="detail-title">${sprint.title}</h1>
            <p style="font-size: 1.05rem; color: #475569; line-height: 1.6;">${sprint.summary}</p>
          </div>

          <!-- Learning Outcomes -->
          <div class="detail-outcomes-card">
            <h3 class="section-subhead">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#20D9E5" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              Target Practical Outcomes (What You Will Build)
            </h3>
            <ul class="outcomes-list">
              ${outcomesHtml}
            </ul>
          </div>

          <!-- Capstone Project Preview -->
          <div class="card" style="background: linear-gradient(135deg, #101F25 0%, #0D1619 100%); border-left: 5px solid #20D9E5; border-color: rgba(32, 217, 229, 0.3);">
            <div style="font-size: 0.75rem; font-weight: 800; color: #20D9E5; text-transform: uppercase; margin-bottom: 0.35rem; letter-spacing: 0.05em;">Sample Capstone Deliverable</div>
            <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 0.6rem; color: #F2F7F8;">${sprint.project.title}</h3>
            <p style="font-size: 0.92rem; color: #9AADB1; margin-bottom: 1rem; line-height: 1.6;">
              ${sprint.project.deliverables}
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
              ${sprint.project.proofOutputs.map(po => `<span class="badge badge-gray">📦 ${po}</span>`).join('')}
            </div>
          </div>

          <!-- 4-5 Week Structured Roadmap -->
          <div class="detail-outcomes-card">
            <h3 class="section-subhead">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#20D9E5" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
              Weekly Sprint Roadmap &amp; Milestones
            </h3>
            <div class="syllabus-timeline">
              ${syllabusHtml}
            </div>
          </div>
        </div>

        <!-- Sticky Enrollment Sidebar -->
        <div class="detail-sidebar-col">
          <div class="detail-sidebar-card">
            <div class="sidebar-price-row">
              <span style="font-size: 2rem; font-weight: 800; color: #F2F7F8;">${sprint.price}</span>
              <span style="font-size: 0.85rem; color: #9AADB1;">Simulated enrollment</span>
            </div>

            <div style="padding: 0.85rem; background: var(--color-surface-subtle); border-radius: 8px; border: 1px solid var(--color-border-subtle); font-size: 0.8rem; color: var(--color-text-muted); box-shadow: var(--shadow-inset);">
              <strong style="color: #F2F7F8;">Included in prototype demo:</strong>
              <ul class="sidebar-features-list" style="margin-top: 0.65rem;">
                <li>✓ Simulated 1:1 Industry Mentor Code Review</li>
                <li>✓ AI Coach for interactive debugging &amp; hints</li>
                <li>✓ Simulated SkillProof™ Portfolio Showcase Link</li>
                <li>✓ Interactive task checklist &amp; milestone submission</li>
              </ul>
            </div>

            ${isEnrolled ? `
              <div style="text-align: center;">
                <div style="padding: 0.75rem; background: rgba(42, 212, 158, 0.12); border: 1px solid rgba(42, 212, 158, 0.35); border-radius: 8px; color: #62EABF; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.85rem;">
                  ✓ You are enrolled in this sprint!
                </div>
                <button class="btn btn-primary" style="width: 100%; justify-content: center;" id="detailGoToWorkspaceBtn" data-nav="workspace">
                  Open Learning Workspace →
                </button>
              </div>
            ` : `
              <button class="btn btn-primary btn-lg" style="width: 100%; justify-content: center;" id="detailEnrollTriggerBtn" data-sprint-id="${sprint.id}">
                Enroll in Sprint (Demo)
              </button>
            `}

            <!-- Mentor info widget -->
            <div style="border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
              <div style="font-size: 0.75rem; font-weight: 800; color: var(--color-text-muted); text-transform: uppercase; margin-bottom: 0.75rem; letter-spacing: 0.04em;">Simulated Industry Mentor</div>
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                <div class="mentor-avatar" style="width: 38px; height: 38px; font-size: 0.8rem;">${sprint.mentor.avatar}</div>
                <div>
                  <div style="font-size: 0.9rem; font-weight: 700; color: var(--color-text-main);">${sprint.mentor.name}</div>
                  <div style="font-size: 0.75rem; color: var(--color-text-muted);">${sprint.mentor.role}</div>
                </div>
              </div>
              <p style="font-size: 0.78rem; color: var(--color-text-muted); line-height: 1.45;">${sprint.mentor.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ----------------------------------------------------------------------------
// VIEW 4: Learning Workspace View
// ----------------------------------------------------------------------------
function renderWorkspace() {
  const sprint = store.getEnrolledSprint();
  const lessons = store.state.lessons[sprint.id] || store.state.lessons['sprint-fullstack'] || [];
  const activeLesson = lessons.find(l => l.id === store.state.activeLessonId) || lessons[0];
  const progressPercent = store.calculateProgress(sprint.id);

  const lessonItemsHtml = lessons.map(lesson => {
    const isCurrent = lesson.id === activeLesson.id;
    const completedCount = lesson.checklist.filter(c => c.done).length;
    return `
      <button class="tree-lesson-btn ${isCurrent ? 'active' : ''}" data-lesson-id="${lesson.id}">
        <span>${lesson.title}</span>
        <span class="tree-lesson-counter" data-lesson-id="${lesson.id}" style="font-size: 0.72rem; color: var(--color-text-muted);">${completedCount}/${lesson.checklist.length}</span>
      </button>
    `;
  }).join('');

  const checklistHtml = activeLesson.checklist.map(item => `
    <li class="check-item ${item.done ? 'done' : ''}" id="item-row-${item.id}">
      <input type="checkbox" id="${item.id}" data-lesson-id="${activeLesson.id}" data-item-id="${item.id}" ${item.done ? 'checked' : ''}>
      <label for="${item.id}" style="cursor: pointer; line-height: 1.4;">${item.text}</label>
    </li>
  `).join('');

  return `
    <section class="view-panel workspace-view">
      <div class="workspace-layout">
        <!-- Left: Course Navigation Tree -->
        <aside class="workspace-tree-sidebar">
          <div style="font-size: 0.78rem; font-weight: 800; color: var(--color-brand-primary); text-transform: uppercase; margin-bottom: 0.25rem; letter-spacing: 0.05em;">Active Enrolled Sprint</div>
          <h3 style="font-size: 1rem; font-weight: 800; margin-bottom: 1.25rem; line-height: 1.3;">${sprint.title}</h3>

          <div class="tree-module-group">
            <div class="tree-module-title">${activeLesson.moduleTitle}</div>
            <div id="treeLessonButtonsContainer">
              ${lessonItemsHtml}
            </div>
          </div>

          <div style="border-top: 1px solid var(--color-border); padding-top: 1rem; margin-top: 1.5rem;">
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); margin-bottom: 0.4rem;">Sprint Progress</div>
            <div class="progress-bar-bg" style="height: 6px;">
              <div class="progress-bar-fill" id="sidebarProgressFill" style="width: ${progressPercent}%;"></div>
            </div>
            <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 0.35rem; text-align: right;" id="sidebarProgressLabel">${progressPercent}%</div>
          </div>
        </aside>

        <!-- Center: Lesson Narrative & Practical Implementation -->
        <article class="workspace-lesson-panel">
          <div class="lesson-breadcrumbs">
            <span>${sprint.title}</span> &gt; <span>${activeLesson.moduleTitle}</span> &gt; <span>${activeLesson.title}</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5rem; flex-wrap: wrap;">
            <h1 class="lesson-headline">${activeLesson.title}</h1>
            <span class="badge badge-gray">⏱ ${activeLesson.readTime}</span>
          </div>

          <div class="lesson-body-prose">
            ${activeLesson.content}
          </div>

          <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <button class="btn btn-outline-brand btn-sm" id="wsAskAiBtn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"></path></svg>
              <span>Need a hint on this code? Ask AI Coach</span>
            </button>
            <div style="font-size: 0.8rem; color: var(--color-text-muted);">
              Check off tasks on the right to simulate live progress
            </div>
          </div>
        </article>

        <!-- Right: Interactive Checklist & Practical Milestone Submission -->
        <aside class="workspace-right-dock">
          <!-- Lesson Action Checklist -->
          <div class="checklist-card">
            <div class="checklist-title">
              <span>Interactive Task Checklist</span>
              <span class="badge badge-brand" style="font-size: 0.68rem;">Live Demo</span>
            </div>
            <ul class="checklist-items">
              ${checklistHtml}
            </ul>
          </div>

          <!-- Project Milestone Submission Card -->
          <div class="milestone-submit-card">
            <div style="font-size: 0.72rem; font-weight: 800; color: #6d28d9; text-transform: uppercase; margin-bottom: 0.35rem;">Milestone 2.3 Verification</div>
            <h4 style="font-size: 0.95rem; font-weight: 800; margin-bottom: 0.4rem;">Submit Code for Review</h4>
            <p style="font-size: 0.82rem; color: #475569; margin-bottom: 1rem; line-height: 1.45;">
              Submit your sample GitHub PR link. Simulated mentor review evaluates your code against the rubric.
            </p>
            <button class="btn btn-primary" id="openMilestoneSubmitModalBtn" style="width: 100%; justify-content: center;">
              <span>Submit Milestone Artifact</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </aside>
      </div>
    </section>
  `;
}

// ----------------------------------------------------------------------------
// VIEW 5: Mentor Feedback & Rubric View
// ----------------------------------------------------------------------------
function renderMentorFeedback() {
  const evalData = store.state.rubricEvaluation;
  const isResubmitted = evalData.status === 'resubmitted';
  const isApproved = evalData.status === 'approved';

  const rowsHtml = evalData.criteria.map(c => `
    <tr>
      <td style="font-weight: 700; width: 30%;">
        ${c.name}
      </td>
      <td style="width: 15%;">
        <span class="score-badge ${c.badge}">${c.score} / ${c.max}</span>
      </td>
      <td style="color: #475569; line-height: 1.5;">
        ${c.notes}
      </td>
    </tr>
  `).join('');

  const revisionsHtml = evalData.requestedRevisions.map(r => `
    <li style="margin-bottom: 0.45rem;">• ${r}</li>
  `).join('');

  return `
    <section class="view-panel mentor-feedback-view">
      <div class="mentor-feedback-wrapper">
        <!-- Prominent Demo Disclaimer -->
        <div class="demo-disclaimer-callout">
          <div>⚠️</div>
          <div>
            <strong>Simulated Review Demonstration:</strong> This rubric assessment and mentor critique represent a pre-configured demo scenario to showcase the feedback &amp; revision loop.
            <strong>No actual human reviewed this submission</strong>, and the scores do not reflect external institutional grading.
          </div>
        </div>

        <!-- Status Banner -->
        <div class="feedback-status-banner" style="${isApproved ? 'background: #f0fdf4; border-color: #bbf7d0;' : isResubmitted ? 'background: #eff6ff; border-color: #bfdbfe;' : ''}">
          <div class="status-banner-left">
            <div class="status-badge-big" style="${isApproved ? 'background: #dcfce7; color: #15803d;' : isResubmitted ? 'background: #dbeafe; color: #1d4ed8;' : ''}">
              ${isApproved ? '✓' : isResubmitted ? '⏳' : '⚠️'}
            </div>
            <div class="status-banner-meta">
              <h3 style="${isApproved ? 'color: #166534;' : isResubmitted ? 'color: #1e40af;' : ''}">
                ${evalData.statusLabel}
              </h3>
              <p style="${isApproved ? 'color: #14532d;' : isResubmitted ? 'color: #1e3a8a;' : ''}">
                ${isApproved 
                  ? 'Demonstrated criteria approved! Distinction unlocked for SkillProof™ portfolio showcase.'
                  : isResubmitted
                    ? 'Your revision was submitted on ' + evalData.resubmission?.submittedAt + '. Estimated mentor review turnaround: ~4 hours (Simulated).'
                    : 'Sample Score: ' + evalData.overallScore + ' / ' + evalData.maxScore + ' • Simulated Review Persona: ' + evalData.mentor.name + ' (' + evalData.mentor.title + ')'
                }
              </p>
            </div>
          </div>
          <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
            ${isResubmitted ? `
              <button class="btn btn-secondary btn-sm" id="openReviseModalAgainBtn">
                View Submitted Notes
              </button>
            ` : !isApproved ? `
              <button class="btn btn-primary btn-sm" id="openReviseModalBtn">
                <span>Revise &amp; Resubmit</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
              </button>
            ` : ''}

            <!-- Live Demo Quick Action: Simulate Approval -->
            ${!isApproved ? `
              <button class="btn btn-success btn-sm" id="simulateApproveBtn" title="Instantly simulate mentor approval for the live demo presentation">
                ⚡ Simulate Mentor Approval
              </button>
            ` : `
              <span class="badge badge-emerald" style="padding: 0.45rem 0.85rem; font-size: 0.85rem;">
                ✓ Verification Completed
              </span>
            `}
          </div>
        </div>

        ${evalData.resubmission ? `
          <div class="resubmission-detail-box">
            <h4 style="font-size: 0.95rem; font-weight: 800; margin-bottom: 0.5rem; color: #1e3a8a;">
              📄 Latest Student Resubmission Record (Demo)
            </h4>
            <div class="resubmission-detail-row">
              <span class="resubmission-detail-label">Submitted At:</span>
              <span>${evalData.resubmission.submittedAt}</span>
            </div>
            <div class="resubmission-detail-row">
              <span class="resubmission-detail-label">Submitted PR / Link:</span>
              <code>${evalData.resubmission.githubPrUrl}</code>
            </div>
            <div class="resubmission-detail-row">
              <span class="resubmission-detail-label">Student Notes:</span>
              <span style="color: #334155;">${evalData.resubmission.notes}</span>
            </div>
          </div>
        ` : ''}

        <!-- Rubric Score Table -->
        <div class="rubric-card">
          <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
            <div>
              <h2 style="font-size: 1.45rem; font-weight: 800;">Competency Rubric Assessment (Demo Data)</h2>
              <p style="font-size: 0.88rem; color: #64748b;">Demonstrates how SkillSprint evaluates practical ability against clear criteria.</p>
            </div>
            <div style="font-size: 1.45rem; font-weight: 800; color: #0f172a;">
              Simulated Score: <span style="color: #4f46e5;">${evalData.overallScore}</span> / 100
            </div>
          </div>

          <table class="rubric-table">
            <thead>
              <tr>
                <th>Rubric Criterion</th>
                <th>Score</th>
                <th>Sample Mentor Observations</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>

          <!-- Written Critique -->
          <div class="mentor-written-note">
            <strong style="color: #0f172a; display: block; margin-bottom: 0.35rem;">
              Simulated Mentor Commentary (${evalData.mentor.name}):
            </strong>
            <p style="white-space: pre-line;">${evalData.summary}</p>

            ${!isApproved ? `
              <div style="margin-top: 1rem; padding-top: 0.85rem; border-top: 1px dashed #cbd5e1;">
                <strong style="font-size: 0.82rem; text-transform: uppercase; color: #b45309; display: block; margin-bottom: 0.4rem;">
                  Action Items for Full Clearance:
                </strong>
                <ul style="list-style: none; padding-left: 0; font-size: 0.86rem; color: #334155;">
                  ${revisionsHtml}
                </ul>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    </section>
  `;
}

// ----------------------------------------------------------------------------
// VIEW 6: SkillProof™ Portfolio View
// ----------------------------------------------------------------------------
function renderPortfolio() {
  const isPublic = store.state.portfolioVisibility === 'public';
  const student = store.state.studentProfile;
  const sprint = store.getEnrolledSprint();

  return `
    <section class="view-panel portfolio-view">
      <!-- Demo Disclaimer Alert -->
      <div class="demo-disclaimer-callout">
        <div>⚠️</div>
        <div>
          <strong>PROTOTYPE DEMO NOTICE:</strong> This SkillProof™ view is a prototype demonstration.
          All projects, rubric scores, mentor verification stamps, and credentials displayed here are <strong>simulated sample data for demonstration only</strong>.
          No real external credential, academic credit, or employer endorsement is conferred or externally verifiable.
        </div>
      </div>

      <div class="portfolio-header-row">
        <div>
          <h2 style="font-size: 1.85rem; font-weight: 800; letter-spacing: -0.02em;">SkillProof™ Career Portfolio (Demo)</h2>
          <p style="font-size: 0.92rem; color: #64748b;">Simulated recruiter showcase showing how student proof-of-work is presented.</p>
        </div>

        <div style="display: flex; align-items: center; gap: 1rem;">
          <!-- Visibility Switcher -->
          <div class="portfolio-visibility-toggle">
            <button class="vis-btn ${!isPublic ? 'active' : ''}" id="visPrivateBtn" data-vis="private">
              🔒 Private
            </button>
            <button class="vis-btn ${isPublic ? 'active' : ''}" id="visPublicBtn" data-vis="public">
              🌐 Public
            </button>
          </div>

          <button class="btn btn-outline-brand btn-sm" id="copyShareLinkBtn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>Copy Demo Link</span>
          </button>
        </div>
      </div>

      <!-- Public/Private Indicator Banner -->
      <div style="padding: 0.75rem 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; font-size: 0.84rem; display: flex; align-items: center; justify-content: space-between; ${isPublic ? 'background: rgba(32, 217, 229, 0.08); border: 1px solid rgba(32, 217, 229, 0.25); color: var(--color-brand-primary);' : 'background: var(--color-surface-subtle); border: 1px solid var(--color-border); color: var(--color-text-muted);'}">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span>${isPublic ? '🌐' : '🔒'}</span>
          <span>
            ${isPublic
              ? '<strong>Public Mode Active (Simulation):</strong> Shareable sample link is set to: <code style="color: var(--color-brand-primary); background: rgba(0,0,0,0.35); padding: 2px 6px; border-radius: 4px;">https://skillsprint.io/demo/p/sample-aarav-patel</code>'
              : '<strong>Private Mode:</strong> In private mode, this proof artifact is hidden from recruiter exploration.'
            }
          </span>
        </div>
        <span class="badge ${isPublic ? 'badge-emerald' : 'badge-gray'}">${isPublic ? 'Shareable (Demo)' : 'Draft Mode'}</span>
      </div>

      <!-- Credential Card -->
      <div class="portfolio-card-showcase">
        <div class="portfolio-banner-top">
          <div class="verified-credential-seal">
            <img src="assets/skillsprint-brand.jpeg" alt="SkillSprint Emblem" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover; border: 1px solid var(--color-brand-primary); box-shadow: 0 0 8px rgba(32, 217, 229, 0.35);">
            <span>SKILLPROOF PROTOTYPE DEMO SEAL (SAMPLE DATA ONLY)</span>
          </div>

          <h1 style="font-size: 2.1rem; font-weight: 800; line-height: 1.2; margin-bottom: 0.5rem; color: #F2F7F8;">
            ${sprint.project.title}
          </h1>
          <p style="font-size: 1.02rem; color: var(--color-text-muted); max-width: 800px; line-height: 1.6;">
            A production-ready enterprise collaboration API engineered by ${student.name} (${student.college}) during the 5-week SkillSprint outcome track (Simulated Student Demonstration).
          </p>
        </div>

        <div class="portfolio-body-grid">
          <!-- Left: Project Narrative & Architecture -->
          <div>
            <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 0.6rem; color: var(--color-text-main);">Demonstrated Engineering Abilities</h3>
            <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.25rem;">
              Rather than generic course certificates, SkillProof validates practical implementation. The student demonstrated relational database normalization, row-level multi-tenancy scoping, JWT access/refresh rotation with RFC-7807 problem details, and automated integration test pipelines.
            </p>

            <h4 style="font-size: 0.85rem; font-weight: 800; color: var(--color-text-muted); text-transform: uppercase; margin-bottom: 0.6rem; letter-spacing: 0.04em;">Demonstrated Competency Tags (Sample)</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
              <span class="skill-tag">PostgreSQL Relational Design</span>
              <span class="skill-tag">Node.js &amp; Express REST</span>
              <span class="skill-tag">JWT Security &amp; Token Rotation</span>
              <span class="skill-tag">RFC-7807 Error Handling</span>
              <span class="skill-tag">Supertest &amp; Jest Automation</span>
              <span class="skill-tag">Docker Multi-Stage Builds</span>
            </div>

            <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 0.6rem; color: var(--color-text-main);">Sample Proof-of-Work Artifacts</h3>
            <div class="evidence-links-grid">
              <a href="https://github.com/aaravpatel-dev/taskflow-api" target="_blank" rel="noopener" class="evidence-card">
                <div class="evidence-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.88rem; color: var(--color-text-main);">Sample GitHub Repo</div>
                  <div style="font-size: 0.75rem; color: var(--color-text-muted);">Source code, migrations &amp; tests</div>
                </div>
              </a>

              <a href="https://taskflow-api-staging.onrender.com/docs" target="_blank" rel="noopener" class="evidence-card">
                <div class="evidence-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.88rem; color: var(--color-text-main);">Sample OpenAPI Docs</div>
                  <div style="font-size: 0.75rem; color: var(--color-text-muted);">Interactive API sandbox</div>
                </div>
              </a>

              <a href="#" class="evidence-card" id="openRubricReportBtn" data-nav="mentor-feedback">
                <div class="evidence-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.88rem; color: var(--color-text-main);">Mentor Evaluation Sheet</div>
                  <div style="font-size: 0.75rem; color: var(--color-text-muted);">Simulated rubric breakdown</div>
                </div>
              </a>

              <a href="https://loom.com/share/demo-walkthrough" target="_blank" rel="noopener" class="evidence-card">
                <div class="evidence-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.88rem; color: var(--color-text-main);">Walkthrough Video</div>
                  <div style="font-size: 0.75rem; color: var(--color-text-muted);">5-min video code defense</div>
                </div>
              </a>
            </div>
          </div>

          <!-- Right: Validation Badge & Mentor Endorsement -->
          <div style="border-left: 1.5px solid var(--color-border-subtle); padding-left: 1.5rem;">
            <div style="background: var(--color-surface-subtle); border: 1.5px solid var(--color-border-subtle); border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: var(--clay-card);">
              <div style="font-size: 0.75rem; font-weight: 800; color: var(--color-text-muted); text-transform: uppercase; margin-bottom: 0.75rem; letter-spacing: 0.05em;">Assessment (Simulated)</div>
              <div style="font-size: 1.85rem; font-weight: 800; color: var(--color-text-main); margin-bottom: 0.25rem;">
                ${store.state.rubricEvaluation.overallScore} <span style="font-size: 1rem; color: var(--color-text-muted);">/ 100</span>
              </div>
              <span class="badge ${store.state.rubricEvaluation.status === 'approved' ? 'badge-emerald' : 'badge-amber'}" style="margin-bottom: 1rem;">
                ${store.state.rubricEvaluation.status === 'approved' ? 'Distinction Tier (Demo)' : 'Needs Revision (Demo)'}
              </span>
              
              <div style="font-size: 0.8rem; color: var(--color-text-muted); border-top: 1px solid var(--color-border); padding-top: 0.85rem; margin-top: 0.85rem;">
                <div><strong>Sprint ID:</strong> SKP-2026-DEMO-0941</div>
                <div><strong>Verification ID:</strong> <code style="color: var(--color-brand-primary);">DEMO-0x9F41C2B8</code></div>
                <div style="font-size: 0.72rem; color: var(--color-warning); margin-top: 0.35rem;">* Prototype identifier for demonstration only</div>
              </div>
            </div>

            <!-- Mentor Verification Stamp -->
            <div style="display: flex; gap: 0.75rem; align-items: center;">
              <div class="mentor-avatar" style="width: 44px; height: 44px;">PS</div>
              <div>
                <div style="font-size: 0.88rem; font-weight: 800; color: var(--color-text-main);">Priya Sharma (Simulated)</div>
                <div style="font-size: 0.75rem; color: var(--color-text-muted);">Staff Software Engineer (Mentor Role)</div>
                <div style="font-size: 0.72rem; color: var(--color-success); font-weight: 700;">✓ Simulated Verification Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ============================================================================
// Modal Dialog Renders (Enroll, Milestone Submit, Revise, Tour)
// ============================================================================

function openModal(contentHtml) {
  modalContainer.innerHTML = contentHtml;
  modalBackdrop.classList.add('open');
  modalContainer.classList.add('open');
}

function closeModal() {
  modalBackdrop.classList.remove('open');
  modalContainer.classList.remove('open');
  setTimeout(() => {
    modalContainer.innerHTML = '';
  }, 220);
}

function renderEnrollModal(sprintId) {
  const sprint = store.state.sprints.find(s => s.id === sprintId) || store.state.sprints[0];

  const html = `
    <div class="modal-card">
      <div class="modal-header">
        <div>
          <span class="badge badge-brand" style="margin-bottom: 0.4rem;">ENROLLMENT CONFIRMATION (DEMO)</span>
          <h3 style="font-size: 1.35rem; font-weight: 800; color: #F2F7F8;">Enroll in ${sprint.title}</h3>
        </div>
        <button class="btn-icon" id="closeModalCrossBtn">&times;</button>
      </div>

      <div style="background: var(--color-surface-subtle); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span style="font-weight: 700; color: var(--color-text-muted);">Sprint Duration:</span>
          <span style="color: var(--color-text-main); font-weight: 600;">${sprint.duration}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span style="font-weight: 700; color: var(--color-text-muted);">Deliverable Output:</span>
          <span style="font-weight: 600; color: var(--color-brand-primary);">${sprint.project.title}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span style="font-weight: 700; color: var(--color-text-muted);">Industry Mentor Review:</span>
          <span style="color: var(--color-text-main);">Simulated 1:1 Rubric Feedback</span>
        </div>
        <div style="border-top: 1px solid var(--color-border); padding-top: 0.5rem; margin-top: 0.5rem; display: flex; justify-content: space-between; align-items: baseline;">
          <span style="font-size: 1.1rem; font-weight: 800; color: var(--color-text-main);">Student Fee:</span>
          <span style="font-size: 1.4rem; font-weight: 800; color: var(--color-brand-primary);">${sprint.price}</span>
        </div>
      </div>

      <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: var(--radius-sm); padding: 0.75rem; font-size: 0.78rem; color: #fbbf24; margin-bottom: 1.5rem;">
        ⚡ <strong>Simulated Demo Payment:</strong> No real payment is processed. Clicking confirm immediately enrolls you and activates your workspace for this sprint.
      </div>

      <div style="display: flex; gap: 0.75rem; justify-content: flex-end;">
        <button class="btn btn-secondary" id="cancelEnrollBtn">Cancel</button>
        <button class="btn btn-primary" id="confirmEnrollSubmitBtn" data-sprint-id="${sprint.id}">
          Confirm &amp; Start Sprint
        </button>
      </div>
    </div>
  `;
  openModal(html);
}

function renderMilestoneSubmitModal() {
  const sprint = store.getEnrolledSprint();

  const html = `
    <div class="modal-card">
      <div class="modal-header">
        <div>
          <span class="badge badge-brand" style="margin-bottom: 0.4rem;">PRACTICAL MILESTONE SUBMISSION (DEMO)</span>
          <h3 style="font-size: 1.35rem; font-weight: 800; color: #F2F7F8;">Submit Milestone for Mentor Review</h3>
        </div>
        <button class="btn-icon" id="closeModalCrossBtn">&times;</button>
      </div>

      <p style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">
        Provide your sample GitHub repository or PR link. In this demo, submission updates your review state immediately.
      </p>

      <form id="milestoneSubmitForm">
        <div class="form-group">
          <label class="form-label" for="repoUrlInput">Sample GitHub Commit / Pull Request URL *</label>
          <input type="url" id="repoUrlInput" class="form-input" required value="https://github.com/aaravpatel-dev/taskflow-api/pull/3" placeholder="https://github.com/username/repo/pull/1">
        </div>

        <div class="form-group">
          <label class="form-label" for="liveDemoInput">Sample Live Deployment URL (Optional)</label>
          <input type="url" id="liveDemoInput" class="form-input" value="https://taskflow-api-staging.onrender.com/docs" placeholder="https://api-staging.onrender.com">
        </div>

        <div class="form-group">
          <label class="form-label" for="milestoneNotes">Notes for Mentor (${sprint.mentor.name})</label>
          <textarea id="milestoneNotes" class="form-textarea" rows="3" placeholder="Describe the challenges solved, test coverage status, or areas where you would like specific feedback...">${store.state.rubricEvaluation.resubmission?.notes || "Implemented JWT refresh token rotation with HttpOnly cookies. Centralized RFC-7807 problem details error middleware is live with 14 passing Supertest suites."}</textarea>
        </div>

        <div style="background: var(--color-surface-subtle); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 0.75rem; font-size: 0.75rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
          ℹ️ Demo Mode: No files are uploaded to external servers. This action updates local prototype state.
        </div>

        <div style="display: flex; gap: 0.75rem; justify-content: flex-end;">
          <button type="button" class="btn btn-secondary" id="cancelModalBtn">Cancel</button>
          <button type="submit" class="btn btn-primary" id="confirmMilestoneBtn">
            Submit Artifact for Review
          </button>
        </div>
      </form>
    </div>
  `;
  openModal(html);
}

function renderReviseResubmitModal() {
  const evalData = store.state.rubricEvaluation;

  const html = `
    <div class="modal-card">
      <div class="modal-header">
        <div>
          <span class="badge badge-amber" style="margin-bottom: 0.4rem;">REVISION &amp; RESUBMISSION (DEMO)</span>
          <h3 style="font-size: 1.35rem; font-weight: 800; color: #F2F7F8;">Revise &amp; Resubmit Milestone 2.3</h3>
        </div>
        <button class="btn-icon" id="closeModalCrossBtn">&times;</button>
      </div>

      <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: var(--radius-md); padding: 0.85rem; font-size: 0.84rem; color: #fbbf24; margin-bottom: 1.25rem;">
        <strong>Requested Changes (Sample Scenario):</strong>
        <ul style="margin-top: 0.4rem; padding-left: 1.1rem; font-size: 0.82rem; color: var(--color-text-main);">
          ${evalData.requestedRevisions.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>

      <form id="resubmitRevisionForm">
        <div class="form-group">
          <label class="form-label" for="revisePrInput">Updated GitHub Pull Request / Commit Hash *</label>
          <input type="text" id="revisePrInput" class="form-input" required value="https://github.com/aaravpatel-dev/taskflow-api/pull/4 (commit 98f12a)" placeholder="https://github.com/.../pull/4">
        </div>

        <div class="form-group">
          <label class="form-label" for="revisionNotesInput">Changelog &amp; Resolution Notes *</label>
          <textarea id="revisionNotesInput" class="form-textarea" rows="3" required placeholder="Explain how you addressed the mentor's feedback...">Added crypto SHA-256 hashing to all refresh tokens before storing in the PostgreSQL database. Added Supertest test case verifying that expired tokens return RFC-7807 401 response.</textarea>
        </div>

        <div style="display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 1.25rem;">
          <button type="button" class="btn btn-secondary" id="cancelModalBtn">Cancel</button>
          <button type="submit" class="btn btn-success">
            Submit Revised Project
          </button>
        </div>
      </form>
    </div>
  `;
  openModal(html);
}

function renderTourModal() {
  const html = `
    <div class="modal-card">
      <div class="modal-header">
        <div>
          <span class="badge badge-brand" style="margin-bottom: 0.4rem;">LIVE DEMO GUIDE</span>
          <h3 style="font-size: 1.35rem; font-weight: 800; color: #F2F7F8;">SkillSprint Prototype Journey</h3>
        </div>
        <button class="btn-icon" id="closeModalCrossBtn">&times;</button>
      </div>

      <p style="font-size: 0.88rem; color: var(--color-text-muted);">
        Follow this 7-step student journey during your live demonstration:
      </p>

      <div class="tour-steps-list">
        <div class="tour-step-card">
          <div class="tour-step-info">
            <div class="tour-step-num">1</div>
            <div class="tour-step-text">
              <h4>Student Dashboard</h4>
              <p>Greeting, weekly milestones, current progress, next task banner</p>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" data-nav="dashboard" onclick="closeModal()">Go →</button>
        </div>

        <div class="tour-step-card">
          <div class="tour-step-info">
            <div class="tour-step-num">2</div>
            <div class="tour-step-text">
              <h4>Sprint Catalogue</h4>
              <p>4 sample sprints, category filtering, pricing, deliverables</p>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" data-nav="catalogue" onclick="closeModal()">Go →</button>
        </div>

        <div class="tour-step-card">
          <div class="tour-step-info">
            <div class="tour-step-num">3</div>
            <div class="tour-step-text">
              <h4>Sprint Detail View</h4>
              <p>Target outcomes, 5-week syllabus, mentor profile &amp; enrollment modal</p>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" data-nav="detail" onclick="closeModal()">Go →</button>
        </div>

        <div class="tour-step-card">
          <div class="tour-step-info">
            <div class="tour-step-num">4</div>
            <div class="tour-step-text">
              <h4>Learning Workspace</h4>
              <p>Lesson curriculum, interactive checklist, progress update, milestone submit</p>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" data-nav="workspace" onclick="closeModal()">Go →</button>
        </div>

        <div class="tour-step-card">
          <div class="tour-step-info">
            <div class="tour-step-num">5</div>
            <div class="tour-step-text">
              <h4>AI Mentor Coach Panel</h4>
              <p>Socratic hints, schema advice, debugging tips, academic integrity check</p>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="closeModal(); toggleAiDrawer(true)">Open AI →</button>
        </div>

        <div class="tour-step-card">
          <div class="tour-step-info">
            <div class="tour-step-num">6</div>
            <div class="tour-step-text">
              <h4>Mentor Feedback &amp; Rubric</h4>
              <p>Competency rubric scores, critique, revise/resubmit, simulate approval</p>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" data-nav="mentor-feedback" onclick="closeModal()">Go →</button>
        </div>

        <div class="tour-step-card">
          <div class="tour-step-info">
            <div class="tour-step-num">7</div>
            <div class="tour-step-text">
              <h4>SkillProof™ Portfolio</h4>
              <p>Demonstrated skills, evidence links, private/public visibility control</p>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" data-nav="portfolio" onclick="closeModal()">Go →</button>
        </div>
      </div>

      <div style="display: flex; justify-content: flex-end; margin-top: 1rem;">
        <button class="btn btn-primary btn-sm" onclick="closeModal()">Got it</button>
      </div>
    </div>
  `;
  openModal(html);
}

// ============================================================================
// AI Mentor Drawer Logic & Responses
// ============================================================================

function toggleAiDrawer(forceOpen = null) {
  const isOpen = aiDrawer.classList.contains('open');
  const shouldOpen = forceOpen !== null ? forceOpen : !isOpen;

  if (shouldOpen) {
    aiDrawer.classList.add('open');
    modalBackdrop.classList.add('open');
  } else {
    aiDrawer.classList.remove('open');
    if (!modalContainer.classList.contains('open')) {
      modalBackdrop.classList.remove('open');
    }
  }
}

function renderAiChat() {
  aiMessagesContainer.innerHTML = store.state.chatHistory.map(msg => `
    <div class="chat-bubble ${msg.sender}">
      ${msg.text}
    </div>
  `).join('');
  aiMessagesContainer.scrollTop = aiMessagesContainer.scrollHeight;

  // Render quick prompt chips
  quickPromptsList.innerHTML = DEFAULT_AI_PROMPTS.map((p, idx) => `
    <button class="quick-prompt-btn" data-prompt-idx="${idx}">
      💡 ${p.label}: "${p.query.slice(0, 36)}..."
    </button>
  `).join('');
}

function handleAiQuestion(question) {
  if (!question || !question.trim()) return;

  // Append user message
  store.addChatMessage('user', question.trim());
  renderAiChat();

  // Find simulated matching response or generate context-aware coach hint
  const match = DEFAULT_AI_PROMPTS.find(p => 
    p.query.toLowerCase().includes(question.toLowerCase().trim()) ||
    question.toLowerCase().includes(p.label.toLowerCase())
  );

  let replyText = '';
  if (match) {
    replyText = match.response;
  } else if (question.toLowerCase().includes('write') || question.toLowerCase().includes('code for me') || question.toLowerCase().includes('solution')) {
    replyText = `⚠️ **Academic Integrity Guardrail:** As your SkillSprint AI Coach, I coach with hints and architectural suggestions so your SkillProof portfolio remains 100% verified. What part of the design or logic can we break down step-by-step together?`;
  } else if (question.toLowerCase().includes('schema') || question.toLowerCase().includes('postgres') || question.toLowerCase().includes('sql')) {
    replyText = `💡 **Database Architectural Hint:** When modeling relational entities in TaskFlow, ensure your foreign keys include <code>ON DELETE CASCADE</code> for dependent items (e.g. workspace tasks) but <code>RESTRICT</code> on primary tenant accounts so data is never deleted accidentally.`;
  } else if (question.toLowerCase().includes('test') || question.toLowerCase().includes('jest') || question.toLowerCase().includes('coverage')) {
    replyText = `🧪 **Testing Strategy:** Use Supertest to make HTTP assertions against your Express app instance without starting an actual network socket: <code>request(app).post('/api/auth/refresh').expect(401)</code>. This ensures fast, repeatable CI runs.`;
  } else {
    replyText = `⚡ **AI Coach Guidance:** That is a great area to strengthen your project on. Remember that your mentor evaluates your project against the rubric for: (1) schema normalization, (2) RFC-7807 error standardization, and (3) automated test coverage. Break your implementation down into small git commits!`;
  }

  // Simulate quick typing delay
  setTimeout(() => {
    store.addChatMessage('ai', replyText);
    renderAiChat();
  }, 350);
}

// ============================================================================
// Router & App Navigation
// ============================================================================

function navigateTo(viewName, param = null) {
  store.state.currentView = viewName;
  store.saveState();

  // Sync hash
  if (window.location.hash !== '#' + viewName) {
    window.location.hash = '#' + viewName;
  }

  // Update Header Nav active states
  const navBtns = document.querySelectorAll('.main-nav .nav-item');
  navBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.nav === viewName);
  });

  updateNavBadges();

  // Render View
  switch (viewName) {
    case 'dashboard':
      appMain.innerHTML = renderDashboard();
      break;
    case 'catalogue':
      appMain.innerHTML = renderCatalogue();
      break;
    case 'detail':
      appMain.innerHTML = renderSprintDetail(param || store.state.selectedSprintId);
      break;
    case 'workspace':
      appMain.innerHTML = renderWorkspace();
      break;
    case 'mentor-feedback':
      appMain.innerHTML = renderMentorFeedback();
      break;
    case 'portfolio':
      appMain.innerHTML = renderPortfolio();
      break;
    default:
      appMain.innerHTML = renderDashboard();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================================
// Event Delegations & Listeners
// ============================================================================

document.addEventListener('click', (e) => {
  // Navigation button clicks
  const navTarget = e.target.closest('[data-nav]');
  if (navTarget) {
    e.preventDefault();
    const view = navTarget.dataset.nav;
    navigateTo(view);
    return;
  }

  // Catalogue Category Filters
  const filterBtn = e.target.closest('.filter-chip');
  if (filterBtn) {
    currentFilterCategory = filterBtn.dataset.filter;
    navigateTo('catalogue');
    return;
  }

  // Sprint Card Inspector
  const inspectBtn = e.target.closest('.btn-inspect-sprint');
  if (inspectBtn) {
    const sprintId = inspectBtn.dataset.sprintId;
    store.state.selectedSprintId = sprintId;
    store.saveState();
    navigateTo('detail', sprintId);
    return;
  }

  // Sprint Card Enrolled click
  const enrolledBtn = e.target.closest('.btn-enrolled-sprint');
  if (enrolledBtn) {
    store.state.selectedSprintId = enrolledBtn.dataset.sprintId;
    store.saveState();
    navigateTo('workspace');
    return;
  }

  // Enroll triggers
  const enrollBtn = e.target.closest('.btn-enroll-trigger') || e.target.closest('#detailEnrollTriggerBtn');
  if (enrollBtn) {
    const sprintId = enrollBtn.dataset.sprintId || store.state.selectedSprintId;
    renderEnrollModal(sprintId);
    return;
  }

  // Close modals & backdrops
  if (e.target.closest('#closeModalCrossBtn') || e.target.closest('#cancelModalBtn') || e.target.closest('#cancelEnrollBtn')) {
    closeModal();
    return;
  }
  if (e.target === modalBackdrop) {
    closeModal();
    toggleAiDrawer(false);
    return;
  }

  // Confirm Enrollment Submit
  const confirmEnrollBtn = e.target.closest('#confirmEnrollSubmitBtn');
  if (confirmEnrollBtn) {
    const sprintId = confirmEnrollBtn.dataset.sprintId;
    store.enrollInSprint(sprintId);
    closeModal();
    showToast(`Enrolled in ${store.getEnrolledSprint().title} (Demo Simulation)!`, 'success');
    navigateTo('dashboard');
    return;
  }

  // Workspace Lesson switcher
  const lessonBtn = e.target.closest('.tree-lesson-btn');
  if (lessonBtn) {
    store.state.activeLessonId = lessonBtn.dataset.lessonId;
    store.saveState();
    navigateTo('workspace');
    return;
  }

  // Workspace checklist checkbox toggle
  if (e.target.matches('input[type="checkbox"][data-item-id]')) {
    const lessonId = e.target.dataset.lessonId;
    const itemId = e.target.dataset.itemId;
    store.toggleChecklist(lessonId, itemId);

    // Update the item styling in DOM
    const itemLi = document.getElementById(`item-row-${itemId}`);
    if (itemLi) {
      itemLi.classList.toggle('done', e.target.checked);
    }

    // Update lesson counter badge in left tree
    const sprintLessons = store.state.lessons[store.state.selectedSprintId] || [];
    const lesson = sprintLessons.find(l => l.id === lessonId);
    if (lesson) {
      const completedCount = lesson.checklist.filter(c => c.done).length;
      const counterEl = document.querySelector(`.tree-lesson-counter[data-lesson-id="${lessonId}"]`);
      if (counterEl) {
        counterEl.textContent = `${completedCount}/${lesson.checklist.length}`;
      }
    }

    // Update sidebar progress bar in DOM
    const newProgress = store.calculateProgress(store.state.selectedSprintId);
    const fillEl = document.getElementById('sidebarProgressFill');
    const labelEl = document.getElementById('sidebarProgressLabel');
    if (fillEl) fillEl.style.width = `${newProgress}%`;
    if (labelEl) labelEl.textContent = `${newProgress}%`;

    showToast(`Task checklist updated! Sprint progress: ${newProgress}%`, 'success');
    return;
  }

  // Open Milestone Submit Modal
  if (e.target.closest('#openMilestoneSubmitModalBtn')) {
    renderMilestoneSubmitModal();
    return;
  }

  // Open Revise & Resubmit Modal
  if (e.target.closest('#openReviseModalBtn') || e.target.closest('#openReviseModalAgainBtn')) {
    renderReviseResubmitModal();
    return;
  }

  // Simulate Mentor Approval Click
  if (e.target.closest('#simulateApproveBtn')) {
    store.simulateMentorApproval();
    updateNavBadges();
    navigateTo('mentor-feedback');
    showToast('Demo Simulation: Mentor Priya Sharma approved revisions! Distinction tier unlocked.', 'success');
    return;
  }

  // AI Drawer open/close buttons
  if (e.target.closest('#toggleAiCoachBtn') || e.target.closest('#dashOpenAiCoachBtn') || e.target.closest('#wsAskAiBtn')) {
    toggleAiDrawer(true);
    return;
  }
  if (e.target.closest('#closeAiDrawerBtn')) {
    toggleAiDrawer(false);
    return;
  }

  // Quick prompt chip clicked in AI drawer
  const quickPromptBtn = e.target.closest('.quick-prompt-btn');
  if (quickPromptBtn) {
    const idx = parseInt(quickPromptBtn.dataset.promptIdx, 10);
    const item = DEFAULT_AI_PROMPTS[idx];
    if (item) {
      handleAiQuestion(item.query);
    }
    return;
  }

  // Portfolio Visibility Toggles
  const visBtn = e.target.closest('.vis-btn');
  if (visBtn) {
    const mode = visBtn.dataset.vis;
    store.setPortfolioVisibility(mode);
    navigateTo('portfolio');
    showToast(`SkillProof visibility mode set to: ${mode.toUpperCase()} (Demo)`, 'info');
    return;
  }

  // Copy Public Share Link
  if (e.target.closest('#copyShareLinkBtn')) {
    const link = 'https://skillsprint.io/demo/p/sample-aarav-patel';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(link).catch(() => {});
    }
    showToast(`Copied sample demo link: ${link}`, 'success');
    return;
  }

  // Reset Demo Data
  if (e.target.closest('#resetDemoBtn')) {
    if (confirm('Reset prototype demo state? All checklist progress, sprint enrollments, and submissions will return to sample defaults.')) {
      store.resetState();
      updateNavBadges();
      navigateTo('dashboard');
      renderAiChat();
      showToast('Prototype demo reset to initial sample cohort state.', 'info');
    }
    return;
  }

  // Footer tour button
  if (e.target.closest('#footerTourBtn')) {
    renderTourModal();
    return;
  }
});

// Milestone Submit Form Submit Handler
document.addEventListener('submit', (e) => {
  if (e.target.id === 'milestoneSubmitForm') {
    e.preventDefault();
    const repoUrl = document.getElementById('repoUrlInput').value;
    const notes = document.getElementById('milestoneNotes').value;
    store.resubmitProject(notes, repoUrl);
    closeModal();
    showToast('Milestone submitted (Demo)! Status updated to In Review.', 'success');
    navigateTo('mentor-feedback');
    return;
  }

  if (e.target.id === 'resubmitRevisionForm') {
    e.preventDefault();
    const prUrl = document.getElementById('revisePrInput').value;
    const notes = document.getElementById('revisionNotesInput').value;
    store.resubmitProject(notes, prUrl);
    closeModal();
    showToast('Revisions resubmitted to Mentor Priya Sharma (Demo)!', 'success');
    navigateTo('mentor-feedback');
    return;
  }

  if (e.target.id === 'aiInputForm') {
    e.preventDefault();
    const input = document.getElementById('aiUserInput');
    const val = input.value;
    if (val && val.trim()) {
      handleAiQuestion(val);
      input.value = '';
    }
  }
});

// Keyboard Accessibility
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    toggleAiDrawer(false);
  }
});

// Sync Hash on Browser Back / Forward Buttons
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '');
  const validViews = ['dashboard', 'catalogue', 'detail', 'workspace', 'mentor-feedback', 'portfolio'];
  if (validViews.includes(hash) && hash !== store.state.currentView) {
    navigateTo(hash);
  }
});

// ============================================================================
// Initialization
// ============================================================================

function init() {
  updateNavBadges();
  renderAiChat();

  // Check URL hash or load saved view
  const hash = window.location.hash.replace('#', '');
  const validViews = ['dashboard', 'catalogue', 'detail', 'workspace', 'mentor-feedback', 'portfolio'];
  const initialView = validViews.includes(hash) ? hash : (store.state.currentView || 'dashboard');

  navigateTo(initialView);
  console.log('SkillSprint prototype initialized. Storage key:', STORAGE_KEY);
}

document.addEventListener('DOMContentLoaded', init);
