export const exchangesOptions = () =>{
  return (
    {
     method: 'GET',
     url: 'https://coingecko.p.rapidapi.com/exchanges',
     headers: {
       'x-rapidapi-host': 'coingecko.p.rapidapi.com',
       'x-rapidapi-key': '4739bd97cbmsh4d6ed5faf3af021p1a0003jsn23f53f704b62'
     }
    }
  )
} ;