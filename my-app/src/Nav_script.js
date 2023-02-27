const NavScript = () => {
  const A = document.querySelectorAll("ul li a");

  A.forEach((Ae) => {
    Ae.classList.add("inactive");
    Ae.addEventListener("click", () => {
      Ae.classList.add("active");
    });
  });
};

export default NavScript;
