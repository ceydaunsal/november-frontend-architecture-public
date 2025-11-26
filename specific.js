/*---[NO-5]-Design-the-Header-Section-START---*/

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuIcon = document.getElementById('mobileMenuIcon');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-links a');
  const [activeLineTop, activeLineBottom] = [
    document.querySelector('.active-line-top'),
    document.querySelector('.active-line-bottom'),
  ];

  const setActiveLines = (link) => {
    const { width, left } = link.getBoundingClientRect();
    const offsetLeft = left - navLinks.getBoundingClientRect().left;
    [activeLineTop, activeLineBottom].forEach(line => {
      line.style.width = `${width}px`;
      line.style.left = `${offsetLeft}px`;
    });
  };

  mobileMenuIcon.addEventListener('click', () =>
    navLinks.classList.toggle('show')
  );

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      if (window.innerWidth > 768) setActiveLines(link);
    });

    link.addEventListener('mouseover', () => {
      if (window.innerWidth > 768) setActiveLines(link);
    });
  });

  navLinks.addEventListener('mouseout', (e) => {
    if (!navLinks.contains(e.relatedTarget) && window.innerWidth > 768) {
      const activeLink = document.querySelector('.nav-links a.active');
      if (activeLink) setActiveLines(activeLink);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('show');
      const activeLink = document.querySelector('.nav-links a.active');
      if (activeLink) setActiveLines(activeLink);
    } else {
      [activeLineTop, activeLineBottom].forEach(line => (line.style.width = '0'));
    }
  });

  const activeLink = document.querySelector('.nav-links a.active');
  if (activeLink && window.innerWidth > 768) setActiveLines(activeLink);
});
/*---[NO-5]-Design-the-Header-Section-END---*/


/* [NO-25] Implement the Specific Prioject Page Content START */
const urlParams = new URLSearchParams(window.location.search); // ?pageid=1 gibi parametreleri alır
const pageId = urlParams.get("pageid");

const content = {
    "1": {
        topImg: "images/specific/3d-rendering-illustration-modern-house_62754-2788.jpg",
        divImg: "images/specific/3d-rendering-illustration-modern-house_62754-2778.jpg",
        description: "Project 1 description goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        bottomImg: "images/specific/3d-rendering-illustration-modern-house_62754-2725.jpg",
        projectName: "Sample Project 1"
    },
    "2": {
        topImg: "images/specific/2,1.jpg",
        divImg: "images/specific/2,2.jpg",
        description: "Project 2 description goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        bottomImg: "images/specific/2,3.jpg",
        projectName: "Sample Project 2"
    },
    "3": {
        topImg: "images/specific/3,1.jpg",
        divImg: "images/specific/3,2.jpg",
        description: "Project 3 description goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        bottomImg: "images/specific/3,3.jpg",
        projectName: "Sample Project 3"
    },
    "4": {
        topImg: "images/specific/4,1.jpg",
        divImg: "images/specific/4,2.jpg",
        description: "Project 4 description goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        bottomImg: "images/specific/4,3.jpg",
        projectName: "Sample Project 4"
    },
    "5": {
        topImg: "images/specific/5,1.jpg",
        divImg: "images/specific/5,2.jpg",
        description: "Project 5 description goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        bottomImg: "images/specific/5,3.jpg",
        projectName: "Sample Project 5"
    }
};

if (pageId && content[pageId]) {
    document.getElementById("top-img").src = content[pageId].topImg;
    document.getElementById("div-img").src = content[pageId].divImg;
    document.getElementById("bottom-img").src = content[pageId].bottomImg;
    document.getElementById("description").innerText = content[pageId].description;
    document.getElementById("project-name").innerText = content[pageId].projectName;
} else {
    document.getElementById("description").innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.";
}
/* [NO-25] Implement the Specific Prioject Page Content END */


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
  
