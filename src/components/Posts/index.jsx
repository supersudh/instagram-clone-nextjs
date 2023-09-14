import React from 'react'
import Post from '../Post';

export default function Posts() {
  const posts = [
    {
      id: '1',
      username: 'supersudh',
      userImage: 'https://media.licdn.com/dms/image/D4E03AQEJcRrhIO69fQ/profile-displayphoto-shrink_800_800/0/1673283341980?e=2147483647&v=beta&t=9oANbWQaLqB6ZPO4AknRT1Cgz5i0AUg6h38y8Z9NFwQ',
      img: 'https://images.unsplash.com/photo-1694057442309-bfe467bff9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3264&q=80',
      caption: 'Metropolis snap'
    },
    {
      id: '2',
      username: 'sudharsan',
      userImage: 'https://media.licdn.com/dms/image/D4E03AQEJcRrhIO69fQ/profile-displayphoto-shrink_800_800/0/1673283341980?e=2147483647&v=beta&t=9oANbWQaLqB6ZPO4AknRT1Cgz5i0AUg6h38y8Z9NFwQ',
      img: 'https://images.unsplash.com/photo-1694587971464-0c03c44e2899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
      caption: 'Nature uprising'
    }
  ];
  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImage={post.userImage}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
