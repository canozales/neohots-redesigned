import React from 'react';
import style from './sidebar.module.css';
import { FaRegUser, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';
import {
  AiOutlineRight,
  AiOutlinePoweroff,
  AiOutlineNotification,
} from 'react-icons/ai';
import { HiArrowLeft } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';
import { ThemeContext, ThemeUpdateContext } from '../../App';
import { MdOutlineSecurity, MdOutlinePrivacyTip } from 'react-icons/md';
import gambar from '../../assets/budi.jpg';
import { IoIosSearch } from 'react-icons/io';
const Elemen = (props) => (
  <div className={style.options}>
    <div>
      {props.icon}
      <span>{props.tulisan}</span>
    </div>
    {props.icon2}
  </div>
);

const Sidebar = () => {
  const sidebarToggle = React.useContext(ThemeContext);
  const setSidebarToggle = React.useContext(ThemeUpdateContext);
  console.log(sidebarToggle);

  return (
    <div
      className={`${style.flexColumn}
      animate__animated animate__fadeInLeft`}
    >
      <div className={style.atas}>
        <div className={style.pemisah}>
          <HiArrowLeft
            onClick={() => setSidebarToggle(!sidebarToggle)}
            color='#959595'
            fontSize={24}
          />
          <div className={style.searching}>
            <IoIosSearch color='#959595' fontSize={22} />
            <input placeholder='Silahkan Mencari Menu' type='text' />
          </div>
        </div>
      </div>
      <div className={style.infoProfile}>
        <div className={style.profile}>
          <img src={gambar} alt='' />
          <span>Welcome, Budi Setiawan</span>
        </div>
      </div>
      <Elemen
        tulisan='Account'
        icon={<FaRegUser color='#959595' fontSize={24} />}
        icon2={<AiOutlineRight color='#959595' fontSize={24} />}
      />
      <Elemen
        tulisan='Notification'
        icon={<AiOutlineNotification color='#959595' fontSize={24} />}
        icon2={<AiOutlineRight color='#959595' fontSize={24} />}
      />
      <Elemen
        tulisan='Privacy'
        icon={<MdOutlinePrivacyTip color='#959595' fontSize={24} />}
        icon2={<AiOutlineRight color='#959595' fontSize={24} />}
      />
      <Elemen
        tulisan='Security'
        icon={<MdOutlineSecurity color='#959595' fontSize={24} />}
        icon2={<AiOutlineRight color='#959595' fontSize={24} />}
      />

      <Elemen
        tulisan='Settings'
        icon={<IoSettingsOutline color='#959595' fontSize={24} />}
        icon2={<AiOutlineRight color='#959595' fontSize={24} />}
      />
      <Elemen
        tulisan='Log Out'
        icon={<AiOutlinePoweroff color='#959595' fontSize={24} />}
        icon2={<AiOutlineRight color='#959595' fontSize={24} />}
      />
      <div className={style.footer}>
        <span>PT Mirae Asset Sekuritas</span>
        <div className={style.footerFlex}>
          <FaFacebook color='#1877f2' fontSize={30} />
          <FaTwitter className={style.logos} color='#1da1f2' fontSize={30} />
          <FaTiktok color='#000000' fontSize={30} />
        </div>
        <span>Version 1.2.3</span>
      </div>
    </div>
  );
};

export default Sidebar;
