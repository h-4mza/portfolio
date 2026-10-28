/* ===================== i18n ===================== */
const I18N = {
  fr:{
    "skip":"Aller au contenu",
    "nav.method":"Méthode","nav.projects":"Projets","nav.skills":"Compétences","nav.path":"Parcours","nav.contact":"Contact","nav.cv":"CV",
    "hero.label":"Ingénieur cybersécurité · PFE 2027",
    "hero.sub":"Élève ingénieur en dernière année à l'ENSA El Jadida. Je travaille sur la conformité et la gestion des risques (EBIOS RM, ISO 27001), l'automatisation de la sécurité (DevSecOps), le pentest web/API et la Cyber Threat Intelligence, avec un objectif constant : relier une vulnérabilité technique au risque qu'elle fait porter à l'organisation. Classé 8e au Cyber Quest CTF de SANS Institute (octobre 2026).",
    "hero.k1":"Recherche","hero.v1":"Stage de fin d'études, 6 mois","hero.k2":"Période","hero.v2":"Janvier → juillet 2027","hero.k3":"Lieu","hero.v3":"France ou Maroc, en présentiel","hero.k4":"Formation","hero.v4":"Cycle ingénieur CCN, Bac+5 (2027)","hero.k5":"Distinction","hero.v5":"8e (Top 10), Cyber Quest CTF — SANS Institute",
    "hero.ctaProjects":"Voir les projets","hero.ctaCv":"Télécharger le CV",
    "m0":"place au Cyber Quest CTF de SANS Institute (Top 10)","m1":"accélération de la corrélation CTI (Cyber360)","m2":"vulnérabilités exploitées puis corrigées (TenantGuard)","m3":"contrôles ISO 27001:2022 évalués (GRC-as-Code)","m4":"paires de copies comparées (CheatTrace)",
    "method.label":"Méthode","method.title":"De la vulnérabilité à la décision","method.lead":"Mes projets suivent la même chaîne. Une faille détectée dans le code n'a de valeur que si elle aboutit à une décision de traitement du risque.",
    "s1t":"Détecter","s1p":"Pipeline CI : SAST, SCA, secrets, scan d'image bloquant, DAST, SBOM.",
    "s2t":"Exploiter","s2p":"Pentest web/API : preuve d'exploitation, score CVSS v3.1, classement OWASP.",
    "s3t":"Qualifier","s3p":"Traduction en techniques MITRE ATT&CK et en règles de détection.",
    "s4t":"Évaluer","s4p":"Rattachement à un scénario EBIOS RM et aux contrôles ISO 27001 ; risque résiduel recalculé.",
    "s5t":"Restituer","s5p":"Tableau de bord RSSI et plan de traitement priorisé.",
    "proj.label":"Projets","proj.title":"Dossiers techniques","proj.lead":"Pour chaque projet : le contexte, l'architecture, mon travail, les résultats mesurés et les limites connues.",
    "proj.fAll":"Tous","proj.fGrc":"GRC & conformité","proj.fOff":"Offensif","proj.fDev":"DevSecOps","proj.fAi":"IA & données","proj.open":"Lire le dossier →",
    "skills.label":"Compétences","skills.title":"Domaines et outils",
    "certs.title":"Certifications","certs.credly":"Vérifier les badges sur Credly →","dist.title":"Distinction","dist.ctf":"8e place internationale (Top 10) — Cyber Quest CTF",
    "lang.title":"Langues","lang.fr":"Français","lang.en":"Anglais","lang.ar":"Arabe","lang.native":"Langue maternelle",
    "asso.title":"Associations","asso.a1":"Bootcamp","asso.a2":"Trésorier",
    "path.label":"Parcours","path.title":"Formation et expériences",
    "contact.label":"Contact","contact.title":"Disponible pour un stage de fin d'études",
    "contact.lead":"Six mois en France ou au Maroc, de janvier à juillet 2027, convention fournie par l'ENSA. Je suis intéressé par les postes en GRC, DevSecOps, SOC, pentest ou CTI.",
    "contact.write":"Écrire un email","contact.cvLong":"CV détaillé (PDF)","contact.phone":"Téléphone","contact.loc":"Localisation","contact.locv":"El Jadida, Maroc · mobile en France et au Maroc",
    "foot.src":"Code source du site",
    "m.problem":"Contexte","m.archi":"Architecture","m.did":"Mon travail","m.limits":"Limites connues","m.repo":"Voir le dépôt GitHub","m.role":"Rôle","m.when":"Période"
  },
  en:{
    "skip":"Skip to content",
    "nav.method":"Method","nav.projects":"Projects","nav.skills":"Skills","nav.path":"Background","nav.contact":"Contact","nav.cv":"CV",
    "hero.label":"Cybersecurity engineer · 2027 internship",
    "hero.sub":"Final-year engineering student at ENSA El Jadida. I work on compliance and risk management (EBIOS RM, ISO 27001), security automation (DevSecOps), web/API pentesting and Cyber Threat Intelligence, with one constant goal: linking a technical vulnerability to the risk it creates for the organisation. Ranked 8th at the SANS Institute Cyber Quest CTF (October 2026).",
    "hero.k1":"Seeking","hero.v1":"6-month final-year internship","hero.k2":"Period","hero.v2":"January → July 2027","hero.k3":"Location","hero.v3":"France or Morocco, on-site","hero.k4":"Education","hero.v4":"Engineering degree, CCN (MSc level, 2027)","hero.k5":"Award","hero.v5":"8th (Top 10), Cyber Quest CTF — SANS Institute",
    "hero.ctaProjects":"See the projects","hero.ctaCv":"Download CV",
    "m0":"place at the SANS Institute Cyber Quest CTF (Top 10)","m1":"faster CTI correlation (Cyber360)","m2":"vulnerabilities exploited then fixed (TenantGuard)","m3":"ISO 27001:2022 controls assessed (GRC-as-Code)","m4":"exam-sheet pairs compared (CheatTrace)",
    "method.label":"Method","method.title":"From vulnerability to decision","method.lead":"My projects follow the same chain. A flaw found in code only matters if it ends in a risk-treatment decision.",
    "s1t":"Detect","s1p":"CI pipeline: SAST, SCA, secrets, blocking image scan, DAST, SBOM.",
    "s2t":"Exploit","s2p":"Web/API pentest: proof of exploitation, CVSS v3.1 score, OWASP mapping.",
    "s3t":"Qualify","s3p":"Translation into MITRE ATT&CK techniques and detection rules.",
    "s4t":"Assess","s4p":"Linked to an EBIOS RM scenario and ISO 27001 controls; residual risk recomputed.",
    "s5t":"Report","s5p":"CISO dashboard and a prioritised treatment plan.",
    "proj.label":"Projects","proj.title":"Technical dossiers","proj.lead":"For each project: context, architecture, my work, measured results and known limits.",
    "proj.fAll":"All","proj.fGrc":"GRC & compliance","proj.fOff":"Offensive","proj.fDev":"DevSecOps","proj.fAi":"AI & data","proj.open":"Read the dossier →",
    "skills.label":"Skills","skills.title":"Domains and tools",
    "certs.title":"Certifications","certs.credly":"Verify badges on Credly →","dist.title":"Award","dist.ctf":"8th place internationally (Top 10) — Cyber Quest CTF",
    "lang.title":"Languages","lang.fr":"French","lang.en":"English","lang.ar":"Arabic","lang.native":"Native",
    "asso.title":"Associations","asso.a1":"Bootcamp","asso.a2":"Treasurer",
    "path.label":"Background","path.title":"Education and experience",
    "contact.label":"Contact","contact.title":"Available for a final-year internship",
    "contact.lead":"Six months in France or Morocco, January to July 2027, internship agreement provided by ENSA. I am interested in GRC, DevSecOps, SOC, pentesting or CTI roles.",
    "contact.write":"Send an email","contact.cvLong":"Detailed CV (French, PDF)","contact.phone":"Phone","contact.loc":"Location","contact.locv":"El Jadida, Morocco · open to France and Morocco",
    "foot.src":"Site source code",
    "m.problem":"Context","m.archi":"Architecture","m.did":"My work","m.limits":"Known limits","m.repo":"View the GitHub repo","m.role":"Role","m.when":"Period"
  }
};

