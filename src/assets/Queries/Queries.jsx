import React from 'react'
import {QueryClient, useQuery } from "@tanstack/react-query";

export const queryClient = new QueryClient();



async function fetchJson(productPage) {
  const res = await fetch(`https://api.redseam.redberryinternship.ge/api/products?page=${productPage}`, {
    method:'get',
    headers: new Headers ({
      'Accept': 'application/json',
    })
  })
  return res.json();
}
export const CatalogList = ({page}) => {
  const { data, status } = useQuery({
    queryKey: ["items",page],
    queryFn: (e) => fetchJson(page),
  });
  if(status === "success") {
    return(
        <div className='flexBox' id='catalogDiv'>
            {data.data.map((post) => (
                <div className='products'  key={post.id}>
                <img src={post.cover_image} alt="" />
                <p>{post.name}</p>
                <p>$ {post.price}</p>
                
                </div>
            ))}
        </div>
    )
  }
//   return <div>{status === "pending" ? "Loading..." : JSON.stringify(data)}</div>;
//   return(
//      <ul>
//       {data.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   )
};

