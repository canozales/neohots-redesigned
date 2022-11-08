import React from 'react';

const RowTabel = ({ styles, satu, dua, tiga, empat }) => {
  return (
    <div className={styles.rowtabel}>
      <span>{satu}</span>
      <span className={styles.dua}>{dua}</span>
      <span className={styles.tiga}>{tiga}</span>
      <span>{empat}</span>
    </div>
  );
};

export default RowTabel;
