/** Replace with your details, images, and links before deploying. */

export const profile = {
  name: 'Sushant Bhatta',
  title: 'Marketing Analytics & Data Analyst',
  tagline:
    'I turn data into decisions and care about the why behind the numbers. I converted 23 of 44 B2B leads into recurring customers, drove 463 conversions at $0.29 CPC in a graduate capstone campaign, and validated 10M+ records at under 1% error. Trained in marketing analytics and counseling psychology.',
  location: 'Open to remote · hybrid · on-site',
  email: 'sushantbhatta7@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sushantbhatta7/',
  profileImage: '/sushant.jpg',
}

export const carouselSlides = [
  {
    src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80',
    alt: 'Team collaboration and whiteboard planning',
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
    alt: 'Analytics dashboards and business metrics',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80',
    alt: 'Workshop and stakeholder meeting',
  },
]

export const highlights = [
  { value: '4+', label: 'Years in Analytics & Marketing Experience', sub: 'End-to-end analysis • Data → decision' },
  { value: '10+', label: 'Campaigns & Data Projects', sub: 'From analysis → business decisions' },
  { value: '10+', label: 'Analytics Tools & Platforms', sub: 'SQL • Tableau • SPSS • Power BI ' },
  {
    value: '52%',
    label: 'lead-to-customer conversion (23 of 44 B2B leads)',
    sub: '$0.29 CPC on 463 conversions (capstone campaign) • 10M+ records analyzed (<1% error)',
  },
]

export const aboutParagraphs = [
  "I turn data into decisions, and I'm as interested in the why behind the numbers as the numbers themselves. My work spans market research, campaign execution, and statistical analysis, using SQL, Tableau, Power BI, SPSS, GA4, and RapidMiner.",
  'At Golden City Wholesale, I generated 44 B2B leads and converted 23 into recurring customers (52%). In my M.S. in Marketing Analytics & Insights at Wright State University (GPA 3.80), my graduate project campaign drove 463 conversions from 3,413 clicks at $0.29 CPC on a $1,897 budget.',
  "Earlier, I trained in counseling psychology and coordinated mental wellbeing programs in Nepal. That's where my interest in behavior comes from: why people act the way the data says they do.",
]



export const skills = [
  {
    title: 'Analytics & Modeling',
    items: ['Segmentation', 'Regression / ANOVA', 'Campaign Analysis', 'Predictive Modeling'],
  },
  {
    title: 'Data & Tools',
    items: ['SQL', 'Tableau / Power BI', 'Excel (Advanced)', 'GA4'],
  },
  {
    title: 'Business Impact',
    items: ['KPI Design', 'A/B testing', 'Customer Insights', 'Data Storytelling', 'Report Writing'],
  },
]

