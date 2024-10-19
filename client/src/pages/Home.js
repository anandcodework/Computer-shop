import React from 'react'
import CategoryList from '../components/CategoryList'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'
import SliderBar from '../components/SlideBar'
import Review from '../components/Review'

const Home = () => {
  return (
    <div>
      <SliderBar className="bg-black" />
      <CategoryList/>
      

      <HorizontalCardProduct category={"Laptop"} heading={"Top's Laptop"}/>
      <HorizontalCardProduct category={"graphicscards"} heading={"Popular's Graphics Cards"}/>

      <VerticalCardProduct category={"processor"} heading={"Processor"}/>
      <VerticalCardProduct category={"motherboard"} heading={"Motherboard"}/>
      <VerticalCardProduct category={"printers"} heading={"Printers"}/>
      <VerticalCardProduct category={"sdd"} heading={"SSD & Hard Disk"}/>
      <VerticalCardProduct category={"earphones"} heading={"Earphones"}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"smps"} heading={"SMPS"}/>
      <VerticalCardProduct category={"ram"} heading={"Ram"}/>
      <VerticalCardProduct category={"keybord"} heading={"Keybord"}/>
      
      <Review/>
    </div>
  )
}

export default Home