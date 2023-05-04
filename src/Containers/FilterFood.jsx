import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css";





const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"]

export default function FilterFood() {
  const [value, setValue] = useState(new Date());
  return (
    <div>
      <div className="bg-white shadow rounded-lg max-w-[1000px] m-auto p-3 mt-5 flex items-center justify-evenly">
        <div className="flex items-center justify-center  w-24 text-xs md:text-sm  rounded-lg">
          <DatePicker
            style={{
              width: "80px",
              height: "30px",
              cursor: "pointer",
              paddingTop : "15px",
              paddingBottom: "15px",
              border : "0"
            }}
            className="rmdp-mobile"
            calendarPosition="bottom-right"
            weekDays={weekDays}
            value={value}
            onChange={setValue}
            calendar={persian}
            locale={persian_fa}
            minDate={new Date()}
          />
        </div>
        <div className="border  text-gray-600 rounded border-slate-300 p-1  text-xs md:text-sm">
          <select className="outline-0 bg-transparent cursor-pointer">
            <option value="">نوع غذا</option>
            <option value="">خوراک</option>
            <option value="">خورش</option>
            <option value="">دسر</option>
            <option value="">کباب</option>
            <option value="">سالاد</option>
          </select>
        </div>
        <div className="border  text-gray-600 rounded border-slate-300 p-1  text-xs md:text-sm">
          <select className="outline-0 bg-transparent cursor-pointer">
            <option value="">محبوبیت</option>
            <option value="">پرفروش ترین</option>
            <option value="">گران ترین</option>
            <option value="">ارزان ترین</option>
          </select>
        </div>
      </div>
    </div>
  );
}