/* ===================== PROJECTS ===================== */
const PROJECTS = [
  {
    id:"ctf", cats:["offensive"], tag:"comp", tagLabel:{fr:"Compétition · SANS Institute",en:"Competition · SANS Institute"},
    cover:null, coverHtml:"ctf",
    title:{fr:"Cyber Quest CTF — 8e place",en:"Cyber Quest CTF — 8th place"},
    sub:{fr:"Top 10 international d'une compétition de 72 h organisée par SANS Institute, sur tout le spectre de la sécurité offensive.",
         en:"International Top 10 in a 72-hour competition run by SANS Institute, covering the full offensive-security spectrum."},
    metric:{v:"8e / Top 10",fr:"classement international final",en:"final international ranking"},
    chips:["Web & API","SSRF","Pwn / ROP","Reverse","Forensics","Crypto"],
    when:{fr:"10/2026",en:"Oct 2026"},
    role:{fr:"Compétiteur",en:"Competitor"},
    labels:{archi:{fr:"Épreuves",en:"Challenges"},did:{fr:"Le défi qui m'a le plus appris",en:"The challenge that taught me the most"}},
    problem:{fr:"Compétition internationale de 72 heures organisée par SANS Institute : une série de défis à résoudre en temps limité, sur l'ensemble du spectre de la sécurité offensive.",
             en:"A 72-hour international competition run by SANS Institute: a series of time-boxed challenges across the whole offensive-security spectrum."},
    archi:{fr:"Exploitation web et vulnérabilités d'API, exploitation binaire (buffer overflows, chaînes ROP), rétro-ingénierie de code obfusqué, forensics approfondie et cryptanalyse de chiffrements personnalisés.",
           en:"Web exploitation and API vulnerabilities, binary exploitation (buffer overflows, ROP chains), reverse engineering of obfuscated code, deep-dive forensics and breaking custom cryptography."},
    did:{fr:["Un défi SSRF à 400 points m'a bloqué six heures : la vulnérabilité était identifiée, mais il manquait l'identifiant qui débloquait la suite.",
             "Plutôt que de forcer à l'aveugle, j'ai étudié les identifiants que l'application exposait déjà (U-01XX, I-30XX, W-50XX…) : chaque famille suivait une convention cachée, qui m'a permis de déduire les bons identifiants et de valider le défi.",
             "Ce que j'en retiens : la persévérance compte, mais la reconnaissance de motifs compte davantage. Un système finit toujours par révéler sa logique à qui apprend à la lire."],
         en:["A 400-point SSRF challenge held me for six hours: the vulnerability was clear, but I was missing the identifier that unlocked the next step.",
             "Instead of brute-forcing, I studied the identifiers the application already exposed (U-01XX, I-30XX, W-50XX…): each family followed a hidden convention, which let me infer the right IDs and solve the challenge.",
             "What I took away: persistence matters, but pattern recognition matters more. A system always ends up revealing its logic to whoever learns to read it."]},
    proof:[{v:"8e",fr:"place, Top 10 international",en:"place, international Top 10"},
           {v:"72 h",fr:"de compétition",en:"of competition"},
           {v:"400",fr:"points pour le défi SSRF résolu",en:"points for the solved SSRF challenge"}],
    limits:null,
    gallery:[],
    link:{href:"https://www.linkedin.com/posts/hamza-bahalloul-a30189342_cybersecurity-ctf-sans-share-7520488292639952898-M162/",fr:"Lire le post LinkedIn",en:"Read the LinkedIn post"},
    repo:null
  },
  {
    id:"cyber360", cats:["offensive","ia","grc"], tag:"stage", tagLabel:{fr:"Stage · AZunix",en:"Internship · AZunix"},
    cover:"assets/img/cyber360/dashboard_score.jpg",
    title:"Cyber360",
    sub:{fr:"SaaS multi-tenant d'EASM & Cyber Threat Intelligence, conçu seul de bout en bout.",
         en:"Multi-tenant EASM & Cyber Threat Intelligence SaaS, built solo end-to-end."},
    metric:{v:"×237",fr:"corrélation CTI (2,28 s → 9,6 ms)",en:"CTI correlation (2.28 s → 9.6 ms)"},
    chips:["FastAPI","Celery","Redis","PostgreSQL","React/TS","MITRE ATT&CK","Gemini","Docker"],
    when:{fr:"07 → 09/2026 · Rabat",en:"Jul → Sep 2026 · Rabat"},
    role:{fr:"Conception & développement intégral (solo)",en:"Full design & development (solo)"},
    problem:{fr:"Deux fléaux rongent la sécurité externe des organisations : le Shadow IT (sous-domaines oubliés, serveurs de test exposés) et l'alert fatigue — des listes de vulnérabilités si longues que plus personne ne les traite.",
             en:"Two plagues erode external security: Shadow IT (forgotten subdomains, exposed test servers) and alert fatigue — vulnerability lists so long nobody acts on them."},
    archi:{fr:"Backend 100 % asynchrone (FastAPI, Celery, Redis), persistance PostgreSQL via SQLAlchemy, 5 modules métier en microservices sous Docker Compose. Modèle de données multi-tenant à isolation stricte par client. SPA React 18 / TypeScript (Tailwind) : authentification JWT avec rotation des refresh tokens, RBAC (Admin, Analyste, lecture seule) et tableaux de bord analytiques.",
           en:"Fully async backend (FastAPI, Celery, Redis), PostgreSQL via SQLAlchemy, 5 business modules as microservices under Docker Compose. Strict per-tenant isolation data model. React 18 / TypeScript (Tailwind) SPA: JWT auth with refresh-token rotation, RBAC (Admin, Analyst, read-only) and analytics dashboards."},
    did:{fr:["Découverte automatisée de la surface d'attaque externe (sous-domaines, scans, TLS).",
             "Risk Engine déterministe (notation type CVSS) croisant les vulnérabilités avec MITRE ATT&CK pour prioriser les menaces réelles.",
             "Module anti-typosquatting : fuzzing DNS, scraping HTML et détection de sites clones par similarité de Ratcliff/Obershelp (seuil 85 %).",
             "Copilote LLM (Google Gemini) alimenté par un flux déterministe (JSON) pour produire synthèses exécutives CTI et plans de remédiation en limitant les hallucinations."],
         en:["Automated external attack-surface discovery (subdomains, scans, TLS).",
             "Deterministic Risk Engine (CVSS-style scoring) crossing vulnerabilities with MITRE ATT&CK to prioritise real threats.",
             "Anti-typosquatting module: DNS fuzzing, HTML scraping and clone-site detection via Ratcliff/Obershelp similarity (85% threshold).",
             "LLM copilot (Google Gemini) fed by a deterministic JSON stream to produce CTI executive briefs and remediation plans while limiting hallucinations."]},
    proof:[{v:"×237",fr:"corrélation CTI par hash map en mémoire vs parcours linéaire, sur 50 000 vulnérabilités",en:"in-memory hash-map CTI correlation vs linear scan, over 50,000 vulnerabilities"},
           {v:"5",fr:"modules métier en microservices",en:"business modules as microservices"},
           {v:"85 %",fr:"seuil de détection des domaines sosies",en:"look-alike domain detection threshold"}],
    limits:{fr:"Les estimations d'exposition financière sont indicatives (références sectorielles publiques), pas une évaluation actuarielle. Le copilote LLM reste un outil d'aide : chaque synthèse est marquée « à valider ».",
            en:"Financial-exposure estimates are indicative (public sector benchmarks), not an actuarial assessment. The LLM copilot stays an assistant: each brief is flagged \"to validate\"."},
    gallery:[
      {img:"assets/img/cyber360/dashboard_score.jpg",wide:true,fr:"Score de sécurité global & risque BEC",en:"Global security score & BEC risk"},
      {img:"assets/img/cyber360/mitre_matrix.jpg",wide:true,fr:"Matrice MITRE ATT&CK — techniques exposées & groupes pertinents",en:"MITRE ATT&CK matrix — exposed techniques & relevant groups"},
      {img:"assets/img/cyber360/killchain.jpg",fr:"Scénarios d'attaque corrélés (kill chain)",en:"Correlated attack scenarios (kill chain)"},
      {img:"assets/img/cyber360/risks_financial.jpg",fr:"Risques priorisés & exposition financière",en:"Prioritised risks & financial exposure"},
      {img:"assets/img/cyber360/threat_landscape.jpg",fr:"Threat Landscape — acteurs corrélés aux vulnérabilités",en:"Threat Landscape — actors mapped to vulnerabilities"},
      {img:"assets/img/diagrams/cyber360_easm_flow.webp",fr:"Architecture EASM → MITRE → CTI → remédiation",en:"EASM → MITRE → CTI → remediation architecture"}
    ],
    note:{fr:"Captures d'une démo interne ; le domaine client et les IP ont été floutés.",en:"Internal demo screenshots; client domain and IPs are blurred."},
    repo:"https://github.com/h-4mza/Plateforme-Cyber360-EASM-CTI-"
  },
  {
    id:"tenantguard", cats:["devsecops","offensive"], tag:"perso", tagLabel:{fr:"Projet perso",en:"Personal project"},
    cover:null, coverHtml:"tg",
    title:"TenantGuard",
    sub:{fr:"SaaS RAG multi-tenant rendu vulnérable, puis audité, durci et instrumenté pour la détection.",
         en:"Multi-tenant RAG SaaS made vulnerable, then audited, hardened and instrumented for detection."},
    metric:{v:"7 / 8",fr:"vulnérabilités exploitées, dont 2 critiques (CVSS 9,1)",en:"vulnerabilities exploited, incl. 2 critical (CVSS 9.1)"},
    chips:["FastAPI","ChromaDB","GitHub Actions","Semgrep","Trivy","OWASP ZAP","Loki/Grafana","pytest"],
    when:{fr:"08 → 10/2026",en:"Aug → Oct 2026"},
    role:{fr:"Dev, pentesteur, puis défenseur (solo)",en:"Dev, pentester, then defender (solo)"},
    problem:{fr:"Les SaaS B2B mêlant multi-tenant et RAG (IA générative) présentent une surface d'attaque hybride : une rupture d'isolation entre clients expose directement de la propriété intellectuelle. J'ai voulu éprouver le cycle complet : casser, prouver, corriger, détecter.",
             en:"B2B SaaS combining multi-tenancy and RAG (generative AI) has a hybrid attack surface: a broken tenant boundary leaks intellectual property directly. I wanted to exercise the full cycle: break, prove, fix, detect."},
    archi:{fr:"Application RAG (FastAPI, PostgreSQL, ChromaDB, Gemini, Docker, conteneur non-root). Pipeline GitHub Actions en 6 jobs, actions épinglées par SHA : SAST (Semgrep), SCA (pip-audit), secrets (Gitleaks), scan d'image (Trivy, bloquant en cas de faille critique ou élevée corrigeable), DAST (OWASP ZAP, informatif), SBOM (Syft). Les résultats SARIF alimentent le registre de risques GRC-as-Code. Détection temps réel : audit JSON structuré → Promtail → Loki → Grafana Unified Alerting.",
           en:"RAG app (FastAPI, PostgreSQL, ChromaDB, Gemini, Docker, non-root container). 6-job GitHub Actions pipeline with SHA-pinned actions: SAST (Semgrep), SCA (pip-audit), secrets (Gitleaks), image scan (Trivy, blocking on fixable critical or high findings), DAST (OWASP ZAP, informational), SBOM (Syft). SARIF results feed the GRC-as-Code risk register. Real-time detection: structured JSON audit → Promtail → Loki → Grafana Unified Alerting."},
    did:{fr:["Pentest web/API manuel (Burp Suite, jwt_tool, scripts PyJWT) : 8 vulnérabilités documentées, 7 exploitées avec preuves — forge de jetons JWT, expiration non vérifiée, IDOR/BOLA cross-tenant, upload non restreint & path traversal, fuite vectorielle cross-tenant dans le RAG, injection de prompt, secrets codés en dur.",
             "Classement OWASP API Top 10 (2023) et OWASP Top 10 LLM ; rapport d'audit avec scores CVSS v3.1.",
             "Remédiation puis vérification par rejeu de chaque exploitation, avec détection et correction d'une régression ; 25 tests automatisés (pytest).",
             "7 règles de détection mappées MITRE ATT&CK sur logs structurés, provisionnées en code ; simulation d'intrusion avec un MTTD de 46,5 s ; runbooks d'incident et post-mortem blameless."],
         en:["Manual web/API pentest (Burp Suite, jwt_tool, PyJWT scripts): 8 documented vulnerabilities, 7 exploited with proof — JWT token forgery, no expiry check, cross-tenant IDOR/BOLA, unrestricted upload & path traversal, cross-tenant vector leak in RAG, prompt injection, hard-coded secrets.",
             "Mapped to OWASP API Top 10 (2023) and OWASP Top 10 for LLM; audit report with CVSS v3.1 scores.",
             "Remediation then replay-verification of every exploit, including catching and fixing a regression; 25 automated tests (pytest).",
             "7 MITRE ATT&CK-mapped detection rules on structured logs, provisioned as code; intrusion simulation with a 46.5 s MTTD; incident runbooks and a blameless post-mortem."]},
    proof:[{v:"7 / 8",fr:"vulnérabilités exploitées avec preuves",en:"vulnerabilities exploited with proof"},
           {v:"46,5 s",fr:"temps moyen de détection (MTTD) en simulation d'intrusion",en:"mean time to detect (MTTD) in an intrusion simulation"},
           {v:"25",fr:"tests automatisés (pytest)",en:"automated tests (pytest)"},
           {v:"3 / 4",fr:"phases d'attaque détectées (dont 1 partielle)",en:"attack phases detected (1 partially)"}],
    limits:{fr:"Honnêtement documenté : 3 phases d'attaque sur 4 sont détectées, dont une partiellement ; la reconnaissance non authentifiée et les jetons forgés restent des angles morts d'audit. En l'absence de table de révocation, neutraliser un jeton volé impose une rotation globale du secret.",
            en:"Honestly documented: 3 of 4 attack phases are detected, one only partially; unauthenticated recon and forged tokens remain audit blind spots. Without a revocation store, killing a stolen token forces a global secret rotation."},
    gallery:[],
    extraHtml:true,
    repo:"https://github.com/h-4mza/TenantGuard"
  },
  {
    id:"grc", cats:["grc","devsecops"], tag:"perso", tagLabel:{fr:"Projet perso",en:"Personal project"},
    cover:"assets/img/grc/heatmap.jpg",
    title:"GRC-as-Code",
    sub:{fr:"Plateforme de conformité « as code » appliquée à un centre d'imagerie médicale (étude de cas).",
         en:"A compliance-as-code platform applied to a medical imaging centre (case study)."},
    metric:{v:"93",fr:"contrôles ISO 27001:2022 évalués (SoA)",en:"ISO 27001:2022 controls assessed (SoA)"},
    chips:["EBIOS RM","ISO 27001","Typer","FastAPI","Streamlit","YAML","SARIF","NIST CSF 2.0"],
    when:{fr:"07 → 09/2026",en:"Jul → Sep 2026"},
    role:{fr:"Conception & développement (solo)",en:"Design & development (solo)"},
    problem:{fr:"En santé, la GRC vit dans des fichiers Excel statiques : obsolètes dès le lendemain de l'audit, sans lien entre une faille technique (SecOps) et le registre des risques.",
             en:"In healthcare, GRC lives in static Excel files: stale the day after the audit, with no link between a technical flaw (SecOps) and the risk register."},
    archi:{fr:"La conformité devient du code : risques, contrôles et matrices déclarés en YAML, versionnés sous Git, ingérés via une CLI (Typer) puis une API FastAPI (PostgreSQL, SQLAlchemy), avec évaluation automatisée des contrôles et des risques. Un parseur SARIF relie les vulnérabilités réelles (ex. Trivy) aux scénarios de risque via MITRE ATT&CK. Restitution dans un tableau de bord CISO Streamlit (heatmap) ; synchronisation ITSM (Jira) en ligne de commande.",
           en:"Compliance becomes code: risks, controls and matrices declared in YAML, versioned in Git, ingested through a CLI (Typer) then a FastAPI API (PostgreSQL, SQLAlchemy), with automated control and risk evaluation. A SARIF parser links real vulnerabilities (e.g. Trivy) to risk scenarios via MITRE ATT&CK. Delivered in a Streamlit CISO dashboard (heatmap); ITSM (Jira) sync from the command line."},
    did:{fr:["Analyse EBIOS RM complète (valeurs métier, biens supports, scénarios stratégiques et opérationnels) : 10 scénarios de risque — ransomware sur PACS, exfiltration via VPN, compromission de la supply chain.",
             "Évaluation des 93 contrôles ISO 27001:2022 et Déclaration d'Applicabilité (SoA) prête pour audit, avec exclusions justifiées.",
             "Couverture croisée NIS2, RGPD, HDS et NIST CSF 2.0.",
             "Risque résiduel et maturité des contrôles recalculés en quelques secondes, contre plusieurs jours manuellement."],
         en:["Full EBIOS RM analysis (business values, supporting assets, strategic and operational scenarios): 10 risk scenarios — ransomware on PACS, VPN exfiltration, supply-chain compromise.",
             "Assessment of the 93 ISO 27001:2022 controls and an audit-ready Statement of Applicability (SoA), with justified exclusions.",
             "Cross-mapped coverage of NIS2, GDPR, HDS and NIST CSF 2.0.",
             "Residual risk and control maturity recomputed in seconds, versus days by hand."]},
    proof:[{v:"10",fr:"scénarios de risque EBIOS RM",en:"EBIOS RM risk scenarios"},
           {v:"93",fr:"contrôles ISO 27001 évalués",en:"ISO 27001 controls assessed"},
           {v:"4",fr:"référentiels croisés (NIS2, RGPD, HDS, NIST)",en:"frameworks cross-mapped (NIS2, GDPR, HDS, NIST)"}],
    limits:{fr:"Étude de cas sur un centre d'imagerie fictif : les valeurs métier et périmètres sont illustratifs. L'outil évalue la conformité déclarée ; il ne remplace pas un audit terrain ni une certification.",
            en:"Case study on a fictional imaging centre: business values and scope are illustrative. The tool assesses declared compliance; it doesn't replace a field audit or certification."},
    gallery:[
      {img:"assets/img/grc/overview.jpg",wide:true,fr:"Vue d'ensemble du pilotage GRC",en:"GRC steering overview"},
      {img:"assets/img/grc/heatmap.jpg",fr:"Heatmap des risques (gravité × vraisemblance)",en:"Risk heatmap (severity × likelihood)"},
      {img:"assets/img/grc/compliance.jpg",fr:"Couverture réglementaire croisée",en:"Cross-framework compliance coverage"},
      {img:"assets/img/grc/soa_matrix_preview.jpg",wide:true,fr:"Déclaration d'Applicabilité (SoA) ISO 27001",en:"ISO 27001 Statement of Applicability (SoA)"}
    ],
    repo:"https://github.com/h-4mza/grc-as-code-imaging-center"
  },
  {
    id:"cheattrace", cats:["ia","offensive"], tag:"acad", tagLabel:{fr:"Académique · projet de 2e année",en:"Academic · 2nd-year project"},
    cover:"assets/img/cheattrace/dashboard.jpg",
    title:"CheatTrace",
    sub:{fr:"Plateforme forensique de détection de fraude académique par IA, architecture multi-agents.",
         en:"AI-driven forensic platform for academic-fraud detection, multi-agent architecture."},
    metric:{v:"1 225",fr:"paires comparées pour 50 étudiants",en:"pairs compared across 50 students"},
    chips:["Gemini OCR","CrewAI","SBERT","TF-IDF","NetworkX","Louvain","ChromaDB","n8n"],
    when:{fr:"02 → 05/2026 · ENSAJ",en:"Feb → May 2026 · ENSAJ"},
    role:{fr:"Projet de fin d'année (2e année CCN)",en:"End-of-year project (2nd year, CCN)"},
    problem:{fr:"La surveillance classique ne détecte ni les réponses générées par IA, ni les brouillons reformulés partagés en réseau entre étudiants.",
             en:"Classic invigilation catches neither AI-generated answers nor reworded drafts shared across a student network."},
    archi:{fr:"Analyse de copies d'examen manuscrites : pipeline OCR multimodal (Gemini) puis analyse stylométrique par NLP. Architecture multi-agents CrewAI — Expert NLP, Analyste de Fraude Collaborative, Juge Forensique. Similarités sémantiques (SBERT) et lexicales (TF-IDF), mémoire vectorielle inter-sessions (ChromaDB), cartographie des réseaux de triche par graphes (NetworkX, algorithme de Louvain). Principe déterministe : Python calcule la vérité (scores, clusters), le LLM se limite à la mise en forme du rapport.",
           en:"Handwritten exam-sheet analysis: multimodal OCR pipeline (Gemini) then NLP stylometry. CrewAI multi-agent architecture — NLP Expert, Collaborative-Fraud Analyst, Forensic Judge. Semantic (SBERT) and lexical (TF-IDF) similarity, cross-session vector memory (ChromaDB), cheating-network mapping via graphs (NetworkX, Louvain). Deterministic by design: Python computes the truth (scores, clusters), the LLM only formats the report."},
    did:{fr:["Pipeline OCR robuste : détection et isolement des lignes manuscrites avant reconnaissance, pour fiabiliser l'extraction.",
             "Trois agents spécialisés orchestrés (détection IA, similarité collaborative, verdict forensique).",
             "Cartographie des coalitions par détection de communautés (Louvain) et génération d'un rapport forensique PDF par copie suspecte.",
             "Validation sur 95+ investigations : copies 100 % IA, copies hybrides, copies authentiques et 2 clusters collaboratifs."],
         en:["Robust OCR pipeline: detecting and isolating handwritten lines before recognition to make extraction reliable.",
             "Three specialised agents orchestrated (AI detection, collaborative similarity, forensic verdict).",
             "Coalition mapping via community detection (Louvain) and a per-suspect forensic PDF report.",
             "Validated on 95+ investigations: 100% AI copies, hybrid copies, genuine copies and 2 collaborative clusters."]},
    proof:[{v:"1 225",fr:"paires comparées (50 étudiants)",en:"pairs compared (50 students)"},
           {v:"95+",fr:"investigations validées",en:"validated investigations"},
           {v:"3",fr:"agents IA spécialisés (CrewAI)",en:"specialised AI agents (CrewAI)"}],
    limits:{fr:"Outil d'aide à la décision : le verdict final relève du jury académique. La qualité de l'OCR dépend de la lisibilité des copies ; une mention légale accompagne chaque rapport. Présenté devant jury le 18 mai 2026.",
            en:"Decision-support tool: the final verdict belongs to the academic board. OCR quality depends on sheet legibility; each report carries a legal notice. Defended before the board on 18 May 2026."},
    gallery:[
      {img:"assets/img/cheattrace/dashboard.jpg",wide:true,fr:"Tableau de bord — taux de fraude & investigations",en:"Dashboard — fraud rate & investigations"},
      {img:"assets/img/cheattrace/ocr_lines.png",fr:"Isolement des lignes manuscrites avant OCR",en:"Isolating handwritten lines before OCR"},
      {img:"assets/img/cheattrace/collusion_graph.jpg",fr:"Graphe de collusion & verdict du jury",en:"Collusion graph & board verdict"},
      {img:"assets/img/cheattrace/multiagent.png",fr:"Architecture multi-agents CrewAI",en:"CrewAI multi-agent architecture"},
      {img:"assets/img/cheattrace/n8n_workflow.jpg",wide:true,fr:"Orchestration du workflow (n8n)",en:"Workflow orchestration (n8n)"},
      {img:"assets/img/cheattrace/registre.jpg",wide:true,fr:"Registre forensique des investigations",en:"Forensic register of investigations"}
    ],
    repo:"https://github.com/h-4mza/plateforme-confiance-numerique"
  },
  {
    id:"nftshieldx", cats:["offensive","ia"], tag:"acad", tagLabel:{fr:"Académique · équipe de 4",en:"Academic · team of 4"},
    cover:"assets/img/nftshieldx/collection.webp",
    title:"NFTShieldX",
    sub:{fr:"Marketplace NFT décentralisée anti-contrefaçon, avec Zero-Knowledge Proof.",
         en:"Decentralised anti-counterfeiting NFT marketplace, with Zero-Knowledge Proof."},
    metric:{v:"93–100",fr:"scores Lighthouse (perf. / SEO)",en:"Lighthouse scores (perf. / SEO)"},
    chips:["Solidity","Hardhat","OpenZeppelin","Ethers.js","ZKP","IPFS","FAISS","pHash"],
    when:{fr:"02 → 05/2025 · Scrum, 8 sprints",en:"Feb → May 2025 · Scrum, 8 sprints"},
    role:{fr:"Équipe de 4 étudiants, méthode Scrum",en:"Team of 4 students, Scrum"},
    problem:{fr:"Contrefaçons d'œuvres numériques, frais de transaction élevés et risque de perte d'actifs hébergés sur des serveurs centralisés.",
             en:"Counterfeited digital works, high transaction fees and loss risk for assets hosted on centralised servers."},
    archi:{fr:"Smart Contracts Solidity (Hardhat, OpenZeppelin, protection contre la réentrance) déployés sur le réseau de test Sepolia ; Web3 via Ethers.js ; Zero-Knowledge Proof pour la confidentialité. Authentification sans mot de passe via MetaMask ; stockage des NFTs et métadonnées sur IPFS/Pinata ; profils sous MongoDB. Détection de fraude en Python (SIFT, FAISS, OpenCV, hachage perceptuel pHash/SHA-256).",
           en:"Solidity smart contracts (Hardhat, OpenZeppelin, re-entrancy protection) deployed on the Sepolia testnet; Web3 via Ethers.js; Zero-Knowledge Proof for privacy. Passwordless auth via MetaMask; NFTs and metadata on IPFS/Pinata; profiles in MongoDB. Python fraud detection (SIFT, FAISS, OpenCV, perceptual hashing pHash/SHA-256)."},
    did:{fr:["Contrats sécurisés (protection réentrance, audit interne) déployés et testés sur Sepolia.",
             "Détection de fraude bloquant le minting d'une image déjà existante ou visuellement similaire (pHash + FAISS).",
             "Flux Web3 complet : connexion MetaMask, mint, listing, achat, stockage décentralisé IPFS/Pinata.",
             "Méthode Scrum sur 8 sprints en équipe de 4."],
         en:["Secured contracts (re-entrancy protection, internal audit) deployed and tested on Sepolia.",
             "Fraud detection blocking the minting of an already-existing or visually-similar image (pHash + FAISS).",
             "Full Web3 flow: MetaMask connect, mint, list, buy, decentralised IPFS/Pinata storage.",
             "Scrum over 8 sprints in a team of 4."]},
    proof:[{v:"16",fr:"NFTs mintés (4 créateurs, 10 transactions)",en:"NFTs minted (4 creators, 10 transactions)"},
           {v:"93–100",fr:"Lighthouse perf./access./SEO",en:"Lighthouse perf./access./SEO"},
           {v:"8",fr:"sprints Scrum",en:"Scrum sprints"}],
    limits:{fr:"Déployé sur testnet Sepolia (pas de mainnet), avec une validation à petite échelle. La détection de similarité visuelle couvre les copies et quasi-copies, pas toutes les transformations adverses.",
            en:"Deployed on the Sepolia testnet (no mainnet), with small-scale validation. Visual-similarity detection covers copies and near-copies, not every adversarial transformation."},
    gallery:[
      {img:"assets/img/nftshieldx/collection.webp",wide:true,fr:"Catalogue de la marketplace",en:"Marketplace catalogue"},
      {img:"assets/img/nftshieldx/lighthouse.jpg",wide:true,fr:"Audit Lighthouse (93 / 90 / 96 / 100)",en:"Lighthouse audit (93 / 90 / 96 / 100)"},
      {img:"assets/img/nftshieldx/mint.jpg",fr:"Mint avec signature MetaMask (Sepolia)",en:"Mint with MetaMask signature (Sepolia)"},
      {img:"assets/img/nftshieldx/listings.jpg",fr:"Listings & prix en ETH",en:"Listings & ETH pricing"}
    ],
    repo:null
  },
  {
    id:"snake", cats:["offensive"], tag:"perso", tagLabel:{fr:"Lab · writeup",en:"Lab · writeup"},
    cover:"assets/img/snake/nmap.jpg",
    title:{fr:"Snake — writeup de lab CTF",en:"Snake — CTF lab writeup"},
    sub:{fr:"Compromission d'une machine volontairement vulnérable, en environnement isolé.",
         en:"Compromising a deliberately vulnerable machine, in an isolated environment."},
    metric:{v:"root",fr:"chaîne complète jusqu'à l'élévation de privilèges",en:"full chain up to privilege escalation"},
    chips:["Nmap","Gobuster","Burp Suite","Kali Linux","Linux privesc"],
    when:{fr:"Lab personnel",en:"Personal lab"},
    role:{fr:"Pentest offensif (environnement de lab isolé)",en:"Offensive pentest (isolated lab environment)"},
    problem:{fr:"Entraînement offensif structuré : partir d'une machine inconnue et dérouler une méthodologie d'intrusion propre, documentée de bout en bout, dans un lab fermé.",
             en:"Structured offensive practice: start from an unknown machine and run a clean, end-to-end intrusion methodology in a closed lab."},
    archi:{fr:"Méthodologie en phases : reconnaissance réseau et cartographie des services (Nmap/Zenmap), énumération web et découverte de contenu (Gobuster), interception et analyse des échanges HTTP (Burp Suite), obtention d'un accès initial, puis élévation de privilèges locale jusqu'au compte administrateur.",
           en:"Phased methodology: network recon and service mapping (Nmap/Zenmap), web enumeration and content discovery (Gobuster), HTTP interception and analysis (Burp Suite), initial foothold, then local privilege escalation to the administrator account."},
    did:{fr:["Cartographie complète des services exposés et identification des points d'entrée.",
             "Énumération web méthodique pour révéler les ressources cachées.",
             "Analyse du comportement applicatif et de la logique d'authentification à l'aide d'un proxy d'interception.",
             "Enchaînement accès initial → élévation de privilèges, avec chaque étape documentée dans un writeup."],
         en:["Full mapping of exposed services and identification of entry points.",
             "Methodical web enumeration to surface hidden resources.",
             "Analysis of application behaviour and authentication logic via an intercepting proxy.",
             "Chaining initial foothold → privilege escalation, each step documented in a writeup."]},
    proof:[{v:"3",fr:"phases offensives enchaînées",en:"offensive phases chained"},
           {v:"root",fr:"niveau d'accès final atteint",en:"final access level reached"}],
    limits:{fr:"Exercice pédagogique sur une cible de lab conçue pour être vulnérable, en réseau isolé. Aucun identifiant ni secret n'est reproduit ici : l'objectif est la méthode, pas la divulgation.",
            en:"Educational exercise on a lab target built to be vulnerable, on an isolated network. No credentials or secrets are reproduced here: the point is the method, not disclosure."},
    gallery:[
      {img:"assets/img/snake/nmap.jpg",wide:true,fr:"Reconnaissance réseau & détection de services (Nmap/Zenmap)",en:"Network recon & service detection (Nmap/Zenmap)"},
      {img:"assets/img/snake/gobuster.jpg",fr:"Énumération web (Gobuster)",en:"Web enumeration (Gobuster)"},
      {img:"assets/img/snake/burp.jpg",fr:"Interception HTTP (Burp Suite)",en:"HTTP interception (Burp Suite)"}
    ],
    repo:null
  }
];

