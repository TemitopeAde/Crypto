import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Advanced from './advanced/advanced'
import Liquid from './liquid/liquid'
import AdvancedSettings from './AdvancedSettings/AdvancedSettings';
import CustomizedSlider from './Slider/slider'


export default function Home() {
  return (
    <div>
      {/* <Advanced /> */}

      {/* <Liquid /> */}

      {/* <AdvancedSettings /> */}

      <CustomizedSlider />
    </div>
  )
}
