import React from "react";
import Border from "../Components/Border";
import { IoMdArrowDropdown } from "react-icons/io";
import CommentCookBox from "../Components/CommentCookBox";

export default function CommentsCooks() {
  return (
    <div className="container p-4  max-w-[1150px] mb-16">
      <div className=" max-w-[990px] ml-auto mb-20">
        <CommentCookBox
          title="مامان تاج ماه"
          text="از اینکه با مامان‌پز آشنا شدم و مشغول فعالیت هستم فوق‌العاده خوشحالم، جدای از کسب درآمد، اینکه هر مامان یه اسمی داره و منم اسم مادربزرگم رو دارم خیلی دوست داشتنیه."
          img="./img/CommentsCooks/chef4.jpeg"
        />
      </div>
      <div className=" max-w-[990px] mr-auto mb-20">
        <CommentCookBox
          order={true}
          title="مامان ترنج"
          text="مامان‌پز، خانه دوم من، با تمام شادی‌ها و خستگی‌‌هایش و حتی گلایه‌‌هایش هیجانی‌ست وصف‌ناپذیر."
          img="./img/CommentsCooks/chef5.jpeg"
        />
      </div>
      <Border icon={true}>
        <IoMdArrowDropdown className="text-4xl" />
      </Border>
    </div>
  );
}
