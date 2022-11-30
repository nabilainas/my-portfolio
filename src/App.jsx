import Navbar from './components/Navbar'
import styles from './constants/style'

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  </div>
  
)

export default App