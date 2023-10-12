import getData from '../utils/getData';

const Home = async () => {
    const coins = await getData(); // Obtén la lista de monedas

    const view = `
        <div class="coins">
            ${coins.data.map(coin => `
                <article class="coin-item">
                    <a href="#/${coin.id}/">
                        <h2>Name: ${coin.name}</h2>
                        <p>Symbol: ${coin.symbol}</p>
                        <p>Name id: ${coin.nameid}</p>
                        <p>Rank: ${coin.rank}</p>
                        <p>Price (USD): ${coin.price_usd}</p>
                    </a>
                </article>
            `).join('')}
        </div>
    `;

    return view;
}

export default Home;


