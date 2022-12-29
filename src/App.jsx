import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Presentation from './components/Presentation'
import Skills from './components/Skills'
import styles from './constants/style'

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>

     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`} >
          <Presentation />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`} >
          <Skills />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`} >
          <Footer />
        </div>
      </div>

  </div>
  
)

export default App