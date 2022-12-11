import Informations from './components/Informations'
import Navbar from './components/Navbar'
import Presentation from './components/Presentation'
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
          <Informations />
        </div>
      </div>

  </div>
  
)

export default App