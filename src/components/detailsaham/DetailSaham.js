import React from 'react';
import styles from './detailsaham.module.css';
import { MdShowChart } from 'react-icons/md';
import { IoIosSearch } from 'react-icons/io';
import { HiArrowLeft } from 'react-icons/hi';
import RowTabel from './RowTabel';
import { useParams } from 'react-router-dom';
import DataSaham from '../watchlist/datasaham';
import komaSeperator from '../komaSeperator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import news6 from '../../assets/news6.png';
import news7 from '../../assets/news7.png';
import { Link } from 'react-router-dom';

const DetailSaham = () => {
  const DetailPembelian = ({
    imgUrl,
    kode,
    kepanjangan,
    harga,
    kenaikan,
    styles,
  }) => (
    <div className={styles.saham}>
      <div className={styles.kiri}>
        <img src={imgUrl} alt='Pict' />
        <div className={styles.kodesaham}>
          <span>{kode}</span>
          <span>{kepanjangan}</span>
        </div>
      </div>

      <div className={styles.harga}>
        <span>{komaSeperator(parseInt(harga))}</span>
        <span
          className={`${
            kenaikan[0] === '+'
              ? `${styles.green}`
              : kenaikan[0] === '-'
              ? `${styles.red}`
              : `${styles.abu}`
          }`}
        >
          {kenaikan}
        </span>
      </div>
    </div>
  );

  const [slideAktif, setSlideAktif] = React.useState(0);

  const dataSlide = [
    'ORDERBOOK',
    'FINANCIAL',
    'NEWS',
    'FORUM',
    'ANALYST',
    'OVERVIEW',
  ];
  const { akhiran } = useParams();
  const data = DataSaham.getProductByKode(akhiran);
  const nilaiCandle = [
    data.harga,
    parseInt(data.harga) - 10,
    parseInt(data.harga) - 20,
    parseInt(data.harga) - 30,
    parseInt(data.harga) - 40,
    parseInt(data.harga) - 50,
  ];
  const labaBersih = [
    {
      satu: 'Period',
      dua: '2022',
      tiga: '2021',
      empat: '2020',
      lima: '2019',
    },
    {
      satu: 'Q1',
      dua: '225 B',
      tiga: '200 B',
      empat: '150 B',
      lima: '100 B',
    },
    {
      satu: 'Q2',
      dua: '225 B',
      tiga: '200 B',
      empat: '150 B',
      lima: '100 B',
    },
    {
      satu: 'Q3',
      dua: '225 B',
      tiga: '200 B',
      empat: '150 B',
      lima: '100 B',
    },
    {
      satu: 'Q4',
      dua: '225 B',
      tiga: '200 B',
      empat: '150 B',
      lima: '100 B',
    },
    {
      satu: 'Annual',
      dua: '900 B',
      tiga: '800 B',
      empat: '600 B',
      lima: '400 B',
    },
  ];

  const IsiTabel = [
    {
      satu: 'Lot',
      dua: 'Bid',
      tiga: 'Ask',
      empat: 'Lot',
    },
    {
      satu: '1,309',
      dua: komaSeperator(parseInt(data.harga)),
      tiga: komaSeperator(parseInt(data.harga) + 10),
      empat: '723',
    },
    {
      satu: '3,580',
      dua: komaSeperator(parseInt(data.harga) - 10),
      tiga: komaSeperator(parseInt(data.harga) + 20),
      empat: '157',
    },
    {
      satu: '520',
      dua: komaSeperator(parseInt(data.harga) - 20),
      tiga: komaSeperator(parseInt(data.harga) + 30),
      empat: '94',
    },
    {
      satu: '913',
      dua: komaSeperator(parseInt(data.harga) - 30),
      tiga: komaSeperator(parseInt(data.harga) + 40),
      empat: '120',
    },
    {
      satu: '397',
      dua: komaSeperator(parseInt(data.harga) - 40),
      tiga: komaSeperator(parseInt(data.harga) + 50),
      empat: '259',
    },
    {
      satu: '979',
      dua: komaSeperator(parseInt(data.harga) - 50),
      tiga: komaSeperator(parseInt(data.harga) + 60),
      empat: '130',
    },
    {
      satu: '1,967',
      dua: komaSeperator(parseInt(data.harga) - 60),
      tiga: komaSeperator(parseInt(data.harga) + 70),
      empat: '420',
    },
    {
      satu: '838',
      dua: komaSeperator(parseInt(data.harga) - 70),
      tiga: komaSeperator(parseInt(data.harga) + 80),
      empat: '586',
    },
    {
      satu: '29',
      dua: komaSeperator(parseInt(data.harga) - 80),
      tiga: komaSeperator(parseInt(data.harga) + 90),
      empat: '965',
    },
    {
      satu: '376',
      dua: komaSeperator(parseInt(data.harga) - 90),
      tiga: komaSeperator(parseInt(data.harga) + 100),
      empat: '103',
    },
    {
      satu: '10,908',
      dua: '',
      tiga: '',
      empat: '3,557',
    },
  ];

  const navigate = useNavigate();
  const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));
  const [toggleBuy, setToggleBuy] = React.useState(false);
  const [harga, setHarga] = React.useState(parseInt(data.harga));
  const [lot, setLot] = React.useState(1);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container con2'>
      <div className={styles.atas}>
        <div className={styles.pemisah}>
          <HiArrowLeft
            onClick={() => navigate(-1)}
            color='#959595'
            fontSize={24}
          />
          <div className={styles.searching}>
            <IoIosSearch color='#959595' fontSize={22} />
            <input placeholder='Silahkan Mencari Saham' type='text' disabled />
          </div>
        </div>
      </div>

      {toggleBuy ? (
        <div className={styles.pembelian}>
          <div className={styles.pembelianTop}>
            <div className={styles.pembelianPisah}>
              <HiArrowLeft
                style={{ zIndex: '1' }}
                onClick={() => setToggleBuy(!toggleBuy)}
                color='#959595'
                fontSize={24}
              />
            </div>
            <span>Pembelian {data.kode}</span>
          </div>
          <DetailPembelian
            harga={data.harga}
            kepanjangan={data.kepanjangan}
            kode={data.kode}
            kenaikan={data.kenaikan}
            imgUrl={data.imgUrl}
            styles={styles}
          />

          <div className={styles.kotakDetail}>
            <div className={styles.plex}>
              <span>Total Saldo Anda</span>
              <span>Rp 50,000,000</span>
            </div>
            <div className={styles.plex}>
              <span>Harga Pembelian</span>
              <span>Rp {komaSeperator(harga * lot * 100)}</span>
            </div>

            <div className={styles.plex}>
              <div className={styles.plexx}>
                <span>Harga</span>
                <div className={styles.plexing}>
                  <span onClick={() => setHarga(harga - 10)}>-</span>
                  <span>{komaSeperator(harga)}</span>
                  <span onClick={() => setHarga(harga + 10)}>+</span>
                </div>
              </div>

              <div className={styles.plexx}>
                <span>Lot</span>
                <div className={styles.plexing}>
                  <span onClick={() => (lot !== 1 ? setLot(lot - 1) : null)}>
                    -
                  </span>
                  <input
                    onChange={(x) => setLot(parseInt(x.target.value))}
                    className={styles.inputLot}
                    type='number'
                    value={lot}
                  />

                  <span onClick={() => setLot(lot + 1)}>+</span>
                </div>
              </div>
            </div>
            {parseInt(harga) * parseInt(lot) * 100 <= 50000000 ? (
              <button
                className={styles.backGreen}
                onClick={() =>
                  toast.promise(resolveAfter3Sec, {
                    pending: 'Memproses Pembelian',
                    success: 'Pembelian Berhasil !',
                    error: 'Pembelian Gagal !',
                    position: 'top-center',
                    autoClose: 10000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: 'light',
                  })
                }
              >
                BUY
              </button>
            ) : (
              <button className={styles.backRed}>SALDO KURANG</button>
            )}
          </div>
          <div className={styles.tabel}>
            {IsiTabel.map((x) => (
              <RowTabel
                styles={styles}
                satu={x.satu}
                dua={x.dua}
                tiga={x.tiga}
                empat={x.empat}
              />
            ))}
          </div>
        </div>
      ) : null}

      <div className={styles.konten}>
        <div className={styles.flexi}>
          <div className={styles.row1}>
            <span>{data.kode}</span>
            <span>{data.kepanjangan}</span>
            <span>Sektor Perbankan</span>
          </div>
          <img src={data.imgUrl} alt='' />
        </div>

        <div className={styles.row2}>
          <div className={styles.kiri}>
            <span>{komaSeperator(data.harga)}</span>
            <span
              className={`${
                data.kenaikan[0] === '+'
                  ? `${styles.green}`
                  : data.kenaikan[0] === '-'
                  ? `${styles.red}`
                  : `${styles.abu}`
              }`}
            >
              {data.kenaikan}
            </span>
          </div>
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
            {nilaiCandle.map((x) => (
              <span>{komaSeperator(x)}</span>
            ))}
          </div>
        </div>

        <div className={styles.row3}>
          <span>1D</span>
          <span>1M</span>
          <span>3M</span>
          <span>YTD</span>
          <span>1Y</span>
          <span>3Y</span>
          <span>5Y</span>
          <MdShowChart color='#959595' fontSize={24} />
        </div>

        <div className={styles.row4}>
          <button onClick={() => setToggleBuy(!toggleBuy)}>BUY</button>
          <button>SELL</button>
        </div>

        <div className={styles.row5}>
          {dataSlide.map((data, index) => (
            <span
              onClick={() => setSlideAktif(index)}
              className={index === slideAktif ? `${styles.aktip}` : null}
            >
              {data}
            </span>
          ))}
        </div>

        {slideAktif === 0 ? (
          <div>
            <div className={styles.orderbook}>
              <div className={styles.between}>
                <div className={`${styles.between} ${styles.side}`}>
                  <span>Open</span>
                  <span>{komaSeperator(parseInt(data.harga) - 20)}</span>
                </div>

                <div className={`${styles.between} ${styles.side}`}>
                  <span>Lot</span>
                  <span>850K</span>
                </div>
              </div>

              <div className={styles.between}>
                <div className={`${styles.between} ${styles.side}`}>
                  <span>High</span>
                  <span>{komaSeperator(parseInt(data.harga) + 50)}</span>
                </div>

                <div className={`${styles.between} ${styles.side}`}>
                  <span>Val</span>
                  <span>350M</span>
                </div>
              </div>

              <div className={styles.between}>
                <div className={`${styles.between} ${styles.side}`}>
                  <span>Low</span>
                  <span>{komaSeperator(parseInt(data.harga) - 50)}</span>
                </div>

                <div className={`${styles.between} ${styles.side}`}>
                  <span>Avg</span>
                  <span>{komaSeperator(parseInt(data.harga) - 30)}</span>
                </div>
              </div>

              <div className={styles.between}>
                <div className={`${styles.between} ${styles.side}`}>
                  <span>F Buy</span>
                  <span>60M</span>
                </div>

                <div className={`${styles.between} ${styles.side}`}>
                  <span>F Sell</span>
                  <span>18.5M</span>
                </div>
              </div>
            </div>
            <div className={styles.tabel}>
              {IsiTabel.map((x) => (
                <RowTabel
                  styles={styles}
                  satu={x.satu}
                  dua={x.dua}
                  tiga={x.tiga}
                  empat={x.empat}
                />
              ))}
            </div>
          </div>
        ) : slideAktif === 1 ? (
          <div>
            <div className={styles.financial}>
              <span>Pendapatan Bersih</span>

              {labaBersih.map((x) => (
                <div className={styles.plex}>
                  <span className={styles.satu}>{x.satu}</span>
                  <span className={styles.dua}>{x.dua}</span>
                  <span className={styles.tiga}>{x.tiga}</span>
                  <span className={styles.empat}>{x.empat}</span>
                  <span className={styles.lima}>{x.lima}</span>
                </div>
              ))}
            </div>

            <div className={styles.valuation}>
              <span>Valuation</span>
              <div className={styles.plex2}>
                <span>Book Value</span>
                <span className={styles.abu}>
                  {komaSeperator(parseInt(data.harga) + 100)}
                </span>
              </div>
              <div className={styles.plex2}>
                <span>Debt to Equity Ratio</span>
                <span className={styles.green}>0.32</span>
              </div>
              <div className={styles.plex2}>
                <span>Price to Book Value</span>
                <span className={styles.red}>4.25</span>
              </div>
              <div className={styles.plex2}>
                <span>Price to Earning Ratio</span>
                <span className={styles.green}>12.62</span>
              </div>

              <div className={styles.plex2}>
                <span>Return on Assets</span>
                <span className={styles.green}>11.54%</span>
              </div>
              <div className={styles.plex2}>
                <span>Return on Equity</span>
                <span className={styles.green}>37.26%</span>
              </div>
              <div className={styles.plex2}>
                <span>Total Assets</span>
                <span className={styles.abu}>8.372 B</span>
              </div>
              <div className={styles.plex2}>
                <span>Total Equity</span>
                <span className={styles.abu}>5,498 B</span>
              </div>
              <div className={styles.plex2}>
                <span>Total Liabilities</span>
                <span className={styles.abu}>2.874 B</span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Link
              to={'/bacaberita'}
              state={{
                data: 'https://investor.id/market-and-corporate/311221/laba-lampaui-perkiraan-target-harga-saham-bank-mandiri-bmri-direvisi-naik',
              }}
              className={styles.kartu}
            >
              <img src={news6} alt='' />
              <div>
                <span>
                  Laba Lampaui Perkiraan, Target Harga Bank Mandiri (BMRI)
                  Direvisi Naik
                </span>
                <span>26 October 2022, 08:35</span>
              </div>
            </Link>

            <Link
              to={'/bacaberita'}
              state={{
                data: 'https://investor.id/market-and-corporate/310998/kuartal-iii-laba-bersih-bank-mandiri-bmri-tembus-rp-307-triliun',
              }}
              className={styles.kartu}
            >
              <img src={news7} alt='' />
              <div>
                <span>
                  Kuartal III, Laba Bersih Bank Mandiri (BMRI) Tembus Rp 30,7
                  Triliun
                </span>
                <span>24 October 2022, 14:25</span>
              </div>
            </Link>
          </div>
        )}
      </div>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme='light'
      />
    </div>
  );
};

export default DetailSaham;
