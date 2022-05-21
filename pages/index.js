import Head from 'next/head';
import Image from 'next/image';
import Header from "../components/Header";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Ripples from "react-ripples";


export default function Home() {

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function openMenu() {
    document.getElementById("menu").style.width = "250px";
    document.getElementById("menuOpener").style.opacity = "0";
    try {
        document.getElementById("colorOverlay").style.display = "block"
    } catch (e) {
        console.log(e);
    }

  }

  function closeMenu() {
      document.getElementById("menu").style.width = "0";
      document.getElementById("menuOpener").style.opacity = "1";
      try {
          document.getElementById("colorOverlay").style.display = "none"
      } catch (e) {
          console.log(e);
      }
  }

  function closeOverlay() {
    document.getElementById("colorOverlay").style.display = "none";
    document.getElementById("colorPicker").style.display = "none";
    document.getElementById("sceneSaver").style.display = "none";
    try {
        document.getElementById("menu").style.width = "0";
        document.getElementById("menuOpener").style.opacity = "1";
    } catch (e) {
        console.log(e);
    }
  }

  return (
  <>
  <div>
    <Header title="Z2m" />
    <main>
    <div id="colorOverlay" onClick={closeOverlay}></div>
    <div id="colorPicker" onClick={closeOverlay}></div>
    <div id="sceneSaver" onClick={closeOverlay}></div>

    <div className="title">
      <h1>Dashboard</h1>
      <FaBars id="menuOpener" onClick={ () => {}}  />
      <div id="menu">
        <div id="menuHeader">
            <i onClick={closeMenu} id="menuClosener" className="fas fa-times"></i>
            <h2>Menu</h2>
        </div>
        
        <Link href="/"><a>Dashboard</a></Link>
        <Link href="/automation"><a>Automation</a></Link>
        <Link href="/settings"><a>Settings</a></Link>
      </div>

    </div>

    <h1 className="sectionHeader">last used</h1>
    <Swiper id="lastUsed" spaceBetween={10} slidesPerView={3}>

      <SwiperSlide className="lightBox">
        <span className="lightBoxLabel">Wohnzimmer Kugel</span>
        <div className="lightBoxStateWrapper"></div>
      </SwiperSlide>

    </Swiper>

    <h1 className="sectionHeader">last used</h1>
    </main>
  </div>
  </>
  )
}