/* TenantGuard extra tables (findings + detection) */
function tenantguardExtra(L){
  const f = L==="fr" ? ["Vulnérabilité","OWASP","CVSS","Sévérité"] : ["Vulnerability","OWASP","CVSS","Severity"];
  const rows = [
    ["JWT — clé faible & forge de jetons","API2:2023","9.1",L==="fr"?"Critique":"Critical"],
    ["Secrets codés en dur & versionnés","API8:2023","9.1",L==="fr"?"Critique":"Critical"],
    ["IDOR / BOLA cross-tenant (documents)","API1:2023","8.8",L==="fr"?"Élevé":"High"],
    ["Upload non restreint & path traversal","API8:2023","8.8",L==="fr"?"Élevé":"High"],
    ["Absence de vérification d'expiration JWT","API2:2023","7.1",L==="fr"?"Élevé":"High"],
    ["Injection de prompt (RAG)","LLM01","7.1",L==="fr"?"Élevé":"High"],
    ["Fuite vectorielle cross-tenant (RAG)","LLM02","6.5",L==="fr"?"Moyen":"Medium"]
  ];
  const det = L==="fr"
    ? [["CROSS_TENANT_ACCESS","Critical","T1078 / T1190"],["ACCOUNT_TAKEOVER_SUSPECT","Critical","T1110"],["BRUTE_FORCE_LOGIN","High","T1110"],["CREDENTIAL_STUFFING","High","T1110.004"],["EXFILTRATION_VOLUME","Medium","T1530"],["TOKEN_ABUSE","Medium","T1528"],["UPLOAD_ABUSE","Medium","T1105"]]
    : [["CROSS_TENANT_ACCESS","Critical","T1078 / T1190"],["ACCOUNT_TAKEOVER_SUSPECT","Critical","T1110"],["BRUTE_FORCE_LOGIN","High","T1110"],["CREDENTIAL_STUFFING","High","T1110.004"],["EXFILTRATION_VOLUME","Medium","T1530"],["TOKEN_ABUSE","Medium","T1528"],["UPLOAD_ABUSE","Medium","T1105"]];
  const sevClass = s => /Crit/.test(s)?"crit":(/High|Élev/.test(s)?"warn":"muted");
  return `
  <div class="m-block">
    <h4>${L==="fr"?"Matrice des vulnérabilités auditées":"Audited vulnerability matrix"}</h4>
    <div class="tg-table">
      <table><thead><tr>${f.map(h=>`<th>${h}</th>`).join("")}</tr></thead>
      <tbody>${rows.map(r=>`<tr><td>${r[0]}</td><td class="mono">${r[1]}</td><td class="mono">${r[2]}</td><td><span class="sev ${sevClass(r[3])}">${r[3]}</span></td></tr>`).join("")}</tbody></table>
    </div>
  </div>
  <div class="m-block">
    <h4>${L==="fr"?"Règles de détection (mappées MITRE ATT&CK)":"Detection rules (MITRE ATT&CK mapped)"}</h4>
    <div class="tg-table">
      <table><thead><tr><th>${L==="fr"?"Règle":"Rule"}</th><th>${L==="fr"?"Sévérité":"Severity"}</th><th>MITRE</th></tr></thead>
      <tbody>${det.map(r=>`<tr><td class="mono">${r[0]}</td><td><span class="sev ${sevClass(r[1])}">${r[1]}</span></td><td class="mono">${r[2]}</td></tr>`).join("")}</tbody></table>
    </div>
  </div>`;
}

