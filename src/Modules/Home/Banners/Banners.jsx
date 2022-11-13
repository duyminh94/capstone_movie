import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import { VscMute, VscUnmute } from "react-icons/vsc"
// import styled from 'styled-components'
import "./Banners.css"


const Banners = () => {
    const [isMute, setIsMute] = useState(false)
    // const [playTime, setPlayTime] = useState(0);
    const playerRef = useRef(null)
    // const handleProgress = (state) => {
    //     setPlayTime(state.playTime);
    // }
    return (
        <div className='intro'>
            <ReactPlayer
                playing={true}
                loop={true}
                controls={false}
                // onProgress={handleProgress}
                ref={playerRef}
                onReady={() => playerRef.current?.seekTo(0, 'seconds')}
                width="100%"
                height="100%"
                volume={1}
                muted={isMute}
                url="https://www.youtube.com/watch?v=TcMBFSGVi1c"
                className="trailers" />

            <div className="banners">
                <h1 className="heading">Avengers: Endgame</h1>
                <p className="overview">Whatever it takes. Watch the brand-new trailer for Marvel Studios’ Avengers: Endgame. In theaters April 26.</p>

            </div>

            {isMute ? (
                <VscMute className='btnVolume'
                    onClick={() => setIsMute(prev => !prev)} />
            ) : (
                <VscUnmute className='btnVolume'
                    onClick={() => setIsMute(prev => !prev)} />
            )}
            <div className='fadeBottom'></div>
        </div>

    )
}

export default Banners

// const IntroContainer = styled.div`
//      position: relative;
//      color: aliceblue;
//      padding-top: 56%;

//    .trailers {
//     position: absolute;
//     top: 0;
//     left: 0; 
//    }
//     .banners {
//     position: absolute;
//     top:140px;
//     left:30px;

//         @media and srceen (max-width: 800px) {
//         top: 120px;
//         left: 25px;

//         }

//         @media and srceen (max-width: 600px) {
//         top: 100px
//         left: 15px
//         }
    
//         .heading {
//         font-size: 60px;
//         transition: all 0.3s ease;
//         color: white;
        

//         @media and srceen (max-width: 800px) {
//             font-size: 35px;
//         }

//         @media and srceen (max-width: 600px) {
//             font-size: 24px;
//         }
//     }

//     .overview {
//         max-width: 550px;
//         width: 100%;
//         line-height: 1.3;
//         padding-top: 25px;
//         font-size: 20px;

//         @media and srceen (max-width: 800px) {
//             font-size: 16px;
//         }
//         @media and srceen (max-width: 600px) {
//             font-size: 14px;
//         }
//     }

//    }

//  .btnVolume {
//     position: absolute;
//     height: 40px;
//     width: 40px;
//     right: 10%;
//     top: 50%;
//     cursor: pointer;
//     border-radius: 50%;
//     padding: 6px;
//     color: #bbb;
//     border: #fff solid 1px;
//     transition: all 0.3s ease;
//     transform: scale(1);
//     &:hover {
//         color: #fff;
//         transform: scale(1.2);
//         background-color: rgba(211, 211, 221, 0.18)
//     }
//     @media and srceen (max-width: 800px) {
//         height: 30px;
//         width: 30px;
//         padding: 4px;
//     }
//     @media and srceen (max-width: 600px) {
//         height: 20px;
//         width: 20px;
//         padding: 1px;
//     }
//  }
//  fadeBottom {
//     position: absolute;
//     bottom: 0;
//     width: 100%;
//     height: 100px;
//     background-image: linear-gradient (180deg, transparent, rgba(15,15,15,0.6)40%, rgb(17,17,17), rgb(17,17,17))
//  }
// `