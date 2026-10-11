// image/demoVideoUrl/liveUrl: only set with real, confirmed values — leave undefined until provided, never construct a plausible-looking one.
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  /** Public repo URL. Optional: private projects have none to show. */
  github?: string;
  /** liveUrl: only set with a real, confirmed demo URL — never guess or construct one. */
  liveUrl?: string;
  /** Screenshot shown in the right panel of a horizontal card. */
  image?: string;
  /** How the image fills its panel: 'cover' (default, cropped to fill) or 'contain'
   *  (whole image visible, no cropping: the panel takes the image's own proportions —
   *  use for tall phone screenshots). */
  imageFit?: 'cover' | 'contain';
  /** Link to a demo video walkthrough. */
  demoVideoUrl?: string;
  /** true suppresses the "View on GitHub" button (repo not public). */
  private?: boolean;
  /** Render as a full-width horizontal card above the grid. Unset = standard grid card. */
  layout?: 'horizontal';
  /** Short status note shown on the card (e.g. while a live link is pending). Remove once the link is set. */
  status?: string;
}

// Display order on the Projects page, top to bottom. Horizontal cards are full-width rows;
// consecutive standard cards fill a 2-column grid in pairs.
export const projects: Project[] = [
  {
    id: '12',
    title: 'EazyHomes',
    description:
      'EazyHomes is a rental-property marketplace for Rwanda, connecting renters with landlords directly: search and browse listings by location and price, request a visit or reserve a property, with per-listing pricing — no agents, no middlemen.',
    techStack: ['React', 'PostgreSQL', 'Valkey', 'BullMQ', 'Node.js'],
    layout: 'horizontal',
    private: true,
    status: 'Live link coming soon',
    image: '/project-images/eazyhome.webp',
  },
  {
    id: '1',
    title: 'Optimizing Direct Bank Marketing',
    description:
      'Analyzes a bank\'s direct marketing campaign to identify clients most likely to subscribe to a long-term deposit, improving campaign efficiency and reducing unnecessary outreach.',
    techStack: [
      'Machine Learning',
      'Data Analysis',
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Data Visualization',
      'Matplotlib',
    ],
    github: 'https://github.com/Bertin-Ir/Optimizing_direct_marketing/tree/main',
    liveUrl: 'https://optimizingdirectmarketing-hv4xi3q2yoig9wrdh3mnay.streamlit.app/',
  },
  {
    id: '7',
    title: 'Web & App Ad Click-Through Rate Prediction',
    description:
      'Predicts click-through rates on high-dimensional, sparse, categorical ad, user, and device data.',
    techStack: ['PyTorch', 'Deep Learning'],
    github: 'https://github.com/Bertin-Ir/Avazu_CTR_Challenge',
  },
  {
    id: '11',
    title: 'Ziyara',
    description:
      "It's your AI-powered travel companion app for Abu Dhabi tourists — not a static guide or a chatbot, but a continuously running intelligence layer that adapts every recommendation, route, and experience to what's actually happening in the city right now. It tracks live conditions across attractions, transport, hotels, and events.",
    techStack: ['TypeScript', 'CSS', 'PostgreSQL', 'Groq API', 'Node.js'],
    layout: 'horizontal',
    private: true,
    status: 'Live link coming soon',
    image: '/project-images/ziyara.webp',
    imageFit: 'contain',
  },
  {
    id: '9',
    title: 'Peer to Peer File Sharing System',
    description:
      'A peer-to-peer (P2P) file sharing system built with Python that enables direct file transfers between peers, with a central Tracker server coordinating peer discovery and SHA-256 chunk verification for integrity.',
    techStack: ['Python', 'Networking', 'Socket Programming', 'Distributed Systems'],
    github: 'https://github.com/Bertin-Ir/p2p_file_sharing',
  },
  {
    id: '10',
    title: 'Hand Written Digits Classifier',
    description:
      'A machine learning model that automatically identifies handwritten digits (0–9), comparing a multilayer perceptron baseline against a convolutional neural network.',
    techStack: ['Machine Learning', 'Deep Learning', 'Pytorch', 'Neural Networks', 'Computer Vision'],
    github: 'https://github.com/Bertin-Ir/Digits_Classifier',
    liveUrl: 'https://digitsclassifierb.streamlit.app/',
  },
  {
    id: '8',
    title: 'Movie Recommendation Engine',
    description:
      'Explores multiple approaches to personalized movie recommendations on the MovieLens 100k dataset.',
    techStack: ['Machine Learning', 'Recommender Systems', 'Keras'],
    github: 'https://github.com/Bertin-Ir/Recommendation_System',
  },
  {
    id: '2',
    title: 'Library Catalog Management System',
    description:
      'A C++ application for organizing and managing book collections using hierarchical categories, featuring custom data structures and algorithms with a command-line interface.',
    techStack: ['C++', 'Data Structures', 'Algorithms', 'OOP', 'Command-Line Interfaces'],
    github: 'https://github.com/Bertin-Ir/lcms',
  },
  {
    id: '4',
    title: 'Smart Drive Alert System',
    description:
      'A hardware–software system that monitors driver stress, fatigue, and distraction using heart rate variability (HRV) data, providing real-time alerts to improve road safety.',
    techStack: [
      'Embedded Systems',
      'Arduino',
      'Sensors & Hardware Integration',
      'Signal Processing',
    ],
    github: 'https://github.com/Bertin-Ir/SmartDriveAlertSystem',
  },
  {
    id: '6',
    title: 'Indian Movies & Songs Scraper',
    description:
      'A data scraping project that builds a comprehensive dataset of Indian movies and songs.',
    techStack: ['Web scraping', 'Python'],
    github: 'https://github.com/Bertin-Ir/Indian-Movies-Scraper',
  },
];
