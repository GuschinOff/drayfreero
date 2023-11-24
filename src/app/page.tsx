import React from "react";
import { SlSocialVkontakte, SlSocialYoutube } from "react-icons/sl";
import { LiaTelegram } from "react-icons/lia";

export default function Page() {
  return (
    <>
      <div className={`fixed -z-10 bg-[url(/background.png)] w-screen h-screen bg-fixed bg-center`} />
      <div className="flex flex-col gap-3 h-screen justify-center items-center">
        <h1 className="text-3xl md:text-6xl font-semibold typing">DRAY FREERO</h1>
        <span className="text-2xl md:text-3xl font-sans">networks/@drayfreero</span>
        <div className="flex gap-6">
          <a href="https://vk.com/drayfreero" target="_blank">
            <SlSocialVkontakte className="text-6xl transition-all hover:text-7xl" />
          </a>
          <a href="https://www.youtube.com/@DrayFreero" target="_blank">
            <SlSocialYoutube className="text-6xl transition-all hover:text-7xl" />
          </a>
          <a href="https://t.me/drayfreero" target="_blank">
            <LiaTelegram className="text-6xl transition-all hover:text-7xl" />
          </a>
        </div>
      </div>
    </>
  )
}
