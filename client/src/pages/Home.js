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
      

      <HorizontalCardProduct category={"milk"} heading={"Top's Laptop"}/>
      <HorizontalCardProduct category={"graphicscards"} heading={"Popular's Graphics Cards"}/>

      <VerticalCardProduct category={"milk"} heading={"Spaceil Milk"}/>
      <VerticalCardProduct category={"motherboard"} heading={"Motherboard"}/>
      <VerticalCardProduct category={"earphones"} heading={"Earphones"}/>
      <VerticalCardProduct category={"ram"} heading={"Ram"}/>
      <VerticalCardProduct category={"cabinet"} heading={"Cabinet "}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"ssd"} heading={"SSD & Hard Disk"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera"}/>
      <VerticalCardProduct category={"printers"} heading={"Printers"}/>
      
      <Review/>
    </div>
  )
}

export default Home