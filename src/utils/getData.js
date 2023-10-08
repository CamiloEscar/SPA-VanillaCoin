const url = 'https://api.coinlore.net/api/';

const getData = async (id) => {
    const url = 'https://api.coinlore.net/api/';
    const apiURL = id ? `${url}tickers/${id}/` : `${url}tickers/`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch Error:', error);
        return null;
    }
};

export default getData;

