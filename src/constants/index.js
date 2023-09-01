import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    webflow,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    testmonialpic,
    test2,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "UI / UX",
      icon: mobile,
    },
    {
      title: "Digital Marketing",
      icon: backend,
    },
    {
      title: "E-Commerce store",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "webflow",
      icon: webflow,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Business website",
      company_name: "Modern & Professional",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Customized Solutions: We create tailored website designs to fit your unique brand and business goals, ensuring a personalized user experience.",
        "Responsive Design: With a focus on mobile-first principles, we build websites that provide an optimal viewing experience across all devices.",
        "SEO Optimized: Utilizing best practices in SEO, we design websites with clean code and fast-loading pages to enhance visibility on search engines.",
        "Ongoing Support: We offer continuous maintenance and support to ensure your website stays updated, secure, and performs at its best.",
      ],
    },
    {
      title: "E-Commerce store",
      company_name: "Streamlined & Engaging",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Personalized Shopping Experience: We tailor navigation and recommendations for a unique customer journey.",
        "Multi-Device Compatibility: Our designs ensure seamless shopping on smartphones, tablets, and desktops.",
        "Secure Payment Gateways: We provide robust security and various payment options for trustworthy checkout.",
        "Data-Driven Insights: Leveraging cutting-edge analytics tools, we offer insights to optimize customer behavior and sales trends.",
      ],
    },
    {
      title: "UI / UX",
      company_name: "Intuitive & User-Centered",
      icon: tesla,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Intuitive Navigation: We craft user-friendly interfaces that guide users effortlessly through your site or app.",
        "Responsive Design: Our designs adapt to all devices, ensuring a seamless user experience.",
        "User-Centered Approach: We prioritize user feedback and testing, tailoring designs to meet real-world needs.",
        "Visual Excellence: We deliver visually stunning and functional designs that engage and retain users.",
      ],
    },
    {
      title: "Digital Marketing",
      company_name: "Strategic & Impactful",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Strategic Planning: We create customized marketing strategies that align with your brand and goals.",
        "Content Excellence: We produce compelling content that resonates with your target audience.",
        "Data-Driven Optimization: We use analytics to continuously refine and improve campaign performance.",
        "Multi-Channel Integration: We leverage various channels like social media, email, and SEO to maximize reach.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but kunal proved me wrong.",
      name: "Shradha Sharma",
      designation: "CEO",
      company: "YourStory Media",
      image: test2,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like kunal does.",
      name: "Raj Thapar",
      designation: "Founder",
      company: "Thapar Group",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After webalchemy optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Divyam Hans",
      designation: "CTO",
      company: "Random Bazar",
      image: testmonialpic,
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Gericht Restraunt",
      description:
        "Online culinary destination that enables patrons to browse, reserve, experience dining choices from the diverse gericht menu, offering a refined and personalized touch.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/adrianhajdin/project_modern_ui_ux_restaurant",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };