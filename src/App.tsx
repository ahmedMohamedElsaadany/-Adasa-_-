import data from "../posts.json"
import './App.css'
import Header from './combonant/Header/Header';
import Footer from './combonant/Footer/Footer';
import Content from './combonant/Content/Content';



function App() {


  return (
    <>

      <Header />
      <Content posts={data.posts} />
      <Footer />
    </>
  )
}

export default App