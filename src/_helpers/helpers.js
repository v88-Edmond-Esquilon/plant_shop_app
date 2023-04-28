export const generateId = () => {
    return Date.now() + Math.floor(Math.random() * 10000);
};
  
export const priceParser = (quantity, price) => {
    return parseFloat((quantity * price).toFixed(2));
}