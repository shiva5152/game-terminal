import React from 'react';

interface Card {
  name: string;
  number: string;
  iconSrc: string;
  imageSrc: string;
  rating: string;
  price: string;
  buyNowIcon: string;
}

const WeaponCard: React.FC<{ data: Card[] }> = ({ data }) => {
  const chunkArray = (arr: any[], n: number) =>
    Array.from({ length: Math.ceil(arr.length / n) }, (_, i) =>
      arr.slice(i * n, i * n + n)
    );

  const chunkedData = chunkArray(data, 4);

  return (
    <div className='p-8'>
      <div className="px-px max-md:max-w-full">
        {chunkedData.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-5 max-md:flex-col max-md:gap-0">
            {row.map((card: Card, index: number) => (
              <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col grow pb-4 aspect-[0.62] fill-neutral-900 max-md:mt-5">
                  <img
                    loading="lazy"
                    src={card.iconSrc}
                    className="w-full aspect-[1.08] "
                  />
                  <div className="flex relative flex-col px-4 mt-6">
                    <div className="text-xs leading-5 text-white">{card.name}</div>
                    <div className="mt-3 text-sm font-semibold leading-5 text-white">
                      {card.number}
                    </div>
                    <div className="flex gap-5 mt-8 w-full">
                      <div className="flex flex-1 gap-1 text-sm font-semibold leading-5 text-white whitespace-nowrap">
                        <img
                          loading="lazy"
                          src={card.imageSrc}
                          className="shrink-0 aspect-[0.94] w-[17px]"
                        />
                        <div className="my-auto">{card.rating}</div>
                      </div>
                      <div className="my-auto text-xs leading-5 text-right text-zinc-500">
                        <span className="text-white">$</span>
                        <span className="text-zinc-500">{card.price}</span>
                      </div>
                    </div>
                    <div className="overflow-hidden relative flex-col justify-center items-center self-center px-16 py-3.5 mt-3.5 w-52 text-xs font-bold leading-5 text-center aspect-[5.94] fill-lime-400 text-neutral-900 max-md:px-5">
                      <img
                        loading="lazy"
                        src={card.buyNowIcon}
                        className="object-cover absolute inset-0 size-full"
                      />
                      <button className='absolute justify-center'> Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const WeaponCardContainer = () => {
  const cardData: Card[] = [
    {
      name: 'Shrapnel',
      number: 'M4 #423',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/83138f740bbb0217cd68d95db3b0ac45fbc7bbe48422685da330a1200ba839ba?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30f55c7dfda00994733a7aac85b95db11f58a26f60a156d1e7db0af236bff152?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082',
      rating: '1.345',
      price: '400.000',
      buyNowIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3253984be54cb775e06fdd10d3bd2eb1408138b6ed1c896d3010a77540755f57?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082'
    },
    {
      name: 'Shrapnel',
      number: 'M4 #423',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/83138f740bbb0217cd68d95db3b0ac45fbc7bbe48422685da330a1200ba839ba?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30f55c7dfda00994733a7aac85b95db11f58a26f60a156d1e7db0af236bff152?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082',
      rating: '1.345',
      price: '400.000',
      buyNowIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3253984be54cb775e06fdd10d3bd2eb1408138b6ed1c896d3010a77540755f57?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082'
    },
    {
      name: 'Shrapnel',
      number: 'M4 #423',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/83138f740bbb0217cd68d95db3b0ac45fbc7bbe48422685da330a1200ba839ba?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30f55c7dfda00994733a7aac85b95db11f58a26f60a156d1e7db0af236bff152?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082',
      rating: '1.345',
      price: '400.000',
      buyNowIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3253984be54cb775e06fdd10d3bd2eb1408138b6ed1c896d3010a77540755f57?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082'
    },
    {
      name: 'Shrapnel',
      number: 'M4 #423',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/83138f740bbb0217cd68d95db3b0ac45fbc7bbe48422685da330a1200ba839ba?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30f55c7dfda00994733a7aac85b95db11f58a26f60a156d1e7db0af236bff152?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082',
      rating: '1.345',
      price: '400.000',
      buyNowIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3253984be54cb775e06fdd10d3bd2eb1408138b6ed1c896d3010a77540755f57?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082'
    },
    {
      name: 'Shrapnel',
      number: 'M4 #423',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/83138f740bbb0217cd68d95db3b0ac45fbc7bbe48422685da330a1200ba839ba?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30f55c7dfda00994733a7aac85b95db11f58a26f60a156d1e7db0af236bff152?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082',
      rating: '1.345',
      price: '400.000',
      buyNowIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3253984be54cb775e06fdd10d3bd2eb1408138b6ed1c896d3010a77540755f57?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082'
    },
    {
      name: 'Shrapnel',
      number: 'M4 #423',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/83138f740bbb0217cd68d95db3b0ac45fbc7bbe48422685da330a1200ba839ba?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30f55c7dfda00994733a7aac85b95db11f58a26f60a156d1e7db0af236bff152?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082',
      rating: '1.345',
      price: '400.000',
      buyNowIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3253984be54cb775e06fdd10d3bd2eb1408138b6ed1c896d3010a77540755f57?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082'
    },
    {
      name: 'Shrapnel',
      number: 'M4 #423',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/83138f740bbb0217cd68d95db3b0ac45fbc7bbe48422685da330a1200ba839ba?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30f55c7dfda00994733a7aac85b95db11f58a26f60a156d1e7db0af236bff152?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082',
      rating: '1.345',
      price: '400.000',
      buyNowIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3253984be54cb775e06fdd10d3bd2eb1408138b6ed1c896d3010a77540755f57?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082'
    },
    {
      name: 'Shrapnel',
      number: 'M4 #423',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/83138f740bbb0217cd68d95db3b0ac45fbc7bbe48422685da330a1200ba839ba?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30f55c7dfda00994733a7aac85b95db11f58a26f60a156d1e7db0af236bff152?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082',
      rating: '1.345',
      price: '400.000',
      buyNowIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3253984be54cb775e06fdd10d3bd2eb1408138b6ed1c896d3010a77540755f57?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082'
    },
  ];

  return <WeaponCard data={cardData} />;
}

export default WeaponCardContainer;



