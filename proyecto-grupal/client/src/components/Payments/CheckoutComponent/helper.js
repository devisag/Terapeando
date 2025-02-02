const API = 'http://localhost:3001';

export async function fetchFromApi(endpoint, opts){
   const { method, body } = { method: 'POST', body: null, ...opts };

   const res = await fetch(`${API}/${endpoint}`,{
      method,
      ...(body && { body: JSON.stringify(body) }),
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${localStorage.getItem("tokenClient")}` 
      },
   });

   return res.json();
}
