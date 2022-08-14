const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';  

const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6540473ff4mshfbdbb244ab22f99p10c708jsnfd294791e746',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(urlApi, options){
    const response = await fetch(urlApi, options);
    const data = response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API, options);
        let view = `
            ${videos.items.map(video => `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                        </h3>
                    </div>
                </div>
            `)}
        `; 
        
        content.innerHTML = view;
    }
    catch (error) {
        console.error(error);
        alert("Ha habido un error");
    }
})();