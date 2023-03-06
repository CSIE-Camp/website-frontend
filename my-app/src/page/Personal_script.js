/*
示範用、後端串起來後大部分要取消
*/

const PersonalScript = () => {
  const PP_admitted = document.querySelector("#pp_admitted");

  const PPAI_state_array = document.querySelectorAll("#ppa_inside_state");
  const PPAI_state_class = ["ppas_no", "ppas_yes", "ppas_error", "ppas_no"];
  PPAI_state_array.forEach((e) => {
    e.addEventListener("click", () => {
      for (let i = 0; i < 5; i++) {
        if (e.classList.contains(PPAI_state_class[i])) {
          //console.log("aaaa: "+e.classList);
          e.classList.replace(PPAI_state_class[i], PPAI_state_class[i + 1]);
          i = 10;
        }
      }
    });
  });
  const PPAI_button_array = document.querySelectorAll("#ppa_inside_button");
  const PPAI_button_class = [
    "ppaib_close",
    "ppaib_open",
    "ppaib_finish",
    "ppaib_registered",
    "ppaib_error",
    "ppaib_close",
  ];
  PPAI_button_array.forEach((e) => {
    e.addEventListener("click", () => {
      for (let i = 0; i < 5; i++) {
        if (e.classList.contains(PPAI_button_class[i])) {
          //console.log("aaaa: "+e.classList);
          e.classList.replace(PPAI_button_class[i], PPAI_button_class[i + 1]);
          i = 10;
        }
      }
    });
  });
  const PPR_button = document.querySelector("#ppr_button");
  const PPR_button_class = [
    "pprb_close",
    "pprb_open",
    "pprb_finish",
    "pprb_registered",
    "pprb_error",
    "pprb_close",
  ];
  PPR_button.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
      if (PPR_button.classList.contains(PPR_button_class[i])) {
        PPR_button.classList.replace(PPR_button_class[i], PPR_button_class[i + 1]);
        i = 10;
      }
    }
  });

  const PPR_state = document.querySelector("#ppr_state");
  const PPR_state_class = ["pprs_no", "pprs_yes", "pprs_error", "pprs_no"];
  PPR_state.addEventListener("click", () => {
    for (let i = 0; i < 3; i++) {
      if (PPR_state.classList.contains(PPR_state_class[i])) {
        PPR_state.classList.replace(PPR_state_class[i], PPR_state_class[i + 1]);
        i = 10;
      }
    }
  });
  const PPR_text = document.querySelector("#ppr_text");
  const PPR_text_class = ["pprt_no", "pprt_yes", "pprt_error", "pprt_no"];
  PPR_text.addEventListener("click", () => {
    for (let i = 0; i < 3; i++) {
      if (PPR_text.classList.contains(PPR_text_class[i])) {
        PPR_text.classList.replace(PPR_text_class[i], PPR_text_class[i + 1]);
        i = 10;
      }
    }
  });
  const PPIA_RF = document.querySelector("#ppia_result_field");
  const PPIA_RF_class = [
    "ppiar_accept",
    "ppiar_waiting",
    "ppiar_wait_finish",
    "ppiar_not_pass",
    "ppiar_accept",
  ];
  PPIA_RF.addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
      if (PPIA_RF.classList.contains(PPIA_RF_class[i])) {
        PPIA_RF.classList.replace(PPIA_RF_class[i], PPIA_RF_class[i + 1]);
        if (
          PPIA_RF.classList.contains(PPIA_RF_class[0]) ||
          PPIA_RF.classList.contains(PPIA_RF_class[2])
        ) {
          PP_admitted.classList.replace("pp_admitted_close", "pp_admitted_open");
        } else {
          PP_admitted.classList.replace("pp_admitted_open", "pp_admitted_close");
        }
        i = 10;
      }
    }
  });
  const PPAD_pay = document.querySelector("#ppad_pay");
  const PPAD_pay_class = ["ppadp_no", "ppadp_check", "ppadp_yes", "ppadp_error", "ppadp_no"];
  PPAD_pay.addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
      if (PPAD_pay.classList.contains(PPAD_pay_class[i])) {
        PPAD_pay.classList.replace(PPAD_pay_class[i], PPAD_pay_class[i + 1]);
        i = 10;
      }
    }
  });
  const PPAD_agreement = document.querySelector("#ppad_agreement");
  const PPAD_agreement_class = [
    "ppada_no",
    "ppada_check",
    "ppada_yes",
    "ppada_fail",
    "ppada_error",
    "ppada_no",
  ];
  PPAD_agreement.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
      if (PPAD_agreement.classList.contains(PPAD_agreement_class[i])) {
        PPAD_agreement.classList.replace(PPAD_agreement_class[i], PPAD_agreement_class[i + 1]);
        i = 10;
      }
    }
  });
  const PP_cancel_btn = document.querySelector("#ppad_cancel");
  PP_cancel_btn.addEventListener("click", () => {
    window.confirm("確定要取消報名？");
  });
};
export default PersonalScript;
