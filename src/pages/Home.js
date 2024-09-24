import getData from '../utils/getData';

const Home = async () => {
    const coins = await getData(); // Obtén la lista de monedas

    const view = `
        <div class="coin-container">
            ${coins.data.map(coin => `
                <div class="coin-card">
                    <img src="https://cryptologos.cc/logos/${coin.nameid}-${coin.symbol.toLowerCase()}-logo.png" alt="${coin.name} logo" onerror="this.src='https://via.placeholder.com/150'">
                    <h2>${coin.name}</h2>
                    <h3>${coin.symbol}</h3>
                    <p>Rank: #${coin.rank}</p>
                    <p>Price: $${parseFloat(coin.price_usd).toFixed(2)}</p>
                    <a href="#/${coin.id}/" class="view-more">View Details</a>
                </div>
            `).join('')}
        </div>
    `;

    return view;
}

export default Home;