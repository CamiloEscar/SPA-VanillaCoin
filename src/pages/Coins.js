import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Coins = async () => {
    const id = getHash();
    const resp = await getData(id);
    const coin = resp[0];

    const view = `
        <div class="coin-detail">
            <div class="coin-header">
                <img src="https://cryptologos.cc/logos/${coin.nameid}-${coin.symbol.toLowerCase()}-logo.png" alt="${coin.name} logo" onerror="this.src='https://via.placeholder.com/150'">
                <h1>${coin.name} (${coin.symbol})</h1>
            </div>
            <div class="coin-info">
                <div class="info-item">
                    <h3>Rank</h3>
                    <p>#${coin.rank}</p>
                </div>
                <div class="info-item">
                    <h3>Price (USD)</h3>
                    <p>$${parseFloat(coin.price_usd).toFixed(2)}</p>
                </div>
                <div class="info-item">
                    <h3>Price (BTC)</h3>
                    <p>${parseFloat(coin.price_btc).toFixed(8)}</p>
                </div>
                <div class="info-item">
                    <h3>Market Cap (USD)</h3>
                    <p>$${parseFloat(coin.market_cap_usd).toLocaleString()}</p>
                </div>
                <div class="info-item">
                    <h3>24h Volume (USD)</h3>
                    <p>$${parseFloat(coin.volume24).toLocaleString()}</p>
                </div>
                <div class="info-item">
                    <h3>Percent Change (24h)</h3>
                    <p class="${parseFloat(coin.percent_change_24h) >= 0 ? 'positive' : 'negative'}">${parseFloat(coin.percent_change_24h).toFixed(2)}%</p>
                </div>
                <div class="info-item">
                    <h3>Percent Change (1h)</h3>
                    <p class="${parseFloat(coin.percent_change_1h) >= 0 ? 'positive' : 'negative'}">${parseFloat(coin.percent_change_1h).toFixed(2)}%</p>
                </div>
                <div class="info-item">
                    <h3>Percent Change (7d)</h3>
                    <p class="${parseFloat(coin.percent_change_7d) >= 0 ? 'positive' : 'negative'}">${parseFloat(coin.percent_change_7d).toFixed(2)}%</p>
                </div>
                <div class="info-item">
                    <h3>Circulating Supply</h3>
                    <p>${parseFloat(coin.csupply).toLocaleString()} ${coin.symbol}</p>
                </div>
                <div class="info-item">
                    <h3>Total Supply</h3>
                    <p>${parseFloat(coin.tsupply).toLocaleString()} ${coin.symbol}</p>
                </div>
                <div class="info-item">
                    <h3>Max Supply</h3>
                    <p>${coin.msupply ? parseFloat(coin.msupply).toLocaleString() + ' ' + coin.symbol : 'N/A'}</p>
                </div>
            </div>
        </div>
    `;

    return view;
};

export default Coins;