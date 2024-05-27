import Movies from '../../components/Movies/Movies'
import Navbar from '../../components/Navbar/Navbar'
import './../Home/Home.css'

const TopRated = () => {
  return (  
    <div className='movies_pages'>
        <Navbar />
    <div className='all_movies'>
        <Movies title={"Top Rated on Netflix"} category={"top_rated"} />
    </div>
    </div>
  )
}

export default TopRated