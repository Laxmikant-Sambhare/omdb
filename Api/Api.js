export const fetchAPI = ({inputValue,setInputValue,setMovies}) =>{
    fetch(`http://www.omdbapi.com/?s='${inputValue}'&apikey=4512232e`)
    .then((data) => data.json())
    .then((data2) => {
      setMovies(data2);
      setInputValue("");
    });
}