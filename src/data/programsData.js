import {CgSmartHomeWashMachine} from 'react-icons/cg'
import {FaHammer} from 'react-icons/fa'
import {MdCleaningServices} from 'react-icons/md'
import {AiFillFormatPainter} from 'react-icons/ai'

// Backgrounds
import carp from "../assets/carp.jpg"
import clean from '../assets/clean.jpg'
import laundry from "../assets/laudary.jpg"
import paint from '../assets/paint.jpg'

export const programsData = [
  {
    backgroundImage: clean,
    image: <MdCleaningServices size={50}/>,
    heading: "Cleaning",
    details:
      "In this program, you are trained to improve your strength through many exercises.",
  },
  {
    backgroundImage: paint,
    image: <AiFillFormatPainter size={50}/>,
    heading: "Painting",
    details:
      "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
  },
  {
    backgroundImage: carp,
    image: <FaHammer size={50}/>
    ,
    heading: "Carpentry",
    details:
      "This program is suitable for you who wants to get rid of your fat and lose their weight.",
  },
  {
    backgroundImage: laundry,
    image: <CgSmartHomeWashMachine size={50}/>
    ,
    heading: "Laundry",
    details:
      "This programs is designed for those who exercises only for their body fitness not body building.",
  },
];



