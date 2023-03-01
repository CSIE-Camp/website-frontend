/*
示範用、後端串起來後可能要取消
*/

const PersonalScript = () => {
  const PPAI_state_array = document.querySelectorAll("#ppa_inside_state");
  PPAI_state_array.forEach((e) => {
    //e.textContent = "✕";
    e.addEventListener("click", () => {
      if (e.classList.contains("ppas_no")) {
        e.classList.replace("ppas_no", "ppas_yes");
      } else if (e.classList.contains("ppas_yes")) {
        e.classList.replace("ppas_yes", "ppas_error");
      } else if (e.classList.contains("ppas_error")) {
        e.classList.replace("ppas_error", "ppas_no");
      } else {
        e.classList.add("ppas_yes");
      }
    });
  });
  const PPAI_button_array = document.querySelectorAll("#ppa_inside_button");
  PPAI_button_array.forEach((e) => {
    e.addEventListener("click", () => {
      if (e.classList.contains("ppaib_close")) {
        e.classList.replace("ppaib_close", "ppaib_open");
      } else if (e.classList.contains("ppaib_open")) {
        e.classList.replace("ppaib_open", "ppaib_finish");
      } else if (e.classList.contains("ppaib_finish")) {
        e.classList.replace("ppaib_finish", "ppaib_registered");
      } else if (e.classList.contains("ppaib_registered")) {
        e.classList.replace("ppaib_registered", "ppaib_error");
      } else if (e.classList.contains("ppaib_error")) {
        e.classList.replace("ppaib_error", "ppaib_close");
      } else {
        e.classList.add("ppaib_close");
      }
    });
  });
};
export default PersonalScript;
