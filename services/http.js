import axios from 'axios';

const apiKey = '3orgR0tIBUFLEaOJ5TPwWiaZCLhoRph6uyfAB1Je';

export const getAsteroidById = async (id) => {
    try {
        const response = await axios.get(
            `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${apiKey}`
        );

        return response;
    }
    catch(e) {
        console.log(e);
        return;
    }    
};

export const getRandomAsteroid = async () => {
    const response = await axios.get(
        'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY'
    );
    return response;
};
