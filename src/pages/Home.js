import getData from '../utils/getData';

const Home =  async () => {

    const Coins = await getData();

    const view =  `
    
    <div class="Coins">
    ${Coins.data.map(Coin => `
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