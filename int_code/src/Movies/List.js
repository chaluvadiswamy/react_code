import React,{useState} from 'react';

export default function List() {
    const movies = [
        {
          title: 'Furiosa: A Mad Max Saga',
          releaseDate: '2024-05-22',
          genre: ['Action', 'Adventure', 'Science Fiction'],
        },
        {
          title: 'Inside Out 2',
          releaseDate: '2024-06-11',
          genre: ['Animation', 'Family', 'Adventure', 'Comedy'],
        },
        {
          title: 'Kingdom of the Planet of the Apes',
          releaseDate: '2024-05-08',
          genre: ['Science Fiction', 'Adventure', 'Action'],
        },
        {
          title: 'Bad Boys: Ride or Die',
          releaseDate: '2024-06-05',
          genre: ['Action', 'Crime', 'Thriller', 'Comedy'],
        },
        {
          title: 'Inside Out',
          releaseDate: '2015-06-17',
          genre: ['Animation', 'Family', 'Adventure', 'Drama', 'Comedy'],
        },
        ];
        const [movieList,setMovieList] =useState(movies);
        const [filteredGenre, setFilteredGenre] = useState(null);
        // let newGenere = [ ];
        // for(let i=0;i<movies.length;i++){
        //     newGenere.push(movies[i]['genre']);
        // }

        // const flattenedArray = newGenere.flat();

        // // Use a Set to remove duplicates
        // const genresMovie = [...new Set(flattenedArray)];
        // genresMovie.sort();
        // const handleClick = (clickValue) =>{
          
        //    setMovieList(movieList.filter(movie => movie.genre.includes(clickValue) == true));
        // }
        const genresMovie = Array.from(
          new Set(movies.flatMap((movie) => movie.genre))
        ).sort();
      
        const handleClick = (genre) => {

          setFilteredGenre(genre);
          if (genre === 'All') {
            setMovieList(movies);
          } else {
            console.log(typeof genre)
            setMovieList(
              movies.filter((movie) => movie.genre.includes(genre.type))
            );
          }
        };
      
    return (
        <div>
            <ul style={{listStyleType:'none'}}>
              { genresMovie && genresMovie.map((type,key) => ( 
                <li key={key} style={{display:'inline',marginRight:'10px',textDecoration:'underline'}} onClick={()=>handleClick({type})}> {type.toLocaleUpperCase()} </li>)
                )
              }
              <li key={genresMovie.length+1} style={{display:'inline',marginRight:'10px',textDecoration:'underline'}} onClick={()=>handleClick('All')}> ALL </li>
            </ul>
            <table>
              <tr><th>Title</th><th>ReleaseDate</th><th>Genre List</th></tr>
                { 
                  movieList ? movieList.map((movie,key)=>(
                    <tr key={key}>
                      <td>{movie.title}</td>
                      <td>{movie.releaseDate}</td>
                      <td>{movie.genre.join(' , ')}</td>
                    </tr>
                  )) : <tr>Loading ...</tr>
                }
            </table>  
        </div>
    )
}
