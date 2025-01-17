import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((pro, indx) => (
          <div key={indx} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={pro.image}
                alt={pro.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4 "
            >
              <h6 className="mb-2 font-semibold">{pro.title}</h6>
              <p className="mb-4 text-neutral-400">{pro.description}</p>
              <div className="overflow-x-scroll sm:overflow-x-hidden  overflow-y-hidden w-full">
                {pro.technologies.map((tech, indx) => (
                  <span
                    key={indx}
                    className="bg-neutral-900 mx-4 p-2 rounded-[0.4rem] text-purple-600  w-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
