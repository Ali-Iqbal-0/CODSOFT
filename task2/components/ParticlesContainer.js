import {Particles} from 'react-tsparticles'
import { loadFull } from 'tsparticles';
import react,{useCallback} from 'react';
const ParticlesContainer = () => {
  const particlesInit=useCallback(async(engine)=>{
    await loadFull(engine);
  },[]);
  const particlesLoaded=useCallback(async()=>{},[]);

  return <Particles 
  className='w-full h-full absolute translate-z-0'
  id='tsparticles' init={particlesInit} loaded={particlesLoaded}
  options={{
    fullScreen:{enable:false},
    background:{
      color:{
        value:''
      },
    },
    fpsLimit:30,
    interactivity:{
      events:{
        onClick:{
          enable:false,
          mode:'push',
        },
        onHover:{
          enable:true,
          mode:'repulse',
        },
        resize:true,
      },
      modes:{
        push:{
          quantity:90
        },
        repulse:{
          distance:200,
          duration:0.4,
        }
      }
    },
    particles:{
      color:{
        value:'#FFFFFF',
      },
      links:{
        color:'#f5d393',
        distance:150,
        enable:true,
        opacity:0.5,
        width:1,
      },
      collisions:{
        enable:true,
      },
      move:{
        directions:'none',
        enable:true,
        outMode:{
          default:'bounce'
        },
        random:false,
        speed:2,
        straight:false,
      },
      number:{
        density:{
          enable:true,
          area:900,
        },
        value:80,
      },
      opacity:{
        value:8.5,
      },
      shape:{
        type:'star',
      },
      size:{
        value:{min:0.5,max:4},
      },
    },
    detectRetina:true,
  }}/>;
  
};

export default ParticlesContainer;
