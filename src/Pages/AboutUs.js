import React from 'react'
import NavbarDesktop from "../Components/NavbarDesktop"
import NavbarMobile from "../Components/NavbarMobile"
import {Link} from "react-router-dom"
import Footer from "../Components/Footer"

export default function AboutUs() {
  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />
      <div className='container mb-80 md:mb-52'>
        <div className='max-w-[1000px] m-auto mt-28 p-4'>
          <h2 className='text-mamanpaz font-bold text-xl lg:text-2xl'>درباره ما</h2>
          <ul className={`p-2  text-[#456575]`}>
            <li className='py-3'>
              <span className='inline-block w-3 h-3 bg-mamanpaz rounded ml-3 -mb-[2px]'></span>
              <span>مامان‌پز، اولین وب سایت سفارش غذای خانگی در ایران است که فعالیت خود را با همکاری خانم‌‌های خانه دار در سال 1393 آغاز نمود.</span>
            </li>
            <li className='py-3'>
              <span className='inline-block w-3 h-3 bg-mamanpaz rounded ml-3 -mb-[2px]'></span>
              <span>  غذاهای مامان‌پز توسط خانم های خانه دار با رعایت نکات بهداشتی، با بهترین و تازه‌ترین مواد غذایی تهیه و برای خریداران ارسال می‌شود.</span>
            </li>
            <li className='py-3'>
              <span className='inline-block w-3 h-3 bg-mamanpaz rounded ml-3 -mb-[2px]'></span>
              <span>  علاوه بر غذاهای خانگی، امکان سفارش فینگرفود، غذاهای مجلسی و غذای شرکتی در وب سایت مامان پز وجود دارد.</span>
            </li>
            <li className='py-3'>
              <span className='inline-block w-3 h-3 bg-mamanpaz rounded ml-3 -mb-[2px]'></span>
              <span>  برای کسب رضایت هرچه بیشتر کاربران، قابلیت کم، زیاد و حذف یا اضافه کردن مواد اولیه مورد نظر کاربر در سفارش‌های مامان‌پز توسط کاربر امکان پذیر است و کاربر می‌تواند مطابق با سلیقه و نیاز خود نحوه طبخ، تزئین و ارسال سفارش را هنگام ثبت سفارش مطابق با درخواست خود دریافت نماید.</span>
            </li>
            <li className='py-3'>
              <span className='inline-block w-3 h-3 bg-mamanpaz rounded ml-3 -mb-[2px]'></span>
              <span>  سرویس مامان‌پز برای سفارش غذای شرکتی با ارائه منوی غذای شرکتی متنوع و بازه قیمت منعطف، از سال 1396 آغاز به کار کرده و هم اکنون با شرکت‌های بزرگ و معتبر تهران همکاری دارد. در سرویس سفارش غذای شرکتی امکان سفارش از بین بیش از 400 مامان و 100 رستوران در سراسر تهران متناسبت با هزینه در نظر گرفته شده توسط شرکت به سادگی از طریق وب سایت یا نرم افزار شرکتی مامان‌پز امکان پذیر است.</span>
            </li>
            <li className='py-3'>
              <span className='inline-block w-3 h-3 bg-mamanpaz rounded ml-3 -mb-[2px]'></span>
              <span>  مهم ترین اولویت های مامان پز، ایجاد اشتغال برای خانم های خانه دار و همچنین ارائه غذایی با بالاترین کیفیت برای کاربران است. مامان پز از هر گونه تلاش برای بالابردن کیفیت خدمات خود به کاربران و مادران شاغل دریغ نمی کند و همواره در تلاش است تا در طول فرایند خرید، بیشترین ارزش را برای کاربران و مشتریان خود خلق کند.</span>
            </li>
            <li className='py-3'>
              <span className='inline-block w-3 h-3 bg-mamanpaz rounded ml-3 -mb-[2px]'></span>
              <span>  وب سایت مامان پز دارای نماد اعتماد الکترونیک از مرکز توسعه تجارت الکترونیک وزارت صنعت، معدن و تجارت می‌باشد و به عنوان برگزیده بسیاری از جشنواره های ملی کارافرینی ، دارای کلیه مجوزهای رسمی مورد نیاز برای فعالیت در این حوزه است.</span>
            </li>
            <li className='py-3'>
              <span className='inline-block w-3 h-3 bg-mamanpaz rounded ml-3 -mb-[2px]'></span>
              <span>  مامان پز با ارائه طیف گسترده ای از غذاها تلاش می کند تا نیازهای متفاوت کاربران را برآورده سازد. ارائه قیمت های کاملا رقابتی و مناسب، همراه با کیفیت عالی هدف اصلی مامان پز می باشد. مامان پز با درک اهمیت این موضوع برای کاربران خود، با به کارگیری نهایت توان برای دست یابی به این هدف تلاش می کند.</span>
            </li>
            <li className='py-3'>
              <span className='inline-block w-3 h-3 bg-mamanpaz rounded ml-3 -mb-[2px]'></span>
              <span>  لازم به ذکر است که وب سایت مامان پز در حال حاضر فقط در شهر تهران فعال است.</span>
            </li>
            <li className='py-3'>
              <span className='inline-block w-3 h-3 bg-mamanpaz rounded ml-3 -mb-[2px]'></span>
              <span>  برای دریافت راهنمایی بیشتر، میتوانید <Link to="/"><span className='text-mamanpaz'>سوالات متداول</span></Link> را مطالعه کنید و یا با ما <Link to="/"><span className='text-mamanpaz'>تماس</span></Link> بگیرید.</span>
            </li>
            <li className='py-3'>
              <span className='inline-block w-3 h-3 bg-mamanpaz rounded ml-3 -mb-[2px]'></span>
              <span>  کلیه حقوق این کسب و کار متعلق به شرکت سپهر فرتاک ایرانیان است.
              </span>
            </li>

          </ul>
        </div>
      </div>

      <Footer/>
    </div>
  )
}
