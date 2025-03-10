// import React from 'react'

// export default function Portopolio() {
//   return (
//     <div className="max-w-6xl mx-auto p-3 gap-4 space-y-4 ">
//     <h1 className='text font-medium text-amber-600'>Portopolio</h1>
//     <p className="text-white">Describe the Project Briefly: Summarize the project’s purpose, audience,
//     Use the STAR Method (Situation, Task, Action, Result):
// ○ Situation: Describe the project's background and purpose.
// ○ Task: Outline the primary goals or responsibilities.
// ○ Action: Explain the steps you took, tools used, and any challenges.
// ○ Result: Share the outcomes, including performance metrics,
// or personal insights.
//     Include Relevant Technologies: Mention the main technologies or
//     Visuals: Add screenshots or links to the project where applicable.</p>
//   </div>
//   );
// }

import React from 'react'
import '../globals.css';
// import MenuItem from '@/component/MenuItem';


const Portofolio: React.FC = () => {
    return (

      <section className="justify-center items-center text-white min-h-screen bg-gradient-to-r from-black to-slate-600">
            
            {/* Title - Portofolio */}
            <div>
            <h2 className="flex justify-center items-center text-orange-500 py-4 text-2xl tracking-widest font-bold text-orange">
              PORTOFOLIO
            </h2>
            </div>
                        
            <div className='grid grid-cols-2 p-8 gap-6 min-h-fit'>
              {/* Role & Responsibilities Section */}
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20">
                <h2 className="text-2xl font-bold mb-4">Role & Responsibilities</h2>
                <ul className="text-justify text-white px-4 py-4 list-disc pl-6">
                  <p>✅ Built <strong>React.js</strong> front-end with a responsive UI and Redux for state management.</p>
                  <p>✅ Developed <strong>Node.js & Express.js</strong> back-end with <strong>MongoDB</strong> for data storage.</p>
                  <p className='text-left'>✅ Integrated <strong>JWT authentication</strong> and <strong>AWS deployment</strong> for security & scalability.</p>
                  <p>✅ Set up <strong>CI/CD pipeline</strong> for automated testing and deployment.</p>
                </ul>
              </div>

              {/* Results Section */}
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20">
                <h2 className="text-2xl font-bold mb-4">Results</h2>
                <ul className="text-justify text-white px-4 py-4 list-disc pl-6">
                  <p>✅<strong>35% increase in online sales</strong> within 3 months.</p>
                  <p>✅ Improved <strong>user experience & performance</strong> with optimized architecture.</p>
                  <p>✅ Reduced <strong>manual inventory tasks</strong> via real-time tracking.</p>
                </ul>
              </div>
            </div>
            
              {/* Tech Stack Section */}
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg w-full text-center mt-2">
                <h2 className="text-2xl font-bold">Tech Stack</h2>
                <div className='flex justify-center gap-6 py-4'>
           
             <div>
             <img
                src="/images/react-js.png" // Sesuaikan path gambar
                alt="react-Image"
                width={100}
                height={100}
                className="rounded-lg shadow-lg"
              />
              <p>rearct-js</p>
               </div>
              <img
                src="/images/redux.png" // Sesuaikan path gambar
                alt="redux-Image"
                width={100}
                height={100}
                className="rounded-lg shadow-lg"
              />
              <img
                src="/images/bali.png" // Sesuaikan path gambar
                alt="Handriko-Image"
                width={100}
                height={100}
                className="rounded-lg shadow-lg"
              />
                            <img
                src="/images/bali.png" // Sesuaikan path gambar
                alt="Handriko-Image"
                width={100}
                height={100}
                className="rounded-lg shadow-lg"
              />
                            <img
                src="/images/bali.png" // Sesuaikan path gambar
                alt="Handriko-Image"
                width={100}
                height={100}
                className="rounded-lg shadow-lg"
              />
                            <img
                src="/images/bali.png" // Sesuaikan path gambar
                alt="Handriko-Image"
                width={100}
                height={100}
                className="rounded-lg shadow-lg"
              />
                            <img
                src="/images/bali.png" // Sesuaikan path gambar
                alt="Handriko-Image"
                width={100}
                height={100}
                className="rounded-lg shadow-lg"
              />
                            <img
                src="/images/bali.png" // Sesuaikan path gambar
                alt="Handriko-Image"
                width={100}
                height={100}
                className="rounded-lg shadow-lg"
              />
              </div>
                
                <p>React.js, Redux, Tailwind CSS, Node.js, Express.js, MongoDB, AWS, GitHub Actions.</p>

              </div>

              {/* Contact Section */}
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg w-full text-center mt-2">
                <h2 className="text-2xl font-bold">Contact</h2>
                <p>📩 <strong>Email:</strong> <a href="mailto:handriko.anl@google.com" className="text-blue-400">handriko.anl@google.com</a></p>
                <p>💼 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourname" className="text-blue-400">linkedin.com/in/yourname</a></p>
                <p>💻 <strong>GitHub:</strong> <a href="https://github.com/yourusername" className="text-blue-400">github.com/yourusername</a></p>
                <p>🌐 <strong>Portfolio:</strong> <a href="https://yourportfolio.com" className="text-blue-400">yourportfolio.com</a></p>
              </div>
        </section>


  );
};
        
export default Portofolio;