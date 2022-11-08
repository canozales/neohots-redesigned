import React from 'react';
import { Link } from 'react-router-dom';

const DaftarSaham = ({
  imgUrl,
  kode,
  kepanjangan,
  harga,
  kenaikan,
  atasTinggi,
  atasLebar,
  tengahTinggi,
  tengahLebar,
  bawahTinggi,
  bawahLebar,
  styles,
}) => (
  <Link to={`/detail/${kode}`} className={styles.saham}>
    <div className={styles.kiri}>
      <img src={imgUrl} alt='Pict' />
      <div className={styles.kodesaham}>
        <span>{kode}</span>
        <span>{kepanjangan}</span>
      </div>
    </div>

    <div className={styles.candlestick}>
      {atasTinggi !== 'No' ? (
        <div
          style={{ height: atasTinggi, width: atasLebar }}
          className={`${styles.stick1} ${
            kenaikan[0] === '+'
              ? `${styles.backGreen}`
              : kenaikan[0] === '-'
              ? `${styles.backRed}`
              : `${styles.backAbu}`
          }`}
        ></div>
      ) : null}

      {tengahTinggi !== 'No' ? (
        <div
          style={{ height: tengahTinggi, width: tengahLebar }}
          className={`${styles.stick2} ${
            kenaikan[0] === '+'
              ? `${styles.backGreen}`
              : kenaikan[0] === '-'
              ? `${styles.backRed}`
              : `${styles.backAbu}`
          }`}
        ></div>
      ) : null}

      {bawahTinggi !== 'No' ? (
        <div
          style={{ height: bawahTinggi, width: bawahLebar }}
          className={`${styles.stick3} ${
            kenaikan[0] === '+'
              ? `${styles.backGreen}`
              : kenaikan[0] === '-'
              ? `${styles.backRed}`
              : `${styles.backAbu}`
          }`}
        ></div>
      ) : null}
    </div>

    <div className={styles.harga}>
      <span>{harga}</span>
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
  </Link>
);

export default DaftarSaham;
