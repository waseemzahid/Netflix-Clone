import Movies from '../../components/Movies/Movies'
import Navbar from '../../components/Navbar/Navbar'
import './../Home/Home.css'

const Upcoming = () => {
    return (  
        <div className='movies_pages'>
            <Navbar />
        <div className='all_movies'>
            <Movies title={"Upcoming"} category={"upcoming"} />
        </div>
        </div>
    )
}

export default Upcoming