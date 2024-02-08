/* eslint-disable no-irregular-whitespace */
import { Button, Input } from '@nextui-org/react'
import { FaFacebook, FaTiktok } from 'react-icons/fa'

import { FcGoogle } from 'react-icons/fc'
import Logo from '../Logo'
import { ChevronRight } from 'lucide-react'

export default function Login() {
  return (
    <div>
      <div className='  md:h-[1024px] py-6 relative bg-black'>
        <div className='left-0 top-0 absolute'>
          <div className='w-40 h-40 md:w-unit-8xl md:h-unit-8xl left-0 top-0 absolute opacity-30 md:opacity-10 bg-violet-500 rounded-full blur-3xl z-10 ' />
          <div className='w-40 h-40 md:w-unit-8xl md:h-unit-8xl left-[13rem] md:left-[942.84px] top-[30rem] md:top-[427.55px] absolute opacity-20 md:opacity-10 bg-fuchsia-600 rounded-full blur-3xl z-10' />
        </div>
        <div className='w-[96%]  md:w-[90%] mx-auto max-h-[6rem] flex justify-between items-center'>
          <Logo />

          <div className="text-center p-2 hidden  md:flex text-white text-[12.83px] font-bold font-['Campton']">
            <Button variant='flat bg-none '>Go Back</Button>
          </div>
          <div className="text-center p-2 md:hidden  text-white text-[12.83px] font-bold font-['Campton']">
            <Button variant='flat bg-none  '>
              <ChevronRight />
            </Button>
          </div>
        </div>

        <div className=' w-[20rem] my-8 md:w-[23rem] mx-auto  flex-col  items-center gap-6 '>
          <div className='self-stretch flex-col justify-start items-center gap-3 flex'>
            <div className="w-80 text-center text-white text-[40px] md:text-[64px] font-semibold font-['Campton'] leading-10 md:leading-[53.76px]">
              Welcome to Trendit
            </div>
            <div className="w-[18rem] py-2 text-center text-zinc-400 text-base font-normal font-['Campton']">
              Earn money by connecting businesses to their potential customers.
            </div>
          </div>
          <div className='self-stretch  flex-col justify-start items-center gap-3 flex'>
            <Input
              size='sm'
              placeholder='Enter a valid email'
              className="grow shrink basis-0 bg-white rounded text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
            />

            <Input
              size='sm'
              placeholder='Referral code/username (Optional)'
              className="grow shrink bg-white rounded basis-0 text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
            />
            <Button
              onClick={() => {
                window.location.href = '/confirm-otp'
              }}
              className="w-[290px] px-6 py-3.5 bg-fuchsia-600 rounded-[100px] text-center text-white text-[12.83px] font-medium font-['Campton']"
            >
              Continue
            </Button>
          </div>
          <div className='self-stretch  flex-col justify-start items-center gap-2 flex'>
            <div className="text-center py-6 text-zinc-400 text-xs font-normal font-['Campton'] tracking-wide">
              OR SIGN UP WITH
            </div>
            <div className='justify-center items-start gap-1.5 inline-flex'>
              <div className="p-2 bg-white text-center text-white text-[12.83px] font-bold font-['Campton'] bg-opacity-10 border border-violet-500 border-opacity-25 justify-center items-center gap-1 flex">
                <FcGoogle size={30} /> Google
              </div>
              <div className="p-2 text-center bg-white bg-opacity-10 border border-violet-500 border-opacity-25 justify-center items-center gap-1 flex text-white text-[12.83px] font-bold font-['Campton']">
                <FaFacebook className='text-[#316FF6]' size={30} /> Facebook
              </div>
              <div className="p-2 text-center bg-white bg-opacity-10 border border-violet-500 border-opacity-25 justify-center items-center gap-1 flex text-white text-[12.83px] font-bold font-['Campton']">
                <FaTiktok className='text-black ' size={30} /> Titkok
              </div>
            </div>
          </div>
        </div>

        <div className=' w-[18rem] flex justify-center mx-auto  items-center mt-24'>
          <div className="text-center text-zinc-400 text-[12.83px] font-normal font-['Campton']">
            Already have an account?
          </div>
          <div className='p-2 justify-center items-center gap-1 flex'>
            <div className="text-center text-fuchsia-400 text-[12.83px] font-bold font-['Campton']">
              Sign in
            </div>
          </div>
        </div>
        <div className='w-[23rem] mx-auto my-4'>
          <div className='w-full h-0.5 bg-gradient-to-r from-[#CB29BE] to-[#87189E]'></div>
          <div className=' flex p-2 bordert border[#CB29BE]  justify-center items-center'>
            <div className="text-center text-zinc-400 text-[12.83px] font-normal font-['Campton']">
              By signing up, you agree to our
            </div>
            <div className='p-2 justify-center items-center gap-1 flex py-3'>
              <span className="text-zinc-400 text-[12.83px] font-normal font-['Campton']">
                {' '}
              </span>
              <span className="text-white text-[12.83px] font-bold font-['Campton']">
                Terms and Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
