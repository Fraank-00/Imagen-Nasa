const API_KEY = 'xtS6eHYqBPnaPAcSU5ZwX63mAZdELkpZOEZhUj3G';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export default async function fetchApi(URLSearchParams = "") {
    try {
        const queryParams = URLSearchParams?.length > 0 ? `&${URLSearchParams}` : "";
        const response = await fetch(`${API_URL}?api_key=${API_KEY}${queryParams}`);
        const data = await response.json();
        return Promise.resolve(data);
    } catch (error) {
        console.error("Error fetching API data:", error);
        return Promise.reject(error);
    }
}
