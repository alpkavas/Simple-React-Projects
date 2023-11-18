import React from "react";

function Footer() {
  const date = new Date();
  return (
    <footer>
      <p>Rome wasn't built in a day</p>
      <p>Copyright© 2022-{date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
