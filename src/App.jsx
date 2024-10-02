import './styles.css'
import Header from './components/header'
import { ContentTitle } from './components/content-title'
import Experience from './components/experience'
import Skills from './components/skills'
import Education from './components/education'
import Honors from './components/honors'
import References from './components/references'
import CoverLetter from './components/cover-letter'

function App() {
  return (
    <div className="res-container">
      <Header />
      {/* <ContentTitle />
      <Experience />
      <Skills />
      <Education />
      <Honors />
      <References /> */}

      <CoverLetter />
    </div>
  )
}

export default App
