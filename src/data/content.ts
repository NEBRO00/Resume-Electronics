export type Lang = 'th' | 'en'

export interface MediaSlot {
  // path to a file in /public — e.g. '/projects/hayday-1.jpg' or
  // '/projects/hayday-1.mp4'. Used by both the Projects cards and the
  // Marquee (same 3 files, reused in both places).
  src: string
  // shown instead if the file at `src` doesn't exist yet / fails to load
  fallbackColor: string
}

export interface Project {
  id: string
  order: string
  category: 'engineering' | 'additional'
  type: { th: string; en: string }
  title: { th: string; en: string }
  description: { th: string; en: string }
  role: { th: string; en: string }
  technologies: string[]
  challenge: { th: string; en: string }
  result: { th: string; en: string }
  liveUrl: string
  githubUrl: string
  // 4 media slots, arranged as a 2x2 grid — each can be a photo OR a video,
  // just point `src` at whichever file you actually have (.jpg/.png/.webp
  // for photos, .mp4/.webm/.mov for video). Until a real file exists at
  // that path, fallbackColor is shown instead — nothing breaks.
  media: [MediaSlot, MediaSlot, MediaSlot, MediaSlot]
}

export interface ExperienceItem {
  role: { th: string; en: string }
  org: { th: string; en: string }
  period: { th: string; en: string }
  summary: { th: string; en: string }
  outcome: { th: string; en: string }
}

export interface EducationItem {
  school: { th: string; en: string }
  field: { th: string; en: string }
  period: { th: string; en: string }
}

// ---- shared / bilingual data ---------------------------------------------

export const projects: Project[] = [
  // liveUrl / githubUrl are left as '#' on purpose — fill in your real
  // deployed link and repo link for each project once you have them.
  {
    id: 'delta-arm-ai-edge',
    order: '01',
    category: 'engineering',
    type: { th: 'โปรเจกต์มหาวิทยาลัย', en: 'University Project' },
    title: { th: 'Delta Arm 3 แกน: ระบบตรวจจับวัตถุด้วย Computer Vision', en: '3-Axis Delta Arm: Computer Vision Object Detection' },
    description: {
      th: 'ออกแบบแขนกล Delta Arm 3 แกนและวงจรควบคุม พร้อมระบบตรวจจับวัตถุด้วยกล้องบน Raspberry Pi 5 โดยใช้ Python และ OpenCV ทดสอบเบื้องต้นหยิบวัตถุได้ 8–10 จาก 10 ชิ้นต่อรอบ ขึ้นกับสภาพแสง โดยแสงภายนอกยังส่งผลต่อความแม่นยำ',
      en: 'Designed a 3-axis Delta Arm and its control circuit, with camera-based object detection on Raspberry Pi 5 using Python and OpenCV. In initial trials, the arm picked 8–10 of 10 objects per run depending on lighting; uncontrolled ambient light remained a limitation.',
    },
    role: { th: 'ออกแบบโครงสร้างแขนกลและวงจร ทดสอบการเคลื่อนที่ด้วย ESP32 และทดสอบระบบร่วมกับ PLC', en: 'Designed the arm structure and circuit; tested motion with ESP32 and evaluated the system with a PLC.' },
    technologies: ['SolidWorks', 'Raspberry Pi 5', 'ESP32', 'Python', 'OpenCV', 'PLC', 'Stepper Motor Control'],
    challenge: {
      th: 'การหยิบวัตถุได้รับผลกระทบจากความแม่นยำของการเคลื่อนที่และสภาพแสงที่เปลี่ยนแปลง โดยเฉพาะแสงภายนอกที่ควบคุมได้ยาก',
      en: 'Picking reliability depended on motion accuracy and changing lighting conditions, especially ambient light that was difficult to control.',
    },
    result: {
      th: 'สาธิตการตรวจจับและหยิบวัตถุได้ในการทดสอบเบื้องต้น พร้อมระบุข้อจำกัดด้านแสงเพื่อใช้ปรับปรุงระบบต่อ',
      en: 'Demonstrated object detection and picking in initial trials, and identified lighting variation as a key area for further improvement.',
    },
    liveUrl: '#',
    githubUrl: 'https://github.com/NEBRO00/Delta-Arm-AI-Edge',
    media: [
      { src: '/projects/delta-arm-1.jpg', fallbackColor: '#8B7CF6' },
      { src: '/projects/delta-arm-2.jpg', fallbackColor: '#5B8DEF' },
      { src: '/projects/delta-arm-3.jpg', fallbackColor: '#F2748C' },
      { src: '/projects/delta-arm-4.jpg', fallbackColor: '#F2A25C' },
    ],
  },
  {
    id: 'automatic-air-leak-testing-system',
    order: '02',
    category: 'engineering',
    type: { th: 'โปรเจกต์สหกิจศึกษา', en: 'Co-op Project' },
    title: { th: 'โครงการสหกิจศึกษา: Automatic Air Leak Testing System Using PLC', en: 'Co-op Project: Automatic Air Leak Testing System Using PLC' },
    description: {
      th: 'ร่วมประกอบระบบทดสอบการรั่วของอากาศสำหรับเครื่อง Air Leak Test โดยใช้ PLC Mitsubishi FX5S ออกแบบการเดินสายและประกอบชิ้นงานจริงร่วมกับ Production Engineer',
      en: 'Collaborated on an automatic air-leak testing system using a Mitsubishi FX5S PLC. Worked with a production engineer on wiring design and physical assembly.',
    },
    role: { th: 'ร่างโปรแกรม PLC เบื้องต้น ออกแบบการเดินสาย และประกอบชิ้นงานจริงร่วมกับ Production Engineer อีก 1 คน โดยโปรแกรมฉบับต่อเนื่องพัฒนาโดยพี่เลี้ยง', en: 'Drafted the initial PLC logic, designed wiring, and assembled the unit with a production engineer; the engineer continued the PLC program.' },
    technologies: ['Mitsubishi FX5S', 'PLC Ladder Logic', 'Wiring Design', 'Machine Assembly', 'Air Leak Testing'],
    challenge: {
      th: 'ต้องปรับปรุงกระบวนการทดสอบให้มีความแม่นยำและรวดเร็วขึ้น พร้อมทั้งลดความผิดพลาดจากการตรวจสอบด้วยมือในสภาพแวดล้อมโรงงานจริง',
      en: 'Improving the testing process to be faster and more accurate while reducing errors caused by manual inspection in a real factory environment.',
    },
    result: {
      th: 'ประกอบชิ้นงานและจัดทำแนวทางการเดินสายจนแล้วเสร็จ พร้อมประสบการณ์ทำงานร่วมกันระหว่างงานไฟฟ้าและงานผลิต',
      en: 'Completed the physical assembly and wiring layout, gaining hands-on experience across electrical work and production collaboration.',
    },
    liveUrl: '/Presentation.pdf',
    githubUrl: '#',
    media: [
      { src: '/projects/air-leak-system-1.jpg', fallbackColor: '#5B8DEF' },
      { src: '/projects/air-leak-system-2.jpg', fallbackColor: '#8B7CF6' },
      { src: '/projects/air-leak-system-3.jpg', fallbackColor: '#F2A25C' },
      { src: '/projects/air-leak-system-4.jpg', fallbackColor: '#F2748C' },
    ],
  },
  {
    id: 'embedded-system-mini-project',
    order: '03',
    category: 'engineering',
    type: { th: 'โปรเจกต์รายวิชา', en: 'Mini Project' },
    title: { th: 'โปรเจกต์รายวิชา Embedded System', en: 'Embedded System Mini Project' },
    description: {
      th: 'ทำโปรเจกต์รายวิชา Embedded System ที่เกี่ยวข้องกับการออกแบบวงจรและระบบฝังตัวเพื่อให้ทำงานตามเงื่อนไขที่อาจารย์กำหนด',
      en: 'A mini embedded systems project focused on circuit design and a microcontroller-based system that met the course requirements and test conditions.',
    },
    role: { th: 'ออกแบบวงจร ออกแบบ PCB และทดสอบระบบให้ทำงานได้ตามข้อกำหนด', en: 'Designed the circuit, created the PCB layout, and validated the system against the project requirements' },
    technologies: ['Circuit Design', 'Embedded C', 'Microcontroller', 'PCB Fabrication'],
    challenge: {
      th: 'ต้องทำให้ระบบฝังตัวทำงานได้อยู่ในช่วงค่าที่กำหนดและมีความน่าเชื่อถือในการทดสอบจริง',
      en: 'Ensuring the embedded system met the required operating values and behaved reliably during real testing.',
    },
    result: {
      th: 'ผ่านรายวิชาได้ด้วยคะแนนที่ดีและได้ประสบการณ์ตรงด้านการออกแบบระบบฝังตัว',
      en: 'Completed the course successfully with a strong result and gained hands-on experience in embedded system design.',
    },
    liveUrl: '#',
    githubUrl: 'https://github.com/NEBRO00/Embedded-System-Mini-Project',
    media: [
      { src: '/projects/embedded-1.jpg', fallbackColor: '#5B8DEF' },
      { src: '/projects/embedded-2.jpg', fallbackColor: '#8B7CF6' },
      { src: '/projects/embedded-3.jpg', fallbackColor: '#F2A25C' },
      { src: '/projects/embedded-4.jpg', fallbackColor: '#F2748C' },
    ],
  },
  {
    id: 'hayday',
    order: '04',
    category: 'additional',
    type: { th: 'ส่วนตัว', en: 'Personal' },
    title: { th: 'ระบบสั่งซื้อไอเทม Hay Day', en: 'Hay Day Item Ordering System' },
    description: {
      th: 'เว็บแอปสำหรับสั่งซื้อไอเทมในเกม Hay Day มีระบบแอดมินจัดการออเดอร์และสต๊อก พร้อมระบบชำระเงิน ทำขึ้นเพื่อแก้ปัญหาการจดออเดอร์ผ่านแชทที่จัดการยากและตกหล่นบ่อย',
      en: 'A web app for ordering in-game Hay Day items, with an admin panel for order/stock management and a payment flow — built to replace error-prone chat-based ordering.',
    },
    role: { th: 'ออกแบบและพัฒนาเว็บทั้งฝั่งหน้าบ้านและระบบแอดมิน', en: 'Designed and built both the customer-facing site and the admin system' },
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    challenge: {
      th: 'ต้องออกแบบ flow การสั่งซื้อและสถานะออเดอร์ให้ผู้ดูแลติดตามได้ง่าย ในขณะที่ลูกค้าใช้งานสะดวกบนมือถือ',
      en: 'Needed an order/status flow simple enough for an admin to track, while staying mobile-friendly for customers.',
    },
    result: {
      th: 'ช่วยรวมการจัดการออเดอร์และสต๊อกไว้ในระบบเดียว ลดความเสี่ยงออเดอร์ตกหล่น',
      en: 'Brought order and stock management into one system, cutting the risk of missed orders.',
    },
    liveUrl: 'https://hay-day-shop.vercel.app/',
    githubUrl: 'https://github.com/NEBRO00/Hay-Day-Shop',
    media: [
      { src: '/projects/hayday-1.jpg', fallbackColor: '#8B7CF6' },
      { src: '/projects/hayday-2.jpg', fallbackColor: '#5B8DEF' },
      { src: '/projects/hayday-3.jpg', fallbackColor: '#F2748C' },
      { src: '/projects/hayday-4.jpg', fallbackColor: '#F2A25C' },
    ],
  },
  {
    id: 'portfolio',
    order: '05',
    category: 'additional',
    type: { th: 'ส่วนตัว', en: 'Personal' },
    title: { th: 'Portfolio เวอร์ชันแรก', en: 'First Portfolio Site' },
    description: {
      th: 'เว็บพอร์ตโฟลิโอเวอร์ชันแรกที่สร้างด้วยมือ ใช้ scroll-snap แบ่งเป็นหลาย section มีเมนูแบบ fixed, ปุ่มติดต่อแบบลอย และระบบ modal',
      en: 'An earlier hand-coded portfolio: a scroll-snap multi-section layout with fixed navigation, a floating contact button, and a modal system.',
    },
    role: { th: 'ออกแบบและเขียนโค้ดคนเดียวทั้งหมด', en: 'Designed and coded solo, end to end' },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    challenge: {
      th: 'เรียนรู้ scroll-snap, position: fixed และการทำ modal ที่ copy ลิงก์ได้ ไปพร้อมกับการสร้างจริง',
      en: 'Learned scroll-snap layouts, fixed positioning, and a copy-to-clipboard modal system while building for real.',
    },
    result: {
      th: 'ได้พื้นฐาน CSS ที่แน่นขึ้นมาก และกลายเป็นจุดเริ่มต้นของเว็บเวอร์ชันนี้',
      en: 'Built a much stronger CSS foundation — and became the starting point for this current site.',
    },
    liveUrl: 'https://reesume-kanpasut.vercel.app/',
    githubUrl: 'https://github.com/NEBRO00/Reesume_kanpasut',
    media: [
      { src: '/projects/portfolio-1.jpg', fallbackColor: '#F2748C' },
      { src: '/projects/portfolio-2.jpg', fallbackColor: '#F2A25C' },
      { src: '/projects/portfolio-3.jpg', fallbackColor: '#8B7CF6' },
      { src: '/projects/portfolio-4.jpg', fallbackColor: '#5B8DEF' },
    ],
  },
  {
    id: 'uxui-freelance',
    order: '06',
    category: 'additional',
    type: { th: 'ฟรีแลนซ์', en: 'Freelance' },
    title: { th: 'งานออกแบบ UI/UX ฟรีแลนซ์', en: 'Freelance UI/UX Design Work' },
    description: {
      th: 'รับออกแบบ UI/UX ให้กับลูกค้าในแพลตฟอร์ม Fastwork โดยเริ่มจากการวางโครงสร้างหน้าเว็บจนถึง mockup แบบละเอียด พร้อมจัดทำ prototype เพื่อให้ลูกค้าเห็นแนวคิดชัดเจน',
      en: 'Freelance UI/UX design work for clients on Fastwork, covering wireframes, polished mockups, and prototypes that make the product vision easy to understand.',
    },
    role: { th: 'นักออกแบบ UI/UX รับผิดชอบทั้งการวิเคราะห์ความต้องการและออกแบบฟีเจอร์ให้ใช้งานจริง', en: 'UI/UX designer responsible for understanding requirements and translating them into practical, user-friendly designs' },
    technologies: ['Figma', 'Wireframing', 'Prototyping', 'UX Research'],
    challenge: {
      th: 'ต้องแปลงความต้องการที่แตกต่างกันของลูกค้าให้กลายเป็นดีไซน์ที่ใช้งานง่ายและสื่อสารได้ตรงจุดภายในเวลาจำกัด',
      en: 'Translating diverse client requirements into simple, usable designs while working under tight deadlines.',
    },
    result: {
      th: 'ส่งมอบดีไซน์ให้กับลูกค้าได้หลายโปรเจกต์และช่วยเพิ่มความมั่นใจในการสื่อสารแนวคิดกับลูกค้า',
      en: 'Delivered design work for multiple clients and improved communication of ideas through clearer, more structured mockups.',
    },
    liveUrl: '#',
    githubUrl: 'https://github.com/NEBRO00/UXUI-Freelance',
    media: [
      { src: '/projects/uiux-freelance-1.jpg', fallbackColor: '#5B8DEF' },
      { src: '/projects/uiux-freelance-2.jpg', fallbackColor: '#8B7CF6' },
      { src: '/projects/uiux-freelance-3.jpg', fallbackColor: '#F2A25C' },
      { src: '/projects/uiux-freelance-4.jpg', fallbackColor: '#F2748C' },
    ],
  },

]

export const experience: ExperienceItem[] = [
  {
    role: { th: 'ผู้ช่วยวิศวกรฝ่ายผลิต (ฝึกงาน)', en: 'Production Engineer Assistant (Internship)' },
    org: { th: 'SEWT-E, นครราชสีมา', en: 'SEWT-E, Nakhon Ratchasima' },
    period: { th: 'ก.พ.–พ.ค. 2569', en: 'Feb–May 2026' },
    summary: {
      th: 'ร่วมโครงการปรับปรุงเครื่อง Air Leak โดยใช้ Mitsubishi FX5S PLC ร่างโปรแกรมเบื้องต้น ออกแบบการเดินสาย และประกอบชิ้นงานจริงกับ Production Engineer',
      en: 'Contributed to an Air Leak machine improvement project using a Mitsubishi FX5S PLC; drafted initial PLC logic, designed wiring, and assembled the unit with a production engineer.',
    },
    outcome: {
      th: 'ได้ประสบการณ์ตรงด้านระบบอัตโนมัติในโรงงานและการแก้ปัญหาหน้างานจริง',
      en: 'Gained hands-on experience with factory automation systems and real on-the-floor problem solving.',
    },
  },
]

export const education: EducationItem[] = [
  {
    school: { th: 'มหาวิทยาลัยเทคโนโลยีสุรนารี', en: 'Suranaree University of Technology' },
    field: { th: 'วิศวกรรมอิเล็กทรอนิกส์', en: 'Electronics Engineering' },
    period: { th: 'จบการศึกษา พ.ศ. 2569', en: 'Graduated 2026' },
  },
]

export const skillGroups = [
  {
    number: '01',
    title: { th: 'ออกแบบวงจรและ PCB', en: 'Electronics & PCB Design' },
    items: ['Circuit Design', 'PCB Design', 'Circuit Testing'],
  },
  {
    number: '02',
    title: { th: 'ระบบฝังตัวและ Computer Vision', en: 'Embedded Systems & Computer Vision' },
    items: ['ESP32', 'Raspberry Pi 5', 'Arduino IDE', 'C', 'Python', 'OpenCV'],
  },
  {
    number: '03',
    title: { th: 'PLC และระบบอัตโนมัติ', en: 'PLC & Industrial Automation' },
    items: ['Mitsubishi FX5S', 'PLC Ladder Logic (Basic)', 'Sensors', 'Air Leak Testing'],
  },
  {
    number: '04',
    title: { th: 'เครื่องมือทางวิศวกรรม', en: 'Engineering Tools' },
    items: ['SolidWorks', 'Git', 'GitHub'],
  },
  {
    number: '05',
    title: { th: 'ทักษะเสริม: Web และ UI/UX', en: 'Additional: Web & UI/UX' },
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Figma', 'Framer Motion', 'PostgreSQL'],
  },
]

// ---- contact / links -------------------------------------------------------
// edit these directly — they're used across the header, hero and footer.
export const links = {
  email: 'ne0002545@gmail.com',
  phone: '062-234-5413',
  line: 'nezama111',
  github: 'https://github.com/NEBRO00/Resume-Electronics',
  // Drop your resume PDF into /public as "resume.pdf" and the Download
  // Resume button will pick it up automatically — no code change needed.
  resumeUrl: '/resume.pdf',
}

// ---- hero portrait photos ---------------------------------------------------
// Drop your two photos straight into /public with these exact filenames and
// they'll show up automatically — no other code changes needed.
// - base: the photo shown normally (rendered with a pixel-mosaic overlay)
// - reveal: the photo that appears inside the cursor/touch circle
export const portrait = {
  base: '/portrait-1.jpg',
  reveal: '/portrait-2.jpg',
}

// ---- page copy, per language ----------------------------------------------

export interface PageCopy {
  nav: {
    about: string
    skills: string
    projects: string
    experience: string
    contact: string
  }
  hero: {
    greeting: string
    name: string
    role: string
    tagline: string
    status: string
    workPreference: string
    viewProjects: string
    downloadResume: string
    contactMe: string
  }
  about: {
    heading: string
    body: string
    workStatusLabel: string
    locationLabel: string
    workPrefLabel: string
    thaiLabel: string
    englishLabel: string
    location: string
    thaiLevel: string
    englishLevel: string
  }
  skills: {
    heading: string
  }
  experience: {
    heading: string
    educationHeading: string
    noExperienceNote: string
  }
  projects: {
    heading: string
    engineeringGroup: string
    additionalGroup: string
    roleLabel: string
    resultLabel: string
    liveProject: string
    viewCode: string
  }
  contact: {
    heading: string
    subheading: string
    formName: string
    formEmail: string
    formMessage: string
    formSubmit: string
    formNotConnected: string
  }
  footer: {
    rights: string
  }
  langToggleLabel: string
}

export const content: Record<Lang, PageCopy> = {
  th: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      greeting: "HI, I'M",
      name: 'KANPASUT',
      role: 'Electronics Engineer',
      tagline: 'ผลงานด้านวิศวกรรมอิเล็กทรอนิกส์ ครอบคลุมการออกแบบวงจรและ PCB ระบบฝังตัว และระบบอัตโนมัติ พร้อมโปรเจกต์ Web และ UI/UX เป็นผลงานเสริม',
      status: 'Open to Work',
      workPreference: 'Hybrid',
      viewProjects: 'View Projects',
      downloadResume: 'Download Resume',
      contactMe: 'Contact Me',
    },
    about: {
      heading: 'About Me',
      body: 'ผมชื่อเน (กานต์พสุตม์ แสงทอง) บัณฑิตวิศวกรรมอิเล็กทรอนิกส์จากมหาวิทยาลัยเทคโนโลยีสุรนารี มีประสบการณ์จากการฝึกงานด้านระบบอัตโนมัติในโรงงาน และโปรเจกต์ออกแบบวงจร ระบบฝังตัว และ Computer Vision สนใจงานที่ได้วิเคราะห์ปัญหา ออกแบบ ทดสอบ และปรับปรุงระบบจากการใช้งานจริง',
      workStatusLabel: 'สถานะการทำงาน',
      locationLabel: 'Location',
      workPrefLabel: 'Work Preference',
      thaiLabel: 'ไทย',
      englishLabel: 'อังกฤษ',
      location: 'นครราชสีมา, ประเทศไทย',
      thaiLevel: 'เจ้าของภาษา',
      englishLevel: 'อ่านและเขียนได้ / กำลังพัฒนาการสนทนา',
    },
    skills: {
      heading: 'Skills',
    },
    experience: {
      heading: 'Experience',
      educationHeading: 'Education',
      noExperienceNote: 'ประสบการณ์ด้านวิศวกรรมจากการฝึกงานและโปรเจกต์ลงมือทำจริง',
    },
    projects: {
      heading: 'Projects',
      engineeringGroup: 'ผลงานด้านวิศวกรรมอิเล็กทรอนิกส์',
      additionalGroup: 'ผลงานเพิ่มเติม',
      roleLabel: 'บทบาท',
      resultLabel: 'ผลลัพธ์',
      liveProject: 'Live Project',
      viewCode: 'GitHub',
    },
    contact: {
      heading: 'Contact',
      subheading: 'มีโปรเจกต์ในใจ หรืออยากคุยเรื่องงาน ทักมาได้เลยครับ',
      formName: 'ชื่อ',
      formEmail: 'อีเมล',
      formMessage: 'ข้อความ',
      formSubmit: 'ส่งข้อความ',
      formNotConnected: 'ฟอร์มนี้ยังไม่ได้เชื่อมต่อระบบส่งข้อความ — เพิ่ม Formspree หรือ EmailJS ได้ใน src/components/Contact.tsx',
    },
    footer: {
      rights: 'สงวนลิขสิทธิ์',
    },
    langToggleLabel: 'เปลี่ยนภาษา',
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      greeting: "HI, I'M",
      name: 'KANPASUT',
      role: 'Electronics Engineer',
      tagline: 'Electronics engineering work in circuit and PCB design, embedded systems, and automation, complemented by web and UI/UX projects.',
      status: 'Open to Work',
      workPreference: 'Hybrid',
      viewProjects: 'View Projects',
      downloadResume: 'Download Resume',
      contactMe: 'Contact Me',
    },
    about: {
      heading: 'About Me',
      body: "I'm Ne (Kanpasut Sangthong), an Electronics Engineering graduate from Suranaree University of Technology. I have hands-on experience in factory automation through my internship at SEWT-E, alongside projects in circuit design, embedded systems, and computer vision. I enjoy analyzing problems, building practical solutions, and improving systems through testing.",
      workStatusLabel: 'Work Status',
      locationLabel: 'Location',
      workPrefLabel: 'Work Preference',
      thaiLabel: 'Thai',
      englishLabel: 'English',
      location: 'Nakhon Ratchasima, Thailand',
      thaiLevel: 'Native',
      englishLevel: "Reading & writing okay, speaking is still a work in progress",
    },
    skills: {
      heading: 'Skills',
    },
    experience: {
      heading: 'Experience',
      educationHeading: 'Education',
      noExperienceNote: 'Hands-on engineering experience through an internship and practical projects.',
    },
    projects: {
      heading: 'Projects',
      engineeringGroup: 'Electronics Engineering',
      additionalGroup: 'Additional Projects',
      roleLabel: 'Role',
      resultLabel: 'Outcome',
      liveProject: 'Live Project',
      viewCode: 'GitHub',
    },
    contact: {
      heading: 'Contact',
      subheading: "Got a project in mind, or just want to talk shop? Reach out.",
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      formSubmit: 'Send Message',
      formNotConnected: 'This form is not wired up to a backend yet — add Formspree or EmailJS in src/components/Contact.tsx',
    },
    footer: {
      rights: 'All rights reserved',
    },
    langToggleLabel: 'Switch language',
  },
}
