import React from 'react'
import {QueryClient, useQuery } from "@tanstack/react-query";


export const queryClient = new QueryClient();

async function fetchJson() {
  const res = await fetch("https://api.redseam.redberryinternship.ge/api/products", {
    method:'get',
    headers: new Headers ({
      'Accept': 'application/json',
    })
  })
  return res.json();
}
export const CatalogList = () => {
  const { data, status } = useQuery({
    queryKey: ["items"],
    queryFn: fetchJson,
  });
  if(status === "success") {
    console.log(data.data)
    return(
        <div>
            {data.data.map((post) => (
                <div  key={post.id}>
                <img src={post.cover_image} alt="" />
                <p>{post.name} {post.price}</p>
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

