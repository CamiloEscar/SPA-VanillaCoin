import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Home = async () => {
    const coins = await getData(); // Obtén la lista de monedas

    const view = `
        <div class="Coins">
            ${coins.data.map(Coin => `
                <article class="Coin-item">
                    <a href="#/${Coin.id}/">
                        <h2>Name: ${Coin.name}</h2>
                        <p>Symbol: ${Coin.symbol}</p>
                        <p>Name id: ${Coin.nameid}</p>
                        <p>Rank: ${Coin.rank}</p>
                        <p>Price (USD): ${Coin.price_usd}</p>
                    </a>
                </article>
            `).join('')}
        </div>
    `;

    return view;
}

export default Home;


