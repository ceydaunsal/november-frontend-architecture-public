/*[NO-9] Create the Footer Section - START */
const footerData2 = {
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

createFooter(footerData2)

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
