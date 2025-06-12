export const homeLoad = (contentDiv) => {

    // Ensure content section is clear before loading new content
    if (contentDiv) {
        contentDiv.innerHTML = "";
    }

    // Create Hero Section
    const heroSection = document.createElement("section");
    heroSection.classList.add("hero");

    const heroHeading = document.createElement("h2");
    heroHeading.textContent = "Taste the Art of Nature";
    heroSection.appendChild(heroHeading);

    const heroSubtitle = document.createElement("p");
    heroSubtitle.textContent = "Farm-to-table delights crafted with passion and precision.";
    heroSection.appendChild(heroSubtitle);

    contentDiv.appendChild(heroSection);

    // Create About Us Section
    const aboutUsSection = document.createElement("section");
    aboutUsSection.classList.add("about-us");

    const aboutUsHeading = document.createElement("h2");
    aboutUsHeading.textContent = "Our Philosophy";
    aboutUsSection.appendChild(aboutUsHeading);

    const aboutUsPara = document.createElement("p");
    aboutUsPara.textContent = "At Reubo's Restaurant, we believe in the power of fresh, locally sourced ingredients. Our chefs meticulously craft each dish to highlight the natural flavors and textures, transforming simple produce into culinary masterpieces. We're committed to sustainable practices, bringing you not just a meal, but an experience that respects both tradition and innovation.";
    aboutUsSection.appendChild(aboutUsPara);

    contentDiv.appendChild(aboutUsSection);

    // Create Today's Specials Section
    const specialsSection = document.createElement("section");
    specialsSection.classList.add("todays-specials");

    const specialsHeading = document.createElement("h2");
    specialsHeading.textContent = "Today's Culinary Delights";
    specialsSection.appendChild(specialsHeading);

    const specialsPara1 = document.createElement("p");
    specialsPara1.textContent = "Discover our chef's exquisite creations available only for a limited time. Each dish is a testament to seasonal freshness and innovative culinary techniques.";
    specialsSection.appendChild(specialsPara1);

    const specialsPara2 = document.createElement("p");
    specialsPara2.textContent = "Tonight's highlight features Pan-Seared Scallops with Saffron Risotto, a delicate balance of sea-fresh sweetness and rich, aromatic flavors. Pair it with our sommelier's recommended crisp white wine for the perfect experience.";
    specialsSection.appendChild(specialsPara2);

    contentDiv.appendChild(specialsSection);
};