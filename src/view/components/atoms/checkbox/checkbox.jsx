import $ from "./checkbox.module.scss";
import SvgBike from "../svgBike/svgBike";

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
              <span className={$.checkboxIcon} id={$.bikeIcon}>
                <SvgBike />
              </span>
            </span>
            <span className={$.checkboxLabel}>Bicycle</span>
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
      </div>
    </div>
  );
}

export default Checkboxes;
