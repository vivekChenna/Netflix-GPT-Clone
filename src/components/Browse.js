import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div className=' overflow-x-hidden'>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
