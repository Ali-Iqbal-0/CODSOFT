import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='text-center flex xl:w[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 variants={fadeIn('up', 0.3)} initial='hidden' animate='show' exit='hidden' className='h2 xl:mt-12'>
              My Work<span className='text-accent'>.</span>
            </motion.h2>
            <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            Step into the showcase of my digital journey. Here, you'll find a collection of projects that highlight my passion for web development and design. Each entry is a testament to the fusion of creativity and technology, where pixels come to life and ideas take shape. Explore the diverse range of projects that define my commitment to crafting captivating online experiences.
            </motion.p>
          </div>
          <motion.div variants={fadeIn('left', 0.6)} initial='hidden' animate='show' exit='hidden' className='w-full xl:max-w-[65%]'>
          <WorkSlider />
          </motion.div>
          
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
