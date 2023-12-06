// Buypage/index.jsx
import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './BuyPage.module.css';
import Buypagehead from "../../../components/HeadTitle";

class BuyPage extends React.Component {
  
  // Add a method to handle form submission
  handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    // In a real application, you'd send this data to a server or payment gateway
  }

  render() {
    return (
      <div className={styles.mineContainer}>
        <Buypagehead title='Purchase' className={styles.header}/>
        <div className={styles.userInfo}>
          

          {/* Payment Details Form */}
          <form onSubmit={this.handleSubmit} className={styles.paymentForm}>
            <h2>Payment Details</h2>
            <div className={styles.formGroup}>
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" name="cardNumber" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="cardName">Cardholder Name</label>
              <input type="text" id="cardName" name="cardName" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="expiryDate">Expiry Date</label>
              <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" required />
            </div>
            <button type="submit" className={styles.submitButton}>Submit Payment</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(BuyPage);
