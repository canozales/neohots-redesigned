import React from 'react';
import gambar from '../../assets/maksimal.png';

const Maksimal = () => {
  return (
    <div className='maksimal'>
      <p>
        Ukuran Layar Anda terlalu Besar. Pengujian Prototype ditujukan untuk
        ukuran Smartphone. Apabila Anda menggunakan Laptop/Komputer/Lainnya,
        Silahkan akses Kembali Website ini Menggunakan Smartphone Anda atau
        Lakukan Resize Pada Laptop Anda dengan Menekan (CTRL + SHIFT + I)
        Kemudian masukkan angka 415 x 800 seperti pada Gambar di bawah ini.
      </p>
      <img src={gambar} alt='' />
    </div>
  );
};

export default Maksimal;
