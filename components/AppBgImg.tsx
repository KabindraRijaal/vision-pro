import Image from 'next/image'
import bgImage from '@/public/bgImage.jpg'

function AppBgImg() {
  return (
    <Image src={bgImage} alt='bgImage' placeholder='blur' fill sizes='100vw' className='object-cover -z-10'/>
  )
}

export default AppBgImg