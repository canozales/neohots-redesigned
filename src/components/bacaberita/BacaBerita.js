import React from 'react';
import styles from './bacaberita.module.css';
import { HiArrowLeft } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

const BacaBerita = () => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='container'>
      <div className={styles.atas}>
        <HiArrowLeft
          style={{ zIndex: '1' }}
          onClick={() => navigate(-1)}
          color='#959595'
          fontSize={24}
        />
        <h1>NeoHOTS</h1>
      </div>

      <div className={styles.konten}>
        <iframe
          title='Konten Berita'
          className={styles.frame}
          src={location.state.data}
        />
      </div>
    </div>
  );
};

export default BacaBerita;
