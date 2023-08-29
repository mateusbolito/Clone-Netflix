

const API_KEY = 'c019e4c76a0bb2c127886382de9afc54'; 
const API_BASE = 'https://api.themoviedb.org/3';





const basicFetch = async (endPoint) => {
    const req = await fetch(`${API_BASE}${endPoint}`);
    const json = await req.json();
    return json; 
}




export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'originais netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            }, {
                
                slug: 'trending',
                title: 'recomendados para vocce',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)

            }, {
                slug: 'toprated',
                title: 'em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            }, {
                slug: 'action',
                title: 'acao',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)

            }, {
                slug: 'comedy',
                title: 'comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)

            },{
                slug: 'horror',
                title: 'terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            }, {
                slug: 'romance',
                title: 'romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)

            }, {
                slug: 'documentary',
                title: 'documentario',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)

            }
        ];
    },
    getMovieInfo: async (movieId, type ) => {
        let info = {};
          
        if(movieId)  {

            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                    break;
                    default:
                        info = null;
                        break;
        
            }
        }


        return info; 
    }
}