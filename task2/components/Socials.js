import Link from 'next/link';
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href='YOUR_YOUTUBE_LINK'>
        <div className='hover:text-accent transition-all duration-300'>
          <RiYoutubeLine />
        </div>
      </Link>

      <Link href='YOUR_INSTAGRAM_LINK'>
        <div className='hover:text-accent transition-all duration-300'>
          <RiInstagramLine />
        </div>
      </Link>
      
      <Link href='YOUR_INSTAGRAM_LINK'>
        <div className='hover:text-accent transition-all duration-300'>
          <RiFacebookLine />
        </div>
      </Link>

      <Link href='YOUR_INSTAGRAM_LINK'>
        <div className='hover:text-accent transition-all duration-300'>
          <RiDribbbleLine />
        </div>
      </Link>

      <Link href='YOUR_INSTAGRAM_LINK'>
        <div className='hover:text-accent transition-all duration-300'>
          <RiBehanceLine />
        </div>
      </Link>

      <Link href='YOUR_INSTAGRAM_LINK'>
        <div className='hover:text-accent transition-all duration-300'>
          <RiPinterestLine />
        </div>
      </Link>
    </div>
  );
};

export default Socials;
