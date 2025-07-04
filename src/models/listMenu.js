const downloader = [
    { name: 'Tiktok', category: 'Downloader', requestMethod: 'GET', description: 'Downloader For Tiktok', queryParameter: 'apikey, url', status: 'active', link: '/api/downloader/tiktok?url=https://www.tiktok.com/@XarenaRenata/video/7315655228211154183&apikey=ryuuizumi'},
    { name: 'Instagram', category: 'Downloader', requestMethod: 'GET', description: 'Downloader For Instagram', queryParameter: 'apikey, url', status: 'active', link: '/api/downloader/instagram?url=https://www.instagram.com/p/C2UCntOrHhI&apikey=ryuuizumi'},
    { name: 'Pinterest', category: 'Downloader', requestMethod: 'GET', description: 'Downloader For Pinterest', queryParameter: 'apikey, url', status: 'active', link: '/api/downloader/pinterest?url=https://id.pinterest.com/pin/6755468182311723/&apikey=ryuuizumi'},
    { name: 'Youtube Video', category: 'Downloader', requestMethod: 'GET', description: 'Downloader For Youtube Video', queryParameter: 'apikey, url', status: 'active', link: '/api/downloader/youtubevideo?url=https://youtu.be/cBNj9G9uk6Y?si=wx-zYbTIkTY8A_aj&apikey=ryuuizumi'},
    { name: 'Youtube Audio', category: 'Downloader', requestMethod: 'GET', description: 'Downloader For Youtube Audio', queryParameter: 'apikey, url', status: 'active', link: '/api/downloader/youtubeaudio?url=https://youtu.be/cBNj9G9uk6Y?si=wx-zYbTIkTY8A_aj&apikey=ryuuizumi'},
]

const islami = [
    {name: 'List Surah', category: 'Islami', requestMethod: 'GET' ,description: 'Search List Surah', queryParameter: 'apikey', status: 'active', link: '/api/islami/listsurah?apikey=ryuuizumi'},
    {name: 'Detail Surah', category: 'Islami', requestMethod: 'GET' ,description: 'Detail Surah', queryParameter: 'apikey, query', status: 'active', link: '/api/islami/surah?apikey=ryuuizumi&query=Al-Fatihah'}
]

const generate = [
    {name: 'Quote Text', category: 'Generate', requestMethod: 'GET', description: 'Fake Chats Text', queryParameter: 'apikey, text, name, avatar(url(img))', status: 'active', link: '/api/generate/quote?text=ryuu&name=izumiapis&avatar=https://i.pinimg.com/236x/56/2e/be/562ebed9cd49b9a09baa35eddfe86b00.jpg&apikey=ryuuizumi'},
    {name: 'Up Scale', category: 'Generate', requestMethod: 'GET', description: 'Up Scale Image', queryParameter: 'apikey, url(img)', status: 'active', link: '/api/generate/upscale?url=https://i.pinimg.com/564x/dd/ad/99/ddad996f9590a43855e3ffe5ab020977.jpg&apikey=ryuuizumi'}
]

const searcher = [
    {name: 'Pinterest', category: 'Searcher', requestMethod: 'GET', description: 'Search Image In Pinterest', queryParameter: 'apikey, q', status: 'active', link: '/api/search/pinterest?q=naisa&apikey=ryuuizumi'},
    {name: 'Youtube', category: 'Searcher', requestMethod: 'GET', description: 'Search Url And Info In Youtube', queryParameter: 'apikey, q', status: 'active', link: '/api/search/youtube?q=penjaga%20hati&apikey=ryuuizumi'},
    {name: 'Spotify', category: 'Searcher', requestMethod: 'GET', description: 'Search Sound And Info In Spotify', queryParameter: 'apikey, q', status: 'active', link: '/api/search/spotify?q=penjaga%20hati&apikey=ryuuizumi'}
]

export {
    downloader,
    islami,
    generate,
    searcher
}