import { useEffect, useState } from 'react'
import MovieList from '../components/Movie'
import MoviesFavourite from '../components/MoviesFavourite'
import MovieListHeading from '../components/MovieListHeading'
import Search from '../components/Search'
import { Movie } from '../shared/interface'
import { JsxEmit } from 'typescript'

export default function Home() {
  const [movies, setMoives] = useState<Movie[]>([])
  const [searchValue, setSearchValue] = useState("vietnam")
  const [favourites, setMoivesFavourites] = useState<Movie[]>([])

  const getMovies = async (searchValue: string) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=470e04ce&`
    const response = await fetch(url)
    const resJson = await response.json()
    setMoives(await resJson.Search)
  }
  const saveToLocalStorage = (movie: Movie[]) => {
		localStorage.setItem('movies-favourites', JSON.stringify(movie));
	};


  useEffect(() => {
    getMovies(searchValue)
  }, [searchValue]) 

  const addFavouriteMovies = (movie: Movie) => {
    let newFList =  [...favourites, movie]
    if(favourites.length) {
      favourites.map((item) => {
        if(JSON.stringify(item.Poster) === JSON.stringify(movie.Poster)) {
         newFList.length--
        }
      })
    }
    setMoivesFavourites(newFList)
    saveToLocalStorage(newFList)
  }
  const removeFavouriteMovie = (movie: Movie) => {
		const newFavouriteList = favourites.filter(
			(item, idx) => idx.toString() != movie.imdbID
		);

		setMoivesFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

  useEffect(() => {
    const listF = JSON.parse(localStorage.getItem("movies-favourites")!)
    setMoivesFavourites(listF)
  },[])
  
  return (
    <>
      <div className='flex justify-between items-center px-8'>
        <MovieListHeading heading='Movies' />
        <Search setSearchValue={setSearchValue} value={searchValue} />
      </div>
      <div className='container flex '>
        {
          movies?.map((movie, idx) => (
            <div key={idx} className="mx-2">
              <MovieList addFavouriresClick={addFavouriteMovies} Poster={movie.Poster} Title={movie.Title} />
            </div>
          ))
        }
      </div>
      <div>
        <MovieListHeading heading='Movies Favourite' />
        
          <div className='container flex'>{
            
            favourites?.map((movie,idx) => (
            <div key={idx}>
              <MoviesFavourite imdbID={idx.toString()} removeFavouriresClick={removeFavouriteMovie} Poster={movie.Poster} Title={movie.Title}  />
            </div>
          )) 
        }
          </div>
         
      </div>
      <p className='text-center text-xl mt-8'>Search...</p>
    </>
  )
}
