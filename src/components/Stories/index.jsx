"use client";

import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import minifaker from 'minifaker';
import 'minifaker/locales/en';

import Story from '../Story';
import styles from './Stories.module.css';

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);

  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${(Math.ceil(Math.random() * 70))}`,
      id: i,
    }));
    setStoryUsers(storyUsers);
  }, []);
  return (
    <Stack
      flexDirection="row"
      gap={2}
      padding={3}
      alignItems="center"
      className={styles.storiesContainer}
    >
      {
        storyUsers.map(user => (
          <Story
            key={user.id}
            username={user.username}
            img={user.img}
          />
        ))
      }
    </Stack>
  );
}
