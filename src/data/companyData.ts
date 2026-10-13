export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: "Patrolling" | "Emergency" | "Monitoring" | "Safety";
  description: string;
  imageUrl: string;
  iconName: string;
  highlight?: string;
  tag?: string;
}

export interface RecognitionItem {
  id: number;
  text: string;
  body: string;
  badge: string;
  iconName: string;
}

export interface LocationArea {
  region: string;
  state: string;
  areas: string[];
  contactNumber: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Patrolling Team" | "Industrial Area" | "Security Monitoring" | "Fire & Safety" | "Emergency Response" | "Field Operations";
  imageUrl: string;
  caption: string;
  location?: string;
}

export interface DirectorProfile {
  id: string;
  name: string;
  designation: string;
  role: string;
  photoUrl: string;
  phone: string;
  rawPhone: string;
  whatsapp: string;
  email?: string;
  bio: string;
  keyResponsibilities: string[];
}

export interface MissionVisionData {
  mission: {
    title: string;
    statement: string;
    highlights: string[];
  };
  vision: {
    title: string;
    statement: string;
    highlights: string[];
  };
  coreValues: {
    name: string;
    description: string;
    icon: string;
  }[];
}

export interface HeroSlide {
  id: string;
  badge: string;
  headline: string;
  highlightPhrase: string;
  supportingText: string;
  imageUrl: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  pills: string[];
}

