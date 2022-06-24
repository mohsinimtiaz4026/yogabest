import React from 'react';

const Meditation = () => {
  return (
    <section className="meditation">
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-6 col-md-6 col-sm-12 pt-5">
            <div className="left_side">
              <div className="icon_parent">
                <div className="icon_border">
                  <i className="fa-solid fa-calendar"></i>
                  <p><span>15</span><br/> years of experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 pt-5 text-center">
            <div className="right_side">
              <p>Reslish in Nature's Natural Gift</p>
              <h4>LIFE IN DIVINE YOGA</h4>
              <div className="right_container">
                <i className="fa-solid fa-sun"></i>
                <h6>"I am standing on my own altar,<br/> The Poses are my prayers"</h6>
              </div>
              <p className="bottom_para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Meditation;