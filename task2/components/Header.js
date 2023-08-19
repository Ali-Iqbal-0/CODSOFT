import Image from 'next/image';
import Socials from '../components/Socials';


const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          <a href={'/'}>
            <Image src={'/logo7.png'} width={320} height={100} alt='' priority={true} />
          </a>
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
