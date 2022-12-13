 
export const options = (limit)=>{
  return(
    {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        tiers: '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: `${limit}`,
        offset: '0'
      },
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '4739bd97cbmsh4d6ed5faf3af021p1a0003jsn23f53f704b62'
      }
   }
  )
}