import React from 'react'
import "./Main.css"
import Image from "./images/course.jpg"
import CourseOneImage from "./images/courses-icon1.png"
import CourseTwoImage from "./images/courses-icon2.png"
import CourseThreeImage from "./images/courses-icon3.png"
import Secondelogo from "./images/secondeLogo.png"
import Angular from "./images/angular.png"
import ReactImg from "./images/react.png"
import Vue from "./images/vue.png"
import Node from "./images/node.png"
import TypeScript from "./images/typescript.png"
import Html from "./images/html.png"
import Css from "./images/css.png"
import JavaScript from "./images/javascript.png"
import Ionic from "./images/ionic.png"
import Flutter from "./images/flutter.png"
import Python from "./images/python.png"
import Aws from "./images/aws.png"
import Avatar from "./images/avatar.png"


function Main() {
    return (
        <div className="main">
          <div className="heading">
             <h1>Programming courses for <span>everyone</span></h1>
             <h3>Created by industry experts for you</h3>
           <div className="main__card">
            <img className="course__one" src={CourseOneImage} alt="Logo" />
            <h3>39 High Quality <span>Video Courses</span> in HD Video<br/>
                & HQ Audio</h3>
           </div>
           <div className="main__card">
           <img className="course__one" src={CourseTwoImage} alt="Logo" />
           <h3>Join more than <span>1 Million</span> Students<br/>
               Worldwide</h3>
          </div>
          <div className="main__card">
           <img className="course__one" src={CourseThreeImage} alt="Logo" />
           <h3>More than <span>500.000 5 Star</span> Reviews</h3>
          </div>
          <button className="explore">&#10162;  Explore Our Courses</button>
         </div>
         <img className="image" src={Image} alt="Logo" />

         <div className="second__main">
          <img className="image" src={Secondelogo} alt="Logo" />
            <h1 >Academind offers high-quality programming video courses<br/> 
           which helped over one million students worldwide to learn <br/>
            how to code.</h1>
           <div className="logoImages">
           <img className="image1" src={Angular} alt="Angular" />
           <img className="image2" src={ReactImg} alt="ReactImg" />
           <img className="image3" src={Vue} alt="Vue" />
           <img className="image4" src={JavaScript} alt="JavaScript" />
           </div>
           <div className="logoImages">
           <img className="image1" src={Node} alt="Node" />
           <img className="image2" src={TypeScript} alt="TypeScript" />
           <img className="image3" src={Html} alt="Html" />
           <img className="image4" src={Css} alt="Css" />
           </div>
           <div className="logoImages">
           <img className="image1" src={Ionic} alt="Ionic" />
           <img className="image2" src={Flutter} alt="Flutter" />
           <img className="image3" src={Python} alt="Python" />
           <img className="image4" src={Aws} alt="Aws" />
           </div>
          </div>

          <div className="details__section">
            <h1>Don't take our word for it</h1>
            <h3>Here's what our students are saying on Twitter about maxedapps and academind_real</h3>

          <div className="person__images">
             <div className="person__card">
               <img className="avarat__one" src={Avatar} alt="Avatar" />
               <h3>Any Name</h3>
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text
                since the 1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book</h3>
              
            </div>
            <div className="person__card">
               <img className="avarat__one" src={Avatar} alt="Avatar" />
               <h3>Any Name</h3>
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text
                since the 1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book</h3>
            </div>
            <div className="person__card">
               <img className="avarat__one" src={Avatar} alt="Avatar" />
               <h3>Any Name</h3>
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text
                since the 1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book</h3>
            </div>
           </div> 


           <div className="person__images">
             <div className="person__card">
               <img className="avarat__one" src={Avatar} alt="Avatar" />
               <h3>Any Name</h3>
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text
                since the 1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book</h3>
              
            </div>
            <div className="person__card">
               <img className="avarat__one" src={Avatar} alt="Avatar" />
               <h3>Any Name</h3>
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text
                since the 1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book</h3>
            </div>
            <div className="person__card">
               <img className="avarat__one" src={Avatar} alt="Avatar" />
               <h3>Any Name</h3>
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text
                since the 1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book</h3>
            </div>
           </div> 

          </div>
         
        </div>
    )
}

export default Main
