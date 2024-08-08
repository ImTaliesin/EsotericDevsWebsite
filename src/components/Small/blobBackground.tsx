'use client';
import './style.scss';
import { useEffect, useRef, useState } from 'react';

interface BlobBackgroundProps {
    className?: string;
}

const BlobBackground: React.FC<BlobBackgroundProps> = ({
    className = '',
    ...props
}) => {
    const interBubbleRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    useEffect(() => {
        let curX = dimensions.width / 2;
        let curY = dimensions.height / 2;
        let tgX = curX;
        let tgY = curY;

        const move = () => {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;

            if (interBubbleRef.current) {
                interBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            }

            requestAnimationFrame(move);
        };

        const handleMouseMove = (event: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                tgX = event.clientX - rect.left;
                tgY = event.clientY - rect.top;
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            move();
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, [dimensions]);

    return (
        <div
            className={`gradient-bg ${className}`}
            ref={containerRef}
            {...props}
        >
            <div className="gradients-container">
                <div className="g1" />
                <div className="g2" />
                <div className="g3" />
                <div className="g4" />
                <div className="g5" />
                <div className="g6" />
                <div className="g7" />
                <div className="g8" />
                <div
                    className="interactive"
                    ref={interBubbleRef}
                    style={{ width: '150px', height: '150px' }}
                />
            </div>
        </div>
    );
};

export default BlobBackground;