import 'react'

const Background = () => {
  return (
    <>
        <div className='fixed z-[2] w-full h-screen '>
        <div className='absolute w-full py-10 flex justify-center top-[5%] text-pink-900 text-xl font-semibold'>
        Document
        </div>
        <h1 className=' text-pink-900 text-[13vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold tracking-tighter'>DOCS.</h1>
        </div>
    </>
  )
}

export default Background
