
export const historyOptions = (coinId,timePeriod) => {
  return(
    {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${coinId}/history`,
      params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: `${timePeriod}`},
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '4739bd97cbmsh4d6ed5faf3af021p1a0003jsn23f53f704b62'
      }
    }
  )
 
};