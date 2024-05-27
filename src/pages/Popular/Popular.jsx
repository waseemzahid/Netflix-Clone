import Movies from '../../components/Movies/Movies'
import Navbar from '../../components/Navbar/Navbar'
import './../Home/Home.css'

const Popular = () => {
  return (  
    <div className='movies_pages'>
        <Navbar />
    <div className='all_movies'>
        <Movies title={"Popular on Netflix"} category={"popular"} />
    </div>
    </div>
    

  )
}

export default Popular