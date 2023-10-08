import getHash from '../utils/getHash';
import getData from '../utils/getData';
import getCoin from '../utils/getCoin';
import Error404 from './Error404';

const InfCoin = async () => {
    const id = getHash(); // Obtén el ID de la moneda desde el hash
    const Coin = await getData(id); // Obtén los datos de la moneda
    const coinData = getCoin(Coin); // Encuentra la moneda específica

    const view = coinData ? `
        <div class="Coin-inner">
            <article class="Coin-card">
                <img src="${coinData.img.url}" alt="${coinData.name}">
                <h1>${coinData.name}</h1>
            </article>
            <article class="Coin-card">
                <h2>${coinData.name}</h2>
                <p>Symbol: ${coinData.symbol}</p>
                <p>Rank: ${coinData.rank}</p>
                <p>Price (USD): ${coinData.price_usd}</p>
                <p>Percent Change 24h: ${coinData.percent_change_24h}</p>
                <p>Percent Change 1h: ${coinData.percent_change_1h}</p>
                <p>Percent Change 7d: ${coinData.percent_change_7d}</p>
                <p>Price (BTC): ${coinData.price_btc}</p>
                <p>Market Cap (USD): ${coinData.market_cap_usd}</p>
                <p>24h Volume (USD): ${coinData.volume24}</p>
                <p>Circulating Supply: ${coinData.csupply}</p>
                <p>Total Supply: ${coinData.tsupply}</p>
                <p>Max Supply: ${coinData.msupply}</p>
            </article>
        </div>
    ` : Error404();

    return view;
};

export default InfCoin;

