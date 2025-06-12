export const aboutLoad = (contentDiv) => {

    // Ensure content section is clear before loading new content
    if (contentDiv) {
        contentDiv.innerHTML = "";
    }

    // Create Our Mission Section
    const missionSection = document.createElement("section");
    missionSection.classList.add("our-mission");

    const missionHeading = document.createElement("h2");
    missionHeading.textContent = "Our Mission";
    missionSection.appendChild(missionHeading);

    const missionPara1 = document.createElement("p");
    missionPara1.textContent = "At Reubo's Restaurant, our mission is simple yet profound: to create an unforgettable dining experience for every guest. We strive to achieve this by consistently serving innovative, high-quality dishes crafted from the freshest ingredients, all within an inviting and comfortable atmosphere.";
    missionSection.appendChild(missionPara1);

    const missionPara2 = document.createElement("p");
    missionPara2.textContent = "We are dedicated to culinary excellence, exceptional service, and fostering a community where food brings people together. Our goal is to leave you with cherished memories and a desire to return, time and time again.";
    missionSection.appendChild(missionPara2);

    contentDiv.appendChild(missionSection);

    // Create Our History Section
    const historySection = document.createElement("section");
    historySection.classList.add("our-history");

    const historyHeading = document.createElement("h2");
    historyHeading.textContent = "Our History";
    historySection.appendChild(historyHeading);

    const historyPara1 = document.createElement("p");
    historyPara1.textContent = "Reubo's Restaurant began as a humble dream in 1998, founded by Reuben Faltiska with a passion for bringing authentic, home-cooked flavors to the community. Starting with a small, cozy space, our focus has always been on fresh ingredients and a warm, inviting atmosphere.";
    historySection.appendChild(historyPara1);

    const historyPara2 = document.createElement("p");
    historyPara2.textContent = "Over the years, we've grown, but our core values remain the same: quality, tradition, and a commitment to creating memorable dining experiences. We're proud to have served generations of families and look forward to many more years of culinary excellence.";
    historySection.appendChild(historyPara2);

    contentDiv.appendChild(historySection);

    // Create Our People Section
    const peopleSection = document.createElement("section");
    peopleSection.classList.add("our-people");

    const peopleHeading = document.createElement("h2");
    peopleHeading.textContent = "Our People";
    peopleSection.appendChild(peopleHeading);

    const peoplePara1 = document.createElement("p");
    peoplePara1.textContent = "The heart of Reubo's Restaurant beats with our dedicated team. From our passionate chefs who tirelessly perfect every recipe to our warm and attentive front-of-house staff, each member plays a vital role in creating your exceptional dining experience.";
    peopleSection.appendChild(peoplePara1);

    const peoplePara2 = document.createElement("p");
    peoplePara2.textContent = "We believe in fostering a family-like environment, where teamwork and a shared love for hospitality shine through in every interaction. Come meet the friendly faces committed to making your visit truly memorable.";
    peopleSection.appendChild(peoplePara2);

    contentDiv.appendChild(peopleSection);



}