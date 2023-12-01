import React, { useEffect, useRef, useState } from 'react';
import './SpinningCube.css'; // Your CSS file for the cube

const SpinningCube: React.FC = () => {
    const cubeRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

    useEffect(() => {
        const cube = cubeRef.current;
        let rotateX = 0;
        let rotateY = 0;
        let directionX = 1;
        let directionY = 1;
        
    let animationFrameId: number;
    
        const rotateCube = () => {
            if (cube) {
                // Adjust these values based on your container's size
                const maxRotationX = 360; 
                const maxRotationY = 360;
    
                // Change direction when hitting an edge
                if (rotateX >= maxRotationX || rotateX <= -maxRotationX) directionX *= -1;
                if (rotateY >= maxRotationY || rotateY <= -maxRotationY) directionY *= -1;
    
                rotateX += directionX * (Math.random() * 2);
                rotateY += directionY * (Math.random() * 2);
                setRotation({ rotateX, rotateY });
            }
    
            animationFrameId = requestAnimationFrame(rotateCube);
        };
    
        rotateCube();
    
        // Cleanup
        return () => {
            // Cancel the animation frame on unmount
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="cube-container">
            <div className="cube"  ref={cubeRef}
            style={{
                transform: `translate(-50%, -50%) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
            }}>
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face right"></div>
                <div className="face left"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
            </div>
        </div>
    );
};

export default SpinningCube;