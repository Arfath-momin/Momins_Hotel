
// utils/total.js

const total = ({ startDate, endDate, price }) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const totalNights = Math.ceil((end - start) / (1000 * 60 * 60 * 24)); // Calculate total nights
    const totalPrice = totalNights * price; // Calculate total price using the provided room price
    return { totalPrice, totalNights };
};

export default total;
