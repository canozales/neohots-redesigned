import React from 'react';
import styles from './news.module.css';
import { IoIosSearch } from 'react-icons/io';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { ThemeContext, ThemeUpdateContext } from '../../App';

import { Link } from 'react-router-dom';
import news1 from '../../assets/news1.png';
import news2 from '../../assets/news2.png';
import news3 from '../../assets/news3.png';
import news4 from '../../assets/news4.png';
import news5 from '../../assets/news5.png';

const daftarNews = [
  {
    gambar: news5,
    info: 'Laba Bersih BBTN Melesat 50,11%, Begini Prospeknya Menurut Analis',
    waktu: '12 menit yang lalu',
    linkUrl:
      'https://investor.id/market-and-corporate/311196/laba-bersih-btn-bbtn-melesat-5011-begini-pandangan-analis-terhadap-prospek-sahamnya',
  },
  {
    gambar: news1,
    info: 'Saham Blue Chip Merosot, IHSG Melemah pada Sejam Perdagangan',
    waktu: '4 jam yang lalu',
    linkUrl:
      'https://investor.id/market/311201/saham-blue-chip-merosot-ihsg-melemah-pada-sejam-perdagangan',
  },
  {
    gambar: news4,
    info: 'Menteri Keuangan: Guncangan Ekonomi Dunia 2023 bukan Kaleng-kaleng',
    waktu: '9 jam yang lalu',
    linkUrl:
      'https://investor.id/business/311281/menkeu-guncangan-ekonomi-dunia-2023-bukan-kalengkaleng',
  },

  {
    gambar: news2,
    info: 'Mirae: IHSG Naik Terbatas, Unggulkan PNBS dan Dua Saham Lainnya',
    waktu: '16 jam yang lalu',
    linkUrl:
      'https://investor.id/market/311191/mirae-ihsg-naik-terbatas-unggulkan-pnbs-dan-dua-saham-lainnya',
  },
  {
    gambar: news3,
    info: 'Antisipasi Dividen Interima, Harga Saham ITMG Bisa Menuju Rp 50,000',
    waktu: '26 October 2022, 14:30',
    linkUrl:
      'https://investor.id/rumours/310216/antisipasi-dividen-interim-harga-saham-indo-tambangraya-itmg-bisa-menuju-rp-50000',
  },
];

const Kartu = (props) => {
  return (
    <Link
      to={'/bacaberita'}
      state={{ data: props.linkUrl }}
      className={styles.kartu}
    >
      <img src={props.gambar} alt='' />
      <div>
        <span>{props.info}</span>
        <span>{props.waktu}</span>
      </div>
    </Link>
  );
};

const News = () => {
  const sidebarToggle = React.useContext(ThemeContext);
  const setSidebarToggle = React.useContext(ThemeUpdateContext);

  const [nilaiFilter, setNilaiFilter] = React.useState('');
  return (
    <div className='container con1'>
      <div className={styles.atas}>
        <div className={styles.pemisah}>
          <RiBarChartHorizontalLine
            onClick={() => setSidebarToggle(!sidebarToggle)}
            color='#959595'
            fontSize={24}
          />
          <div className={styles.searching}>
            <IoIosSearch color='#959595' fontSize={22} />
            <input
              onChange={(event) => setNilaiFilter(event.target.value)}
              placeholder='Silahkan Mencari News'
              type='text'
            />
          </div>
        </div>
      </div>

      <div className={styles.konten}>
        {daftarNews
          .filter((val) => {
            if (nilaiFilter === '') {
              return val;
            } else if (
              val.info.toLowerCase().includes(nilaiFilter.toLowerCase())
            ) {
              return val;
            }
            return false;
          })
          .map((x) => (
            <Kartu
              gambar={x.gambar}
              info={x.info}
              waktu={x.waktu}
              linkUrl={x.linkUrl}
            />
          ))}
      </div>
    </div>
  );
};

export default News;
