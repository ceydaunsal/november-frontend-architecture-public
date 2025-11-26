/*---[NO-5]-Design-the-Header-Section-START---*/

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuIcon = document.getElementById("mobileMenuIcon")
  const navLinks = document.getElementById("navLinks")
  const links = document.querySelectorAll(".nav-links a")
  const [activeLineTop, activeLineBottom] = [
    document.querySelector(".active-line-top"),
    document.querySelector(".active-line-bottom"),
  ]

  const setActiveLines = (link) => {
    const { width, left } = link.getBoundingClientRect()
    const offsetLeft = left - navLinks.getBoundingClientRect().left
    ;[activeLineTop, activeLineBottom].forEach((line) => {
      line.style.width = `${width}px`
      line.style.left = `${offsetLeft}px`
    })
  }

  mobileMenuIcon.addEventListener("click", () =>
    navLinks.classList.toggle("show")
  )

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((l) => l.classList.remove("active"))
      link.classList.add("active")
      if (window.innerWidth > 768) setActiveLines(link)
    })

    link.addEventListener("mouseover", () => {
      if (window.innerWidth > 768) setActiveLines(link)
    })
  })

  navLinks.addEventListener("mouseout", (e) => {
    if (!navLinks.contains(e.relatedTarget) && window.innerWidth > 768) {
      const activeLink = document.querySelector(".nav-links a.active")
      if (activeLink) setActiveLines(activeLink)
    }
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("show")
      const activeLink = document.querySelector(".nav-links a.active")
      if (activeLink) setActiveLines(activeLink)
    } else {
      ;[activeLineTop, activeLineBottom].forEach(
        (line) => (line.style.width = "0")
      )
    }
  })

  const activeLink = document.querySelector(".nav-links a.active")
  if (activeLink && window.innerWidth > 768) setActiveLines(activeLink)
})
/*---[NO-5]-Design-the-Header-Section-END---*/

/*Create the Photo Gallery sectıon START*/
const mediaQuery1345 = window.matchMedia("(max-width: 1345px)")
const mediaQuery1070 = window.matchMedia("(max-width: 1070px)")
const mediaQuery621 = window.matchMedia("(max-width: 621px)")
const mediaQuery405 = window.matchMedia("(max-width: 405px)")
const pageNumberLeft = document.querySelector(".page-number-left")
const pageNumberRight = document.querySelector(".page-number-right")

const getImageNumber = () => {
  if (mediaQuery405.matches) return 2
  if (mediaQuery621.matches) return 4
  if (mediaQuery1070.matches) return 6
  if (mediaQuery1345.matches) return 8
  return 10
}

const mediaQueryChange = () => {
  const imageNumber = getImageNumber()
  const container = document.querySelector(".image__container")
  const nextButton = document.querySelector(".gallery__next_btn")
  const prevButton = document.querySelector(".gallery__prev_btn")
  let i = 0
  let allImages = []

  fetch("/constants/gallery.json")
    .then((response) => response.json())
    .then((images) => {
      allImages = images
      loadImages()
      updatePageNumber()
    })
    .catch((error) => console.error("JSON verisi alınamadı:", error))

  const loadImages = () => {
    const nextImages = allImages.slice(i, i + imageNumber)
    container.innerHTML = ""

    nextImages.forEach((image) => {
      const imgElement = document.createElement("img")
      imgElement.src = image.url
      imgElement.alt = `Image ${image.id}`
      imgElement.title = `Image ID: ${image.id}`
      container.appendChild(imgElement)
    })
  }

  const updatePageNumber = () => {
    const totalPages = Math.ceil(allImages.length / imageNumber)
    const currentPage = Math.floor(i / imageNumber) + 1

    const digits = pageNumberLeft.querySelectorAll(".digit")
    const currentPageStr = String(currentPage).padStart(2, "0")
    digits[0].textContent = currentPageStr[0]
    digits[1].textContent = currentPageStr[1]

    pageNumberRight.textContent = `/ ${String(totalPages).padStart(2, "0")}`
  }

  nextButton.addEventListener("click", () => {
    i = i + imageNumber >= allImages.length ? 0 : i + imageNumber
    loadImages()
    updatePageNumber()
  })

  prevButton.addEventListener("click", () => {
    i =
      i - imageNumber < 0
        ? allImages.length - (allImages.length % imageNumber || imageNumber)
        : i - imageNumber
    loadImages()
    updatePageNumber()
  })
}
mediaQueryChange()
;[mediaQuery1345, mediaQuery1070, mediaQuery621, mediaQuery405].forEach(
  (query) => query.addEventListener("change", mediaQueryChange)
)
/*Create the Photo Gallery sectıon END*/

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
}

function createFooter(data) {
  const footer = document.createElement("footer")

  const footerContainer = document.createElement("div")
  footerContainer.classList.add("footer")

  const infoSection = document.createElement("div")
  infoSection.classList.add("footer_information")

  const infoImg = document.createElement("img")
  infoImg.classList.add("footer_img")
  infoImg.src = data.information.imgSrc
  infoImg.alt = "Footer Logo"
  infoSection.appendChild(infoImg)

  const infoLinks = document.createElement("div")
  infoLinks.classList.add("footer_inf")

  const infoTitle = document.createElement("h1")
  infoTitle.textContent = "Information"
  infoLinks.appendChild(infoTitle)

  data.information.links.map((linkText) => {
    const link = document.createElement("a")
    link.classList.add("footer_p")
    link.textContent = linkText
    link.href = "#"
    infoLinks.appendChild(link)
  })

  infoSection.appendChild(infoLinks)

  const contactsSection = document.createElement("div")
  contactsSection.classList.add("footer_contacts")

  const contactsTitle = document.createElement("h1")
  contactsTitle.classList.add("footer_cont_h")
  contactsTitle.textContent = "Contacts"
  contactsSection.appendChild(contactsTitle)

  data.contacts.map((contact) => {
    const contactContainer = document.createElement("div")
    contactContainer.classList.add("footer_cont")

    const contactImg = document.createElement("img")
    contactImg.classList.add("footer_cont_img")
    contactImg.src = contact.imgSrc
    contactImg.alt = "Contact Icon"

    const contactText = document.createElement("p")
    contactText.classList.add("footer_s")
    contactText.innerHTML = contact.text

    contactContainer.appendChild(contactImg)
    contactContainer.appendChild(contactText)
    contactsSection.appendChild(contactContainer)
  })

  const socialMediaSection = document.createElement("div")
  socialMediaSection.classList.add("footer_social")

  const socialTitle = document.createElement("h1")
  socialTitle.textContent = "Social Media"
  socialMediaSection.appendChild(socialTitle)

  const socialMediaIcons = document.createElement("div")
  socialMediaIcons.classList.add("footer_social_img")

  data.socialMedia.map((imgSrc) => {
    const socialImg = document.createElement("img")
    socialImg.src = imgSrc
    socialImg.alt = "Social Icon"
    socialMediaIcons.appendChild(socialImg)
  })

  socialMediaSection.appendChild(socialMediaIcons)

  footerContainer.appendChild(infoSection)
  footerContainer.appendChild(contactsSection)
  footerContainer.appendChild(socialMediaSection)

  const footer2021 = document.createElement("div")
  footer2021.classList.add("footer_2021")
  footer2021.textContent = data.footer2021

  footer.appendChild(footerContainer)
  footer.appendChild(footer2021)

  document.body.appendChild(footer)
}

createFooter(footerData)

/*[NO-9] Create the Footer Section - END */
