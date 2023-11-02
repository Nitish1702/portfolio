import React from 'react';

const projects = [
  {
    title: 'Chat Application',
    description: 'A real time chat application, made using MERN stack and Socket.io',
    imageUrl: '/images/nichat.png',
  },
  {
    title: 'Instagram Clone',
    description: 'A CRUD application made using Flutter and Firebase',
    imageUrl: '/images/insta.png',
  },
  {
    title: 'Movie Reccomender System',
    description: 'A Streamlit app, Movie Reccommender System made using Cosine Similarity.',
    imageUrl: '/images/movieRec.png',
  },
  
  // Add more projects here
];

const ProjectsPage = () => {
  return (
    <div className="max-h-[85vh] overflow-y-auto">
      <section className='bg-[#171717] w-full md:min-w-[100vw] gap-10 p-4 md:p-0 '>
        <div className="w-full md:w-[60vw] text-5xl md:text-7xl font-extrabold text-[#C5C4C5] pl-4 md:pl-[7vw] pb-10">
          PROJECTS<span className='text-7xl md:text-10xl font-extrabold text-[#D5FF3E]'>.</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:px-[7vw] overflow-hidden snap-y">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden shadow-md transition-transform transform hover:scale-105 duration-700 rounded-3xl p-7">
              <img src={project.imageUrl} alt={project.title} className=" rounded-3xl object-fit object-center w-full h-[200px] md:h-[300px]" />
              <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-black bg-opacity-70 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col justify-center items-center p-10">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white pb-5">{project.title}</h2>
                  <p className="text-sm md:text-base text-[#9e9d9d] ">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
