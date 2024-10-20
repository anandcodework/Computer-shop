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
      <HorizontalCardProduct category={"ram"} heading={"Popular's Ram"}/>

      <VerticalCardProduct category={"processor"} heading={"Processor"}/>
      <VerticalCardProduct category={"motherboard"} heading={"Motherboard"}/>
      <VerticalCardProduct category={"earphones"} heading={"Earphones"}/>
      <VerticalCardProduct category={"ram"} heading={"Ram"}/>
      <VerticalCardProduct category={"cabinet"} heading={"Cabinet "}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"printers"} heading={"Printers"}/>
      
      <Review/>
    </div>
  )
}

export default Home