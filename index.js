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
/*--[N0-7]Hero-Section-Started--*/
let currentIndex = 0
let projects = []

const heroTitle = document.getElementById("hero-title")
const heroSubtitle = document.getElementById("hero-subtitle")
const heroImage = document.getElementById("hero-image")
const currentPage = document.getElementById("current-page")
const totalPages = document.getElementById("total-pages")
const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow")

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    projects = data
    totalPages.textContent = String(projects.length).padStart(2, "0")
    updateHeroSection()
  })
  .catch((error) => console.error("Error fetching data:", error))

function updateHeroSection() {
  if (projects.length > 0) {
    const currentProject = projects[currentIndex]
    heroTitle.textContent = currentProject.title
    heroSubtitle.textContent = currentProject.subtitle
    heroImage.src = currentProject.image
    heroImage.alt = currentProject.title
    currentPage.textContent = String(currentIndex + 1).padStart(2, "0")
  }
}

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length
  updateHeroSection()
})

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projects.length
  updateHeroSection()
})
/*--[NO-7]Hero-Section finished--*/

/*---[NO-13]-Implement-the-About-Section-START---*/
const data = {
  images: [
    {
      src: "https://i.pinimg.com/736x/5c/75/65/5c7565a4135aa10e1a0e2215165ad281.jpg",
      width: 270,
      height: 345,
    },
    {
      src: "https://i.pinimg.com/736x/4e/7f/11/4e7f1176883bd643472c55a31506bb98.jpg",
      width: 270,
      height: 265,
    },
    {
      src: "https://www.dekoros.com/wp-content/uploads/2022/10/F1277.jpg",
      width: 270,
      height: 140,
    },
  ],

  title: "About",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
}

function renderApp() {
  const aboutSection = document.getElementById("about-section")
  aboutSection.innerHTML = `
        <div class="about-section-container">
            <div class="about-image-section">
                ${data.images
                  .map(
                    (img) => `
                    <img src="${img.src}" style="width: ${img.width}px; height: ${img.height}px; object-fit: cover;">
                `
                  )
                  .join("")}
            </div>
            <div class="about-content">
                <h1>${data.title}</h1>
                <p>${data.content}</p>
                <div class="about-read-more-container">
                    <div class="about-read-more-bg"></div>
                    <a class="about-read-more" href="/about.html">Read more <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    `
}

renderApp()

/*---[NO-13]-Implement-the-About-Section-END---*/

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

/*---[NO-11]-Contact-Form-Section-START---*/

document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.querySelector(".send-mail-btn")
  const form = document.querySelector(".contact-form")

  sendButton.addEventListener("click", function (event) {
    event.preventDefault() // Formun varsayılan gönderimini engelle

    // Form verilerini topla
    const formData = new FormData(form)
    const name = formData.get("name")
    const phone = formData.get("phone")
    const email = formData.get("email")
    const interestedIn = formData.get("interestedIn")
    const message = formData.get("message")

    // Zorunlu alanların kontrolü
    if (!name || !phone || !email || !message) {
      alert("Lütfen zorunlu alanları doldurun!")
      changeButtonColor("error") // Hatalı durum
      return // Eğer zorunlu alanlar boşsa işlemi durdur
    }

    // Telefon numarasının geçerliliğini kontrol et
    if (!validatePhone(phone)) {
      alert(
        "Lütfen geçerli bir telefon numarası girin! Sadece sayılar olmalıdır."
      )
      changeButtonColor("error") // Hatalı durum
      return // Eğer telefon numarası geçerli değilse işlemi durdur
    }

    // E-posta adresinin geçerliliğini kontrol et
    if (!validateEmail(email)) {
      alert("Lütfen geçerli bir e-posta adresi girin!")
      changeButtonColor("error") // Hatalı durum
      return // Eğer e-posta geçerli değilse işlemi durdur
    }

    const data = {
      name: name,
      phone: phone,
      email: email,
      interestedIn: interestedIn,
      message: message,
    }
    console.log("Form Data:", data)

    // Burada verileri bir e-posta göndermek için kullanabilirsiniz
    alert("Mesajınız gönderildi! İletişime geçtiniz için teşekkürler.") // Kullanıcıya bir bildirim göster
    changeButtonColor("success") // Başarılı durum
  })

  // Telefon numarasının geçerliliğini kontrol eden fonksiyon
  const validatePhone = (phone) => {
    const re = /^[0-9]+$/ // Sadece sayılardan oluşan bir regex
    return re.test(phone)
  }

  // E-posta adresinin geçerliliğini kontrol eden fonksiyon
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  // Buton rengini değiştiren fonksiyon
  const changeButtonColor = (status) => {
    if (status === "success") {
      sendButton.classList.add("success")
      sendButton.classList.remove("error")
    } else if (status === "error") {
      sendButton.classList.add("error")
      sendButton.classList.remove("success")
    }

    // 5 saniye sonra butonun rengini eski haline döndür
    setTimeout(() => {
      sendButton.classList.remove("success", "error")
    }, 5000)
  }
})
/*---[NO-11]-Contact-Form-Section-END---*/
/*--[NO-17] OUR PROJECT STARTED--*/
document
  .getElementById("allProjectsBtn")
  .addEventListener("click", function () {
    window.location.href = "project.html"
  })
/*--[NO-17] OUR PROJECT FİNİSHED--*/

/*[NO-19]-Main focus/Mission statement Slider Map START*/

const sliderWrapper = document.getElementById("main-focus-slider")

const fetchFocus = async () => {
  try {
    const response = await fetch("./constants/mainFocus.json")
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("API Hatası:", error)
    throw error
  }
}

const changeSliderContent = async () => {
  try {
    const data = await fetchFocus()
    sliderWrapper.innerHTML = data
      .map((item) => {
        return `<div class="slide">
                    <div class="main-box">
                      <span>${item.number}</span>
                      <p>${item.text}</p>
                    </div>
                  </div>`
      })
      .join("")
  } catch (error) {
    console.error("Error updating slider content:", error)
  }
}

const slidesToShow = 2
let currentIndexe = 0

const sliderChanges = async () => {
  await changeSliderContent()

  const slides = document.querySelector(".slides")
  const slide = document.querySelectorAll(".slide")
  const prevButton = document.querySelector(".prev")
  const nextButton = document.querySelector(".next")

  const firstCardWidth = slides.querySelector(".slide")
  console.log(firstCardWidth)

  function nextSlide() {
    const maxIndex = Math.ceil(slide.length / slidesToShow) - 1
    currentIndexe = Math.min(currentIndexe + 1, maxIndex)
    updateSliderPosition()
  }

  function prevSlide() {
    currentIndexe = Math.max(currentIndexe - 1, 0)
    updateSliderPosition()
  }

  function updateSliderPosition() {
    const slideWidth = 100 / slidesToShow
    slides.style.transform = `translateX(-${
      currentIndexe * slideWidth * slidesToShow
    }%)`
  }

  nextButton.addEventListener("click", nextSlide)
  prevButton.addEventListener("click", prevSlide)
}
sliderChanges()

/*[NO-19]-Main focus/Mission statement Slider Map END*/
