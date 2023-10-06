import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Coin';
import Error404 from '../pages/Error404'
import getData from '../utils/getData'
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/getResolveRoutes';
import Coin from '../pages/Coin';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact':"Contact"
};

const router = async () => {
    const header = null ||  document.getElementById('header');
    const content = null ||  document.getElementById('content');

    header.innerHTML= await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render(Coin);

};

export default router;
