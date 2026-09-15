import data from "../posts.json"
import './App.css'
import Header from './combonant/Header/Header';
import Fotter from './combonant/Fotter/Fotter';
import Content from './combonant/Content/Content';



function App() {


  return (
    <>

      <Header />
      <Content posts={data.posts} />
      <Fotter />
    </>
  )
}

export default App