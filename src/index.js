import "./styles.css";
import { homeLoad } from "./home.js";
import { menuLoad } from "./menu.js";
import { aboutLoad } from "./about.js";

// Variable for fixes html elements
const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

// Default load in home page content
homeLoad(contentDiv);

// Set up event listener to load in items upon click of menu buttons
homeButton.addEventListener("click", () => {
    homeLoad(contentDiv);
});

menuButton.addEventListener("click", () => {
    menuLoad(contentDiv);
});

aboutButton.addEventListener("click", () => {
    aboutLoad(contentDiv);
});