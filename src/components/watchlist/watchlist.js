import React from 'react';
import styles from './watchlist.module.css';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BsPlusCircle } from 'react-icons/bs';
import { RiBarChartHorizontalLine } from 'react-icons/ri';

import data from './datasaham';
import DaftarSaham from './DaftarSaham';
import { ThemeContext, ThemeUpdateContext } from '../../App';

const watchlistGroup = ['Watchlist', 'Saham Pilihan', 'Konstruksi'];

const Watchlist = () => {
  const [toggle, setToggle] = React.useState(false);
  const [indexWatchlist, setIndexWatchlist] = React.useState(0);
  const dataAktif = indexWatchlist === 0 ? data.watchlist : data.watchlist2;
  const sidebarToggle = React.useContext(ThemeContext);
  const setSidebarToggle = React.useContext(ThemeUpdateContext);

  return (
    <div className='container con1'>
      <div className={styles.atas}>
        <RiBarChartHorizontalLine
          style={{ zIndex: '1' }}
          onClick={() => setSidebarToggle(!sidebarToggle)}
          color='#959595'
          fontSize={24}
        />
        <h1>NeoHOTS</h1>
      </div>

      <div className={styles.konten}>
        <div className={styles.editsaham}>
          <div
            onClick={() => {
              console.log(toggle);
              setToggle(!toggle);
            }}
            className={styles.flex}
          >
            <span>
              {indexWatchlist === 0
                ? 'Watchlist'
                : indexWatchlist === 1
                ? 'Saham Pilihan'
                : 'Konstruksi'}
            </span>
            <MdOutlineKeyboardArrowDown fontSize={22} />
          </div>
          <BsPlusCircle color='#959595' fontSize={23} />
        </div>
        {dataAktif.map((x) => (
          <DaftarSaham
            harga={x.harga}
            kepanjangan={x.kepanjangan}
            kode={x.kode}
            kenaikan={x.kenaikan}
            imgUrl={x.imgUrl}
            atasTinggi={x.atas ? x.atas.tinggi : 'No'}
            atasLebar={x.atas ? x.atas.lebar : 'No'}
            tengahTinggi={x.tengah ? x.tengah.tinggi : 'No'}
            tengahLebar={x.tengah ? x.tengah.lebar : 'No'}
            bawahTinggi={x.bawah ? x.bawah.tinggi : 'No'}
            bawahLebar={x.bawah ? x.bawah.lebar : 'No'}
            styles={styles}
          />
        ))}
      </div>

      {toggle ? (
        <div
          className={`${styles.popup_watchlist} animate__animated animate__rotateIn`}
        >
          <div className={styles.popatas}>
            <span>Daftar Watchlist</span>
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              color='#959595'
              fontSize={24}
            />
          </div>
          <div className={styles.popbawah}>
            {watchlistGroup.map((item, index) => (
              <div
                onClick={() => {
                  setIndexWatchlist(index);
                  setToggle(!toggle);
                }}
              >
                <span>{item}</span>
                {index === indexWatchlist ? (
                  <AiOutlineCheck color='#959595' fontSize={24} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Watchlist;
