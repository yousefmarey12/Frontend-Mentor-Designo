
import './App.css'
import { Button } from './shared_components/Button/button'
import ThemeBackgroundCSS from "./shared_components/theme-background/theme-background.module.css"
import { Header } from "./shared_components/Header/header"
import { OfferBlocks } from './shared_components/offer-blocks/offer-blocks'
import { OvalInterface, ThemeBackground } from './shared_components/theme-background/theme-background'
import { offers, homeContext } from './contexts/home'
import Qualities from './shared_components/qualities/qualities'
import { Footer } from './shared_components/Footer/footer'
function App() {
  let ovals2: OvalInterface[] = [
    {
      position: {
        left: '85',
        top: '10'
      },
      diameter: '200',
      rotation: '0',
      padding: {
        left: '24',
        right: '24',
        top: '24',
        bottom: '0'
      },
      margin: {
        left: '24',
        right: '24',
        top: '24',
        bottom: '24'
      }
    },
    {
      diameter: '200',
      position: {
        left: '80',
        top: '70'
      },
      rotation: '0',
      padding: {
        left: '24',
        right: '24',
        top: '24',
        bottom: '0'
      },
      margin: {
        left: '24',
        right: '24',
        top: '24',
        bottom: '24'
      }
    },
    {
      diameter: '200',
      position: {
        left: '-30',
        top: '70'
      },
      rotation: '180',
      padding: {
        left: '24',
        right: '24',
        top: '24',
        bottom: '0'
      },
      margin: {
        left: '24',
        right: '24',
        top: '24',
        bottom: '24'
      }
    }
  ]
  let ovals: OvalInterface[] = [
    {
      diameter: '600',
      position: {
        left: '30',
        top: '70'
      },
      rotation: '90',
      padding: {
        left: '24',
        right: '24',
        top: '24',
        bottom: '0'
      },
      margin: {
        left: '24',
        right: '24',
        top: '24',
        bottom: '24'
      }
    }
  ]
  return (
    <>
      <homeContext.Provider value={offers}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>


          <Header />
          {/* <Button btnTheme={'dark'} btnType={'button'} btnContent={'Learn More'} /> */}
          <ThemeBackground ovals={ovals}>
            <div className={ThemeBackgroundCSS.children + " text-align-center"}>
              <h1 className={"h2-jost-medium " + ThemeBackgroundCSS.title}>Award-winning custom designs and digital branding solutions</h1>
              <p className={"h3-jost-medium " + ThemeBackgroundCSS.description}>With over 10 years in the industry, we are experienced in creating fully
                responsive websites, app design, and engaging brand experiences. Find out more about our services.
              </p>
              <Button btnTheme={'dark'} btnType={'button'} btnContent={'Learn More'} />

              <div className={ThemeBackgroundCSS.image} />
            </div>

          </ThemeBackground >
          <OfferBlocks title='Web Design' link='' pictureUrl='https://res.cloudinary.com/dnvjn55ti/image/upload/v1744372385/image-web-design_aaes6g.jpg'>

          </OfferBlocks>
          <Qualities></Qualities>
          <div className='offer'>
            <ThemeBackground className='br-15' ovals={ovals2}>
              <div className={ThemeBackgroundCSS.children}>
                <h1 className={"h2-jost-medium " + ThemeBackgroundCSS.title}>Let’s talk about your project</h1>
                <p className={"h2-jost-medium " + ThemeBackgroundCSS.description}>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                </p>
                <Button btnTheme={'dark'} btnType={'button'} btnContent={'Learn More'} />

                <div className={ThemeBackgroundCSS.image} />
              </div>
            </ThemeBackground>
          </div >
          <Footer></Footer>
        </div>
      </homeContext.Provider >


    </>)
}

export default App

/*
  We want to add a static class and a dynamic class. We want it such that stati
*/