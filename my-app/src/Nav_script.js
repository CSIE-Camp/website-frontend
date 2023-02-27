const NavScript = () => {
  const A = document.querySelectorAll("ul li a");

  // console.log(A);
  // for (let i = 0; i < A.length; i++) {
  //   console.log(i);
  // }
  let Active = null;
  A.forEach((Ae) => {
    Ae.addEventListener("click", () => {
      //Ae.style.color = "red";
      Active = Ae;

      if (Active !== Ae) {
        Active.classList.remove();
      }

      Ae.classList.add("active");
    });
  });
};

export default NavScript;
