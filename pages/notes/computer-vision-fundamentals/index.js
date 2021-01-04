import React from 'react';
import Post from '../../../components/Post/Post';
// import { TwitterTweetEmbed } from 'react-twitter-embed';
import banner from './lane_detection.jpeg';
import { CodeBlock, dracula } from "react-code-blocks";
export const config = {
   title: 'Computer Vision Fundamentals: Road Lane Lines Detection',
   description:
      'Notes on the basics of Lane Lines Detection using Computer Vision techniques like Canny Edge Detection and Hough Transforms.',
   date: '9/19/2020',
   external: false,
   url: 'http://nikhilvs.com/notes/computer-vision-fundamentals/',
   categories: ['Code', 'Computer Vision','Image Processing'],
   link_text: 'continue',
   slug: 'computer-vision-fundamentals',
   featured: true,
   img: banner,
};

const ComputerVisionFundamentals = () => {
   return (
      <Post config={config}>

         <p>In this post, we will go through a simple way to detect to lane lines from images from a roof-mounted car camera.</p>


         <p>What the end result looks like:</p>
         <iframe 
         width="560" 
         height="315" 
         src="https://www.youtube.com/embed/XLw5mLAbIZk" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowfullscreen></iframe>

         <p>I'll trying diving deep into the concepts below, but here are the steps of the process: </p>
         <ul>
            <li>
               Convert the image to grayscale.
            </li>
            <li>
               On this grayscale image, we apply Canny Edge Detection Algorithm, to detect lane line markings.
               <div>
                  <img src={require('./canny.jpeg')} />
               </div>
            </li>
            <li>
               From this image, we mask our area of interest using a custom polygon. Then, apply Hough Transform to the image and find the point with maximum intersections.
               <div>
                  <img src={require('./hough.jpeg')} />
               </div>
            </li>
            <li>
               Finally, we combine the two images to get the result.
               <div>
                  <img src={require('./result.jpeg')} />
               </div>
            </li>
         </ul>
         
         <h3>Canny Edge Detection</h3>
         <p>
            After converting image to grayscale, Canny Edge Detection algorithm calculates the gradient (strength of change in color), and pick up edges using the upper and lower-bound thresholds.
         </p>
         <p>
            Note: Use Gaussian smoothing, before running Canny, which is essentially a way of suppressing noise and spurious gradients by averaging. 
            The kernel_size for Gaussian smoothing to be any odd number. A larger kernel_size implies averaging, or smoothing, over a larger area.
         </p>
         <CodeBlock
            text={`import cv2
import numpy as np

gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
# Define a kernel size for Gaussian smoothing / blurring
# Note: this step is optional as cv2.Canny() applies a 5x5 Gaussian internally
kernel_size = 3
blur_gray = cv2.GaussianBlur(gray,(kernel_size, kernel_size), 0)
#low_threshold to high_threshold ratio of 1:2 or 1:3, b/w 0 to 155
edges = cv2.Canny(gray, low_threshold, high_threshold)`}
            language={"python"}
            // showLineNumbers={showLineNumbers}
            theme={dracula}
         />

         <h3>Hough Transform</h3>
         <p>Use Hough Transform to find lines from Canny Images.</p>
         <p>
            In HT, a line y=mx+b can be represented as (m,b) in 'm vs b' Hough space.
            In Hough Space, since parallel lines have the same slope (m), all points on a vertical line represent parallel lines.
            A point (x1, y1) in cartesian space represents a line in Hough Space, ie, all values of (m,b) that can fit the piont.
         </p>

         <h3>Finding Lane Lines:</h3>
         <p>
         Since each point on the in the canny image will be represented as a line in Hough Space, we just need to find the (m,b) value where most lines intersect. 
         But since cartesian vertical lines have a infinite slope, we transform out XY space first to polar coordinates. 
         </p>

         <h4>&rho; = x*sin(&theta;)+y*cos(&theta;)</h4>
         {/* equation */}
         <p>In "polar" Hough Space (&theta; vs &rho;), a point is represented as a sine curve. For finding Lane lines, again, just have to find the points with maximum intersections.</p>

         <p>Rho and theta are the distance and angular resolution of our grid in Hough space (in pixels).</p>
         <CodeBlock
            text={`## rho in units of pixels and theta in units of radians.
## threshold parameter specifies the minimum number of votes 
## (or intersections in a given grid cell) a candidate line needs to have to make it into the output.
## min_line_length is the minimum length of a line (in pixels) that you will accept in the output.
## max_line_gap is the maximum distance (again, in pixels) between segments 
## that you will allow to be connected into a single line.
lines = cv2.HoughLinesP(masked_edges, rho, theta, threshold, np.array([]),min_line_length, max_line_gap)`}
            language={"python"}
            // showLineNumbers={showLineNumbers}
            theme={dracula}
         />
         <p>
            The code for this project can be found <a href="https://github.com/nnnvs/lane-detection"> here</a>.
         </p>
         <p>Here, we tried to tune the parameters by trial and error with a few general guidelines. 
            But this process can be further automated. {' '}
                              <a href="https://medium.com/@maunesh/finding-the-right-parameters-for-your-computer-vision-algorithm-d55643b6f954">
                                 This blog post 
                              </a>
             , showcases a GUI tool using which the user can tune the parameters easily.
         </p>

      <p>“Finding the Lane Lines” is one of the projects in Udacity’s {' '} <a href="https://www.udacity.com/course/self-driving-car-engineer-nanodegree--nd013">
         Self Driving Car Engineer Nanodegree program
         </a>. If you are interested in learning more about Self Driving Cars, Computer Vision or Deep Learning, you should check it out.
      </p>

      </Post>
   );
};

export default ComputerVisionFundamentals;