function ctfCover(){
  return `<div class="tg-cover ctf-cover" aria-hidden="true">
    <div class="ctf-rank mono"><span class="ctf-k">FINAL RANK</span><span class="ctf-n">#8</span><span class="ctf-k">TOP 10 · 72 H</span></div>
    <div class="tg-term mono"><span>SANS Institute — Cyber Quest CTF</span><span class="ok">✔ web · api · ssrf · pwn · reverse · forensics · crypto</span></div></div>`;
}
const COVERS = {tg:()=>tgCover(), ctf:()=>ctfCover()};

function tgCover(){
  const st=["SAST","SCA","Secrets","Trivy","DAST","SBOM"];
  return `<div class="tg-cover" aria-hidden="true">
    <div class="tg-term mono"><span>$ pentest --target tenantguard</span><span class="c">[CRIT] JWT forge · CVSS 9.1</span><span class="w">[HIGH] IDOR cross-tenant</span><span class="w">[HIGH] RAG prompt injection</span><span class="ok">✔ remediated · replayed · 25 tests</span></div>
    <div class="tg-pipe">${st.map(x=>`<span>${x}</span>`).join("")}</div></div>`;
}

/* ===================== SKILLS ===================== */
const SKILLS = [
  {t:{fr:"Gouvernance, risques et conformité",en:"Governance, risk and compliance"},items:"ISO 27001:2022, EBIOS RM, NIS2, RGPD, HDS, NIST CSF 2.0, déclaration d'applicabilité (SoA), modélisation STRIDE"},
  {t:{fr:"Sécurité offensive",en:"Offensive security"},items:"Ethical hacking, pentest web/API (Burp Suite, jwt_tool, ffuf), exploitation binaire (buffer overflow, chaînes ROP), reverse engineering, cryptanalyse, OWASP API Top 10, OWASP Top 10 LLM, CVSS v3.1, Kali Linux"},
  {t:{fr:"Détection et renseignement",en:"Detection and intelligence"},items:"MITRE ATT&CK, CTI, EASM, Loki, Promtail, Grafana, Wireshark, digital forensics"},
  {t:{fr:"DevSecOps et CI/CD",en:"DevSecOps and CI/CD"},items:"GitHub Actions, GitLab CI, Semgrep, Gitleaks, pip-audit, Trivy, OWASP ZAP, SBOM (Syft), SARIF, pytest"},
  {t:{fr:"Développement",en:"Development"},items:"Python (FastAPI, Flask, Celery, SQLAlchemy, Typer), SQL, TypeScript, React, Node.js, Solidity"},
  {t:{fr:"Systèmes, réseaux et cloud",en:"Systems, networks and cloud"},items:"Linux, Docker, PostgreSQL, Redis, TCP/IP, VLAN, IPsec, FortiGate, Active Directory, GNS3"},
  {t:{fr:"IA et données",en:"AI and data"},items:"LLM (Gemini), RAG, CrewAI, SBERT, TF-IDF, OCR multimodal, ChromaDB, NetworkX, n8n"}
];

