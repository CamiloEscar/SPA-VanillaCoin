import getHash from "../utils/getHash";

const getCoin = (coins) => {
    const id = getHash(); // Obtén el ID de la moneda desde el hash
    if (!coins || !Array.isArray(coins.data)) {
        return null; // Devuelve null si los datos no son válidos
    }

    const coin = coins.data.find((element) => {
        return element.id === id;
    });

    return coin || null; // Devuelve null si no se encuentra la moneda
};

export default getCoin;

