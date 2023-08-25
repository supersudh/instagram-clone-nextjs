import Image from "next/image";
import Stack from '@mui/material/Stack';
import { Hidden } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

import styles from './Header.module.css';


export default function Header() {
  return (
    <Paper
      className="bg-white"
      style={{ position: 'sticky', zIndex: 30, top: 0 }}
      elevation={1}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        className={styles.stackContainer}
        margin={{ xs: '0 1rem', md: 'auto' }}
      >
        {/* Left */}
        <Hidden lgDown>
          <div className={styles.heroImageContainer}>
            <Image
              src="https://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
              layout="fill"
              className={styles.heroImage}
              alt="logo"
            />
          </div>
        </Hidden>
        <Hidden lgUp>
          <div className={styles.heroImageContainerMobile}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
              layout="fill"
              className={styles.heroImage}
              alt="logo"
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
        <Stack direction="row" alignItems="center" spacing={2}>
          <Hidden mdDown>
            <IconButton className="icon">
              <HomeIcon />
            </IconButton>
          </Hidden>
          <IconButton className="icon">
            <AddCircleOutlineIcon />
          </IconButton>
          <img
            src="https://media.licdn.com/dms/image/D4E03AQEJcRrhIO69fQ/profile-displayphoto-shrink_800_800/0/1673283341980?e=2147483647&v=beta&t=9oANbWQaLqB6ZPO4AknRT1Cgz5i0AUg6h38y8Z9NFwQ"
            alt="user-image"
            className="user-image"
          />
        </Stack>
      </Stack>
    </Paper>
  );
}