/* ===================== TIMELINE ===================== */
const TIMELINE = [
  {kind:"edu",when:{fr:"10/2024 → 07/2027",en:"Oct 2024 → Jul 2027"},
   title:{fr:"Cycle Ingénieur — Cybersécurité & Confiance Numérique (CCN)",en:"Engineering cycle — Cybersecurity & Digital Trust (CCN)"},
   org:"ENSA El Jadida (ENSAJ)",
   p:{fr:"Crypto appliquée, pentest & forensics, gestion des risques, gouvernance SI, sécurité réseaux/cloud/BDD, DevOps, sécurité des modèles d'IA, OT/IoT, blockchain, Machine Learning. Diplôme d'ingénieur (Bac+5), juillet 2027.",
      en:"Applied crypto, pentest & forensics, risk management, IS governance, network/cloud/DB security, DevOps, AI-model security, OT/IoT, blockchain, Machine Learning. Engineering degree (MSc level), July 2027."}},
  {kind:"comp",when:{fr:"10/2026",en:"Oct 2026"},
   title:{fr:"8e place (Top 10) — Cyber Quest CTF",en:"8th place (Top 10) — Cyber Quest CTF"},
   org:"SANS Institute",
   p:{fr:"Compétition internationale de 72 h : exploitation web et API, exploitation binaire (buffer overflows, chaînes ROP), rétro-ingénierie, forensics et cryptanalyse.",
      en:"72-hour international competition: web and API exploitation, binary exploitation (buffer overflows, ROP chains), reverse engineering, forensics and cryptanalysis."}},
  {kind:"xp",when:{fr:"07 → 09/2026 · Rabat",en:"Jul → Sep 2026 · Rabat"},
   title:{fr:"Stagiaire Ingénieur Cybersécurité — EASM & CTI",en:"Cybersecurity Engineering Intern — EASM & CTI"},
   org:"AZunix",
   p:{fr:"Conception et développement, seul et de bout en bout, de Cyber360 : SaaS multi-tenant d'EASM et de CTI (moteur de risque contextuel, corrélation MITRE ATT&CK, copilote LLM).",
      en:"Solo, end-to-end design and build of Cyber360: a multi-tenant EASM & CTI SaaS (contextual risk engine, MITRE ATT&CK correlation, LLM copilot)."}},
  {kind:"xp",when:{fr:"07 → 08/2025 · El Jadida",en:"Jul → Aug 2025 · El Jadida"},
   title:{fr:"Stagiaire Réseaux & Sécurité",en:"Networks & Security Intern"},
   org:"TAQA Morocco",
   p:{fr:"Architecture réseau sécurisée inter-sites (VLAN, VPN IPsec), pare-feux FortiGate, centralisation Active Directory/DHCP, maquettage et tests sous GNS3 avant production.",
      en:"Secure inter-site network architecture (VLAN, IPsec VPN), FortiGate firewalls, Active Directory/DHCP centralisation, GNS3 modelling and testing before production."}},
  {kind:"edu",when:{fr:"10/2021 → 07/2024",en:"Oct 2021 → Jul 2024"},
   title:{fr:"Cycle préparatoire intégré",en:"Integrated preparatory cycle"},
   org:"ENSA El Jadida",
   p:{fr:"Mathématiques, physique, algorithmique, programmation et fondamentaux de l'ingénierie.",
      en:"Mathematics, physics, algorithmics, programming and engineering fundamentals."}}
];

