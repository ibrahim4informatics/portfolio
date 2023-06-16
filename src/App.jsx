import image from './assets/portfilio.png'
import { AnimatePresence, motion } from 'framer-motion'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState } from 'react';
import Personal from './components/Personale';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [index, setIndex] = useState(1);
  const [direction,setDirection] = useState('down');
  const upHundler = async() => {setDirection('up');setTimeout(()=>setIndex(prev=> prev-1),1);clearTimeout()};
  const downHundler = () => {setDirection('down');setTimeout(()=>setIndex(prev => prev + 1),1); clearTimeout()};

  return (
    <div className="main-container">
      <motion.section className="top-section" initial={{ opacity: 0, x: "-25%", filter: 'blur(12px)' }} animate={{ opacity: 1, x: 0, filter: "blur(0)" }} transition={{ duration: 0.8 }}>
        <img src={image} className='h-32 w-32 rounded-full ring-2 ring-white image-port' />
        <h1>Ibrah<span>i</span>m <span>Portfolio</span></h1>
      </motion.section>
      <motion.section initial={{ scale: ".8" }} animate={{ scale: 1 }} transition={{ duration: .8 }} className='bottom-section'>
        <AnimatePresence >
          {
            index === 1
              ? <motion.div style={{height:"100%", zIndex:-1,}} key={index} initial={{  y:"-20%",opacity: 0 }} animate={{ y:0,opacity: 1 }} exit={{ y:"-20%",opacity: 0 }} transition={{ duration: .2, delay:(direction === 'down' ? 0 : .4),repeatType:'reverse' }}><Personal /></motion.div>
              : index === 2
                ? <motion.div style={{height:"100%", zIndex:1}} key={index} initial={{  y:(direction === 'down' ? "20%" : "-20%"),opacity: 0 }} animate={{ y:0,opacity: 1 }} exit={{ y:(direction === 'down' ? "-20%" : "20%"),opacity: 0 }} transition={{ duration: .2, delay:.2, repeatType:'reverse'  }}><Skills /></motion.div>
                : <motion.div style={{height:"100%", zIndex:1}} key={index} initial={{  y:"20%",opacity: 0 }} animate={{ y:0,opacity: 1 }} exit={{ y:"20%",opacity: 0 }} transition={{ duration: .2, delay:(direction === 'down' ? .4 : 0), repeatType:'reverse'  }}><Contact /></motion.div>
          }
        </AnimatePresence>


      </motion.section>
      <button disabled={index <= 1 ? true : false} onClick={upHundler} className='up-btn'><ArrowUpwardIcon></ArrowUpwardIcon></button>
      <button disabled={index >= 3 ? true : false} onClick={downHundler} className='down-btn'><ArrowDownwardIcon></ArrowDownwardIcon></button>
    </div>
  );
}

export default App
