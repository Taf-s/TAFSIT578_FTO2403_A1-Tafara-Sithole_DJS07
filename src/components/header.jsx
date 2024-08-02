import React from "react";

/**
 * Header component that renders the header section of the page.
 * This includes an image, a title, and project information.
 *
 * @return {JSX.Element} The rendered header component.
 */
function Header() {
  return (
    // The header element with the class name "header"
    <header className="header">
      {/* The image with the source "./Troll Face.png" and the class name "header--image" */}
      <img src="./Troll Face.png" className="header--image" />
      {/* The title with the class name "header--title" */}
      <h2 className="header--title">Meme Generator</h2>
      {/* The project information with the class name "header--project" */}
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}

export default Header;