/* ===================== RENDER ===================== */
let LANG = localStorage.getItem("lang") || "fr";
const T = k => (I18N[LANG][k] ?? I18N.fr[k] ?? k);
const tx = o => (o && typeof o==="object") ? (o[LANG] ?? o.fr) : o;

function renderProjects(filter="all"){
  const grid = document.getElementById("projGrid");
  const list = PROJECTS.filter(p=>filter==="all"||p.cats.includes(filter));
  grid.innerHTML = list.map(p=>`
    <article class="pcard" data-id="${p.id}" tabindex="0" role="button" aria-label="${tx(p.title)}">
      <div class="pcard-cover">
        ${p.coverHtml?COVERS[p.coverHtml]():`<img src="${p.cover}" alt="" loading="lazy" />`}
      </div>
      <div class="pcard-body">
        <div class="pmeta"><span class="kind">${tx(p.tagLabel)}</span><span>${tx(p.when)}</span></div>
        <h3>${tx(p.title)}</h3>
        <p class="pcard-sub">${tx(p.sub)}</p>
        <div class="pcard-metric"><b>${p.metric.v}</b><span>${tx(p.metric)}</span></div>
        <div class="pchips">${p.chips.slice(0,6).map(c=>`<span>${c}</span>`).join("")}</div>
        <span class="pcard-open">${T("proj.open")}</span>
      </div>
    </article>`).join("");
  grid.querySelectorAll(".pcard").forEach(c=>{
    c.addEventListener("click",()=>openModal(c.dataset.id));
    c.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openModal(c.dataset.id);}});
  });
}

