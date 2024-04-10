import React, { useState } from 'react';

// 假设每个特性对应的图片URL
const featureImages = {
  wellIntegrated: 'https://spyx.com/image/ProductP/10.webp',
  cleanDesign: 'https://spyx.com/image/ProductP/11.webp',
  lightAndDark: 'https://spyx.com/image/ProductP/12.webp',
};

function FeaturesHomeTwo() {
  // 使用状态来跟踪当前选中的特性
  const [activeFeature, setActiveFeature] = useState('wellIntegrated');

  return (
    <>
      <section className="appie-features-area-2 pt-90 pb-100" id="features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="appie-section-title appie-section-title-2 text-center">
                <h3 className="appie-title">
                  Why choose SpyX phone monitoring software
                </h3>
              </div>
            </div>
          </div>
          <div className="row mt-30 align-items-center">
            <div className="col-lg-6">
              <div className="appie-features-boxes">
                <div
                  className={`appie-features-box-item ${activeFeature === 'wellIntegrated' ? 'active' : ''}`}
                  onClick={() => setActiveFeature('wellIntegrated')}
                >
                  <h4 className="title">No need to install any app</h4>
                  <p>You don't need to install any app on the target iOS or Android devices. Even the most tech-savvy kids won’t notice anything has changed.</p>
                </div>
                <div
                  className={`appie-features-box-item item-2 ${activeFeature === 'cleanDesign' ? 'active' : ''}`}
                  onClick={() => setActiveFeature('cleanDesign')}
                >
                  <h4 className="title">No requirement for physical access</h4>
                  <p>Once the setup process is complete, you can rest easy. The phone monitoring is completely invisible.</p>
                </div>
                <div
                  className={`appie-features-box-item item-3 ${activeFeature === 'lightAndDark' ? 'active' : ''}`}
                  onClick={() => setActiveFeature('lightAndDark')}
                >
                  <h4 className="title">Seamless monitoring in real-time</h4>
                  <p>Look at their phone and know exactly what they are doing 24/7. All data is transferred in real-time wherever the target device is located.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appie-features-thumb wow animated fadeInRight"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                {/* 根据当前选中的特性动态显示图片 */}
                <img src={featureImages[activeFeature]} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesHomeTwo;
