import React from 'react';
import styles from './portofolio.module.css';
import { BiSupport } from 'react-icons/bi';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import {
  FcMoneyTransfer,
  FcCurrencyExchange,
  FcComboChart,
} from 'react-icons/fc';
import gambar from '../../assets/budi.jpg';
import gambar2 from '../../assets/bbyb.png';
import gambar4 from '../../assets/antam.jpg';
import gambar5 from '../../assets/bbkp.png';
import gambar3 from '../../assets/bbni.png';
import gambar1 from '../../assets/goto.png';
import { Link } from 'react-router-dom';
import { ThemeContext, ThemeUpdateContext } from '../../App';

const dataElemenSaham = [
  {
    kode: 'ANTM',
    jumlah: '65.000.000',
    change: '-4.225.000',
    profitloss: '-6.50%',
    gambar: gambar4,
  },
  {
    kode: 'BBKP',
    jumlah: '25.000.000',
    change: '+3.750.000',
    profitloss: '+15.00%',
    gambar: gambar5,
  },
  {
    kode: 'BBNI',
    jumlah: '75.000.000',
    change: '+14.625.000',
    profitloss: '+19.50%',
    gambar: gambar3,
  },
  {
    kode: 'BBYB',
    jumlah: '30.000.000',
    change: '-3.600.000',
    profitloss: '-12.00%',
    gambar: gambar2,
  },
  {
    kode: 'GOTO',
    jumlah: '150.000.000',
    change: '+12.750.000',
    profitloss: '+8.50%',
    gambar: gambar1,
  },
];
const ElemenSaham = (props) => (
  <Link to={`/detail/${props.kode}`} className={props.styles.portoSaham}>
    <div className={props.styles.flex}>
      <img src={props.gambar} alt='' />
      <div className={props.styles.stats}>
        <span>{props.kode}</span>
        <span>{props.jumlah}</span>
      </div>
    </div>

    <div className={props.styles.stats}>
      <span
        className={
          props.change[0] === '+'
            ? `${props.styles.green}`
            : props.change[0] === '-'
            ? `${props.styles.red}`
            : `${props.styles.abu}`
        }
      >
        {props.change}
      </span>
      <span>Change</span>
    </div>
    <div className={props.styles.stats}>
      <span
        className={
          props.profitloss[0] === '+'
            ? `${props.styles.green}`
            : props.change[0] === '-'
            ? `${props.styles.red}`
            : `${props.styles.abu}`
        }
      >
        {props.profitloss}
      </span>
      {props.profitloss[0] === '+' ? <span>Profit</span> : <span>Loss</span>}
    </div>
  </Link>
);

const Portofolio = () => {
  const sidebarToggle = React.useContext(ThemeContext);
  const setSidebarToggle = React.useContext(ThemeUpdateContext);

  return (
    <div className={styles.container}>
      <div className={styles.atas}>
        <RiBarChartHorizontalLine
          style={{ zIndex: '1' }}
          onClick={() => setSidebarToggle(!sidebarToggle)}
          color='#959595'
          fontSize={24}
        />
        <h1>My Portofolio</h1>
        <BiSupport color='#959595' fontSize={24} />
      </div>

      <div className={styles.infoProfile}>
        <div className={styles.profile}>
          <img src={gambar} alt='' />
          <span>Budi Setiawan</span>
          <span>View Profile</span>
        </div>

        <div className={styles.balance}>
          <div className={styles.kolum}>
            <span>Balance</span>
            <span>Rp 50.000.000</span>
          </div>
          <div className={styles.kolum}>
            <span>Ekuitas</span>
            <span>Rp 368.300.000</span>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.kolum}>
            <FcCurrencyExchange color='#959595' fontSize={30} />
            <span>Deposit</span>
          </div>
          <div className={styles.kolum}>
            <FcMoneyTransfer color='#959595' fontSize={30} />
            <span>Withdraw</span>
          </div>
          <div className={styles.kolum}>
            <FcComboChart color='#959595' fontSize={30} />
            <span>History</span>
          </div>
        </div>
      </div>

      <div className={styles.daftarSaham}>
        {dataElemenSaham.map((data) => (
          <ElemenSaham
            styles={styles}
            gambar={data.gambar}
            kode={data.kode}
            jumlah={data.jumlah}
            change={data.change}
            profitloss={data.profitloss}
          />
        ))}
      </div>
    </div>
  );
};

export default Portofolio;