function renderSkills(){
  document.getElementById("skillGrid").innerHTML = SKILLS.map(s=>`<div><dt>${tx(s.t)}</dt><dd>${s.items}</dd></div>`).join("");
}

function renderTimeline(){
  document.getElementById("timeline").innerHTML = TIMELINE.map(e=>`
    <div class="tl-item">
      <div class="tl-when">${tx(e.when)}<span class="tl-kind">${({xp:{fr:"Expérience",en:"Experience"},edu:{fr:"Formation",en:"Education"},comp:{fr:"Compétition",en:"Competition"}})[e.kind][LANG]}</span></div>
      <div><h3>${tx(e.title)}</h3><div class="tl-org">${e.org}</div><p>${tx(e.p)}</p></div>
    </div>`).join("");
}

/* ===================== MODAL ===================== */
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
let lastFocus = null;

function openModal(id){
  const p = PROJECTS.find(x=>x.id===id); if(!p) return;
  lastFocus = document.activeElement;
  const gallery = (p.gallery&&p.gallery.length) ? `
    <div class="m-gallery">${p.gallery.map(g=>`
      <figure class="${g.wide?'wide':''}">
        <img src="${g.img}" alt="${tx(g)}" loading="lazy" data-full="${g.img}" />
        <figcaption>${tx(g)}</figcaption>
      </figure>`).join("")}</div>
    ${p.note?`<p class="m-note">${tx(p.note)}</p>`:""}` : "";
  modalBody.innerHTML = `
    <p class="label">${tx(p.tagLabel)}</p>
    <div class="m-head"><h2>${tx(p.title)}</h2></div>
    <dl class="sheet m-meta">
      <div><dt>${T("m.when")}</dt><dd>${tx(p.when)}</dd></div>
      <div><dt>${T("m.role")}</dt><dd>${tx(p.role)}</dd></div>
      <div><dt>Stack</dt><dd>${p.chips.join(", ")}</dd></div>
    </dl>
    <div class="m-stats">${p.proof.map(s=>`<div class="m-stat"><b>${s.v}</b><span>${tx(s)}</span></div>`).join("")}</div>
    <div class="m-block"><h4>${T("m.problem")}</h4><p>${tx(p.problem)}</p></div>
    <div class="m-block"><h4>${p.labels?.archi?tx(p.labels.archi):T("m.archi")}</h4><p>${tx(p.archi)}</p></div>
    <div class="m-block"><h4>${p.labels?.did?tx(p.labels.did):T("m.did")}</h4><ul>${tx(p.did).map(d=>`<li>${d}</li>`).join("")}</ul></div>
    ${p.extraHtml?tenantguardExtra(LANG):""}
    ${gallery}
    ${p.limits?`<div class="m-block limits"><h4>${T("m.limits")}</h4><p>${tx(p.limits)}</p></div>`:""}
    ${p.link?`<a class="btn btn-line m-repo" href="${p.link.href}" target="_blank" rel="noopener">${tx(p.link)}</a>`:""}
    ${p.repo?`<a class="btn btn-line m-repo" href="${p.repo}" target="_blank" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 8.4 22.9c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 5 18 5.3 18 5.3c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/></svg>${T("m.repo")}</a>`:""}
  `;
  modalBody.querySelectorAll("img[data-full]").forEach(im=>im.addEventListener("click",()=>openLightbox(im.dataset.full)));
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  modal.querySelector(".modal-x").focus();
}
function closeModal(){
  modal.classList.remove("open"); modal.setAttribute("aria-hidden","true");
  document.body.style.overflow=""; lastFocus&&lastFocus.focus();
}
modal.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal();closeLightbox();}});

