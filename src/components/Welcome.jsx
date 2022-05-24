import '../styles/welcome.css'

const Welcome = () => {
    return (
        <div className="main-welcome-container">
            <div className="welcome-text-container">
                <div className="welcome-text">
                    <h1>Hi...</h1>
                    <h1>This is</h1>
                    <h1>Beersily</h1>
                    <p>The best beer in the world, <a href="#beers">See ours!</a></p>
                </div>
            </div>
            <div className="circles-container">
                <div className="circle1-container">
                    <div className="circle circle1">
                        <svg version="1.1" id="Layer_1" x="0px" y="0px"
                            viewBox="0 0 502 502">
                            <g>
                                <g>
                                    <path className="beer1_1-svg" d="M354.716,166.862c-1.78,0.148-3.575,0.243-5.394,0.243c-8.45,0-16.509-1.65-23.897-4.62
			c-12.781,11.506-29.692,18.513-48.243,18.513c-28.64,0-53.382-16.69-65.03-40.874c-10.077,22.211-32.431,37.668-58.409,37.668
			c-11.244,0-21.806-2.902-30.993-7.985V492h272.528V192.38C378.202,190.416,363.486,180.71,354.716,166.862z"/>
                                    <path className="beer1_2-svg" d="M409.993,82.225c-8.627-25.225-32.522-43.369-60.67-43.369c-12.165,0-23.538,3.388-33.229,9.271
			c-11.229-7.21-24.576-11.408-38.911-11.408c-4.864,0-9.612,0.488-14.206,1.406C253.416,21.332,235.368,10,214.662,10
			c-25.285,0-46.612,16.893-53.347,40.003c-2.485-0.292-5.008-0.46-7.571-0.46c-35.415,0-64.124,28.709-64.124,64.124
			c0,24.171,13.379,45.21,33.131,56.139c9.188,5.083,19.75,7.985,30.993,7.985c25.978,0,48.332-15.457,58.409-37.668
			c11.649,24.184,36.39,40.874,65.03,40.874c18.551,0,35.462-7.008,48.243-18.513c7.387,2.969,15.447,4.62,23.897,4.62
			c1.818,0,3.614-0.094,5.394-0.243c8.77,13.849,23.485,23.554,40.562,25.519c2.105,0.242,4.243,0.374,6.412,0.374
			c30.693,0,55.574-24.882,55.574-55.574C457.265,109.309,436.747,86.234,409.993,82.225z"/>
                                </g>
                                <g>
                                    <path d="M178.325,452.838c-5.523,0-10-4.477-10-10v-160.31c0-5.523,4.477-10,10-10s10,4.477,10,10v160.311
			C188.325,448.361,183.848,452.838,178.325,452.838z"/>
                                </g>
                                <g>
                                    <path d="M178.325,248.709c-5.523,0-10-4.477-10-10v-19.237c0-5.523,4.477-10,10-10s10,4.477,10,10v19.237
			C188.325,244.232,183.848,248.709,178.325,248.709z"/>
                                </g>
                                <g>
                                    <path d="M256.343,452.838c-5.523,0-10-4.477-10-10V235.503c0-5.523,4.477-10,10-10c5.523,0,10,4.477,10,10v207.335
			C266.343,448.361,261.866,452.838,256.343,452.838z"/>
                                </g>
                                <g>
                                    <path d="M334.36,452.838c-5.523,0-10-4.477-10-10V235.503c0-5.523,4.477-10,10-10s10,4.477,10,10v207.335
			C344.36,448.361,339.883,452.838,334.36,452.838z"/>
                                </g>
                                <g>
                                    <path d="M217.424,116.188c-5.007,0-9.329-3.752-9.921-8.847c-0.427-3.677-1.236-7.316-2.403-10.814
			c-1.748-5.239,1.082-10.903,6.321-12.65c5.239-1.75,10.903,1.083,12.65,6.321c1.602,4.801,2.711,9.792,3.297,14.835
			c0.638,5.486-3.293,10.45-8.779,11.087C218.199,116.165,217.809,116.188,217.424,116.188z"/>
                                </g>
                                <path d="M451.211,94.195c-8.93-10.279-20.799-17.497-33.883-20.706c-11.662-26.924-38.292-44.633-68.005-44.633
		c-11.522,0-22.833,2.67-33.055,7.765c-11.975-6.495-25.367-9.902-39.085-9.902c-3.109,0-6.229,0.178-9.328,0.531
		C255.609,10.287,235.81,0,214.662,0c-26.221,0-49.919,15.911-60.182,39.547c-0.246-0.002-0.491-0.004-0.736-0.004
		c-40.873,0-74.125,33.252-74.125,74.124c0,25.724,13.178,48.421,33.131,61.718v35.156H93.733c-32.533,0-59,26.467-59,59v110.403
		c0,32.533,26.467,59,59,59h19.018V492c0,5.523,4.477,10,10,10H395.28c5.523,0,10-4.477,10-10V202.652
		c34.495-1.87,61.987-30.518,61.987-65.472C467.265,121.377,461.563,106.112,451.211,94.195z M93.733,418.944
		c-21.505,0-39-17.495-39-39V269.541c0-21.505,17.495-39,39-39h19.018v188.403L93.733,418.944L93.733,418.944z M132.75,184.745
		c6.661,1.971,13.702,3.047,20.994,3.047c23.123,0,44.651-10.855,58.513-28.649c15.39,19.75,39.396,31.855,64.926,31.855
		c18.291,0,35.922-6.064,50.275-17.188c7.182,2.223,14.621,3.323,22.221,3.293c8.999,11.75,21.523,19.948,35.599,23.562V482H132.75
		V184.745z M405.278,182.599c-1.185,0.093-2.379,0.154-3.587,0.154c-5.72,0-11.263-1.066-16.413-3.049
		c-8.984-3.46-16.759-9.738-22.113-18.193c-1.843-2.91-5.041-4.65-8.447-4.65c-0.277,0-0.556,0.011-0.836,0.035
		c-1.671,0.14-3.163,0.208-4.56,0.208c-6.948,0-13.733-1.312-20.167-3.898c-3.542-1.424-7.583-0.707-10.42,1.846
		c-11.423,10.282-26.18,15.945-41.552,15.945c-21.407,0-41.395-11.253-52.668-29.162c-1.222-1.942-2.346-3.959-3.353-6.052
		c-1.685-3.498-5.219-5.7-9.124-5.66c-3.882,0.045-7.388,2.332-8.992,5.868c-0.92,2.027-1.963,3.974-3.105,5.844
		c-9.747,15.951-27.234,25.956-46.197,25.956c-7.441,0-14.535-1.51-20.994-4.239c-7.754-3.275-14.581-8.317-20-14.605
		c-8.173-9.482-13.131-21.81-13.131-35.281c0-29.844,24.28-54.124,54.125-54.124c2.07,0,4.164,0.128,6.402,0.392
		c0.198,0.023,0.395,0.031,0.592,0.042c0.079,0.012,0.155,0.033,0.235,0.043c11.095,1.478,21.319,6.303,29.567,13.954
		c1.925,1.785,4.364,2.668,6.798,2.668c2.686,0,5.364-1.075,7.334-3.2c3.755-4.049,3.518-10.376-0.532-14.132
		c-8.348-7.743-18.182-13.366-28.886-16.596C183.286,28.954,198.263,20,214.662,20c16.338,0,31.521,8.841,39.625,23.073
		c2.132,3.745,6.426,5.702,10.648,4.858c4.029-0.804,8.149-1.212,12.248-1.212c11.912,0,23.499,3.397,33.508,9.823
		c3.216,2.064,7.327,2.116,10.592,0.133c8.426-5.115,18.121-7.819,28.039-7.819c23.141,0,43.72,14.71,51.208,36.605
		c1.209,3.534,4.286,6.1,7.98,6.653c22.093,3.31,38.753,22.684,38.753,45.065C447.265,161.101,428.736,180.762,405.278,182.599z"/>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                    </div>
                </div>

                <div className="circle2-container">
                    <div className="circle circle2">
                        <svg version="1.1" id="Layer_1" x="0px" y="0px"
                            viewBox="0 0 502 502">
                            <g>
                                <g>
                                    <path className="beer2_1-svg" d="M354.716,166.862c-1.78,0.148-3.575,0.243-5.394,0.243c-8.45,0-16.509-1.65-23.897-4.62
			c-12.781,11.506-29.692,18.513-48.243,18.513c-28.64,0-53.382-16.69-65.03-40.874c-10.077,22.211-32.431,37.668-58.409,37.668
			c-11.244,0-21.806-2.902-30.993-7.985V492h272.528V192.38C378.202,190.416,363.486,180.71,354.716,166.862z"/>
                                    <path className="beer2_2-svg" d="M409.993,82.225c-8.627-25.225-32.522-43.369-60.67-43.369c-12.165,0-23.538,3.388-33.229,9.271
			c-11.229-7.21-24.576-11.408-38.911-11.408c-4.864,0-9.612,0.488-14.206,1.406C253.416,21.332,235.368,10,214.662,10
			c-25.285,0-46.612,16.893-53.347,40.003c-2.485-0.292-5.008-0.46-7.571-0.46c-35.415,0-64.124,28.709-64.124,64.124
			c0,24.171,13.379,45.21,33.131,56.139c9.188,5.083,19.75,7.985,30.993,7.985c25.978,0,48.332-15.457,58.409-37.668
			c11.649,24.184,36.39,40.874,65.03,40.874c18.551,0,35.462-7.008,48.243-18.513c7.387,2.969,15.447,4.62,23.897,4.62
			c1.818,0,3.614-0.094,5.394-0.243c8.77,13.849,23.485,23.554,40.562,25.519c2.105,0.242,4.243,0.374,6.412,0.374
			c30.693,0,55.574-24.882,55.574-55.574C457.265,109.309,436.747,86.234,409.993,82.225z"/>
                                </g>
                                <g>
                                    <path d="M178.325,452.838c-5.523,0-10-4.477-10-10v-160.31c0-5.523,4.477-10,10-10s10,4.477,10,10v160.311
			C188.325,448.361,183.848,452.838,178.325,452.838z"/>
                                </g>
                                <g>
                                    <path d="M178.325,248.709c-5.523,0-10-4.477-10-10v-19.237c0-5.523,4.477-10,10-10s10,4.477,10,10v19.237
			C188.325,244.232,183.848,248.709,178.325,248.709z"/>
                                </g>
                                <g>
                                    <path d="M256.343,452.838c-5.523,0-10-4.477-10-10V235.503c0-5.523,4.477-10,10-10c5.523,0,10,4.477,10,10v207.335
			C266.343,448.361,261.866,452.838,256.343,452.838z"/>
                                </g>
                                <g>
                                    <path d="M334.36,452.838c-5.523,0-10-4.477-10-10V235.503c0-5.523,4.477-10,10-10s10,4.477,10,10v207.335
			C344.36,448.361,339.883,452.838,334.36,452.838z"/>
                                </g>
                                <g>
                                    <path d="M217.424,116.188c-5.007,0-9.329-3.752-9.921-8.847c-0.427-3.677-1.236-7.316-2.403-10.814
			c-1.748-5.239,1.082-10.903,6.321-12.65c5.239-1.75,10.903,1.083,12.65,6.321c1.602,4.801,2.711,9.792,3.297,14.835
			c0.638,5.486-3.293,10.45-8.779,11.087C218.199,116.165,217.809,116.188,217.424,116.188z"/>
                                </g>
                                <path d="M451.211,94.195c-8.93-10.279-20.799-17.497-33.883-20.706c-11.662-26.924-38.292-44.633-68.005-44.633
		c-11.522,0-22.833,2.67-33.055,7.765c-11.975-6.495-25.367-9.902-39.085-9.902c-3.109,0-6.229,0.178-9.328,0.531
		C255.609,10.287,235.81,0,214.662,0c-26.221,0-49.919,15.911-60.182,39.547c-0.246-0.002-0.491-0.004-0.736-0.004
		c-40.873,0-74.125,33.252-74.125,74.124c0,25.724,13.178,48.421,33.131,61.718v35.156H93.733c-32.533,0-59,26.467-59,59v110.403
		c0,32.533,26.467,59,59,59h19.018V492c0,5.523,4.477,10,10,10H395.28c5.523,0,10-4.477,10-10V202.652
		c34.495-1.87,61.987-30.518,61.987-65.472C467.265,121.377,461.563,106.112,451.211,94.195z M93.733,418.944
		c-21.505,0-39-17.495-39-39V269.541c0-21.505,17.495-39,39-39h19.018v188.403L93.733,418.944L93.733,418.944z M132.75,184.745
		c6.661,1.971,13.702,3.047,20.994,3.047c23.123,0,44.651-10.855,58.513-28.649c15.39,19.75,39.396,31.855,64.926,31.855
		c18.291,0,35.922-6.064,50.275-17.188c7.182,2.223,14.621,3.323,22.221,3.293c8.999,11.75,21.523,19.948,35.599,23.562V482H132.75
		V184.745z M405.278,182.599c-1.185,0.093-2.379,0.154-3.587,0.154c-5.72,0-11.263-1.066-16.413-3.049
		c-8.984-3.46-16.759-9.738-22.113-18.193c-1.843-2.91-5.041-4.65-8.447-4.65c-0.277,0-0.556,0.011-0.836,0.035
		c-1.671,0.14-3.163,0.208-4.56,0.208c-6.948,0-13.733-1.312-20.167-3.898c-3.542-1.424-7.583-0.707-10.42,1.846
		c-11.423,10.282-26.18,15.945-41.552,15.945c-21.407,0-41.395-11.253-52.668-29.162c-1.222-1.942-2.346-3.959-3.353-6.052
		c-1.685-3.498-5.219-5.7-9.124-5.66c-3.882,0.045-7.388,2.332-8.992,5.868c-0.92,2.027-1.963,3.974-3.105,5.844
		c-9.747,15.951-27.234,25.956-46.197,25.956c-7.441,0-14.535-1.51-20.994-4.239c-7.754-3.275-14.581-8.317-20-14.605
		c-8.173-9.482-13.131-21.81-13.131-35.281c0-29.844,24.28-54.124,54.125-54.124c2.07,0,4.164,0.128,6.402,0.392
		c0.198,0.023,0.395,0.031,0.592,0.042c0.079,0.012,0.155,0.033,0.235,0.043c11.095,1.478,21.319,6.303,29.567,13.954
		c1.925,1.785,4.364,2.668,6.798,2.668c2.686,0,5.364-1.075,7.334-3.2c3.755-4.049,3.518-10.376-0.532-14.132
		c-8.348-7.743-18.182-13.366-28.886-16.596C183.286,28.954,198.263,20,214.662,20c16.338,0,31.521,8.841,39.625,23.073
		c2.132,3.745,6.426,5.702,10.648,4.858c4.029-0.804,8.149-1.212,12.248-1.212c11.912,0,23.499,3.397,33.508,9.823
		c3.216,2.064,7.327,2.116,10.592,0.133c8.426-5.115,18.121-7.819,28.039-7.819c23.141,0,43.72,14.71,51.208,36.605
		c1.209,3.534,4.286,6.1,7.98,6.653c22.093,3.31,38.753,22.684,38.753,45.065C447.265,161.101,428.736,180.762,405.278,182.599z"/>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome