import { s } from "framer-motion/client";
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";



// backgroundUrl: "./src/assets/benefits/card-1.svg",
// iconUrl: "./src/assets/benefits/jadoon.jpeg",

import card1 from "../assets/benefits/card-1.svg";
import card2 from "../assets/benefits/card-2.svg";
import card3 from "../assets/benefits/card-3.svg";
import card4 from "../assets/benefits/card-4.svg";
import card5 from "../assets/benefits/card-5.svg";
import card6 from "../assets/benefits/card-6.svg";
import AbdulWahab from "../assets/benefits/abdulwahab.jpg";
import asadM from "../assets/benefits/asadm.jpg";
import haiderzaidi from "../assets/benefits/haiderzaidi.jpeg";
import itba from "../assets/benefits/Itba.jpeg";
import sadiq from "../assets/benefits/sadiq.jpeg";
import ahmedGDGoC from "../assets/benefits/ahmedGDGoC.jpeg";
import Mumtaz from "../assets/benefits/Mumtaz.jpg";
import Anshrah from "../assets/benefits/Anshrah.jpeg";
import abdullahejaz from "../assets/benefits/AbdullahEjaz.jpg";
import AhmadA from "../assets/benefits/AhmadA.jpg";
import Haris from "../assets/benefits/Haris.jpeg";

import bilal from "../assets/benefits/bilal.jpeg";
import AbdullahHabib from "../assets/benefits/abdullahhabib.png";
import rafay from "../assets/benefits/rafay.jpeg";
import haiderirfan from "../assets/benefits/HaiderIrfan.jpeg";
import alishba from "../assets/benefits/alishba.jpeg";

import asifahmad from "../assets/benefits/asifahmad.jpg";
import jadoon from "../assets/benefits/Jadoon.jpeg";
import sajidali from "../assets/benefits/sajidali.jpeg";
// import AbdulWahab from "../assets/benefits/AbdulWahab.jpg";



export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/Mainpage",
  },
  {
    id: "1",
    title: "Donations",
    url: "Mainpage#donations",
  },
  {
    id: "2",
    title: "Features",
    url: "/features",
  },
  {
    id: "3",
    title: "privacy policy",
    url: "#how-to-use",
  },
  {
    id: "4",
    title: "Contact",
    url: "Mainpage#contactme",
  },
];
export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Start with as low as a Rs200/- monthly donation!",
  "100% of the donations to go directly in mess fee payments.",
  "Transperancy reports available on demand.",
];
export const brainwaveServices2 = [
  "Voice & Chat-based Assistance.",
  "Study Planner & Smart Scheduling.",
];
export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
];

export const collabText =
  "DREAM provides GIKIANs across all faculties with access to downloadable past papers, helping them effectively prepare for their semester exams.";

export const collabContent = [
  {
    id: "0",
    title: "Past Papers of Different Courses",
    text: collabText,
  },
  {
    id: "1",
    title: "Reach Out to GIKI's Top Performers",
  },
  {
    id: "2",
    title: "Instructor-Recommended Strategies",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "INSTRUCTOR ADVICES",
    description: "Get insights and exam tips straight from your professors!",
    link: "/instructors-tab", // Unique link
  },
  {
    id: "1",
    title: "COURSE MATERIAL",
    description:
      "Boost your preparation with the access to the treasure trove of past papers!",
    link: "/course-contents", // Unique link
  },
  {
    id: "2",
    title: "SENIOR GIKIAN'S SUPPORT",
    description: "Connect with seniors for guidance with academics and skills.",
    link: "/senior-support", // Unique link
  },
];

export const benefits = [
  {
    id: "0",
    title: "MM 102/101 - MATERIALS AND NANOTECHNOLOGY",
    text: "Faculty of Materials and Chemical Engineering - FMCE",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    link: "mm101",
  },
  {
    id: "1",
    title: "ES 111/DS 221 - Probability and Statistics",
    text: "Faculty of Engineering Sciences - FES",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    light: true,
    link: "es111",
  },
  {
    id: "2",
    title: "MT 102/201 - Differential Equations and Linear Algebra",
    text: "Faculty of Engineering Sciences - FES",
    light: true,
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    link: "mt102",
  },
  {
    id: "3",
    title: "MT 203 - Complex Variables and Transformations",
    text: "Faculty of Engineering Sciences - FES",
    backgroundUrl: "./src/assets/benefits/card-4.svg",

    link: "mt203",
  },
  {
    id: "4",
    title: "CH 101 - Applied Chemistry and Environment",
    text: "Faculty of Materials and Chemical Engineering - FMCE",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    light: true,
    link: "ch101",
  },
  {
    id: "5",
    title: "CS 224 - Formal Languages and Theory of Automata",
    text: "Faculty of Computer Sciences -FCSE",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    light: true,
    link: "cs224",
  },
  {
    id: "6",
    title: "CS 101 - Computing and Artificial Intelligence",
    text: "Faculty of Computer Sciences - FCSE",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    light: true,
    link: "cs101",
  },
  {
    id: "7",
    title: "CS 112 - Object Oriented Programming",
    text: "Faculty of Computer Sciences - FCSE",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    link: "cs112",
    light: true,
  },
  {
    id: "8",
    title: "PH 101 - Applied Physics",
    text: "Faculty of Engineering Sciences - FES",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    light: true,
    link: "ph101",
  },
  {
    id: "9",
    title: "MT 101 - Calculus I",
    text: "Faculty of Engineering Sciences - FES",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    link: "mt101",
    light: true,
  },
];

export const benefits2 = [
  {
    id: "0",
    title: "Muhammad Bilal",
    text: "AI & Software Engineer, Cys Major Batch 32 @ GIKI",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: bilal,
    link: "https://www.linkedin.com/in/muhammadbilalsvg/",
    light: true,
  },
  {
    id: "1",
    title: "Abdullah Habib",
    text: "Lead AI Engineer @ Ambitious Labs,  Co-Founder @ Perspective AI, AI Major Batch 31 @ GIKI",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: AbdullahHabib,
    light: true,
    link: "https://www.linkedin.com/in/mr-abdullahhabib/",
  },
  {
    id: "2",
    title: "Rafay Mustafa",
    text: "AI & Research, Mitacs GRI'24, AI Major Batch 31 @ GIKI",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: rafay,
    link: "https://www.linkedin.com/in/rafay-mustafa/",
    light: true,
  },

  {
    id: "3",
    title: "Haider Zaidi",
    text: "MERN, DevOps | xSystems Ltd, CS Major Batch 31 @ GIKI",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: haiderzaidi,
    link: "https://www.linkedin.com/in/haider-zaidi-/",
    light: true,
  },
  {
    id: "4",
    title: "Itba Malahat",
    text: "xIT @ P&G, xIT @ BoK, CS Major Batch 31 @ GIKI",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: itba,
    link: "https://www.linkedin.com/in/itba-malahat/",
    light: true,
  },

  {
    id: "5",
    title: "Anshrah Khan",
    text: "Campus Ambassador @ Unilever, xOGDCL & XEngro, MGS Major Batch 31 @ GIKI",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: Anshrah,
    link: "https://www.linkedin.com/in/anshrahkhan/",
    light: true,
  },
  {
    id: "6",
    title: "Haider Irfan",
    text: "AI Developer | Huawei SFTF'24, Semi-Finalist @ Imagine Cup'24, AI Major Batch 31 @ GIKI",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: haiderirfan,
    link: "https://www.linkedin.com/in/haiderirfan62/",
    light: true,
  },
  {
    id: "7",
    title: "Alishba Ramzan",
    text: "AI & Research, Global-UGRAD & CSUMB' Fall 24, AI Major Batch 32 @ GIKI",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: alishba,
    light: true,
    link: "https://www.linkedin.com/in/alishbaramzan/",
  },
  {
    id: "8",
    title: "Muhammad Ahmed",
    text: "xLead @ GDGoC GIK,  DS Major Batch 32 @ GIK",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: muhammadGDGoC,
    link: "https://www.linkedin.com/in/mhmdahmed5307/",
    light: true,
  },
  {
    id: "9",
    title: "Mumtaz Ali",
    text: "Head of Automation @ Team Swift, Competitive Programming, CS Major Batch 33 @ GIKI",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: Mumtaz,
    link: "https://www.linkedin.com/in/mumtaz-ali-%F0%9F%87%B5%F0%9F%87%B8-b18399288/",
    light: true,
  },

  {
    id: "10",
    title: "Abdullah Ejaz Janjua",
    text: "AI Researcher, CS Major Batch 33 @ GIKI",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: abdullahejaz,
    link: "https://www.linkedin.com/in/abdullah-ejaz-janjua/",
    light: true,
  },
  {
    id: "11",
    title: "Ahmad Amjad",
    text: "Deep Learning | Computer Vision, RAG & LangChain, CS Major Batch 33 @ GIKI",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: AhmadA,
    link: "https://www.linkedin.com/in/muhammad-ahmad-amjad-2862a5290/",
    light: true,
  },
  {
    id: "12",
    title: "Muhammad Haris",
    text: "AI & Software Engineer, AI/DL Researcher, CS Major Batch 33 @ GIKI",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: Haris,
    link: "https://www.linkedin.com/in/harris-giki",
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const benefits3 = [
  {
    id: "0",
    title: "Sir Asif Ahmad",
    faculty: "Lecturer @ Faculty of Engineering Sciences",
    qualification: "MS in Applied Mathematics",
    coursestaught: "Instructions for  MT 101/MT 102/MT 203",
    text: '"In universities your instructor is also your examiner; so actively take notes and pay close attention to class details. Mathematics is about mastering problem-solving strategies; so practice consistently and don’t procrastinate. Refine your analytical skills daily!"',
    backgroundUrl: card1,
    iconUrl: asifahmad,
    link: "https://www.linkedin.com/in/asifehmed/",
  },
  {
    id: "1",
    title: "Dr. Khurram Jadoon",
    faculty: "Assistant Professor @ FCSE",
    coursestaught: "Instructions for CS 101",
    text: '"Many students struggle with building coding logic and often confuse simple syntax errors with complex issues. They rely on memorizing code rather than understanding concepts; skip regular coding practice and fear debugging. A weak grasp of foundational topics further hinders progress therefore it is advisable to build logic with regular hand-on coding practice."',
    backgroundUrl: card5,
    iconUrl: jadoon,
    link: "mailto:Khurram.jadoon@giki.edu.pk",
    light: true,
  },

  {
    id: "2",
    title: "Sir Sajid Ali",
    faculty: "Lecturer @ Faculty of Computer Sciences",
    qualification: "MS in Computer Sciences",
    coursestaught: "Instructions for CS 224",
    text: '"Learning is a lifelong journey. Students should not only excel in coursework but also apply their knowledge practically. Automata teaches problem-solving which can be mastered through active participation/ assignments and consistent practice strengthening both conceptual understanding and real-world application."',
    backgroundUrl: card2,
    iconUrl: sajidali,
    link: "mailto:sajid.ali@giki.edu.pk",
    light: true,
  },
  {
    id: "3",
    title: "Sir Abdul Wahab",
    faculty: "Lecturer @ GIKI",
    qualification: "MS in Chemical Engineering",
    coursestaught: "Instructions for CH 161",
    text: '"CH 161 is an introductory chemistry course covering a broad range of topics at a basic level but students often overcomplicate it. To succeed; simply follow the instructor’s guidance and utilize the shared course materials. Lecture notes/slides and reference materials provided via email are generally sufficient for a solid understanding."',
    backgroundUrl: card4,
    iconUrl: AbdulWahab,
    link: "mailto:abdul.wahab@giki.edu.pk",
    light: true,
  },

  {
    id: "4",
    title: "Dr. Asad Mahmood",
    faculty: "Asst. Professor @ FES",
    qualification: "Ph.D (Telecom Paristech, France)",
    coursestaught: "Instructions for ES 205",
    text: '"It is advisable to thoroughly study the textbook as 90% of the assessments are based on the examples and exercise problems while 10% is designed around unique concepts and techniques explored during lectures. This Course is built on deep mathematical reasoning and demands continuous practice. Remember: “Mathematics is not a spectator’s game.”',
    backgroundUrl: card3,
    iconUrl: asadM,
    link: "mailto:asad.mahmood@giki.edu.pk",
    light: true,
  },
  {
    id: "5",
    title: "Sir Muhammad Sadiq",
    faculty: "Lecturer @ Faculty of Engineering Sciences",
    coursestaught: "Instructions for ES 111/DS 221",
    text: '"Feeling nervous about ES111? Don’t worry as it only seems tough at first. Many students try to memorize formulas but this course isn’t about cramming. It’s about building intuition and thinking logically. Why is this course important? It’s one of the 3 pillars behind AI and machine learning. Master the basics here and you’ll find advanced topics much easier later on. Stay curious and focus on understanding—not memorizing!"',
    backgroundUrl: card6,
    iconUrl: sadiq,
    link: "https://www.linkedin.com/in/muhammad-sadiq-a9ab88103/",
    light: true,
  },
];
