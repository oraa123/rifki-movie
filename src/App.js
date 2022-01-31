import React,{useState ,useEffect} from 'react';
import './App.css';
import Movie from './components/Movies'


function App() {

  const API_FEATURED = 'https://api.themoviedb.org/3/discover/movie?api_key=509c8a98da083a41c993c2aa8f5abb8b'
   const API_IMAGES = 'https://image.tmdb.org/t/p/w1280'
   const SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=509c8a98da083a41c993c2aa8f5abb8b&query='
  
   const [movies ,setMovies]=useState([]);
   const [search ,setSearch]=useState('')
   
 
   useEffect(()=>{
     fetch(API_FEATURED)
     .then((res)=>res.json())
     .then((data)=>{
    
       setMovies(data.results);
       
      
     })
   },[])

   const handleSubmit =(e)=>{
   e.preventDefault()
   
   }
   if(search){
   fetch(SEARCH+search)
   .then((res)=>res.json())
   .then((data)=>{
   
     setMovies(data.results);

   
   })
  }
   const handleChange=(e)=>{
    setSearch(e.target.value)
    
   }
  
  return (
    <>
   <header className='header'>
     <div className='logo'>
       <h2>RIFKI MOVIE</h2>
     </div>
     <div className='input'>
       <form onSubmit={handleSubmit}>
     <input className='search'
     type='search'
     placeholder='Cari Movie...'
     value={search}onChange={handleChange}
     
     >
      
     </input>
     </form>
     </div>
   </header>
    <div className='container-movie'>
      
    {movies&&movies.map((movie)=>{
      return(
        
     <Movie key={movie.id} 
     {...movie} />
     
      )
      
    })}
    
    </div>
    </>
  
  )}

export default App;
