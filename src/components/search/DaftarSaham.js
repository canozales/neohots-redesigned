import React from 'react';

const DaftarSaham = ({
  imgUrl,
  imgUrl2,
  kode,
  kepanjangan,
  harga,
  kenaikan,
  styles,
}) => (
  <div className={styles.saham}>
    <div className={styles.kiri}>
      <div className={styles.bagiangambar}>
        <img src={imgUrl} alt='Pict' />
        <img src={imgUrl2} alt='Pict' />
      </div>

      <div className={styles.kodesaham}>
        <span>{kode}</span>
        <span>{kepanjangan}</span>
      </div>
    </div>

    <div className={styles.harga}>
      <span>{harga}</span>
      <span>{kenaikan}</span>
    </div>
  </div>
);

export default DaftarSaham;
