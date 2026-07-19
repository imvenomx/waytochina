/* ============================================================
   WayToChina — EDITABLE SITE DATA (V1)
   ------------------------------------------------------------
   ALL text/numbers below are PLACEHOLDERS for the client to
   replace. Layout code never needs to change — edit here only.
   Loaded on every page before assets/waytochina.js.
   ============================================================ */

window.WTC = {
  /* ---------- Global contact & social (used in top bar, contact page, footer) ---------- */
  site: {
    phone: "+212 6 00 00 00 00", // PLACEHOLDER
    whatsapp: "+212600000000", // PLACEHOLDER — digits only, used for wa.me link
    email: "contact@waytochina.com", // PLACEHOLDER
    address: "Casablanca, Morocco", // PLACEHOLDER
    tagline: "Your trusted partner for studying in China — from first consultation to your first day on campus.",
    social: {
      facebook: "#", // PLACEHOLDER links
      instagram: "#",
      tiktok: "#",
      linkedin: "#",
      youtube: "#",
    },
  },

  /* ---------- Featured programs (homepage section 3) ----------
     6–10 curated programs. "level" is "bachelor" or "master".
     Seeds mirror the Great Wall reference + real Chinese universities. */
  programs: [
    {
      level: "bachelor",
      major: "MBBS (Medicine)",
      university: "Xi'an Jiaotong University",
      badge: "XJTU",
      rank: "101–150",
      language: "English",
      duration: "6 Years",
      fee: "44,000 RMB/yr",
    },
    {
      level: "bachelor",
      major: "Mechanical Engineering",
      university: "Beijing Institute of Technology",
      badge: "BIT",
      rank: "101–150",
      language: "English",
      duration: "4 Years",
      fee: "30,000 RMB/yr",
    },
    {
      level: "bachelor",
      major: "Computer Science & Technology",
      university: "Harbin Institute of Technology (Shenzhen)",
      badge: "HIT",
      rank: "101–150",
      language: "English",
      duration: "4 Years",
      fee: "25,000 RMB/yr",
    },
    {
      level: "bachelor",
      major: "Civil Engineering",
      university: "Tongji University",
      badge: "TJU",
      rank: "151–200",
      language: "English",
      duration: "4 Years",
      fee: "26,000 RMB/yr",
    },
    {
      level: "bachelor",
      major: "Business Administration",
      university: "Fudan University",
      badge: "FDU",
      rank: "31–50",
      language: "English",
      duration: "4 Years",
      fee: "40,000 RMB/yr",
    },
    {
      level: "bachelor",
      major: "Pharmacy",
      university: "Zhejiang University",
      badge: "ZJU",
      rank: "41–60",
      language: "English",
      duration: "4 Years",
      fee: "28,000 RMB/yr",
    },
    {
      level: "master",
      major: "International Business (MIB)",
      university: "Shanghai Jiao Tong University",
      badge: "SJTU",
      rank: "41–60",
      language: "English",
      duration: "2 Years",
      fee: "48,000 RMB/yr",
    },
    {
      level: "master",
      major: "Software Engineering (MSc)",
      university: "Beihang University",
      badge: "BUAA",
      rank: "151–200",
      language: "English",
      duration: "2.5 Years",
      fee: "33,000 RMB/yr",
    },
    {
      level: "master",
      major: "Mechanical Engineering (MEng)",
      university: "Tsinghua University",
      badge: "THU",
      rank: "Top 20",
      language: "English",
      duration: "2 Years",
      fee: "39,000 RMB/yr",
    },
    {
      level: "master",
      major: "Public Health (MPH)",
      university: "Peking University",
      badge: "PKU",
      rank: "Top 20",
      language: "English",
      duration: "2 Years",
      fee: "35,000 RMB/yr",
    },
  ],

  /* ---------- How it works (homepage section 4) ---------- */
  steps: [
    {
      title: "Free Consultation",
      text: "We assess your profile, goals, and budget, then map the majors, cities, and universities that fit you best.",
    },
    {
      title: "Documents & Application",
      text: "We prepare, translate, and verify every required document, then submit flawless applications on your behalf.",
    },
    {
      title: "Admission & Scholarship",
      text: "We secure your admission letter and match you with the strongest scholarship opportunities available.",
    },
    {
      title: "Visa Support",
      text: "Step-by-step guidance through the student visa process, from JW202 form to embassy appointment.",
    },
    {
      title: "Departure & Arrival",
      text: "Flight guidance, airport pickup, registration, and dormitory check-in — we stay with you until you are settled.",
    },
  ],

  /* ---------- The 5 canonical services (homepage section 6 + footer + service pages)
     IMPORTANT: names and slugs are the single source of truth used by
     BOTH the homepage services grid and the footer Services column. ---------- */
  services: [
    {
      slug: "consultation-guidance",
      name: "Consultation & Guidance",
      short: "Personalized academic guidance to choose the right major, city, and university for your career goals.",
      icon: "compass",
    },
    {
      slug: "document-preparation",
      name: "Document Preparation",
      short: "We prepare, translate, and verify every document your application requires — accurate and on time.",
      icon: "document",
    },
    {
      slug: "admission-scholarship",
      name: "Admission & Scholarship",
      short: "We secure official university admission and match you with fully funded or partial scholarships.",
      icon: "medal",
    },
    {
      slug: "visa-support",
      name: "Visa Support",
      short: "Complete support for your Chinese student visa, from paperwork to the embassy appointment.",
      icon: "passport",
    },
    {
      slug: "pre-departure-arrival",
      name: "Pre-departure & Arrival Support",
      short: "Flights, airport pickup, university registration, and dormitory check-in — a smooth landing in China.",
      icon: "plane",
    },
  ],

  /* ---------- Track record stats (homepage section 7) — PLACEHOLDER numbers ---------- */
  stats: [
    { value: 1250, prefix: "+", suffix: "", label: "Students Enrolled" },
    { value: 98, prefix: "", suffix: "%", label: "Admission Rate" },
    { value: 120, prefix: "+", suffix: "", label: "Partner Universities" },
    { value: 900, prefix: "+", suffix: "", label: "Scholarships Secured" },
  ],

  /* ---------- Team (homepage section 8 + about page) — PLACEHOLDER people ---------- */
  team: [
    { name: "Full Name", role: "CEO & Business Developer", photo: "images/team/member-1.jpg" },
    { name: "Full Name", role: "Partnership Manager", photo: "images/team/member-2.jpg" },
    { name: "Full Name", role: "Full Stack Developer", photo: "images/team/member-3.jpg" },
    { name: "Full Name", role: "Community Manager", photo: "images/team/member-4.jpg" },
    { name: "Full Name", role: "Follow-up Manager", photo: "images/team/member-5.jpg" },
  ],

  /* ---------- Testimonials (homepage section 9) — PLACEHOLDER quotes ---------- */
  testimonials: [
    {
      name: "Student Name",
      program: "MBBS — Xi'an Jiaotong University",
      photo: "images/testimonials/student-1.jpg",
      quote:
        "From my first call to landing in Xi'an, the team handled everything. I got a partial scholarship I didn't even know existed, and my parents could follow every step.",
    },
    {
      name: "Student Name",
      program: "Computer Science — HIT Shenzhen",
      photo: "images/testimonials/student-2.jpg",
      quote:
        "I was worried about the documents and the visa, but they prepared everything and double-checked each paper. The whole process took less time than I expected.",
    },
    {
      name: "Parent of Student",
      program: "Civil Engineering — Tongji University",
      photo: "images/testimonials/student-3.jpg",
      quote:
        "As a parent, what mattered to me was trust. They were transparent about costs from day one and someone met my son at the airport in Shanghai. I recommend them to every family.",
    },
    {
      name: "Student Name",
      program: "Business Administration — Fudan University",
      photo: "images/testimonials/student-4.jpg",
      quote:
        "The consultation was honest — they told me which universities fit my grades and budget instead of overpromising. One year later I'm studying in Shanghai, fully settled.",
    },
  ],

  /* ---------- Partner universities (homepage section 10 + universities page) — PLACEHOLDER list ---------- */
  partners: [
    { name: "Tsinghua University", badge: "THU", city: "Beijing" },
    { name: "Peking University", badge: "PKU", city: "Beijing" },
    { name: "Fudan University", badge: "FDU", city: "Shanghai" },
    { name: "Shanghai Jiao Tong University", badge: "SJTU", city: "Shanghai" },
    { name: "Zhejiang University", badge: "ZJU", city: "Hangzhou" },
    { name: "Xi'an Jiaotong University", badge: "XJTU", city: "Xi'an" },
    { name: "Tongji University", badge: "TJU", city: "Shanghai" },
    { name: "Beijing Institute of Technology", badge: "BIT", city: "Beijing" },
    { name: "Harbin Institute of Technology", badge: "HIT", city: "Harbin / Shenzhen" },
    { name: "Beihang University", badge: "BUAA", city: "Beijing" },
    { name: "Wuhan University", badge: "WHU", city: "Wuhan" },
    { name: "Sichuan University", badge: "SCU", city: "Chengdu" },
  ],

  /* ---------- Universities page (static, hand-curated — NOT a database) ---------- */
  universities: [
    {
      name: "Tsinghua University",
      badge: "THU",
      city: "Beijing",
      rank: "Top 20 worldwide",
      tags: ["Engineering", "English-taught", "Scholarships"],
    },
    {
      name: "Peking University",
      badge: "PKU",
      city: "Beijing",
      rank: "Top 20 worldwide",
      tags: ["Sciences", "English-taught", "Scholarships"],
    },
    {
      name: "Fudan University",
      badge: "FDU",
      city: "Shanghai",
      rank: "31–50 worldwide",
      tags: ["Business", "Medicine", "English-taught"],
    },
    {
      name: "Shanghai Jiao Tong University",
      badge: "SJTU",
      city: "Shanghai",
      rank: "41–60 worldwide",
      tags: ["Engineering", "Business", "Scholarships"],
    },
    {
      name: "Zhejiang University",
      badge: "ZJU",
      city: "Hangzhou",
      rank: "41–60 worldwide",
      tags: ["Pharmacy", "Engineering", "English-taught"],
    },
    {
      name: "Xi'an Jiaotong University",
      badge: "XJTU",
      city: "Xi'an",
      rank: "101–150 worldwide",
      tags: ["MBBS", "Engineering", "Scholarships"],
    },
    {
      name: "Tongji University",
      badge: "TJU",
      city: "Shanghai",
      rank: "151–200 worldwide",
      tags: ["Civil Engineering", "Architecture"],
    },
    {
      name: "Beijing Institute of Technology",
      badge: "BIT",
      city: "Beijing",
      rank: "101–150 worldwide",
      tags: ["Mechanical Eng.", "English-taught"],
    },
    {
      name: "Harbin Institute of Technology (Shenzhen)",
      badge: "HIT",
      city: "Shenzhen",
      rank: "101–150 worldwide",
      tags: ["Computer Science", "Scholarships"],
    },
    {
      name: "Beihang University",
      badge: "BUAA",
      city: "Beijing",
      rank: "151–200 worldwide",
      tags: ["Aerospace", "Software Eng."],
    },
    {
      name: "Wuhan University",
      badge: "WHU",
      city: "Wuhan",
      rank: "151–200 worldwide",
      tags: ["Medicine", "Law", "Scholarships"],
    },
    {
      name: "Sichuan University",
      badge: "SCU",
      city: "Chengdu",
      rank: "151–200 worldwide",
      tags: ["Medicine", "English-taught"],
    },
  ],

  /* ---------- FAQ (homepage section 11) ---------- */
  faq: [
    {
      q: "What are the benefits of studying in China?",
      a: "China offers globally recognized degrees, affordable tuition compared to Europe or North America, modern campuses, and strong scholarship programs. Graduates also gain exposure to the world's second-largest economy and to Mandarin — an increasingly valuable professional asset.",
    },
    {
      q: "Can I study in English in China?",
      a: "Yes. Hundreds of degree programs — including Medicine (MBBS), Engineering, Computer Science, and Business — are taught fully in English. No prior Chinese is required for these programs, though universities usually include beginner Mandarin classes in the curriculum.",
    },
    {
      q: "How much does it cost to study in China?",
      a: "Tuition for English-taught programs typically ranges from 20,000 to 45,000 RMB per year (roughly 2,800–6,300 USD), with dormitories from 4,000 to 12,000 RMB per year. Living costs are modest — most students spend 1,500–2,500 RMB per month. We give you a precise budget for your chosen program during the free consultation.",
    },
    {
      q: "Can I get a scholarship?",
      a: "Yes — this is our specialty. We match eligible students with Chinese Government Scholarship (CSC), provincial, and university-level scholarships that can cover partial or full tuition, accommodation, and even a monthly stipend. Eligibility depends on your grades, chosen program, and application timing.",
    },
    {
      q: "What documents are required for the application?",
      a: "Typically: your passport, high school diploma or bachelor's degree and transcripts (translated and notarized), a medical examination form, a police clearance certificate, a motivation letter, and passport photos. Master's applicants also need recommendation letters. We prepare and verify the full file with you.",
    },
    {
      q: "How long does the application process take?",
      a: "Plan for 2 to 4 months from consultation to admission letter, plus 3 to 6 weeks for the visa. Scholarship applications have fixed deadlines (usually January–April for September intake), so the earlier you start, the stronger your options.",
    },
    {
      q: "Is the registration fee refundable?",
      a: "Our service fee terms are transparent and confirmed in writing before any payment. If an application we submit is rejected by every university on your agreed list, the refund conditions in your service agreement apply — ask your advisor for the exact policy during the free consultation.",
    },
    {
      q: "Do you help after I arrive in China?",
      a: "Yes. Pre-departure and arrival support is one of our five core services: flight guidance, airport pickup, university registration, residence permit paperwork, and dormitory check-in. We stay in touch with you and your family throughout your first semester.",
    },
  ],
};
