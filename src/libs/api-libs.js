export async function getAnime(resource, query) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  const dataAnime = await response.json();
  return dataAnime;
}

export async function getNestedAnime(resource,objectProperty){
  const response = await getAnime(resource)
  const dataAnime = response.data.flatMap(item =>  item[objectProperty])

  return dataAnime
}

export const reproduce =(data, gap)=>{
  const first = Math.floor(Math.random() * (data.length - gap) +1)
  const last = first + gap

  const response = {
    data: data.slice(first,last)
  }
  return response
}