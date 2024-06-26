export function splitText(string, length) {
  const count = string?.length;
  if (count > length) {
    const text = string.substring(0, length + 1).concat("...");
    return text;
  } else {
    return string;
  }
}

export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(keyName);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.log(error);
      return defaultValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(keyName, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return { value: storedValue, setValue };
};

export const formatPrice = (price, currency) => {
  const exchangeRates = {
    USD: 1,
    VND: 25000,
    CNY: 6.5,
  };

  const symbols = {
    USD: "$",
    VND: "₫",
    CNY: "¥",
  };

  const convertedPrice = price * (exchangeRates[currency] || 1);
  const symbol = symbols[currency] || "$";

  if (currency === "VND") {
    return `${convertedPrice.toLocaleString()} ${symbol}`;
  } else {
    return `${symbol} ${convertedPrice.toLocaleString()}`;
  }
};

export const unreadNotificationFunc = (notifications) => {
  return notifications.filter((n) => n.isRead === false);
};
