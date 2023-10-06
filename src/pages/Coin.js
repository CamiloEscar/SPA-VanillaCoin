import getHash from '../utils/getHash';
import getData from '../utils/getData';
import getCoin from '../utils/getCoin';

const Coin =  async () => {

    const id = getHash();
    const Coin = await getData(id);
    const coin = getCoin(coin)
   
   
    const view = `
    <div class="Coin-inner">
        <article class = "Coin-card">
            <img src = "${coin.img.url}" alt = "${coin.name}">
            <h1>${coin.name}</h1>
        </article>
        <article class = "Coin-card"
        <h2>${Coin.name}</h2>
        <p>Symbol: ${Coin.symbol}</p>
        <p>Rank: ${Coin.rank}</p>
        <p>Price (USD): ${Coin.price_usd}</p>
        <p>Percent Change 24h: ${Coin.percent_change_24h}</p>
        <p>Percent Change 1h: ${Coin.percent_change_1h}</p>
        <p>Percent Change 7d: ${Coin.percent_change_7d}</p>
        <p>Price (BTC): ${Coin.price_btc}</p>
        <p>Market Cap (USD): ${Coin.market_cap_usd}</p>
        <p>24h Volume (USD): ${Coin.volume24}</p>
        <p>Circulating Supply: ${Coin.csupply}</p>
        <p>Total Supply: ${Coin.tsupply}</p>
        <p>Max Supply: ${Coin.msupply}</p>
    </div>
    `
    return view
};
export default Coin;