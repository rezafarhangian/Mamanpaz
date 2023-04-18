

export default function Navbar() {
  return (
    <div className="hidden md:block fixed top-0 right-0 left-0 bg-white z-50  shadow px-4">
      <div className="container flex items-center justify-between ">
        <div className="flex items-center">
          <img className="w-11 mb-4" src="./img/logo-brand.png" alt="Logo-mamanpaz" />
          <ul className="flex items-center  h-[70px]  mr-5">
            <li className="mr-5 hover:text-mamanpaz">سفارش شرکتی</li>
            <li className="mr-5 hover:text-mamanpaz">آشپزی در مامان پز</li>
            <li className="mr-5 hover:text-mamanpaz">ثبت سفارش آنلاین</li>
            <li className="mr-5 hover:text-mamanpaz">درباره ما</li>
          </ul>
        </div>
        <div>
          <button className="bg-mamanpaz text-white outline-0 rounded-lg py-2 px-5 font-bold">ورود / ثبت نام</button>
        </div>
      </div>

    </div>

  )
}
