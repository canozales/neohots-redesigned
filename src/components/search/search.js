import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { AiOutlineRight } from 'react-icons/ai';
import styles from './search.module.css';
import data from './datasaham';
import DaftarSaham from './DaftarSaham';
import datasaham from '../watchlist/datasaham.js';
import { Link } from 'react-router-dom';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { ThemeContext, ThemeUpdateContext } from '../../App';
const dataMarket = [
  {
    satu: 'NIKKEI 225',
    dua: '26,890.580',
    tiga: '-116.380 (-0.43%)',
    empat: 'red',
  },
  {
    satu: 'S&P 500',
    dua: '3,752.750',
    tiga: '+86.970 (+2.37%)',
    empat: 'green',
  },
  {
    satu: 'Shanghai',
    dua: '3,038.930',
    tiga: '+3.880 (+0.13%)',
    empat: 'green',
  },
  {
    satu: 'DOW JONES',
    dua: '31,082.560',
    tiga: '+748.970 (+2.47%)',
    empat: 'green',
  },
  {
    satu: 'NASDAQ',
    dua: '10,859.720',
    tiga: '+244.880 (+2.31%)',
    empat: 'green',
  },

  {
    satu: 'HANG SENG',
    dua: '16,211.120',
    tiga: '-69.100 (-0.42%)',
    empat: 'red',
  },
];

const dataIndex = [
  {
    satu: 'BISNIS-27',
    dua: '600.797',
    tiga: '-5.819 (-0.98%)',
    empat: 'red',
  },
  {
    satu: 'IDX30',
    dua: '526.573',
    tiga: '+3.443 (+0.66%)',
    empat: 'green',
  },
  {
    satu: 'PEFINDO25',
    dua: '284.025',
    tiga: '+1.238 (+0.43%)',
    empat: 'green',
  },
  {
    satu: 'IDXBUMN20',
    dua: '414.929',
    tiga: '+3.843 (+0.94%)',
    empat: 'green',
  },
  {
    satu: 'IDXESGL',
    dua: '146.727',
    tiga: '+1.480 (+1.02%)',
    empat: 'green',
  },
];

