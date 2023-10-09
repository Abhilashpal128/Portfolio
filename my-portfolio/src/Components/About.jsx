import React from "react";
import { useState } from "react";
import { BsSquareFill } from "react-icons/bs";
import {
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiBootstrap,
  SiExpress,
  SiGithub,
  SiMongodb,
  SiRedux,
  SiGit,
} from "react-icons/si";
import { DiNodejs, DiReact, DiNodejsSmall } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
function About() {
  const [activeTab, setActiveTab] = useState(1);
  const [secActiveTab,setSecActiveTab]=useState(1)

  const handleTab = (id) => {
    setActiveTab(id);
  };

  const handleSecondTab=(sec_id)=>{
    setSecActiveTab(sec_id);
  };

  return (
    <>
      <div className="h-full">
        <div className="text-white md:flex md:m-5  ">
          <div className="md:w-[40%]  grid place-items-center">
            <img
              className="md:h-56 md:w-[50%] "
              src="../../src/images/About6.png"
            />
          </div>
          <div className="md:w-[60%] ">
            <div className="text-4xl text-center text-[#18BC9C] ">
              <h1>About Me!</h1>
            </div>
            <p className="md:text-xl md:px-16 md:text-start text-white text-center md:m-7 ">
              Hello , My Name Is Abhilash Pal I Have Completed My Graduation Of
              BscIT In 2023, I am a FullStack developer Currently looking for a
              job Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam exercitationem consequuntur velit error ea quasi
              molestias tempora autem vel amet! Blanditiis perferendis possimus
              veniam nam, rerum minima neque adipisci dolor? Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Fugit sunt accusantium
              ipsum quidem, error veritatis distinctio? Dicta error porro
              veritatis adipisci! Amet in ducimus nulla aperiam quae illo minus
              inventore?
            </p>
          </div>
        </div>
        <div className="md:flex md:pt-0 pt-10">
          <div className="text-white  md:h-[550px] md:w-[50%] grid place-items-center  ">
            <div className=" flex text-3xl text-center md:h-10  w-full   ">
              <div className="w-[50%]   ">
                <button
                  onClick={() => handleTab(1)}
                  className={`w-full h-full  ${activeTab === 1 ? "active text-[#007BFF] border-b-2 border-blue-400 " : " "}`}
                >
                  Education
                </button>
              </div>
              <div className="w-[50%] ">
                <button
                  onClick={() => handleTab(2)}
                  className={` w-full h-full  ${activeTab === 2 ? "active  text-[#007BFF] border-b-2 border-blue-400" : " "}`}
                >
                  Personal Detail
                </button>
              </div>
            </div>
            <div className=" md:h-[520px] h-[450px]">
            {activeTab === 1 && (
              <div className="grid place-items-center md:h-[450px]">
                <div className="md:w-[70%] w-[100%] border-2 flex border-blue-600 bg-[#007BFF]   mt-5 rounded-xl">
                  <div className="w-[50%]  ">
                    <p className="flex text-white text-sm  py-4">
                      <p className="pl-3 pt-3  ">
                        <BsSquareFill />
                      </p>
                      <p className="pl-3 pt-2 ">
                        BscIT (Bachelor Of Science In Information And
                        Technology)
                      </p>
                    </p>
                  </div>
                  <div className="w-[50%] ">
                    <p className=" text-white text-sm py-3 px-2">
                      <p>Year: 2023</p>
                      <p>Score : 9.03 CGPA</p>
                      <p>From University Of Mumbai</p>
                    </p>
                  </div>
                </div>
                <div className="md:w-[70%] w-[100%]  flex border-2 border-blue-600 place-items-center bg-[#007BFF]  mt-10 rounded-xl">
                  <div className="w-[50%] ">
                    <p className="flex text-white text-sm">
                      <p className="pl-3 pt-3  ">
                        <BsSquareFill />
                      </p>
                      <p className="px-3 pt-2 ">
                        HSC (Higher Secondary Certification)
                      </p>
                    </p>
                  </div>
                  <div className="w-[50%] ">
                    <p className=" text-white text-sm ">
                      <p>Year: 2020</p>
                      <p>Score : 62.15%</p>
                      <p>
                        From Mahrashtra Board Of Secondary And Higher Secondary
                        Education
                      </p>
                    </p>
                  </div>
                </div>
                <div className="md:w-[70%] w-[100%] border-2 flex border-blue-600 place-items-center bg-[#007BFF]  mt-10 rounded-xl">
                  <div className="w-[50%] ">
                    <p className="flex text-white text-sm ">
                      <p className="pl-3 pt-3  ">
                        <BsSquareFill />
                      </p>
                      <p className="px-3 pt-2">
                        SSC (Secondary School Certification)
                      </p>
                    </p>
                  </div>
                  <div className="w-[50%] ">
                    <p className=" text-white text-sm ">
                      <p>Year: 2018</p>
                      <p>Score : 69.60%</p>
                      <p>
                        From Mahrashtra Board Of Secondary And Higher Secondary
                        Education
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="md:h-[520px] h-[450px]">
                <div className=" border-2 border-blue-500 mt-7 rounded-lg">   
                <div className="grid grid-cols-2 gap-5  m-10"> 
                  <div className=""><h1>Name : </h1></div>
                  <div className=""><h1>Abhilash Isram Pal</h1></div>
                  <div className=""><h1>Phone No. : </h1></div>
                  <div className=""><h1>8928996887</h1></div>
                  <div className=""><h1>Email : </h1></div>
                  <div className="md:text-lg text-xs"><p>abhilashpal128@gmail.com</p></div>
                  <div className=""><h1>Address : </h1></div>
                  <div className=""><p className="text-sm">Ghanwat Heights R1 Building , Anand nagar ,AppaPada ,Kurar Village ,Malad (East) ,Mumbai 400097</p></div>
                </div>
                </div>
              </div>
            )}
            </div>
          </div>

          <div className="text-white  md:w-[50%] md:h-[550px] md:pt-0 pt-7  ">
            <div className="text-center text-3xl flex md:h-10 h-20 ">
              <div className="w-[50%]">
              <button  onClick={() => handleSecondTab(1)} className={` w-full h-full ${secActiveTab === 1 ? "active text-sky-600  border-b-2 border-blue-400 " : " "}`} >Skills</button>
              </div>
              <div className="w-[50%]">
              <button onClick={() => handleSecondTab(2)} className={` w-full h-full ${secActiveTab === 2 ? "active text-sky-600 border-b-2 border-blue-400 " : " "}`}> Experience</button>
            </div>
            </div>
            
            <div className=" w-[100%] pt-5  grid place-items-center  ">
              <div className=" lg:w-[75%] md:w-[95%] w-[100%] border-2 border-blue-400 rounded-xl md:h-[450px] h-[550px]">
                {
                  secActiveTab === 1 &&
                <div className=" py-8   grid md:grid-cols-4 grid-cols-3 grid-flow-rows lg:gap-x-16 md:gap-x-0  lg:gap-8 md:gap-4 gap-8  md:place-items-center">
                  <div className="grid place-items-center ">
                    <div className="text-red-500 text-5xl">
                      <SiHtml5 />
                    </div>
                    <h1>HTML5</h1>
                  </div>
                  <div className="grid place-items-center">
                    <div className="text-blue-700 text-5xl">
                      <SiCss3 />
                    </div>
                    <h1>CSS</h1>
                  </div>
                  <div className="grid place-items-center">
                    <div className="text-yellow-500 text-5xl">
                      <SiJavascript />
                    </div>
                    <h1>JavaScript</h1>
                  </div>
                  <div className="grid place-items-center">
                    <div className="text-purple-600 text-5xl">
                      <SiBootstrap />
                    </div>
                    <h1>Bootstrap</h1>
                  </div>
                  <div className="grid place-items-center">
                    <div className="text-sky-500 text-5xl">
                      <SiTailwindcss />
                    </div>
                    <h1>Tailwindcss</h1>
                  </div>
                  <div className="grid place-items-center">
                    <div className="text-sky-400 text-5xl">
                      <DiReact />
                    </div>
                    <h1>React Js</h1>
                  </div>
                  <div className="grid place-items-center">
                    <div className="text-green-500 text-5xl">
                      <DiNodejs />
                    </div>
                    <h1>Node Js</h1>
                  </div>
                  <div className="grid place-items-center">
                    <div className="text-gray-500 text-5xl flex">
                      <SiExpress />
                      <DiNodejsSmall className="text-green-500" />
                    </div>
                    <h1>Express Js</h1>
                  </div>
                  <div className="grid place-items-center">
                    <div className="text-green-600 text-5xl">
                      <SiMongodb />
                    </div>
                    <h1>Mongodb</h1>
                  </div>
                  <div className="grid place-items-center">
                    <div className="text-sky-400 text-5xl">
                      <GrMysql />
                    </div>
                    <h1>MySQL</h1>
                  </div>
                  <div className="grid place-items-center">
                    <div className="text-purple-600 text-5xl">
                      <SiRedux />
                    </div>
                    <h1>Redux</h1>
                  </div>
                  <div className="grid place-items-center">
                    <div className="text-red-500 text-5xl">
                      <SiGit />
                    </div>
                    <h1>Git</h1>
                  </div>
                  <div className="grid place-items-center">
                    <div className="text-white text-5xl">
                      <SiGithub />
                    </div>
                    <h1>GitHub</h1>
                  </div>
                </div>
                }
                {
                  secActiveTab === 2 &&
              <div>
                <div className="">
                  <h1>Here Will Be Experiance</h1>
                </div>
             </div>
             }
              </div>
            </div>
             
           

          </div>
          {/* second section*/}
        </div>
      </div>
    </>
  );
}

export default About;

{
  /* <div className="text-yellow-500 text-5xl"> <SiJavascript/></div>
<div className="text-red-500 text-5xl"><SiHtml5/></div>
<div className="text-sky-500 text-5xl"><SiTailwindcss/></div>
<div className="text-blue-700 text-5xl"><SiCss3/></div>
<div className="text-purple-600 text-5xl" ><SiBootstrap/></div>
<div className="text-green-500 text-7xl"><DiNodejs/></div>
<div className="text-sky-400 text-5xl"><DiReact/></div>
<div className="text-green-500 text-5xl flex"><SiExpress/><DiNodejsSmall/></div>
<div className="text-white text-5xl"><SiGithub/></div> */
}
