import React from 'react'
import Profileline from '@/app/components/profile/profileline'
import Slidingbar from '@/app/components/profile/slidingbar'
import Options from '@/app/components/profile/options'

const page = () => {
  return (
    <div>
      <div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4f28949ab33f6b48e027fba07ae117f0d4866e972aa27d5ad0fb3860ece724b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f28949ab33f6b48e027fba07ae117f0d4866e972aa27d5ad0fb3860ece724b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f28949ab33f6b48e027fba07ae117f0d4866e972aa27d5ad0fb3860ece724b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f28949ab33f6b48e027fba07ae117f0d4866e972aa27d5ad0fb3860ece724b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f28949ab33f6b48e027fba07ae117f0d4866e972aa27d5ad0fb3860ece724b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f28949ab33f6b48e027fba07ae117f0d4866e972aa27d5ad0fb3860ece724b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f28949ab33f6b48e027fba07ae117f0d4866e972aa27d5ad0fb3860ece724b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4f28949ab33f6b48e027fba07ae117f0d4866e972aa27d5ad0fb3860ece724b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="w-full aspect-[5.56] max-md:max-w-full rounded-2xl p-2"
        />
      </div>
      <div className='p-4'>
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
