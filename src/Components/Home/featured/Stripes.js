// import React from 'react';
// import { easePolyOut } from 'd3-ease';
// import  { Animate } from 'react-move';

// let stripesState =[
//     {
//         id:1292751,
//         background:'#98c5e9',
//         left:120,
//         rotate:25,
//         top:-260,
//         delay:0
//     },
//     {
//         id:20392323,
//         background:'#ffffff',
//         left:360,
//         rotate:25,
//         top:-394,
//         delay:200
//     },
//     {
//         id:2018261,
//         background:'#98c5e9',
//         left:600,
//         rotate:25,
//         top:-498,
//         delay:400
//     }
//  ];

// const Stripes = () => {

//     const handleShowStripe = () => (

//         stripesState.map((stripe)=>(
//             <Animate
//                 key={stripe.id}
//                 show={true}
//                 start={{
//                     background:'#ffffff',
//                     opacity:0,
//                     left:0,
//                     rotate:0,
//                     top:0
//                 }}
//                 enter={{
//                     background:`${stripe.background}`,
//                     opacity:[1],
//                     left:[stripe.left],
//                     rotate:[stripe.rotate],
//                     top:[stripe.top],
//                     timing:{
//                         delay:stripe.delay,
//                         duration:200,
//                         ease:easePolyOut
//                     }
//                 }}
//             >
//                 { ({ opacity, left, rotate, top, background})=>(
//                     <div
//                         className="stripe"
//                         style={{
//                             background,
//                             opacity,
//                             transform:`rotate(${rotate}deg) translate(${left}px,${top}px)`
//                         }}
//                     >
//                     </div>
//                 )}
//             </Animate>
//         ))
//     )

//     return(
//         <div className="featured_stripes">
//             {handleShowStripe()}
//         </div>
//     )

// }

// export default Stripes;

// import '/index.css'
import { useSpring, animated } from "@react-spring/web";
import { easePolyOut } from "d3-ease";
import featuredPlayer from "../../../Resources/images/featured_player.png";

export default function Stripes() {
  const springs1 = useSpring({
    from: { x: 0, opacity: 0 },
    to: { x: 200, opacity: 1 },
    delay: 0,
    config: { duration: 500, easing: easePolyOut },
  });

  const springs2 = useSpring({
    from: { x: 215, opacity: 0 },
    to: { x: 415, opacity: 1 },
    delay: 200,
    config: { duration: 500, easing: easePolyOut },
  });

  const springs3 = useSpring({
    from: { x: 430, opacity: 0 },
    to: { x: 630, opacity: 1 },
    delay: 400,
    config: { duration: 500, easing: easePolyOut },
  });

  const springsT = useSpring({
    from: { opacity: 0, transform: "scale(0) rotateY(0deg)" },
    to: { opacity: 1, transform: "scale(1) rotateY(360deg)" },
    config: { duration: 1000, easing: easePolyOut },
  });

  const springsT1 = useSpring({
    from: { x: 430, opacity: 0 },
    to: { x: 200, opacity: 1 },
    config: { duration: 1000, easing: easePolyOut },
  });

  const springsT2 = useSpring({
    from: { x: 430, opacity: 0 },
    to: { x: 200, opacity: 1 },
    delay: 250,
    config: { duration: 1000, easing: easePolyOut },
  });

  const springsP = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: { duration: 1000, easing: easePolyOut },
  });

  return (
    <>
      <animated.div
        style={{
          width: 200,
          height: 800,
          position: "absolute",
          transform: "skew(-25deg)",
          background: "white",
          ...springs1,
        }}
      />

      <animated.div
        style={{
          width: 200,
          height: 800,
          position: "absolute",
          transform: "skew(-25deg)",
          background: "rgb(152, 197, 233)",
          ...springs2,
        }}
      />

      <animated.div
        style={{
          width: 200,
          height: 800,
          position: "absolute",
          transform: "skew(-25deg)",
          background: "white",
          ...springs3,
        }}
      />

      <animated.div
        style={{
          color: "lightblue",
          fontSize: "130px",
          display: "inline-block",
          padding: "0px 245px",
          ...springsT,
        }}
      >
        <h1 className="featured_text">5</h1>
      </animated.div>

      <animated.div
        style={{
          ...springsT1,
          padding: "400px 0px 0px 55px",
        }}
      >
        <h1 className="featured_first">LEAGUE</h1>
      </animated.div>

      <animated.div
        style={{
          ...springsT2,
          padding: "150px 0px 0px 55px",
        }}
      >
        <h1 className="featured_first">CHAMPIONSHIPS</h1>
      </animated.div>

      <animated.div
        className="featured_player"
        style={{
          background: `url(${featuredPlayer}) `,
          position: "absolute",
          left: "700px",
          top: "258px",
          ...springsP,
        }}
      />
    </>
  );
}
