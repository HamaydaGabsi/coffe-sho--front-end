import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/menuStyles.css";

const Menu = () => {
  const navigate = useNavigate();

  // Define a list of available drinks with prices
  const drinks = [
    { id: 1, name: "Coffee", price: 2.5 },
    { id: 2, name: "Tea", price: 1.8 },
    { id: 3, name: "Cappuccino", price: 3.2 },
    // Add more drinks as needed
  ];
  const [selectedItems, setSelectedItems] = useState(
    drinks.map((drink) => ({ ...drink, quantity: 0 }))
  );
  // Handle drink selection and quantity modification
  const handleDrinkSelection = (drinkId, increment) => {
    const selectedItem = selectedItems.find((item) => item.id === drinkId);

    if (selectedItem) {
      const updatedItems = selectedItems.map((item) => {
        if (item.id === drinkId) {
          const newQuantity = item.quantity + (increment ? 1 : -1);
          return { ...item, quantity: newQuantity >= 0 ? newQuantity : 0 };
        }
        return item;
      });
      setSelectedItems(updatedItems);
    } else if (increment) {
      const drink = drinks.find((drink) => drink.id === drinkId);
      setSelectedItems((prevItems) => [
        ...prevItems,
        { ...drink, quantity: 1 },
      ]);
    }
  };

  // Calculate the total sum
  const calculateTotalSum = () => {
    return selectedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedItems);
    navigate("/");
  };

  // Handle form reset
  const handleReset = () => {
    setSelectedItems([]);
  };

  // Handle go back
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="menu-container">
      <h2 className="menu-title">Choose your drinks:</h2>
      <form className="menu-form" onSubmit={handleSubmit}>
        <ul className="menu-list">
          {drinks.map((drink) => (
            <li key={drink.id} className="menu-item">
              <span className="menu-item-details">
                {drink.name} - ${drink.price}
              </span>

              {selectedItems.find((item) => item.id === drink.id) && (
                <div className="menu-item-quantity">
                  <button
                    type="button"
                    className="menu-quantity-button"
                    onClick={() => handleDrinkSelection(drink.id, false)}
                  >
                    -
                  </button>
                  <span>
                    {
                      selectedItems.find((item) => item.id === drink.id)
                        .quantity
                    }
                  </span>
                  <button
                    type="button"
                    className="menu-quantity-button"
                    onClick={() => handleDrinkSelection(drink.id, true)}
                  >
                    +
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="menu-total">
          <span className="menu-total-label">Total:</span>
          <span className="menu-total-amount">${calculateTotalSum()}</span>
        </div>
        <div className="menu-buttons">
          <button type="submit" className="menu-submit-button">
            Submit
          </button>
          <button
            type="button"
            className="menu-reset-button"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            type="button"
            className="menu-go-back-button"
            onClick={handleGoBack}
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Menu;
