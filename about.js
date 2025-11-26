/*---[NO-5]-Design-the-Header-Section-START---*/

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuIcon = document.getElementById("mobileMenuIcon");
  const navLinks = document.getElementById("navLinks");
  const links = document.querySelectorAll(".nav-links a");
  const [activeLineTop, activeLineBottom] = [
    document.querySelector(".active-line-top"),
    document.querySelector(".active-line-bottom"),
  ];

  const setActiveLines = (link) => {
    const { width, left } = link.getBoundingClientRect();
    const offsetLeft = left - navLinks.getBoundingClientRect().left;
    [activeLineTop, activeLineBottom].forEach((line) => {
      line.style.width = `${width}px`;
      line.style.left = `${offsetLeft}px`;
    });
  };

  mobileMenuIcon.addEventListener("click", () =>
    navLinks.classList.toggle("show")
  );

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      if (window.innerWidth > 768) setActiveLines(link);
    });

    link.addEventListener("mouseover", () => {
      if (window.innerWidth > 768) setActiveLines(link);
    });
  });

  navLinks.addEventListener("mouseout", (e) => {
    if (!navLinks.contains(e.relatedTarget) && window.innerWidth > 768) {
      const activeLink = document.querySelector(".nav-links a.active");
      if (activeLink) setActiveLines(activeLink);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("show");
      const activeLink = document.querySelector(".nav-links a.active");
      if (activeLink) setActiveLines(activeLink);
    } else {
      [activeLineTop, activeLineBottom].forEach(
        (line) => (line.style.width = "0")
      );
    }
  });

  const activeLink = document.querySelector(".nav-links a.active");
  if (activeLink && window.innerWidth > 768) setActiveLines(activeLink);
});
/*---[NO-5]-Design-the-Header-Section-END---*/
/*[NO-9] Create the Footer Section - START */
const footerData = {
  information: {
    imgSrc: "images/footer/Group 11 1.svg",
    links: ["Main", "Gallery", "Projects", "Certifications", "Contacts"],
  },
  contacts: [
    {
      imgSrc: "images/footer/Vector (1).svg",
      text: "1234 Sample Street <br/> Austin Texas 78704",
    },
    {
      imgSrc: "images/footer/Group.svg",
      text: "512.333.2222",
    },
    {
      imgSrc: "images/footer/Vector (2).svg",
      text: "sampleemail@gmail.com",
    },
  ],
  socialMedia: [
    "images/footer/Shape.svg",
    "images/footer/Shape (1).svg",
    "images/footer/Shape (2).svg",
    "images/footer/pininterest.svg",
  ],
  footer2021: "© 2021 All Rights Reserved",
};

function createFooter(data) {
  const footer = document.createElement("footer");

  const footerContainer = document.createElement("div");
  footerContainer.classList.add("footer");

  const infoSection = document.createElement("div");
  infoSection.classList.add("footer_information");

  const infoImg = document.createElement("img");
  infoImg.classList.add("footer_img");
  infoImg.src = data.information.imgSrc;
  infoImg.alt = "Footer Logo";
  infoSection.appendChild(infoImg);

  const infoLinks = document.createElement("div");
  infoLinks.classList.add("footer_inf");

  const infoTitle = document.createElement("h1");
  infoTitle.textContent = "Information";
  infoLinks.appendChild(infoTitle);

  data.information.links.map((linkText) => {
    const link = document.createElement("a");
    link.classList.add("footer_p");
    link.textContent = linkText;
    link.href = "#";
    infoLinks.appendChild(link);
  });

  infoSection.appendChild(infoLinks);

  const contactsSection = document.createElement("div");
  contactsSection.classList.add("footer_contacts");

  const contactsTitle = document.createElement("h1");
  contactsTitle.classList.add("footer_cont_h");
  contactsTitle.textContent = "Contacts";
  contactsSection.appendChild(contactsTitle);

  data.contacts.map((contact) => {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("footer_cont");

    const contactImg = document.createElement("img");
    contactImg.classList.add("footer_cont_img");
    contactImg.src = contact.imgSrc;
    contactImg.alt = "Contact Icon";

    const contactText = document.createElement("p");
    contactText.classList.add("footer_s");
    contactText.innerHTML = contact.text;

    contactContainer.appendChild(contactImg);
    contactContainer.appendChild(contactText);
    contactsSection.appendChild(contactContainer);
  });

  const socialMediaSection = document.createElement("div");
  socialMediaSection.classList.add("footer_social");

  const socialTitle = document.createElement("h1");
  socialTitle.textContent = "Social Media";
  socialMediaSection.appendChild(socialTitle);

  const socialMediaIcons = document.createElement("div");
  socialMediaIcons.classList.add("footer_social_img");

  data.socialMedia.map((imgSrc) => {
    const socialImg = document.createElement("img");
    socialImg.src = imgSrc;
    socialImg.alt = "Social Icon";
    socialMediaIcons.appendChild(socialImg);
  });

  socialMediaSection.appendChild(socialMediaIcons);

  footerContainer.appendChild(infoSection);
  footerContainer.appendChild(contactsSection);
  footerContainer.appendChild(socialMediaSection);

  const footer2021 = document.createElement("div");
  footer2021.classList.add("footer_2021");
  footer2021.textContent = data.footer2021;

  footer.appendChild(footerContainer);
  footer.appendChild(footer2021);

  document.body.appendChild(footer);
}

createFooter(footerData);

/*[NO-9] Create the Footer Section - END */
   /* [NO-31] - About Page - START */
   const content = {
    paragraph1: "Founded in 2005, our architecture firm has been at the forefront of innovative design for over 15 years. We believe in creating spaces that not only meet the functional needs of our clients but also inspire and elevate the human experience.",
    paragraph2: "Our team of talented architects and designers brings a wealth of experience and creativity to every project. From sleek modern offices to sustainable residential complexes, we approach each design challenge with enthusiasm and a commitment to excellence.",
    paragraph3: "At the core of our philosophy is the belief that great architecture should harmonize with its environment, enhance the community, and stand the test of time. We work closely with our clients to understand their vision and bring it to life through thoughtful, sustainable, and aesthetically pleasing designs.",
    ctaButton: "View Our Projects",
    contactButton: "Contact Us",
    galleryButton: "Photo Gallery",
    images: [
      {
          src: "images/about-page/image1.jpg",
          style: "width: 200px; height: 300px;"
      },
      {
          src: "images/about-page/image2.jpg",
          style: "width: 200px; height: 300px;"
      },
      {
          src: "images/about-page/image3.jpg",
          style: "width: 200px; height: 300px;"
      },
      {
        src: "images/about-page/image4.jpg",
        style: "width: 200px; height: 300px;"
      },
  ]
};

document.getElementById('paragraph1').textContent = content.paragraph1;
document.getElementById('paragraph2').textContent = content.paragraph2;
document.getElementById('paragraph3').textContent = content.paragraph3;
document.getElementById('ctaText').textContent = content.ctaButton;
document.getElementById('contactText').textContent = content.contactButton;
document.getElementById('galleryText').textContent = content.galleryButton;


content.images.forEach((img, index) => {
  const imgElement = document.getElementById(`image${index + 1}`);
  imgElement.src = img.src;
  imgElement.style = img.style;
});
/* [NO-31] - About Page - END */