export const COMPANY_DATA = {
  name: "COPS NIGHT PATROLLING",
  legalTagline: "Industrial & Residential Night Patrolling & Security Assistance",
  subTagline: "Industrial & Residential Patrolling Services",
  
  // Hero headline & supporting text
  heroHeadline: "Trusted Night Patrolling Service for Industrial & Residential Security",
  heroSupportingText: "COPS NIGHT PATROLLING delivers continuous night patrolling, security vigilance, Fire & Safety support, and rapid Emergency Response across industrial and residential zones.",

  // Hero Slider Slides
  heroSlides: [
    {
      id: "slide-1",
      badge: "COPS NIGHT PATROLLING • INDUSTRIAL SECURITY FORCE",
      headline: "Dedicated Night Patrolling for Industrial & Commercial Hubs",
      highlightPhrase: "Active Patrols from 10:00 PM to 6:00 AM",
      supportingText: "Protecting factories, warehouses, commercial premises, and residential sectors with rigorous nighttime vehicular rounds and synchronized field security teams.",
      imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2000&q=85",
      primaryCtaText: "Request Patrolling Service",
      secondaryCtaText: "WhatsApp Assistance",
      pills: ["5–6 Night Inspections", "2x Live WhatsApp Reports", "24×7 Emergency QRT"]
    },
    {
      id: "slide-2",
      badge: "RAPID REACTION • IMMEDIATE DISPATCH",
      headline: "Quick Reaction Team (QRT) Ready for Critical Emergencies",
      highlightPhrase: "Target Response in 2 to 4 Minutes",
      supportingText: "Swift frontline intervention for theft alerts, trespassing, boundary disputes, or fire emergencies with our trained rapid reaction units.",
      imageUrl: "https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&w=2000&q=85",
      primaryCtaText: "Call Emergency Helpline",
      secondaryCtaText: "Learn About QRT",
      pills: ["Frontline Mobilization", "Theft & Intrusion Defense", "Dedicated Helplines"]
    },
    {
      id: "slide-3",
      badge: "ACCOUNTABILITY & TRANSPARENCY",
      headline: "Multiple Night Checks with Real-Time Video & Photo Proof",
      highlightPhrase: "Daily WhatsApp Reports Twice Every Night",
      supportingText: "We inspect your premises approximately 5 to 6 times each night and send verified photo and video documentation directly to management via WhatsApp.",
      imageUrl: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=2000&q=85",
      primaryCtaText: "View Sample Reports",
      secondaryCtaText: "Talk to Operations",
      pills: ["Time-Stamped Evidence", "Gate & Guard Vigilance", "Unscheduled Random Audits"]
    },
    {
      id: "slide-4",
      badge: "PROVEN TRACK RECORD",
      headline: "Securing 2,700+ Companies and 25+ Residential Communities",
      highlightPhrase: "Recognized by MP Govt, AIMP Indore & GIA Bhopal",
      supportingText: "Operating across Indore, Bhopal, Delhi, and Rajasthan with government-recognized compliance, industrial association tie-ups, and fire safety readiness.",
      imageUrl: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=2000&q=85",
      primaryCtaText: "Explore Service Areas",
      secondaryCtaText: "Contact Head Office",
      pills: ["AIMP & GIA Recognized", "Govt. Approved", "Multi-State Network"]
    }
  ] as HeroSlide[],

  // Contact Numbers (all replaced with 9376000204)
  contacts: {
    bhopalHelpline: {
      label: "BHOPAL HELPLINE",
      number: "9376000204",
      rawNumber: "9376000204",
      whatsapp: "919376000204"
    },
    indoreHelpline: {
      label: "INDORE HELPLINE",
      number: "9376000204",
      rawNumber: "9376000204",
      whatsapp: "919376000204"
    },
    headOffice: {
      label: "HEAD OFFICE",
      number: "9376000204",
      rawNumber: "9376000204",
      whatsapp: "919376000204"
    },
    delhiRajasthan: {
      label: "DELHI & RAJASTHAN",
      number: "9376000204",
      rawNumber: "9376000204",
      whatsapp: "919376000204"
    },
    md: {
      name: "Dharmender Malik",
      designation: "M.D.",
      number: "9376000204",
      rawNumber: "9376000204",
      whatsapp: "919376000204"
    },
    manager: {
      designation: "MANAGER",
      number: "9376000204",
      rawNumber: "9376000204",
      whatsapp: "919376000204"
    }
  },

  // Directors & Management Leadership
  directors: [
    {
      id: "dir-1",
      name: "Dharmender Malik",
      designation: "Managing Director (M.D.)",
      role: "Executive Management & Corporate Governance",
      photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      phone: "9376000204",
      rawPhone: "9376000204",
      whatsapp: "919376000204",
      email: "copspatrolling89@gmail.com",
      bio: "Leading COPS NIGHT PATROLLING with a definitive vision to transform nocturnal security across India's industrial manufacturing hubs and residential sectors. Dedicated to institutional compliance, industry partnerships (AIMP Indore & GIA Bhopal), and establishing zero-compromise vigilance standards.",
      keyResponsibilities: [
        "Executive leadership & strategic company vision",
        "Industrial association affiliations & government compliances",
        "High-priority client relationship management",
        "Standard operating protocols & quality assurance"
      ]
    },
    {
      id: "dir-2",
      name: "Operations Directorate",
      designation: "Field Operations & Patrol Deployments",
      role: "Night Shift Control & Emergency Command",
      photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      phone: "9376000204",
      rawPhone: "9376000204",
      whatsapp: "919376000204",
      email: "copspatrolling89@gmail.com",
      bio: "Supervising nocturnal mobile patrolling units, vehicular logistics, guard deployment schedules, and emergency Quick Reaction Teams (QRT). Ensures disciplined 10 PM to 6 AM field enforcement and strict delivery of dual nightly WhatsApp verification evidence.",
      keyResponsibilities: [
        "Nocturnal field unit scheduling (10:00 PM – 06:00 AM)",
        "5–6 Unscheduled inspection audits per night",
        "Emergency QRT mobilization (2 to 4 minute target)",
        "Verified digital reporting (WhatsApp photo & video delivery)"
      ]
    }
  ] as DirectorProfile[],

  // Mission & Vision
  missionVision: {
    mission: {
      title: "Our Mission",
      statement: "To safeguard industrial facilities, commercial warehouses, and residential communities through disciplined nocturnal mobile patrolling, unannounced physical audits, and instantaneous emergency response, ensuring total peace of mind for every stakeholder.",
      highlights: [
        "Relentless 10:00 PM to 6:00 AM vigilant mobile patrolling",
        "5 to 6 unscheduled inspections every night",
        "Photographic & video digital accountability twice nightly via WhatsApp",
        "Active prevention of internal/external theft, boundary trespass, and fire hazards"
      ]
    },
    vision: {
      title: "Our Vision",
      statement: "To stand as India's foremost benchmark in industrial night security patrolling and emergency assistance, recognized across economic zones for uncompromising operational rigor, rapid crisis intervention, and authentic service transparency.",
      highlights: [
        "Setting the benchmark for organized night patrolling in Indian industrial zones",
        "Statewide operational excellence across Madhya Pradesh, Delhi NCR, and Rajasthan",
        "Continuous integration of modern safety standards and certified Fire & Safety protocols",
        "Building long-term client trust backed by zero tolerance for negligence"
      ]
    },
    coreValues: [
      {
        name: "Nocturnal Vigilance",
        description: "Active mobile and foot patrolling when risk is highest — between 10:00 PM and 6:00 AM.",
        icon: "ClockAlert"
      },
      {
        name: "Transparent Evidence",
        description: "Daily photo and video documentation sent directly to business owners twice every night.",
        icon: "CheckCircle2"
      },
      {
        name: "Rapid Crisis Response",
        description: "Frontline Quick Reaction Team (QRT) ready to mobilize within 2 to 4 minutes during emergencies.",
        icon: "ShieldAlert"
      },
      {
        name: "Fire & Safety Readiness",
        description: "Certified field personnel equipped to provide immediate first-response for fire and safety emergencies.",
        icon: "Flame"
      }
    ]
  } as MissionVisionData,

  // Email
  email: "copspatrolling89@gmail.com",

  // Office Addresses (strictly as supplied)
  offices: {
    headOffice: {
      city: "Bhopal",
      name: "HEAD OFFICE",
      addressLine1: "06 Ashoka Garden Huzur Subhash Colony",
      addressLine2: "City Centre, Bhopal",
      statePin: "Madhya Pradesh - 462023",
      fullAddress: "06 Ashoka Garden Huzur Subhash Colony, City Centre, Bhopal, Madhya Pradesh - 462023"
    },
    indoreOffice: {
      city: "Indore",
      name: "INDORE OFFICE",
      addressLine1: "55 Bhagat Singh Nagar",
      addressLine2: "Indore",
      statePin: "Madhya Pradesh - 452015",
      fullAddress: "55 Bhagat Singh Nagar, Indore, Madhya Pradesh - 452015"
    }
  },

  // Trust / Highlight Statistics (The 4 supplied claims)
  trustClaims: [
    {
      metric: "2,700+",
      title: "Companies Served",
      subtitle: "Active security collaboration across premier industrial corridors",
      icon: "Building2"
    },
    {
      metric: "25+",
      title: "Residential Areas",
      subtitle: "Scheduled night patrolling in residential colonies and townships",
      icon: "Home"
    },
    {
      metric: "24×7",
      title: "Emergency Service",
      subtitle: "Continuous round-the-clock QRT alert status and prompt intervention",
      icon: "ClockAlert"
    },
    {
      metric: "5–6 Times",
      title: "Nightly Inspections",
      subtitle: "Randomized inspections of gates, guards, and perimeters every night",
      icon: "ShieldCheck"
    }
  ],

  // How Service Works (5 Steps as supplied)
  howItWorks: [
    {
      step: "01",
      title: "Regular Night Patrolling",
      description: "Continuous patrolling from 10:00 PM to 6:00 AM using dedicated patrol vehicles and trained security field teams across industrial zones."
    },
    {
      step: "02",
      title: "Multiple Unscheduled Checks",
      description: "Rigorous inspections conducted 5 to 6 times per night at unpredictable intervals covering company gates, boundaries, and premises."
    },
    {
      step: "03",
      title: "Photo & Video Reporting",
      description: "Verified photo and video evidence sent twice every night directly to your authorized WhatsApp number for complete peace of mind."
    },
    {
      step: "04",
      title: "Suspicious Activity Alerts",
      description: "Immediate identification and management notification regarding unauthorized individuals, suspicious vehicles, or unusual movements."
    },
    {
      step: "05",
      title: "QRT Emergency Response",
      description: "Immediate mobilization of our Quick Reaction Team upon receiving reports of theft, dispute, intrusion, or fire safety hazards."
    }
  ],

  // Recognition & Associations (strictly as supplied)
  recognitions: [
    {
      id: 1,
      text: "Recognized by Madhya Pradesh Government",
      body: "Officially registered and compliant with applicable state regulatory authorities for private security and industrial protection.",
      badge: "Govt. of MP",
      iconName: "Landmark"
    },
    {
      id: 2,
      text: "Recognized by AIMP Association Indore",
      body: "Affiliated with the Association of Industries Madhya Pradesh (AIMP) for industrial area safety and collective security coordination.",
      badge: "AIMP Indore",
      iconName: "Award"
    },
    {
      id: 3,
      text: "Recognized by GIA Association Bhopal",
      body: "Recognized by the Govindpura Industries Association (GIA) Bhopal for active industrial night protection and rapid assistance.",
      badge: "GIA Bhopal",
      iconName: "Shield"
    },
    {
      id: 4,
      text: "Recognized for Fire & Safety Assistance",
      body: "Security teams trained in preliminary fire safety management, hazard containment, and emergency first-response procedures.",
      badge: "Fire & Safety",
      iconName: "Flame"
    }
  ],

  // 12 Comprehensive Services with rich imagery
  services: [
    {
      id: "night-industrial-patrolling",
      number: "SERVICE 01",
      title: "Night Industrial Patrolling",
      category: "Patrolling",
      description: "Our scheduled patrolling operates from 10:00 PM to 6:00 AM every night. For unforeseen emergencies, 24×7 assistance is readily available with immediate mobilization.",
      imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      iconName: "Moon",
      highlight: "10:00 PM to 6:00 AM | 24×7 Emergency Coverage",
      tag: "Core Night Patrol"
    },
    {
      id: "multiple-night-checks",
      number: "SERVICE 02",
      title: "Multiple Night Checks",
      category: "Monitoring",
      description: "Your company premises, gates, boundaries, and deployed guards are physically audited approximately 5 to 6 times every single night at randomized times.",
      imageUrl: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=80",
      iconName: "CheckCircle2",
      highlight: "5 to 6 Unscheduled Checks per Night",
      tag: "Vigilance Audit"
    },
    {
      id: "daily-whatsapp-reporting",
      number: "SERVICE 03",
      title: "Daily WhatsApp Reporting",
      category: "Monitoring",
      description: "Receive verified photo and video documentation twice every night directly on your authorized WhatsApp, providing authentic visual proof of gate and premises security.",
      imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
      iconName: "Smartphone",
      highlight: "2x Nightly Live Photo & Video Proof",
      tag: "Digital Proof"
    },
    {
      id: "gate-employee-monitoring",
      number: "SERVICE 04",
      title: "Gate & Employee Activity Monitoring",
      category: "Monitoring",
      description: "Independent monitoring and real-time reporting regarding on-duty security guards, entry gates, visitor logs, and nocturnal perimeter movements.",
      imageUrl: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80",
      iconName: "Eye",
      highlight: "Guard Alertness & Access Point Audits",
      tag: "Perimeter Security"
    },
    {
      id: "material-movement-information",
      number: "SERVICE 05",
      title: "Material Movement Information",
      category: "Monitoring",
      description: "During patrol rounds, our team closely observes and alerts management regarding outbound goods, cargo loading, or suspicious nocturnal material movement.",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      iconName: "Truck",
      highlight: "Real-Time Goods Dispatch Tracking",
      tag: "Inventory Protection"
    },
    {
      id: "unknown-person-vehicle-monitoring",
      number: "SERVICE 06",
      title: "Unknown Person & Vehicle Monitoring",
      category: "Patrolling",
      description: "Active vigilance against unfamiliar loiterers, unauthorized vehicles, and dubious nocturnal movements near factory boundaries, with prompt security deterrence.",
      imageUrl: "https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&w=1200&q=80",
      iconName: "Users",
      highlight: "Boundary & Vehicle Scans",
      tag: "Threat Deterrence"
    },
    {
      id: "labour-dispute-assistance",
      number: "SERVICE 07",
      title: "Labour Dispute Assistance",
      category: "Safety",
      description: "Security assistance during workplace disputes, employee unrest, or boundary confrontations within company premises, coordinating with legal channels when necessary.",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      iconName: "Scale",
      highlight: "Conflict De-escalation & Legal Support",
      tag: "Workplace Order"
    },
    {
      id: "fire-safety-assistance",
      number: "SERVICE 08",
      title: "Fire & Safety Assistance",
      category: "Safety",
      description: "In the event of accidental fires or factory hazards, our trained personnel assist with primary fire suppression, evacuation containment, and emergency coordination.",
      imageUrl: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1200&q=80",
      iconName: "Flame",
      highlight: "Trained First Response & Containment",
      tag: "Hazard Response"
    },
    {
      id: "medical-emergency-assistance",
      number: "SERVICE 09",
      title: "Medical Emergency Assistance",
      category: "Emergency",
      description: "If an employee falls ill or sustains an injury during nocturnal shifts, our units coordinate prompt emergency first-aid and swift transit to nearest medical centers.",
      imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
      iconName: "Activity",
      highlight: "Rapid First Aid & Hospital Transit Support",
      tag: "Worker Welfare"
    },
    {
      id: "theft-response",
      number: "SERVICE 10",
      title: "Theft Response",
      category: "Emergency",
      description: "In the event of suspected theft or breach, our team responds instantaneously to cordon off escape routes, secure premises, and assist local law enforcement.",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
      iconName: "AlertTriangle",
      highlight: "Immediate Perimeter Containment",
      tag: "Anti-Theft"
    },
    {
      id: "qrt-emergency-response",
      number: "SERVICE 11",
      title: "QRT Emergency Response",
      category: "Emergency",
      description: "Upon receiving your emergency call, our Quick Reaction Team (QRT) is instantly dispatched. According to the company, the team aims to reach within 2 to 4 minutes (subject to distance and terms).",
      imageUrl: "https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&w=1200&q=80",
      iconName: "Zap",
      highlight: "Target 2 to 4 Min Response (Subject to Conditions)",
      tag: "Rapid Force"
    },
    {
      id: "residential-patrolling",
      number: "SERVICE 12",
      title: "Residential Patrolling",
      category: "Patrolling",
      description: "Alongside industrial zones, our reliable night patrolling network actively secures over 25 residential colonies, gated societies, and townships.",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      iconName: "Home",
      highlight: "Active in 25+ Gated Residential Colonies",
      tag: "Community Safety"
    }
  ] as ServiceItem[],

  // Process Steps for Areas & How It Works
  processFlow: [
    { title: "Patrolling", subtitle: "Active Rounds", iconName: "Compass", desc: "Continuous vehicular patrolling across pre-assigned routes" },
    { title: "Monitoring", subtitle: "Physical Audits", iconName: "Eye", desc: "Inspection of gates, boundaries, locks, and guard alertness" },
    { title: "Detection", subtitle: "Hazard ID", iconName: "Search", desc: "Instant spotting of suspicious individuals or safety risks" },
    { title: "Emergency Response", subtitle: "Rapid Action", iconName: "ShieldAlert", desc: "Immediate deployment of QRT units and on-ground assistance" },
    { title: "Reporting", subtitle: "Digital Proof", iconName: "Send", desc: "Photo and video dispatch directly to WhatsApp twice a night" }
  ],

  // Industrial Areas We Serve (strictly as supplied)
  areasWeServe: [
    {
      region: "INDORE",
      state: "Madhya Pradesh",
      contactNumber: "9376000204",
      description: "Dedicated night patrol squads deployed every night across Indore's major manufacturing hubs, warehousing centers, and textile corridors.",
      areas: [
        "Sanwer Road Industrial Area",
        "Pologround",
        "Readymade Complex",
        "Beta & Bardari",
        "Palda"
      ]
    },
    {
      region: "BHOPAL",
      state: "Madhya Pradesh",
      contactNumber: "9376000204",
      description: "Direct surveillance and rapid QRT deployment supervised by our Bhopal Head Office covering prime industrial clusters and residential belts.",
      areas: [
        "Govindpura Industrial Area"
      ]
    },
    {
      region: "DELHI",
      state: "Delhi NCR",
      contactNumber: "9376000204",
      description: "  ",
      areas: [
        "Mundka Industrial Area"
      ]
    },
    {
      region: "RAJASTHAN",
      state: "Rajasthan",
      contactNumber: "9376000204",
      description: "Extensive industrial security network protecting prominent manufacturing hubs and export zones across Rajasthan.",
      areas: [
        "Bhiwadi Industrial Area",
        "Chopanki Industrial Area",
        "Kairana Industrial Area",
        "Khushkhera Industrial Area",
        "Karoli Industrial Area",
        "Silarpur Industrial Area"
      ]
    }
  ] as LocationArea[],

  // Industrial Team Focus statement (strictly as supplied)
  industrialTeamNote: "To provide prompt response to escalating incidents of internal/external theft and fire hazards in industrial and residential zones, our team delivers dedicated security and cooperation equipped with Fire & Safety Management training.",

  // GALLERY ITEMS (Clean English descriptions)
  galleryCategories: [
    "All",
    "Patrolling Team",
    "Industrial Area",
    "Security Monitoring",
    "Fire & Safety",
    "Emergency Response",
    "Field Operations"
  ] as const,

  galleryItems: [
    {
      id: "gal-1",
      title: "Industrial Night Patrol Vehicles",
      category: "Patrolling Team",
      imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      caption: "Equipped security vehicles deployed for continuous rounds from 10:00 PM to 6:00 AM across industrial sectors.",
      location: "Industrial Sector Patrolling"
    },
    {
      id: "gal-2",
      title: "Gate Security & Guard Vigilance Audits",
      category: "Field Operations",
      imageUrl: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=80",
      caption: "Unscheduled physical inspections of factory main gates, entry registers, and on-duty security staff alertness.",
      location: "Factory Gate Inspection"
    },
    {
      id: "gal-3",
      title: "Manufacturing Corridor Night View",
      category: "Industrial Area",
      imageUrl: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80",
      caption: "Maintaining a disciplined, secure perimeter environment throughout premier Central Indian industrial sectors.",
      location: "Sanwer Road / Govindpura Industrial Areas"
    },
    {
      id: "gal-4",
      title: "Fire & Safety Response Readiness",
      category: "Fire & Safety",
      imageUrl: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1200&q=80",
      caption: "Personnel trained in industrial fire response equipment, hazard containment, and emergency evacuation protocols.",
      location: "Emergency Readiness"
    },
    {
      id: "gal-5",
      title: "Quick Reaction Team (QRT) Unit",
      category: "Emergency Response",
      imageUrl: "https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&w=1200&q=80",
      caption: "Frontline response team ready to scramble immediately upon receiving distress or incident reports.",
      location: "Quick Reaction Team (QRT)"
    },
    {
      id: "gal-6",
      title: "Security & CCTV Monitoring Assistance",
      category: "Security Monitoring",
      imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
      caption: "Nocturnal monitoring of vulnerable perimeters, boundary fences, and unidentified vehicle activity.",
      location: "Perimeter & Gate Security"
    },
    {
      id: "gal-7",
      title: "Material Movement & Cargo Inspection",
      category: "Field Operations",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      caption: "Alerting factory owners to unexpected goods movement and verifying dispatch authorization during night shifts.",
      location: "Material Movement Tracking"
    },
    {
      id: "gal-8",
      title: "Residential Area Night Patrolling",
      category: "Patrolling Team",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      caption: "Providing peace of mind across 25+ residential colonies with disciplined nocturnal patrols.",
      location: "Residential Sectors"
    },
    {
      id: "gal-9",
      title: "Operations Briefing & Shift Deployment",
      category: "Patrolling Team",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      caption: "Field supervisors instructing security personnel on checking routes and verified WhatsApp reporting protocols.",
      location: "Operations Centre"
    }
  ]
};