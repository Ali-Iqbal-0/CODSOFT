import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none h-full flex justify-end items-end'>
      <div className='flex-shrink-0'>
        <Image src={'/000.png'} width={450} height={678} alt='' className='translate-z-0' />
      </div>
    </div>
  );
};

export default Avatar;
