import $ from "./checkbox.module.scss";

function Checkboxes(props) {
  return (
    <div>
      <legend className={$.checkboxGroupLegend}>Travel Method</legend>
      <div className={$.checkboxGroup}>
        {/* caravan / camper  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input type="checkbox" className={$.checkboxInput} />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29.89"
                  height="24.917"
                  viewBox="0 0 29.89 24.917"
                >
                  <g id={$.caravan} className={$.caravan}>
                    <path
                      className={$.caravanIcon}
                      d="M9.983,30.937a2.99,2.99,0,1,0,2.99,2.99A2.99,2.99,0,0,0,9.983,30.937ZM31.7,27.17a54.111,54.111,0,0,0-3.239-8.326A3.834,3.834,0,0,0,25.985,12H16.972A3.929,3.929,0,0,0,13.5,14H4.013a1.992,1.992,0,0,0-1.993,1.993V31.934a1.993,1.993,0,0,0,1.993,1.993h.909a5.091,5.091,0,0,1,4.983-5.11,5.09,5.09,0,0,1,4.983,5.11h3.987a4.985,4.985,0,1,1,9.966,0A2.674,2.674,0,0,0,30.906,32.9C32.062,31.486,32.055,28.929,31.7,27.17ZM12.973,23.96a1,1,0,0,1-1,1H6.993a1,1,0,0,1-1-1V20.97a1,1,0,0,1,1-1h4.983a1,1,0,0,1,1,1Zm12.11,1H20.869a1,1,0,0,1-1-1V20.97a1,1,0,0,1,1-1h2.9a1,1,0,0,1,.783.38,9.827,9.827,0,0,1,1.5,3.387A1,1,0,0,1,25.084,24.957Zm-1.147,5.98a2.99,2.99,0,1,0,2.99,2.99A2.99,2.99,0,0,0,23.937,30.937Z"
                      transform="translate(-2.019 -12)"
                    />
                  </g>
                </svg>
              </span>
            </span>
            <span className={$.checkboxLabel}>Camper / Caravan</span>
          </label>
        </div>

        {/* car  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input type="checkbox" className={$.checkboxInput} />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26.63"
                  height="23.979"
                  viewBox="0 0 26.63 23.979"
                >
                  <g id={$.car} className={$.car}>
                    <path
                      className={$.carIcon}
                      d="M27.983,14.633A2.53,2.53,0,0,0,25.957,12.9L24.469,7.567a4.764,4.764,0,0,0-3.688-3.253A40.955,40.955,0,0,0,15.315,4a41.3,41.3,0,0,0-5.487.316,4.76,4.76,0,0,0-3.69,3.251L4.644,12.92a2.5,2.5,0,0,0-1.9,1.712,11.8,11.8,0,0,0-.342,6.9,2.526,2.526,0,0,0,2.048,1.982c.082.013.177.021.258.034V26.2a1.768,1.768,0,0,0,1.76,1.777H8.243A1.783,1.783,0,0,0,10.02,26.2v-2c1.8.149,3.574.222,5.332.222s3.546-.073,5.35-.222v2a1.768,1.768,0,0,0,1.76,1.777h1.777A1.783,1.783,0,0,0,26.017,26.2V23.552c.082-.014.16-.022.241-.035a2.547,2.547,0,0,0,2.067-1.982A12.185,12.185,0,0,0,27.983,14.633ZM6.91,21.046a2.4,2.4,0,1,1,2.4-2.4A2.4,2.4,0,0,1,6.91,21.046Zm1.437-8.158L9.562,8.373a1.27,1.27,0,0,1,.779-.687,38.91,38.91,0,0,1,4.973-.278,38.251,38.251,0,0,1,4.948.276,1.274,1.274,0,0,1,.781.689l1.214,4.515ZM23.8,21.046a2.4,2.4,0,1,1,2.4-2.4A2.4,2.4,0,0,1,23.8,21.046Z"
                      transform="translate(-2.039 -4)"
                    />
                  </g>
                </svg>
              </span>
            </span>
            <span className={$.checkboxLabel}>Car</span>
          </label>
        </div>

        {/* train  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input type="checkbox" className={$.checkboxInput} />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.066"
                  height="26.844"
                  viewBox="0 0 25.066 26.844"
                >
                  <g id={$.train} className={$.train}>
                    <path
                      className={$.trainIcon}
                      d="M4.433,28.891H11.8l1.184-1.919A16.543,16.543,0,0,1,6.8,25.055ZM20.11,26.972l1.184,1.919h7.368l-2.37-3.836A16.544,16.544,0,0,1,20.11,26.972ZM29,15.794C28.24,9.91,26.094,2.047,16.548,2.047S4.856,9.91,4.1,15.794c-.743,5.783,3.379,9.52,12.448,9.52S29.738,21.577,29,15.794ZM11.977,21.741a5.868,5.868,0,0,1-4.4-2.143,1.716,1.716,0,0,1-.155-1.805,1.843,1.843,0,0,1,2.167-.812c1.476.423,2.608,2.288,3.151,3.373C13.214,21.291,12.879,21.772,11.977,21.741ZM10.072,10.774c0-2.648,2.372-5.389,6.476-5.389s6.476,2.741,6.476,5.389-3,5.811-6.476,5.811S10.072,13.422,10.072,10.774ZM25.515,19.6a5.867,5.867,0,0,1-4.4,2.145c-1,.034-1.184-.551-.766-1.387.543-1.085,1.673-2.949,3.152-3.373a1.839,1.839,0,0,1,2.164.812A1.707,1.707,0,0,1,25.515,19.6Z"
                      transform="translate(-4.015 -2.047)"
                      fill="#e2e2e2"
                    />
                  </g>
                </svg>
              </span>
            </span>
            <span className={$.checkboxLabel}>Train</span>
          </label>
        </div>

        {/* plane  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input type="checkbox" className={$.checkboxInput} />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29.464"
                  height="29.456"
                  viewBox="0 0 29.464 29.456"
                >
                  <g id={$.plane} className={$.plane}>
                    <path
                      className={$.planeIcon}
                      d="M25.21,21.658c1.582,0,3.723-.227,4.223-2.19.465-1.826-.815-3.427-3.458-4.283a44.935,44.935,0,0,0-5.166-1.136L13.186,3.441a2.173,2.173,0,0,0-1.129-.783c-.317-.09-2.689-.516-3.161-.6a.489.489,0,0,0-.536.68L12.781,12.8c-1.8-.254-3.457-.473-4.732-.638-.978-1.8-2.17-4-2.24-4.136a1.415,1.415,0,0,0-1-.7c-.21-.033-2.237-.238-2.237-.238a.465.465,0,0,0-.522.583c1.667,6.977,1.536,6.659,1.722,7.216.781,2.36,5.883,4.317,16.053,6.163A31.536,31.536,0,0,0,25.21,21.658Zm-2.557,2.959a1.961,1.961,0,1,0,1.965-1.956A1.965,1.965,0,0,0,22.652,24.616ZM10.86,27.574V31.5H31.5V27.574Z"
                      transform="translate(-2.032 -2.048)"
                    />
                  </g>
                </svg>
              </span>
            </span>
            <span className={$.checkboxLabel}>Plane</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Checkboxes;
