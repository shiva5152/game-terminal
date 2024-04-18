import React from 'react'
import Profileline from '@/app/components/profile/profileline'
import Slidingbar from '@/app/components/profile/slidingbar'
import Options from '@/app/components/profile/options'

const page = () => {
  return (
    <div className='sm:p-8 p-2'>
      <div className='sm:flex hidden'>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4f28949ab33f6b48e027fba07ae117f0d4866e972aa27d5ad0fb3860ece724b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f28949ab33f6b48e027fba07ae117f0d4866e972aa27d5ad0fb3860ece724b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f28949ab33f6b48e027fba07ae117f0d4866e972aa27d5ad0fb3860ece724b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f28949ab33f6b48e027fba07ae117f0d4866e972aa27d5ad0fb3860ece724b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f28949ab33f6b48e027fba07ae117f0d4866e972aa27d5ad0fb3860ece724b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f28949ab33f6b48e027fba07ae117f0d4866e972aa27d5ad0fb3860ece724b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f28949ab33f6b48e027fba07ae117f0d4866e972aa27d5ad0fb3860ece724b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f28949ab33f6b48e027fba07ae117f0d4866e972aa27d5ad0fb3860ece724b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="w-full aspect-[5.56] rounded-2xl p-2"
        />
      </div>
      <div className='sm:hidden flex'>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cca53603fb807ed60d251ebfeafaa880eef45a886c1a274eede9ea7ebd7af79d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca53603fb807ed60d251ebfeafaa880eef45a886c1a274eede9ea7ebd7af79d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca53603fb807ed60d251ebfeafaa880eef45a886c1a274eede9ea7ebd7af79d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca53603fb807ed60d251ebfeafaa880eef45a886c1a274eede9ea7ebd7af79d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca53603fb807ed60d251ebfeafaa880eef45a886c1a274eede9ea7ebd7af79d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca53603fb807ed60d251ebfeafaa880eef45a886c1a274eede9ea7ebd7af79d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca53603fb807ed60d251ebfeafaa880eef45a886c1a274eede9ea7ebd7af79d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cca53603fb807ed60d251ebfeafaa880eef45a886c1a274eede9ea7ebd7af79d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="w-full rounded-2xl aspect-[2.08]"
        />
      </div>
      <div className='sm:p-4 p-2'>
        <Profileline />
      </div>
      <div>
        <Slidingbar />
      </div>
      <div>
        <Options />
        
      </div>
    </div>
  )
}

export default page
