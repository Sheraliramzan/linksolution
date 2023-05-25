import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Navbar(){

  const navItems = [
    {
      title: 'Pricing',
      route: '/pricing'      
    },
    {
      title: 'Services',
      route: '/services'      
    },
    {
      title: 'Samples',
      route: '/samples'      
    },
    {
      title: 'Login/Order',
      route: '/login'      
    },
  ]

  const router = useRouter()

  return (
    <>
      <div className="w-full h-24 bg-white flex items-center gap-4 justify-between p-4 text-black font-medium">
        <div className='flex items-center gap-4' onClick={() => router.push('/')}>
          <Image 
            width={34}
            height={34}
            src={'/logos/home.svg'}
            className='cursor-pointer'
          />
          <h1 className='cursor-pointer'>Link Solutions</h1>
        </div>
        <div className='flex items-center gap-4'>
          {
            navItems && navItems.map((item, i) => {
              const {title, route} = item

              if (i === 3){
                return (
                  <>
                    <button className="btn-primary bg-[#55A7D6] px-2 py-1 rounded-xl hover:bg-[#55A7D6]" onClick={() => router.push(route)}>{title}</button>
                  </>
                )
              } else {
                return (
                  <>
                    <h1 className='cursor-pointer' onClick={() => router.push(route)}>{title}</h1>
                  </>
                )
              }

            })
          }
        </div>
      </div>
    </>
  )
}