import getHash from "../utils/getHash";

const getCoin = (coin) => 
{
    const id = getHash();
    const product = coin.find((element) => 
    {
      return element._id === id ? element : null;
    });
    return product
};

export default getCoin;