export const experience = [
  {
    company: 'Golden City Wholesale LLC',
    role: 'Marketing & Business Development Analyst',
    period: 'Aug 2026 — Present',
    type: 'Full time',
    summary: [
      'Track campaign performance in GA4 and email/social platforms and report on marketing and account-level KPIs',
      'Build Power BI dashboards for account-level reporting',
      'Support lead generation and pipeline tracking',
      'Run market and competitor research',
    ],
  },
  {
    company: 'Golden City Wholesale LLC',
    role: 'Sales and Social Media Marketing Intern',
    period: 'May 2025 — Apr 2026',
    type: 'Internship',
    summary: [
      'Generated 44 B2B leads through Facebook Ads and WhatsApp outreach and converted 23 to recurring customers (52%), tracked in HubSpot CRM',
      'Built Power BI, Looker Studio, and SQL dashboards across 30–40 B2B accounts',
      'Identified 3 competitive positioning gaps through market research and delivered management-ready reports',
      'Ran A/B tests and reported on GA4 and Google Business Profile metrics',
    ],
  },
  {
    company: 'Umanga Nepal',
    role: 'Program Coordinator & Psycho-social Counselor',
    period: '2021 — 2023',
    summary: [
      'Coordinated 10+ mental wellbeing programs for 500+ participants, managing budgets, logistics, scheduling, recruitment, follow-up with partners, sponsors, and donors, and post-program evaluation reports',
      "Produced newsletters, email campaigns, flyers, and social posts, and built and launched the organization's website",
      'Grew organic social reach 40% through monthly KPI tracking and analytics-driven content iteration',
      'Wrote funding, sponsorship, and program proposals, and designed participant surveys analyzed in SPSS',
      'Delivered individual counseling online and ran mental health awareness programs, working alongside other mental health professionals',
    ],
  },
  {
    company: 'CloudFactory Nepal (Sprout Technology Service Pvt. Ltd.)',
    role: 'Data Specialist',
    period: '2019 — 2023',
    type: 'Part-time',
    summary: [
      'Led a team of up to 30, assigning work, reviewing output, running QA checks, training new members, and reporting to management',
      'Validated structured datasets exceeding 10M records at under 1% error (QA-verified) using Advanced Excel and Google Sheets',
      'Maintained data governance standards and client confidentiality across company-wide information',
    ],
  },
]
export const projects = [
  {
    id: 'rapidminer',
    title: 'Customer Purchase Behavior Prediction (RapidMiner)',
    tag: 'Product discovery',
    excerpt: 'Developed predictive models to identify high-probability customers based on behavioral and transaction data.',
    description:
      'Developed predictive models to identify high-probability customers based on behavioral and transaction data. Compared multiple models (Neural Network, K-NN, Decision Tree, Naïve Bayes) to evaluate prediction accuracy. Applied ROC and AUC analysis to assess model performance in customer classification. Used lift and gain analysis to identify high-value customer segments for targeted marketing. Demonstrated how predictive insights can improve campaign targeting and marketing ROI.',
    pdf: 'Customer Purchase Behavior Prediction (RapidMiner).pdf',
    href: '#',
  },
  {
    id: 'tableau',
    title: 'Sales & Profit Analysis Dashboard (Tableau)',
    tag: 'Tableau',
    excerpt: 'Built interactive dashboards to analyze sales and profit trends across products, regions, and market size.',
    description:
      'Built interactive dashboards to analyze sales and profit trends across products, regions, and market size. Identified differences in product performance between small and large markets.Analyzed relationship between sales volume and profitability to support pricing and product decisions.Detected underperforming products and regions contributing to negative margins.Provided insights to support market segmentation and product strategy optimization',
    pdf: 'Sales & Profit Analysis Dashboard (Tableau).pdf',
    href: '#',
  },
  {
    id: 'spss',
    title: 'Consumer Behavior & Satisfaction Analysis (SPSS)',
    tag: 'Analytics',
    excerpt: 'Conducted statistical analysis to evaluate factors influencing customer satisfaction and behavior.',
    description:
      'Conducted statistical analysis to evaluate factors influencing student satisfaction and behavior.Applied hypothesis testing (t-tests, ANOVA, chi-square) to identify significant differences across groups.Analyzed relationships between demographic variables and satisfaction outcomes.Evaluated trends over time to understand changes in consumer sentiment.Interpreted results to generate insights relevant for decision-making and strategy',
    pdf: 'Consumer Behavior & Satisfaction Analysis (SPSS).pdf',
    href: '#',
  },
  {
    id: 'marketing-campaign',
    title: 'Multi-Channel Marketing Campaign Analytics (Google Ads & Social Media)',
    tag: 'Analytics',
    excerpt: 'Designed and evaluated a digital marketing campaign across Google Ads, Facebook Ads, and influencer marketing.',
    description:
      'Designed and evaluated a digital marketing campaign using Google Ads, Facebook Ads, and influencer marketing.Analyzed campaign performance using key metrics such as impressions, CTR, CPC, and conversions.Identified audience segments and high-performing keywords driving engagement and conversions.Assessed effectiveness of different content formats, with video content showing higher engagement.Recommended optimization strategies including retargeting, A/B testing, and budget reallocation',
    pdf: 'Multi-Channel Marketing Campaign Analytics (Google Ads & Social Media).pdf',
    href: '#',
  },
  {
    id: 'social-media-analytics',
    title: 'Social Media Analytics & Competitor Performance Analysis',
    tag: 'Analytics',
    excerpt: 'Analyzed social media performance across multiple platforms and conducted competitor benchmarking.',
    description:
      'Analyzed social media performance across multiple platforms to evaluate engagement patterns and audience behavior. Conducted competitor benchmarking to identify differences in content strategy and engagement outcomes.Identified high-performing content types (e.g., promotional videos, image-based posts) and optimal posting times.Evaluated audience interaction metrics (likes, shares, comments, views) to understand content effectiveness.Provided data-driven recommendations to improve content strategy and increase audience engagement',
    pdf: 'Social Media Analytics & Competitor Performance Analysis.pdf',
    href: '#',
  },  
]

