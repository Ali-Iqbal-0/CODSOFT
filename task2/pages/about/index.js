import { useState } from "react";

import {
  FaHtml5, FaCss3, FaJs, FaReact,
} from 'react-icons/fa';

import {
  SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop,
} from 'react-icons/si';
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
        ],
      },
    ],
  },
  {
    title: 'Courses',
    info: [
      {
        title: 'Introduction to Web development with Html,Css,Javascript',
        stage: 'July 26,2023',
      },
      {
        title: 'Intoduction to Cloud Computing',
        stage: 'June 25,2023',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Web Developer ',
        stage: '2022 - 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - Ucp Lahore',
        stage: '2023',
      },
    ],
  },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      <motion.div variants={fadeIn('left', 0.2)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex absolute bottom-0 -right-[60px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2'>
            Captivating <span className='text-accent'> stories </span> birth magnificent Design.
          </motion.h2>
          <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          Hey there, I'm Ali, a dedicated web developer with a passion for turning ideas into interactive online realities. With a keen eye for design and a love for clean code, I specialize in creating user-friendly and visually appealing websites. My journey in the digital realm is all about pushing boundaries and crafting seamless online experiences. Join me as I continue to explore the ever-evolving world of web development.
          </motion.p>
          <motion.div variants={fadeIn('right', 0.6)} initial='hidden' animate='show' exit='hidden' className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
              </div>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satified Clients</div>
              </div>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished Projects</div>
              </div>
              <div className='relative flex-1 '>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Awards</div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)}> {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>

                  <div className='flex gap-x-4'>
                    {item.icons ? item.icons.map((icon, itemIndex) => {
                      return <div className='text-2xl text-white'>{icon}</div>;
                    }) : null}
                  </div>

                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );

};

export default About;
