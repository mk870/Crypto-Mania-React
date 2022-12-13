export const newsoptions =(category,count)=> {
  return(
    {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {q: `${category}`, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off',count:`${count}`},
      headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '4739bd97cbmsh4d6ed5faf3af021p1a0003jsn23f53f704b62'
      }
    }
  )
 
};