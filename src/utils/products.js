export const groupProducts = (cartItems = [], product) => {
    const repeatedProduct = cartItems.find(
      (cartItem) => cartItem.selectedSize === product.selectedSize
    );
  
    if (!repeatedProduct) {
      cartItems.push({ ...product, quantity: 1 });
      return cartItems;
    }
  
    repeatedProduct.quantity += 1;
  
    return cartItems;
  };
  
  const formartProductPrice = (regularPrice) => {
    return Number(regularPrice.replace("R$", "").replace(",", "."));
  };
  
  export const sumProducts = (products = []) => {
    const total = products.reduce((total, product) => {
      return total + formartProductPrice(product.regular_price);
    }, 0);
  
    const totalFormart = Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(total);
  
    return totalFormart;
  };
  
  const normalizeWord = (word) => {
    return word
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };
  
  export const searchProductsByName = (products = [], searchText) => {
    return products.filter((product) =>
      normalizeWord(product.name).includes(normalizeWord(searchText))
    );
  };