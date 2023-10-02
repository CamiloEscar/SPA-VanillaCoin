import getHash from '../utils/getHash';
import getData from '../utils/getData';
import getCoin from '../utils/getCoin';

const Character =  async () => {

    const id = getHash();
    const character = await getData(id);
    const coin = getCoin(coin)
   
   
    const view = `
    <div class="Character-inner">
        <article class = "Coin-card">
            <img src = "${coin.img.url}" alt = "${coin.name}">
            <h1>${coin.name}</h1>
        </article>
        <article class = "Coin-card"
        <h2>${character.name}</h2>
        <p>Symbol: ${character.symbol}</p>
        <p>Rank: ${character.rank}</p>
        <p>Price (USD): ${character.price_usd}</p>
        <p>Percent Change 24h: ${character.percent_change_24h}</p>
        <p>Percent Change 1h: ${character.percent_change_1h}</p>
        <p>Percent Change 7d: ${character.percent_change_7d}</p>
        <p>Price (BTC): ${character.price_btc}</p>
        <p>Market Cap (USD): ${character.market_cap_usd}</p>
        <p>24h Volume (USD): ${character.volume24}</p>
        <p>Circulating Supply: ${character.csupply}</p>
        <p>Total Supply: ${character.tsupply}</p>
        <p>Max Supply: ${character.msupply}</p>
    </div>
    `
    return view
};
export default Character;