export const blogPosts = [
  {
    date: 'Thursday, 23 April 2026',
    title: 'Life: The Most Underrated Teacher',
    excerpt:
      'Life rarely announces its lessons in advance. It doesn\'t follow a syllabus, it doesn\'t warn you before a test, and it certainly doesn\'t wait for you to feel ready. Yet, in its quiet, unpredictable way, it teaches some of the most profound truths we\'ll ever learn.',
    href: 'https://sushantbhatta7.blogspot.com/2026/04/life-most-underrated-teacher.html',
  },
  {
    date: 'Sunday, 22 March 2026',
    title: 'When Life Happens, The Books I Keep Coming Back To',
    excerpt:
      'On losing the reading habit, rediscovering it, and the pages that hold you together when everything else falls apart.',
    href: 'https://sushantbhatta7.blogspot.com/2026/03/when-life-happens-books-i-keep-coming.html',
  },
  {
    date: 'Friday, 20 March 2026',
    title: 'The 3 C That Are Slowly Killing Your Mind And How to Break Free',
    excerpt:
      'There a monk who once studied at IIT Bombay, one of the most competitive institutions in the world and walked away from a promising career to dedicate his life to something far deeper.',
    href: 'https://sushantbhatta7.blogspot.com/2026/03/the-3-cs-that-are-slowly-killing-your.html',
  },
  {
    date: 'Monday, 19 January 2026',
    title: 'Life, Choices, and Trusting the Process',
    excerpt:
      'Some choices feel deliberate, carefully thought out, like stepping stones placed exactly where we want them.',
    href: 'https://sushantbhatta7.blogspot.com/2026/01/',
  },
]

export const researchBackground = {
  intro: [
    "During my Post Graduate Diploma in Counseling Psychology, I completed a structured practicum spanning individual counseling casework, a WHO-designed intervention protocol, and standardized psychological assessment. Alongside it, I completed supervised field visits to ten mental-health and social-service institutions in Kathmandu, Nepal.",
    "I'm applying that same rigor to questions of behavior and well-being beyond the therapy room, including how people make decisions, engage at work, and change over time.",
  ],
  experience: [
    {
      title: 'Individual Counseling Casework',
      period: '2021–2022',
      items: [
        'Person-centered therapy, CBT techniques, cognitive restructuring, systematic desensitization',
        'Session-by-session outcome tracking with standardized measures',
      ],
    },
    {
      title: 'WHO Problem Management Plus (PM+)',
      period: '2021',
      items: [
        'Delivered the WHO 5-session transdiagnostic intervention protocol',
        'Outcomes tracked via PSYCHLOPS and WHODAS 2.0',
      ],
    },
    {
      title: 'Professional Counseling Practice',
      period: '2021–2023',
      items: [
        'Psycho-social Counselor, Umanga Nepal (intern May–Jul 2021, then Program Coordinator & Psycho-social Counselor)',
        'Delivered individual counseling online and ran mental health awareness programs',
      ],
    },
    {
      title: 'Psychological Testing & Assessment',
      period: '2020–2022',
      items: [
        'Ten-instrument battery spanning personality (16PF, ABBPS), cognitive ability (RPM, Differential Aptitude Test, WAPIS), emotional intelligence (REIT), and clinical/adjustment screening (BDI-II, KNPI, WAT, ANDI)',
      ],
    },
    {
      title: 'Supervised Field Visits',
      period: '2021',
      items: [
        '10 site visits: crisis management, LGBTQ+ advocacy, law enforcement, child welfare, women\u2019s rights, peace studies, addiction treatment, geriatric care, psychiatric care',
      ],
    },
  ],
  references: [
    {
      title: 'Social Media and Technology Dilemma',
      href: '/documents/Social%20Media%20and%20Technology%20Dilemma%20Smarika-2079.pdf',
      note: 'Published article, Journal of Discursive Psychology, Department of Philosophy and Psychology, Tri-Chandra Campus, Tribhuvan University (2021)',
    },
    {
      title: 'Effectiveness of Person-Centered Therapy',
      href: '/documents/person-centered-therapy.pdf',
      note: 'literature review (PGD coursework)',
    },
    {
      title: 'Depression Among College Students in Nepal',
      href: '/documents/depression-nepal.pdf',
      note: 'literature review (PGD coursework)',
    },
  ],
}