const Search = () => {
  const [nilaiFilter, setNilaiFilter] = React.useState('');
  const sidebarToggle = React.useContext(ThemeContext);
  const setSidebarToggle = React.useContext(ThemeUpdateContext);

  return (
    <div className='container'>
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
              placeholder='Silahkan Mencari Saham'
              type='text'
            />
          </div>
        </div>

        <div className={styles.kategori}>
          <span>STOCKS</span>
          <span>FUTURES</span>
          <span>CURRENCY</span>
          <span>CRYPTO</span>
        </div>
      </div>

      {nilaiFilter === '' ? (
        <div className={styles.konten}>
          <div className={styles.ihsg}>
            <div className={styles.infoihsg}>
              <div className={styles.nilaiihsg}>
                <span>IHSG</span>
                <span>6,936.78</span>
                <span>-49.84 (-0.73%)</span>
              </div>

              <IoIosSearch color='#959595' fontSize={22} />
            </div>

            <div className={styles.flex}>
              <div className={styles.chart}>
                <div style={{ paddingTop: 42 }} className={styles.tes}>
                  <div style={{ height: 15, width: 2 }}></div>
                  <div style={{ height: 25, width: 15 }}></div>
                  <div style={{ height: 15, width: 2 }}></div>
                </div>
                <div style={{ paddingTop: 18 }} className={styles.tes}>
                  <div style={{ height: 25, width: 2 }}></div>
                  <div style={{ height: 10, width: 15 }}></div>
                </div>
                <div style={{ paddingTop: 5 }} className={styles.tes}>
                  <div style={{ height: 10, width: 2 }}></div>
                  <div style={{ height: 30, width: 15 }}></div>
                  <div style={{ height: 15, width: 2 }}></div>
                </div>

                <div style={{ paddingTop: 0 }} className={styles.tes}>
                  <div style={{ height: 17, width: 15 }}></div>
                  <div style={{ height: 16, width: 2 }}></div>
                </div>

                <div style={{ paddingTop: 0 }} className={styles.tes2}>
                  <div style={{ height: 33, width: 15 }}></div>
                </div>

                <div style={{ paddingTop: 30 }} className={styles.tes2}>
                  <div style={{ height: 13, width: 15 }}></div>
                  <div style={{ height: 4, width: 15 }}></div>
                  <div style={{ height: 16, width: 2 }}></div>
                </div>
                <div style={{ paddingTop: 60 }} className={styles.tes2}>
                  <div style={{ height: 33, width: 15 }}></div>
                </div>
                <div style={{ paddingTop: 60 }} className={styles.tes}>
                  <div style={{ height: 13, width: 2 }}></div>
                  <div style={{ height: 20, width: 15 }}></div>
                </div>
                <div style={{ paddingTop: 44 }} className={styles.tes}>
                  <div style={{ height: 33, width: 15 }}></div>
                </div>

                <div style={{ paddingTop: 44 }} className={styles.tes2}>
                  <div style={{ height: 53, width: 15 }}></div>
                </div>
                <div style={{ paddingTop: 94 }} className={styles.tes2}>
                  <div style={{ height: 27, width: 15 }}></div>
                </div>
                <div style={{ paddingTop: 118 }} className={styles.tes}>
                  <div style={{ height: 13, width: 15 }}></div>
                  <div style={{ height: 15, width: 2 }}></div>
                </div>
                <div style={{ paddingTop: 93 }} className={styles.tes}>
                  <div style={{ height: 28, width: 15 }}></div>
                </div>
                <div style={{ paddingTop: 82 }} className={styles.tes2}>
                  <div style={{ height: 10, width: 2 }}></div>
                  <div style={{ height: 10, width: 15 }}></div>
                  <div style={{ height: 10, width: 2 }}></div>
                </div>
              </div>
              <div className={styles.hargachart}>
                <span>7100</span>
                <span>7050</span>
                <span>7000</span>
                <span>6950</span>
                <span>6900</span>
                <span>6850</span>
              </div>
            </div>

            <div className={styles.status}>
              <div className={styles.statusRow}>
                <div className={styles.kirikanan}>
                  <span>Open</span>
                  <span>6970</span>
                </div>
                <div className={styles.kirikanan}>
                  <span>Lot</span>
                  <span>226.83M</span>
                </div>
              </div>

              <div className={styles.statusRow}>
                <div className={styles.kirikanan}>
                  <span>High</span>
                  <span>7128</span>
                </div>
                <div className={styles.kirikanan}>
                  <span>Value</span>
                  <span>10.44T</span>
                </div>
              </div>

              <div className={styles.statusRow}>
                <div className={styles.kirikanan}>
                  <span>Low</span>
                  <span>6863</span>
                </div>
                <div className={styles.kirikanan}>
                  <span>Freq</span>
                  <span>1.11M</span>
                </div>
              </div>
            </div>

            <div className={styles.marketGlobal}>
              {dataMarket.map((item) => (
                <div className={styles.index}>
                  <span>{item.satu}</span>
                  <span
                    className={item.empat === 'red' ? styles.red : styles.green}
                  >
                    {item.dua}
                  </span>
                  <span
                    className={item.empat === 'red' ? styles.red : styles.green}
                  >
                    {item.tiga}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.judulIndex}>
              <span>INDEX</span>
            </div>

            <div className={styles.marketGlobal}>
              {dataIndex.map((item) => (
                <div className={styles.index}>
                  <span>{item.satu}</span>
                  <span
                    className={item.empat === 'red' ? styles.red : styles.green}
                  >
                    {item.dua}
                  </span>
                  <span
                    className={item.empat === 'red' ? styles.red : styles.green}
                  >
                    {item.tiga}
                  </span>
                </div>
              ))}
            </div>
            <div className={styles.viewmore}>
              <span>View More</span>
              <AiOutlineRight color='#959595' fontSize={18} />
            </div>
            <div className={styles.judulIndex}>
              <span>CURRENCY</span>
            </div>
            {data.map((x) => (
              <DaftarSaham
                harga={x.harga}
                kepanjangan={x.kepanjangan}
                kode={x.kode}
                kenaikan={x.kenaikan}
                imgUrl={x.imgUrl}
                imgUrl2={x.imgUrl2}
                styles={styles}
              />
            ))}
          </div>
        </div>
      ) : (
        <div style={{ paddingTop: '1rem' }} className={styles.konten}>
          {datasaham.watchlist
            .filter((val) => {
              if (
                val.kode.includes(nilaiFilter.toUpperCase()) ||
                val.kepanjangan
                  .toLowerCase()
                  .includes(nilaiFilter.toLowerCase())
              ) {
                return val;
              }
              return false;
            })
            .map((val) => (
              <Link to={`/detail/${val.kode}`} className={styles.flexx1}>
                <img src={val.imgUrl} alt='' />
                <div className={styles.kolum}>
                  <span>{val.kode}</span>
                  <span>{val.kepanjangan}</span>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
