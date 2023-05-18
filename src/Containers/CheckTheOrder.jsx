import React, { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Swal from "sweetalert2";
import { useCart } from "../Context/CartProvider";

export default function CheckTheOrder({ address, setActiveStep, setOrder }) {
  const { cart } = useCart();
  const { total } = useCart();

  let price = 75_000;

  let dayOfWeek = new Intl.DateTimeFormat("fa-IR", { weekday: "long" }).format(
    new Date()
  );
  let today = new Date().toLocaleDateString("fa-IR");

  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(false);

  const sendingInformation = () => {
    Swal.fire({
      title: "آیا از ثبت سفارش اطمینان دارید؟",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
    }).then((result) => {
      if (result.isConfirmed) {
        setOrder(true);
        Swal.fire({
          title: "سفارش شما با موفقیت ثبت شد",
          text: "منتظر دریافت پیام جهت پرداخت هزینه باشید.",
          icon: "success",
        });
      }
    });
  };

  const applyDiscountCode = () => {
    if (discountCode === "reza") {
      setDiscount(true)
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "کد تخفیف با موفقیت اعمال شد",
      });
    } else {
      setDiscount(false)
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title: "کد تخفیف وارد شده وجود ندارد",
      });
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-center  font-semibold">برسی سفارش :</h2>

      <div className="overflow-x-auto mt-8">
        <div className="w-[600px] m-auto">
          <div>
            {cart.map((food) => (
              <div key={food.id} className="flex justify-between items-center border-b  px-2 py-4">
                <span>{food.quantity} عدد {food.title} دستپخت {food.mother}</span>
                <span>{(food.price * food.quantity).toLocaleString('fa-IR')} تومان</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center border-b  px-2 py-3">
            <span>هزینه ارسال</span>
            <span>{price.toLocaleString("fa")} تومان</span>
          </div>
          <div className="flex justify-between items-center border-b  px-2 py-3">
            <span>تاریخ سفارش</span>
            <span>{dayOfWeek + " " + today}</span>
          </div>
          <div className="flex justify-between items-center border-b  px-2 py-3">
            <span>نحوه ارسال</span>
            <span>اسنپ</span>
          </div>
          <div className="flex justify-between items-center border-b  px-2 py-3">
            <span>آدرس :</span>
            <span>
              {address.province + " - " + address.city + " - " + address.street}
            </span>
          </div>
          <div className="flex justify-between items-center mt-5  px-2 py-3">
            <button>کد تخفیف :</button>
            <div className="bg-gray-200 p-2 rounded-lg">
              <input
                type="text"
                placeholder="کد را وارد کنید"
                onChange={(e) => setDiscountCode(e.target.value)}
                className="outline-0 w-32 bg-transparent placeholder:text-xs text-sm"
              />
              <button
                onClick={applyDiscountCode}
                className="bg-green-700 outline-0 text-white rounded-lg py-1 px-2 text-xs"
              >
                اعمال
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center bg-slate-200 font-bold mt-5 border-b  px-2 py-3 mb-7">
            <span>مجموع + مالیات(0٪)</span>
            <span>{discount ? ((total + price) - 50_000).toLocaleString('fa-IR') :(total + price).toLocaleString('fa-IR')} تومان</span>
          </div>
          <div>
            <p className="text-slate-600">
              توجه : سفارش شما پس از ثبت، توسط مامان‌پز بررسی و در صورت تایید،
              پیامکی جهت پرداخت هزینه، ارسال خواهد شد.
            </p>
          </div>
          <div className="flex items-center  w-52 m-auto">
            <button
              onClick={() => setActiveStep(2)}
              className="flex items-center bg-mamanpaz text-white outline-0 py-[3px] px-4 rounded-sm m-auto mt-7 mb-3"
            >
              <MdArrowForwardIos className="text-lg ml-2" />
              <span>قبلی</span>
            </button>
            <button
              onClick={sendingInformation}
              disabled={!address.province}
              className="flex items-center disabled:bg-gray-400 bg-sky-600 text-white outline-0 py-[3px] px-8 rounded-sm m-auto mt-7 mb-3"
            >
              <span>ثبت</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
