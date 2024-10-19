import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import Image1 from '../assest/SlideBar.png'
import Image2 from '../assest/SlideBar2.png'
import Image3 from '../assest/HeadPhone.png'

export const store = configureStore({
  reducer: {
    user: userReducer
  },
})

export const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on Student",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Office Worker",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "10% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const getStarRating = (rating) => {
  const fullStar = '⭐'; // Filled star character
  const starCount = 5;  // Total number of stars

  // Return a string with only the filled stars based on the rating
  return Array.from({ length: Math.min(rating, starCount) }).fill(fullStar).join('');
};

export const NavbarMenu = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'About', link: '/about' },
  { id: 3, title: 'Services', link: '/services' },
  { id: 4, title: 'Contact', link: '/contact' },
  { id: 5, title: 'Build', link: '/build' },
];

export const FooterData = [
  { id: 1, title: 'FAQs', link: '/' },
  { id: 2, title: 'Privacy Policy ', link: '/' },
  { id: 3, title: 'Shipping Policy', link: '/' },
  { id: 4, title: 'Refund', link: '/' },
  { id: 5, title: 'Terms & Conditions', link: '/' },
];

export const componentOptions = {
  0: [{ name: 'Intel i5', price: 200 }, { name: 'AMD Ryzen 5', price: 220 }],
  1: [{ name: 'Asus', price: 150 }, { name: 'MSI', price: 180 }],
  2: [{ name: 'Corsair 16GB', price: 80 }, { name: 'G.Skill 16GB', price: 90 }],
  3: [{ name: 'Corsair 650W', price: 60 }, { name: 'EVGA 750W', price: 90 }],
  4: [{ name: 'Samsung 1TB SSD', price: 120 }, { name: 'WD 2TB HDD', price: 80 }],
  5: [{ name: 'NZXT H510', price: 70 }, { name: 'Fractal Design Meshify', price: 90 }],
  6: [{ name: 'NVIDIA RTX 3060', price: 350 }, { name: 'AMD RX 6700 XT', price: 400 }],
  7: [{ name: 'Noctua NH-D15', price: 90 }, { name: 'Corsair H100i', price: 120 }],
};

export const steps = [
  { title: 'Select Processor', icon: 'https://www.pcstudio.in/wp-content/uploads/2021/04/processor-caticon.svg' },
  { title: 'Select Motherboard', icon: 'https://www.pcstudio.in/wp-content/uploads/2021/04/motherboard-caticon.svg' },
  { title: 'Select RAM', icon: 'https://www.pcstudio.in/wp-content/uploads/2021/04/ram-caticon.svg' },
  { title: 'Select Power Supply Unit', icon: 'https://www.pcstudio.in/wp-content/uploads/2021/04/powersupply-caticon.svg' },
  { title: 'Select Storage', icon: 'https://www.pcstudio.in/wp-content/uploads/2021/04/storage-caticon.svg' },
  { title: 'Select Cabinet', icon: 'https://www.pcstudio.in/wp-content/uploads/2021/04/cabinets-caticon.svg' },
  { title: 'Select Graphics Card', icon: 'https://www.pcstudio.in/wp-content/uploads/2021/04/graphiccard-caticon.svg' },
  { title: 'Select Cooler', icon: 'https://www.pcstudio.in/wp-content/uploads/2021/04/cooler-caticon.svg' },
];