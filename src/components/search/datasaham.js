import { indo, america } from '../../assets';
import china from '../../assets/china.png';
import euro from '../../assets/euro.png';
import gbp from '../../assets/england.jpg';

const data = [
  {
    imgUrl: america,
    imgUrl2: indo,
    kode: 'USDIDR',
    kepanjangan: 'U.S Dollar / Rupiah',
    harga: '15.630',
    kenaikan: '+60 (+0.39%)',
  },
  {
    imgUrl: gbp,
    imgUrl2: america,
    kode: 'GBPUSD',
    kepanjangan: 'Pounds / U.S Dollar',
    harga: '1.12950',
    kenaikan: '+0.00632 (+0.56%)',
  },
  {
    imgUrl: china,
    imgUrl2: indo,
    kode: 'CNYIDR',
    kepanjangan: 'Chinese Yuan / Rupiah',
    harga: '2159',
    kenaikan: '+2.5 (+0.12%)',
  },
  {
    imgUrl: euro,
    imgUrl2: america,
    kode: 'EURUSD',
    kepanjangan: 'Euro / U.S Dollar',
    harga: '0.98565',
    kenaikan: '+0.0075 (+0.77%)',
  },
];

export default data;
