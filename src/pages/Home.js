import getData from '../utils/getData';

const Home =  async () => {

    const characters = await getData();

    const view =  `
    
    <div class="Characters">
    ${characters.data.map(character => `
        <article class="Character-item">
            <a href="#/${character.id}/">
                <h2>Name: ${character.name}</h2>
                <p>Symbol: ${character.symbol}</p>
                <p>Name id: ${character.nameid}</p>
                <p>Rank: ${character.rank}</p>
                <p>Price (USD): ${character.price_usd}</p>
            </a>
        </article>
    `).join('')}
    </div>
            `;
    return view;
}

export default Home;