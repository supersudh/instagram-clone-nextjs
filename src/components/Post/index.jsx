import React from 'react'
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Stack from '@mui/material/Stack';

import styles from './Post.module.css';

export default function Post({ id, username, userImage, img, caption }) {
  return (
    <div className={styles.post}>
      {/* Post Header */}

      <Stack flexDirection="row" alignItems="center" padding="1.25rem">
        <img className={styles['header-user-img']} src={userImage} alt={username} />
        <p className="font-bold flex-1">{username}</p>
        <IconButton className="icon">
          <MoreHorizIcon />
        </IconButton>
      </Stack>
      
      {/* Post Image */}
      
      <img src={img} alt="" className={styles.postImage} />
      
      {/* Post Buttons */}
      
      <div className="">
        <div>
        
        </div>
      </div>
    </div>
  );
}
