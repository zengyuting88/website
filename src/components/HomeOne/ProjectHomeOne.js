import React from 'react';
import projectThumb from '../../../public/assets/images/project-thumb.png';

function ProjectHomeOne({ className }) {
    // 定义内联样式
    const buttonGroupStyle = {
        display: 'inline-block',
    };

    const tryNowButtonStyle = {
        backgroundColor: '#FFC107', // 黄色背景
        color: '#000#ffffff', // 黑色文字
        border: 'none', // 无边框
        padding: '10px 20px', // 内边距
        marginRight: '10px', // 与另一个按钮的间距
        borderRadius: '5px', // 圆角
        cursor: 'pointer', // 鼠标样式
    };

    const viewDemoButtonStyle = {
        backgroundColor: 'transparent', // 透明背景
        color: '#ffffff', // 黑色文字
        border: '1px solid #ffffff', // 黑色边框
        padding: '8px 18px', // 内边距
        borderRadius: '5px', // 圆角
        cursor: 'pointer', // 鼠标样式
    };

    const projectThumbStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%', // 或根据需要调整
    };

    return (
        <section className={`appie-project-area pb-100 ${className || ''}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div
                            className="appie-project-box wow animated slideInUp text-center"
                            data-wow-duration="1000ms"
                            data-wow-delay="0ms"
                            style={{ position: 'relative' }}
                        >
                            <h3 className="title mb-4" style={{ color: '#FFFFFF' }}>
                            Stop worrying by starting SpyX
                            </h3>
                            <div style={buttonGroupStyle}>
                                <button style={tryNowButtonStyle}>Try Now</button>
                                <button style={viewDemoButtonStyle}>View Demo</button>
                            </div>
                            <div className="appie-project-thumb mt-5" style={projectThumbStyle}>
                                <img src={projectThumb} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectHomeOne;