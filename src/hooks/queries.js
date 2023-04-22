import axios from "axios";

const URL = "http://localhost:5157/api";


const postSearch = (searchPhrase, url, searchEngineId, setHistory) => {

    axios.post(`${URL}/search/search`, {
        searchPhrase: searchPhrase,
        url: url,
        searchEngineId: searchEngineId
    })
        ?.then((res) => {
            getHistory(setHistory)
        })
        .catch((error) => {
            console.log(error);
        });
};
export { postSearch };


const getHistory = (setHistory) => {
    axios.get(`${URL}/Search/history`)?.then((res) => {
        setHistory(res.data)
    }).catch((err) => { setHistory([]) });
};
export { getHistory };

const getChartData = () => {
    return axios.get(`${URL}/Search/chart`);
};
export { getChartData };