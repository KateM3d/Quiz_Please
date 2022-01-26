export default function useFetch(baseUrl) {
  const get = (url) => {
    return fetch(baseUrl + url).then((response) => response.json());
  };

  return { get };
}
