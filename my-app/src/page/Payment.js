import React from "react";

const Payment = () => {
  return (
    <div>
      <div id="payment">
        <h3>繳費注意事項</h3>
        <p>詳情未公布請洽官方查詢 : 臺師大資工營 NTNU CSIE Camp | Facebook</p>
        <p>繳費帳號: 0000 1111 2222 33</p>
      </div>
      <form className="paymentFlex">
        <div className="">
          <input type="date" />
          <input type="text" />
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default Payment;