/* lightbox */
let lb;
function openLightbox(src){
  if(!lb){lb=document.createElement("div");lb.className="lightbox";lb.innerHTML='<img alt="">';document.body.appendChild(lb);lb.addEventListener("click",closeLightbox);}
  lb.querySelector("img").src=src; lb.classList.add("open");
}
function closeLightbox(){lb&&lb.classList.remove("open");}

/* ===================== i18n apply ===================== */
function applyLang(){
  document.documentElement.lang = LANG;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const v = I18N[LANG][el.dataset.i18n];
    if(v!=null) el.textContent = v;
  });
  document.querySelectorAll("#langToggle [data-lang]").forEach(s=>s.classList.toggle("on",s.dataset.lang===LANG));
  document.querySelectorAll("[data-cv-fr]").forEach(a=>{a.href = LANG==="en" ? a.dataset.cvEn : a.dataset.cvFr;});
  renderProjects(currentFilter);
  renderSkills(); renderTimeline();
}
document.getElementById("langToggle").addEventListener("click",()=>{
  LANG = LANG==="fr"?"en":"fr"; localStorage.setItem("lang",LANG); applyLang();
});

/* ===================== theme ===================== */
const themeToggle = document.getElementById("themeToggle");
function setTheme(t){document.documentElement.setAttribute("data-theme",t);localStorage.setItem("theme",t);}
(function initTheme(){const saved=localStorage.getItem("theme");if(saved)document.documentElement.setAttribute("data-theme",saved);})();
themeToggle.addEventListener("click",()=>{
  const cur = document.documentElement.getAttribute("data-theme")
    || "light";
  setTheme(cur==="dark"?"light":"dark");
});

/* ===================== filters ===================== */
let currentFilter="all";
document.getElementById("filters").addEventListener("click",e=>{
  const b=e.target.closest(".chip"); if(!b)return;
  document.querySelectorAll("#filters .chip").forEach(c=>c.classList.remove("on"));
  b.classList.add("on"); currentFilter=b.dataset.filter; renderProjects(currentFilter);
});

/* ===================== reveal + nav ===================== */
const nav=document.getElementById("nav");
// active link
const navObs=new IntersectionObserver(es=>es.forEach(en=>{
  if(en.isIntersecting){const id=en.target.id;document.querySelectorAll(".nav-links a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+id));}
}),{rootMargin:"-45% 0px -50% 0px"});
["methode","projets","competences","parcours","contact"].forEach(id=>{const el=document.getElementById(id);el&&navObs.observe(el);});

/* burger */
const burger=document.getElementById("burger"), navLinks=document.querySelector(".nav-links");
burger.addEventListener("click",()=>{const o=navLinks.classList.toggle("open");burger.setAttribute("aria-expanded",o);});
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{navLinks.classList.remove("open");burger.setAttribute("aria-expanded",false);}));

/* ===================== init ===================== */
document.getElementById("year").textContent=new Date().getFullYear();
applyLang();
