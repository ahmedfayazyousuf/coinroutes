import React from "react";
import HeroImage from '../../1_MediaAssets/Images/HeroImage.jpg';
import VectorImg1 from '../../1_MediaAssets/Images/VectorImg1.png';
import VectorImg2 from '../../1_MediaAssets/Images/VectorImg2.png';
import VectorImg3 from '../../1_MediaAssets/Images/VectorImg3.png';
import '../../1_MediaAssets/Styles/App.css'; 

const Home = () => {
    return (
        <>
            <div className="hero-div" style={{ backgroundImage: `url(${HeroImage})` }}>
            <div className="parent-div">
                    <div className="child-left">
                        <div className="text-child-left">
                            <p style={{color: '#6bf04a', textDecoration: 'underline'}}>The world’s leading hashrate provider</p>
                            <h1>Mining at your fingertips with GreenBit</h1>
                            <p>Your gateway to seamless cloud mining management. Sign up and get a $39 trial today!</p>
                            <button className="theme-button" style={{marginTop: '20px'}}>Start your mining</button>
                        </div>
                    </div>

                    <div className="child-right">
                    <img src={VectorImg2} alt="VectorImg2" className="rotateImage" />
                    <img src={VectorImg3} alt="VectorImg3" className="techImage" />
                    <img src={VectorImg1} alt="VectorImg1" className="floatingImage" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
