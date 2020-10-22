import React from 'react'
import banner from '../assets/images/QUIENESd-1.jpg'
import Image2 from '../assets/images/pexels-luriko-yamaguchi-4674175.jpg'
import '../styles/main.css'

const Main = () => {

    
    return(
        <>
            <main>
                <div className="banner">
                    <div>
                        <p>Hairdressing <hr/> with a classic <br/> history.</p>
                        <p>ZAB-DI is a forerunner in the cosmetology industry, <br/> 
                            from the beauty school to the hair salon. <br/> 
                            We’re upgrading the hairstyling experience from start to finished style.</p>
                            <p>CUT — COLOR — STYLE</p>
                    </div>
                    <img src={Image2}/>
                </div>
            </main>
        </>
    )
}

export default Main