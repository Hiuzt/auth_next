import React from 'react'

const CurriculumVitae1 = () => {

    return (
        <div className="border border-gray-300 rounded-sm shadow-lg py-10 px-10 w-4/5 mt-10 mb-10">
          <header>
            <ul className="flex flex-wrap justify-end gap-2">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    role="img"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  className="bg-gray-700 p-2 font-medium text-white inline-flex items-center space-x-2 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="w-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://dev.to/"
                  className="bg-black p-2 font-medium text-white inline-flex items-center space-x-2 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    role="img"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 32 447.99999999999994 448"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2500"
                    height="2321"
                  >
                    <g fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v30.01H201.6v38.42h53.27v30.01h-70.74V172.98h70.74zm80.68 120.35c-4.61 5.47-11.4 8.19-20.33 8.19h-29.68v39.13h-30.09V172.98h59.77c8.93 0 15.72 2.68 20.33 8.14c4.61 5.47 6.9 12.94 6.9 22.44v54.18c0 9.5-2.3 16.97-6.9 22.38zM350.56 219.43c0-4.69-1.02-8.16-3.05-10.33c-2.03-2.17-5.15-3.25-9.37-3.25h-26.44v84.53h26.44c4.22 0 7.34-1.08 9.37-3.25c2.03-2.17 3.05-5.63 3.05-10.33zm0 0"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </header>
    
          <div className="flex flex-col items-center">
            <img
              className="object-contain h-48 w-full sm:w-1/4 sm:1/4 shadow-lg rounded-full mb-5 mt-5"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="profile"
            />
            <h1 className="text-2xl font-bold leading-7 sm:leading-9 sm:truncate">Jesse Smith</h1>
            <p className="text-lg mt-2">Developer</p>
            <p className="text-lg">London, United Kingdom</p>
          </div>
    
          <div className="mt-5">
            <h2 className="text-xl font-semibold">Summary</h2>
            <p>
              Innovative and deadline-driven Developer with 3+ years of experience designing and developing user-centered
              digital material from initial concept to final, polished deliverable.
            </p>
          </div>
    
          <div className="mt-5">
            <h2 className="text-xl font-semibold">Skills</h2>
            <ul className="list-disc list-inside">
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
            </ul>
          </div>
    
          <div className="mt-5">
            <h2 className="text-xl font-semibold">Experience</h2>
            <div>
              <h3 className="text-lg font-semibold">Company A</h3>
              <p className="text-md italic">Role</p>
              <p>January 2020 - Present</p>
              <ul className="list-disc list-inside">
                <li>Responsible for...</li>
                <li>Developed...</li>
              </ul>
            </div>
    
            <div className="mt-5">
              <h3 className="text-lg font-semibold">Company B</h3>
              <p className="text-md italic">Role</p>
              <p>January 2018 - December 2019</p>
              <ul className="list-disc list-inside">
                <li>Responsible for...</li>
                <li>Developed...</li>
              </ul>
            </div>
          </div>
    
          <div className="mt-5">
            <h2 className="text-xl font-semibold">Education</h2>
            <div>
              <h3 className="text-lg font-semibold">University A</h3>
              <p className="text-md italic">Degree</p>
              <p>Graduation Year</p>
            </div>
          </div>
        </div>
      );
}

export default CurriculumVitae1
