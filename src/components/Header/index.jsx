import Image from "next/image";
import Stack from '@mui/material/Stack';
import { Hidden } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';

import styles from './Header.module.css';


export default function Header() {
  return (
    <Stack Stack alignItems="center" direction="row" justifyContent="space-between" className={styles.stackContainer} >
      {/* Left */}
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
      <div className="relative">
        <div className="absolute">
          <IconButton sx={{ p: '10px' }} aria-label="search" className={styles.searchIconContainer}>
            <SearchIcon className="text-gray-500" />
          </IconButton>
        </div>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            className={`${styles.searchInput} text-sm`}
          />
      </div>

      {/* Right */}
      <div>Right Sides</div>
    </Stack>
  );
}
