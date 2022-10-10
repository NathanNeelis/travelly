import $ from "./results.module.scss";

function Results(props) {
  return (
    <div className={$.results}>
      <div className={$.resultsHeader}>
        <div className={$.title}>
          <h6>results</h6>
        </div>
      </div>

      <section className={$.resultWrapper}>
        <div className={$.resultcard}>
          <div className={$.resultcardHeader}>
            <h4>Italy</h4>
            <h2>Very long title of locallity</h2>
          </div>

          {/* chip or icon for tags  */}

          <div className={$.weatherCategory}>
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 600 600"
                >
                  <path
                    class="st0"
                    d="M122.8,229c170.4,68.1-212,177.9,102.2,371c-109.8-204.4,94.6-219.6,64.4-359.7c56.8,53,60.6,128.7,22.7,215.8
	c41.6-15.1,64.4-45.4,71.9-83.3c37.9,53,34.1,162.8-22.7,223.4C758.8,338.8,175.8,104,376.5,20.8c-87.1-60.6-212,15.1-162.8,177.9
	C156.9,191.1,130.4,202.5,122.8,229L122.8,229z"
                  />
                </svg>
              </span>
              Scorching heat
            </div>
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 600 600"
                >
                  <path
                    d="M280,80V20c0-7.1,3.8-13.7,10-17.3s13.8-3.6,20,0c6.2,3.6,10,10.2,10,17.3v60c0,7.1-3.8,13.7-10,17.3s-13.8,3.6-20,0
	C283.8,93.7,280,87.1,280,80z M47.6,177.4l52.4,30c6.2,3.6,13.9,3.6,20.1,0c6.2-3.6,10-10.2,10-17.4c0-7.2-3.9-13.8-10.1-17.4
	l-52.4-30c-6.2-3.6-13.9-3.6-20.1,0c-6.2,3.6-10,10.2-10,17.4C37.5,167.2,41.4,173.8,47.6,177.4z M100,392.6l-51.8,30
	c-6.2,3.6-10.1,10.2-10.1,17.4c0,7.2,3.8,13.8,10,17.4c6.2,3.6,13.9,3.6,20.1,0l51.8-30c6.2-3.6,10.1-10.2,10.1-17.4
	c0-7.2-3.8-13.8-10-17.4C113.9,389,106.2,389,100,392.6L100,392.6z M300,500c-5.3,0-10.4,2.1-14.1,5.9c-3.7,3.7-5.9,8.8-5.9,14.1v60
	c0,7.1,3.8,13.7,10,17.3c6.2,3.6,13.8,3.6,20,0c6.2-3.6,10-10.2,10-17.3v-60c0-5.3-2.1-10.4-5.9-14.1C310.4,502.1,305.3,500,300,500
	z M552.4,422.6l-52.4-30c-6.2-3.6-13.9-3.6-20.1,0c-6.2,3.6-10,10.2-10,17.4c0,7.2,3.9,13.8,10.1,17.4l51.8,30c3,1.7,6.5,2.6,10,2.6
	c5.9,0,11.6-2.6,15.4-7.1c3.8-4.5,5.4-10.6,4.4-16.4c-1-5.9-4.7-10.9-9.8-13.9L552.4,422.6z M442.8,382.6L453,467h0
	c0.7,5.3-0.8,10.6-4,14.8c-3.3,4.2-8.1,6.9-13.4,7.6h-2.4h0c-4.9,0-9.7-1.7-13.4-5c-3.7-3.2-6.1-7.7-6.6-12.6l-10.8-89.2L357,356
	c-10.2,10.3-23,17.6-37,21.2V430l72,54c4.2,3.2,7,7.9,7.8,13.2c0.8,5.3-0.6,10.6-3.8,14.8c-3.8,5-9.7,8-16,8c-4.3,0-8.5-1.4-12-4
	l-68-51l-68,51c-3.5,2.6-7.7,4-12,4c-6.3,0-12.2-3-16-8c-3.2-4.2-4.5-9.6-3.8-14.8c0.8-5.3,3.6-10,7.8-13.2l72-54v-52.8
	c-14-3.6-26.8-10.9-37-21.2l-45.6,26.4l-10.8,89.2l0,0c-0.6,4.9-3,9.4-6.6,12.6c-3.7,3.2-8.4,5-13.4,5h-2.2
	c-5.3-0.7-10.1-3.4-13.4-7.6c-3.3-4.2-4.7-9.5-4-14.8l10.2-84.4L80,349.2c-5.1-1.9-9.2-5.8-11.3-10.8c-2.1-5-2.1-10.7,0-15.7
	c2.1-5,6.2-8.9,11.3-10.9c5.1-1.9,10.7-1.7,15.7,0.6l82.8,35.2l45.8-26.4h0c-4.3-13.8-4.3-28.6,0-42.4l-46.8-26.4l-82.8,35.2
	c-2.4,1.1-5.1,1.7-7.8,1.6c-3.9,0-7.7-1.1-11-3.3c-3.3-2.1-5.8-5.2-7.4-8.7c-2.1-5-2-10.7,0.2-15.7c2.2-5,6.3-8.9,11.4-10.7
	l78.2-33.2L147,133.2c-0.9-7.1,2.2-14.2,7.9-18.5c5.8-4.3,13.4-5.2,20-2.4c6.6,2.8,11.2,9,12.1,16.1l10.8,89.2l45.6,26.4l0,0
	c10.1-10.2,22.7-17.5,36.6-21.2V170l-72-54c-5.7-4.3-8.7-11.3-7.9-18.4c0.9-7.1,5.4-13.2,12-16s14.1-1.9,19.9,2.4l68,51l68-51
	c5.7-4.3,13.3-5.2,19.9-2.4s11.1,8.9,12,16c0.9,7.1-2.1,14.1-7.9,18.4l-72,54v52.8c14,3.6,26.8,10.9,37,21.2l45.6-26.4l10.8-89.2
	l0,0c0.9-7.1,5.5-13.3,12.1-16.1c6.6-2.8,14.2-1.9,20,2.4c5.8,4.3,8.8,11.4,7.9,18.5l-10.2,84.4l78.2,33.2v0c4.9,2.1,8.8,6,10.8,11
	s1.9,10.5-0.2,15.4c-1.6,3.6-4.1,6.6-7.4,8.7c-3.3,2.1-7.1,3.3-11,3.3c-2.7,0-5.3-0.5-7.8-1.6L423,252.4l-45.8,26.4
	c4.3,13.8,4.3,28.6,0,42.4l45.8,26.4l82.8-35.2c4.9-2.3,10.6-2.5,15.7-0.6c5.1,1.9,9.1,5.9,11.3,10.9c2.1,5,2.1,10.7,0,15.7
	c-2.1,5-6.2,8.9-11.3,10.8L442.8,382.6z M340,300c0-10.6-4.2-20.8-11.7-28.3c-7.5-7.5-17.7-11.7-28.3-11.7
	c-10.6,0-20.8,4.2-28.3,11.7c-7.5,7.5-11.7,17.7-11.7,28.3c0,10.6,4.2,20.8,11.7,28.3c7.5,7.5,17.7,11.7,28.3,11.7
	c10.6,0,20.8-4.2,28.3-11.7C335.8,320.8,340,310.6,340,300z M490.6,210c3.5,0,7-0.9,10-2.6l51.8-30h0c6.2-3.6,10.1-10.2,10.1-17.4
	c0-7.2-3.8-13.8-10-17.4c-6.2-3.6-13.9-3.6-20.1,0l-52.4,30c-5.2,2.9-8.8,8-9.8,13.9c-1,5.9,0.6,11.9,4.4,16.4
	c3.8,4.5,9.5,7.2,15.4,7.1L490.6,210z"
                  />
                </svg>
              </span>
              Winter Wonderland
            </div>
          </div>

          {/* read more cta  */}
          <div className={$.resultcardCta}>
            <button className={$.resultcardCtaBtn}>Read more</button>
          </div>

          <div className={$.resultcardGradient}></div>
          <div className={$.resultcardBG}>
            <img
              src="https://media-cdn.tripadvisor.com/media/vr-splice-j/05/63/b5/09.jpg"
              alt=""
            />
          </div>
        </div>

        <div className={$.resultcard}>
          <div className={$.resultcardHeader}>
            <h4>country</h4>
            <h2>Very long title of locallity</h2>
          </div>

          <div className={$.resultcardGradient}></div>
          <div className={$.resultcardBG}>
            <img
              src="https://www.francecomfort.com/l/nl/library/download/urn:uuid:a3713af6-e347-4f43-b78a-7ad53eb75766/via+ferrata+4+frankrijk+haute+savoie+vakantie+luxe+appartement+portes+du+soleil+bergen+klimmen+wandelen.jpg?scaleType=3&width=1600&height=1000"
              alt=""
            />
          </div>
        </div>

        <div className={$.resultcard}>
          <div className={$.resultcardHeader}>
            <h2>Very long title of locallity</h2>
            <h4>country</h4>
          </div>

          <div className={$.resultcardGradient}></div>
          <div className={$.resultcardBG}>
            <img
              src="https://media-cdn.tripadvisor.com/media/vr-splice-j/05/63/b5/09.jpg"
              alt=""
            />
          </div>
        </div>

        <div className={$.resultcard}>
          <div className={$.resultcardHeader}>
            <h4>country</h4>
            <h2>Very long title of locallity</h2>
          </div>

          <div className={$.resultcardGradient}></div>
          <div className={$.resultcardBG}>
            <img
              src="https://media-cdn.tripadvisor.com/media/vr-splice-j/05/63/b5/09.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Results;
