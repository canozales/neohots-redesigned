import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiWallet } from 'react-icons/gi';
import { ImNewspaper } from 'react-icons/im';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { IoMdGlasses } from 'react-icons/io';

const dataNavbar = [
  {
    nama: 'Watchlist',
    path: '/watchlist',
  },
  {
    nama: 'News',
    path: '/news',
  },
  {
    nama: 'Search',
    path: '/',
  },
  {
    nama: 'Forum',
    path: '/forum',
  },
  {
    nama: 'Portfolio',
    path: '/portofolio',
  },
];

const Navbar = ({ tulisan, icon, path, indexAktif, setIndexAktif }) => {
  return (
    <Link onClick={() => setIndexAktif(icon)} className='bawahkonten' to={path}>
      {icon == 0 && (
        <IoMdGlasses
          color={icon === indexAktif ? '#74DEB7' : '#959595'}
          fontSize={27}
        />
      )}
      {icon == 1 && (
        <ImNewspaper
          color={icon === indexAktif ? '#74DEB7' : '#959595'}
          fontSize={27}
        />
      )}
      {icon == 2 && (
        <AiOutlineSearch
          color={icon === indexAktif ? '#74DEB7' : '#959595'}
          fontSize={27}
        />
      )}
      {icon == 3 && (
        <IoChatbubblesOutline
          color={icon === indexAktif ? '#74DEB7' : '#959595'}
          fontSize={27}
        />
      )}
      {icon == 4 && (
        <GiWallet
          color={icon === indexAktif ? '#74DEB7' : '#959595'}
          fontSize={27}
        />
      )}

      {icon === indexAktif ? (
        <p style={{ color: '#74DEB7' }}>{tulisan}</p>
      ) : (
        <p style={{ color: '#959595' }}>{tulisan}</p>
      )}
    </Link>
  );
};

const NavBottom = () => {
  const [indexAktif, setIndexAktif] = React.useState(2);

  return (
    <div className='bawah'>
      {dataNavbar.map((item, index) => (
        <Navbar
          setIndexAktif={setIndexAktif}
          indexAktif={indexAktif}
          path={item.path}
          tulisan={item.nama}
          icon={index}
        />
      ))}
    </div>
  );
};

export default NavBottom;
