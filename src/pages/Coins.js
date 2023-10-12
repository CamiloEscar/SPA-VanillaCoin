import getHash from '../utils/getHash';
import getData from '../utils/getData';
// import getCoin from '../utils/getCoin';

const InfCoin = async () => {
    const id = getHash(); // Obtén el ID de la moneda desde el hash
    const resp = await getData(id); // Obtén los datos de la moneda
    const coin = resp[0]; // Encuentra la moneda específica

    const view = `
        <div class="coin-inner">
            <article class="coin-card">
            <img src="https://c1.coinlore.com/img/${coin.nameid}.png" />
            <h1>${coin.name}</h1>
            </article>
            <article class="coin-card">
                <h2>${coin.name}</h2>
                <p>Symbol: ${coin.symbol}</p>
                <p>Rank: ${coin.rank}</p>
                <p>Price (USD): ${coin.price_usd}</p>
                <p>Percent Change 24h: ${coin.percent_change_24h}</p>
                <p>Percent Change 1h: ${coin.percent_change_1h}</p>
                <p>Percent Change 7d: ${coin.percent_change_7d}</p>
                <p>Price (BTC): ${coin.price_btc}</p>
                <p>Market Cap (USD): ${coin.market_cap_usd}</p>
                <p>24h Volume (USD): ${coin.volume24}</p>
                <p>Circulating Supply: ${coin.csupply}</p>
                <p>Total Supply: ${coin.tsupply}</p>
                <p>Max Supply: ${coin.msupply}</p>
            </article>
        </div>
    `

    return view;
};

export default InfCoin;
// {/* <img src="${coin.img.url}" alt="${coin.name}"> */}

// const Character =  async () => {

//     const id = getHash();
//     const resp = await getData(id);
//     const character = resp[0];
//     const view = `
//         <div class="Characters-inner">
//             <article class="Character-card">
//                 <img src="https://c1.coinlore.com/img/${character.nameid}.png" />
                
//             </article>

//             <article class="Characters-card">
//                 <h2>${character.symbol}</h2>
//                 <h3>Nombre:<span>${character.name}</span></ </h3>
//                 <h3>Nombre ID: <span>${character.nameid}</span></</h3>
//                 <h3>Rango: <span>${character.rank}</span></</h3>
//                 <h3>Porcentaje de cambio en 24 hs: <span>${character.percent_change_24h}%</span></</h3>
//                 <h3>Porcentaje de cambio en 1 hs: <span>${character.percent_change_1h}%</span></</h3>
//                 <h3>Precio en BTC: $<span>${character.price_btc}</span></</h3>
//                 <h3>Capitalizacion de mercado USD: $<span>${character.market_cap_usd}</span></</h3>
//                 <h3>Volumen 24: $<span>${character.volume24}</span></</h3>
//                 <h3>Volumen 24 a: $<span>${character.volume24a}</span></</h3>
//                 <h3>CSupply: <span>${character.csupply}</span></</h3>
//                 <h3>TSupply: <span>${character.tsupply}</span></</h3>
//                 <h3>MSupply: <span>${character.msupply}</span></</h3>
//             </article>
//         </div> 
//     `
//     return view
// };
// export default Character;