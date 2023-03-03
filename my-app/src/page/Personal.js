import React, { useEffect } from "react";
import PersonalScript from "./Personal_script";

export const Personal = () => {
  useEffect(() => {
    PersonalScript();
  }, []);
  return (
    <div id="page_personal">
      <div id="page_personal_derror">除錯：cursor是pointer的地方都可以點</div>
      <div id="p_personal_container">
        <div id="pp_account_name">
          <div id="pp_an_up">帳號 : a12345678@gmail.com</div>
          <div id="pp_an_down">您的報名狀態</div>
          <hr></hr>
        </div>
        <div id="pp_account_field">
          <div id="ppa_information">
            <div id="ppa_inside_text">填&zwj;寫&zwj;個&zwj;人資&zwj;料</div>
            <div id="ppa_inside_state" className="ppas_no"></div>
            <div id="ppa_inside_button" className="ppaib_close"></div>
          </div>
          <div id="ppa_quiz">
            <div id="ppa_inside_text">完&zwj;成&zwj;報&zwj;名測&zwj;驗</div>
            <div id="ppa_inside_state" className="ppas_no"></div>
            <div id="ppa_inside_button" className="ppaib_close"></div>
          </div>
          <div id="ppa_github">
            <div id="ppa_inside_text">綁定Github帳&zwj;號</div>
            <div id="ppa_inside_state" className="ppas_no"></div>
            <div id="ppa_inside_button" className="ppaib_close"></div>
          </div>
        </div>
        <div id="pp_register">
          <div id="ppr_button"></div>
          <div id="ppr_center">
            <div id="ppr_text"></div>
            <div id="ppr_state"></div>
          </div>
        </div>
        <div id="pp_isadmission">
          <div id="ppia_top">錄取結果</div>
          <hr></hr>
          <div id="ppia_result">正取</div>
          <div id="ppia_back_is"></div>
        </div>
        <div id="pp_admitted">
          <div id="ppad_pay"></div>
          <div id="ppad_agreement"></div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
