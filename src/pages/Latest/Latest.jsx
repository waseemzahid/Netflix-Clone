import Movies from '../../components/Movies/Movies'
import Navbar from '../../components/Navbar/Navbar'
import './../Home/Home.css'

const Latest = () => {
    return (  
        <div className='movies_pages'>
            <Navbar />
        <div className='all_movies'>
            <Movies title={"Latest on Netflix"} category={"now_playing"} />
        </div>
        </div>
    )
}

export default Latest