import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [blogs] = useState(
    [
      {
      "id": 1,
      "title": "Leave Her to Heaven",
      "author": "Mycah",
      "images": "img/posts/post-1.jpg",
      "content": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      "createDate": "4/13/2020"
      },
      {
      "id": 2,
      "title": "In Cold Blood",
      "author": "Zabrina",
      "images": "img/posts/post-2.jpg",
      "content": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "createDate": "9/18/2020"
      },
      {
      "id": 3,
      "title": "Constantine's Sword",
      "author": "Renault",
      "images": "img/posts/post-3.jpg",
      "content": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      "createDate": "3/16/2020"
      },
      {
      "id": 4,
      "title": "Frozen Dead, The",
      "author": "Gabrila",
      "images": "img/posts/post-4.jpg",
      "content": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      "createDate": "6/12/2020"
      },
      {
      "id": 5,
      "title": "Massacre Canyon",
      "author": "Rosalinda",
      "images": "img/posts/post-5.jpg",
      "content": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      "createDate": "1/6/2020"
      },
      {
      "id": 6,
      "title": "I Am Not a Hipster",
      "author": "Reynolds",
      "images": "img/posts/post-6.jpg",
      "content": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      "createDate": "1/3/2020"
      },
      {
      "id": 7,
      "title": "Innocent Lies",
      "author": "Horton",
      "images": "img/posts/post-7.jpg",
      "content": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      "createDate": "7/24/2020"
      },
      {
      "id": 8,
      "title": "Kung Fu Panda 2",
      "author": "Mae",
      "images": "img/posts/post-8.jpg",
      "content": "In hac habitasse platea dictumst. Morbi vestibulum, velit id        pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      "createDate": "12/24/2019"
      },
      {
      "id": 9,
      "title": "Tenant, The (Locataire, Le)",
      "author": "Esma",
      "images": "img/posts/post-9.jpg",
      "content": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "createDate": "8/21/2020"
      },
      {
      "id": 10,
      "title": "Anguish (Angustia)",
      "author": "Marysa",
      "images": "img/posts/post-10.jpg",
      "content": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      "createDate": "8/16/2020"
      } 
    ]
  )
  
  const value = {
    blogs: [blogs],
  }
  return (
    <BlogContext.Provider value={value}>
      {props.children}
    </BlogContext.Provider>
  );
}

