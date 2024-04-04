import React from 'react';
import Namecard from './Namecard'; // Assuming Namecard component is in a separate file

function Kolscard() {
  // Array of card data
  const cardsData = [
    {
      id: 1,
      name: "James Charles",
      description: "A little bit of everything  My main goal is to create authentic positive content that people can enjoy",
      price: 3000,
      imageUrl: "/Kols.png",
    },
    {
      id: 2,
      name: "James Charles",
      description: "A little bit of everything  My main goal is to create authentic positive content that people can enjoy",
      price: 3000,
      imageUrl: "/Kols.png",
      // imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&",
    },
    {
      id: 3,
      name: "James Charles",
      description: "A little bit of everything  My main goal is to create authentic positive content that people can enjoy",
      price: 3000,
      imageUrl: "/Kols.png",
      // imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&",
    },
    {
      id: 4,
      name: "James Charles",
      description: "A little bit of everything  My main goal is to create authentic positive content that people can enjoy",
      price: 3000,
      imageUrl: "/Kols.png",
      // imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&",
    },
    {
      id: 4,
      name: "James Charles",
      description: "A little bit of everything  My main goal is to create authentic positive content that people can enjoy",
      price: 3000,
      imageUrl: "/Kols.png",
      // imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&",
    },
    {
      id: 4,
      name: "James Charles",
      description: "A little bit of everything  My main goal is to create authentic positive content that people can enjoy",
      price: 6000,
      imageUrl: "/Kols.png",
      // imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&",
    },
    {
      id: 4,
      name: "James Charles",
      description: "A little bit of everything  My main goal is to create authentic positive content that people can enjoy",
      price: 6000,
      imageUrl: "/Kols.png",
      // imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&",
    },
    {
      id: 4,
      name: "James Charles",
      description: "A little bit of everything  My main goal is to create authentic positive content that people can enjoy",
      price: 8000,
      imageUrl: "/Kols.png",
      // imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&",
    },
    {
      id: 4,
      name: "James Charles",
      description: "A little bit of everything  My main goal is to create authentic positive content that people can enjoy",
      price: 8000,
      imageUrl: "/Kols.png",
      // imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&",
    },
    {
      id: 4,
      name: "James Charles",
      description: "A little bit of everything  My main goal is to create authentic positive content that people can enjoy",
      price: 8000,
      imageUrl: "/Kols.png",
      // imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&",
    },
    {
      id: 4,
      name: "James Charles",
      description: "A little bit of everything  My main goal is to create authentic positive content that people can enjoy",
      price: 8000,
      imageUrl: "/Kols.png",
      // imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&",
    },
    {
      id: 4,
      name: "James Charles",
      description: "A little bit of everything  My main goal is to create authentic positive content that people can enjoy",
      price: 8000,
      imageUrl: "/Kols.png",
      // imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47024807aa5074648933ccf6da72debe8822b2ce5ea7c6068622e6ccabf953c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&",
    },
    
    // Add more card data as needed
  ];

  // Ensure that cardsData length is a multiple of 4 for a 4x4 matrix
  const adjustedDataLength = Math.ceil(cardsData.length / 4) * 4;
  const adjustedCardsData = [...cardsData];

  // If the length is not a multiple of 4, duplicate the last card data to make it so
  while (adjustedCardsData.length < adjustedDataLength) {
    adjustedCardsData.push(cardsData[cardsData.length - 1]);
  }

  // Chunk the adjustedCardsData into arrays of length 4
  const chunkedData = [];
  for (let i = 0; i < adjustedCardsData.length; i += 4) {
    chunkedData.push(adjustedCardsData.slice(i, i + 4));
  }

  return (
    <div>
      {chunkedData.map((row, rowIndex) => (
        <div className="flex" key={rowIndex}>
          {row.map((card) => (
            <div key={card.id} className="flex-1">
              <Namecard
                name={card.name}
                description={card.description}
                imageUrl={card.imageUrl}
                price={card.price}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Kolscard;
