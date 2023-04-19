import React from "react";

export default function Input({ label, name, formik }) {
  return (
    <div className="bg-yellow-40 h-[85px]">
      <div>
        <label className="block text-gray-400 text-xs lg:text-sm " htmlFor="">
          {label}
        </label>
        <input
          className="outline-0 rounded-lg p-2 border border-gray-300 w-full mt-1 focus:border-b focus:border-b-gray-700"
          type="text"
          name={name}
          id=""
          {...formik.getFieldProps({ name })}
        />
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <p className="text-xs pr-1 text-red-500">{formik.errors[name]}</p>
      )}
    </div>
  );
}
