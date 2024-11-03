import React from 'react'

export const Card = ({username='Default' }) => {
  return (
    <div className=" max-w-xs rounded-md shadow-md bg-black text-gray-100 m-4">
    <img
      src="https://media.istockphoto.com/id/1285124274/photo/middle-age-man-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=wQTkPBW1rlfaFAkKanmLbpmEtiWWVH33UkndM1ib1-o="
      alt=""
      className="object-cover object-center w-full rounded-t-md h-36 bg-gray-500"
    />
    <div className="flex flex-col justify-between p-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
          soluta amet corporis accusantium aliquid consectetur eaque!
        </p>
      </div>
      <button
        type="button"
        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
      >
        Read more
      </button>
    </div>
  </div>
  )
}
