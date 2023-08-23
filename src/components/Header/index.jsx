import Image from "next/image";
import Stack from '@mui/material/Stack';

import styles from './Header.module.css';
import { Hidden } from "@mui/material";

export default function Header() {
  return (
    <div>
      {/* Left */}

      <Stack alignItems="center" flexDirection="row" justifyContent="space-between" className={styles.stackContainer}>
        <Hidden lgDown>
          <div className={styles.heroImageContainer}>
            <Image
              src="https://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
              layout="fill"
              className={styles.heroImage}
            />
          </div>
        </Hidden>
        <Hidden lgUp>
          <div className={styles.heroImageContainerMobile}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
              layout="fill"
              className={styles.heroImage}
            />
          </div>
        </Hidden>

        {/* Middle */}

        {/* Right */}
        <div>Right Sides</div>
      </Stack>
    </div>
  );
}
