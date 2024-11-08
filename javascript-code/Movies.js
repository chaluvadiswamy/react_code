import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
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
  let Gener = [];
  let newGenre = movies.map((movie) => {
   
  });
  //print zoners 
  //onclick zoner filter movie list 
  //onclik all movies hv to list
  return (
    <>
      <h1>{ArrayGener}</h1>
      <table>
        <tr>
          <th>Title</th>
          <th>Release Date</th>
          <th>Genre</th>
        </tr>
       
        {movies.map((movie, key) => (
          <tr key={key}>
            <td>{movie.title}</td>
            <td>{movie.releaseDate}</td>
            <td>{movie.genre.join(',')}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
