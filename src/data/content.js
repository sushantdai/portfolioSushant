/** Replace with your details, images, and links before deploying. */

export const profile = {
  name: 'Sushant Bhatta',
  title: 'Marketing Analytics & Data Analyst',
  tagline:
    'Driving data-backed marketing decisions that improve ROI, engagement, and customer targeting. Delivered 180% campaign ROI, 25–40% engagement growth, and insights from 10M+ records. Skilled in campaign analytics, customer segmentation, statistical modeling, and dashboards.',
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
  { value: '180% ROI', label: '+25–40% Engagement Growth', sub: '10M+ records analyzed (<1% error)' },
]

export const aboutParagraphs = [
  'I am a marketing analytics and research-focused professional with experience in consumer behavior analysis, campaign performance evaluation, and data-driven decision making. ',
  'My work centers on understanding how users interact with content, identifying patterns in engagement, and translating data into actionable marketing insights. ',
  'I have applied analytical methods across projects involving predictive modeling, customer segmentation, digital campaign performance, and social media analytics, using tools such as Tableau, SQL, RapidMiner, SPSS, and Google Ads. My approach combines statistical analysis with marketing context to support strategic decisions.',
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
    role: 'Marketing Analyst & Digital Campaign Specialist Intern',
    period: '2025 — 2026',
    summary: [
      'Analyzed CTR, reach, impressions, and conversions across 30–40 B2B accounts, driving a 25% customer retention improvement through weekly data-backed targeting and content optimizations',
      'Surfaced 3 competitive positioning gaps via market research and delivered management-ready reports for leadership review',
      'Built recurring KPI dashboards and performance reports translating complex campaign analytics into clear, actionable stakeholder recommendations.'
    ]
  },
  {
    company: 'Umanga Nepal',
    role: ' Marketing & Communications Coordinator',
    period: '2021 — 2023',
    type: 'Full time',
    summary: [
      'Coordinated 10+ programs for 500+ participants, managing logistics, scheduling, collateral distribution, and follow-up communications with partners, sponsors, and donors',
      'Produced all content including newsletters, email campaigns, flyers, social posts, and website updates across Facebook, Instagram, Twitter, and YouTube with full brand consistency',
      'Grew digital audience reach 40% through monthly KPI tracking, analytics-driven content iteration, and targeted outreach improvements'
    ]
  },
  {
    company: 'Cloud Factory',
    role: 'Data Specialist',
    period: '2019 — 2023',
    summary: [
      'Collected, filtered, and validated 10M+ structured records at sub-1% error rate across client-facing pipelines used for downstream business analytics',
      'Trained 30+ team members on QA and validation workflows, standardizing documentation that improved team throughput and consistency',
      'Supported reliable data infrastructure enabling accurate, timely reporting and decision-making across multiple client accounts simultaneously'
    ]
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
    "During my Post Graduate Diploma in Counseling Psychology, I completed a structured practicum spanning individual counseling casework, a WHO-designed intervention protocol, and standardized psychological assessment. Alongside it, I completed supervised field placements across ten mental-health and social-service institutions in Kathmandu, Nepal.",
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
      title: 'Psychological Testing & Assessment',
      period: '2020–2022',
      items: [
        'Ten-instrument battery spanning personality (16PF, ABBPS), cognitive ability (RPM, Differential Aptitude Test), emotional intelligence (WAPIS), and clinical/adjustment screening (BDI-II, REIT, KNPI, WAT, ANDI)',
      ],
    },
    {
      title: 'Supervised Field Placements',
      period: '2021',
      items: [
        '10 site visits: crisis management, LGBTQ+ advocacy, law enforcement, child welfare, women\u2019s rights, peace studies, addiction treatment, geriatric care, psychiatric care',
      ],
    },
  ],
  references: [
    {
      title: 'Effectiveness of Person-Centered Therapy',
      href: '/documents/person-centered-therapy.pdf',
      note: 'term paper',
    },
    {
      title: 'Depression Among College Students in Nepal',
      href: '/documents/depression-nepal.pdf',
      note: 'term paper',
    },
  ],
}

