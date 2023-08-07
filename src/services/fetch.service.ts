export async function fetchData<T>(url: string): Promise<T> {
  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("error in fetching data", err);
    });
}
