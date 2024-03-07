'use client'
import { useEffect, useRef } from 'react';

interface ScrollHandlerProps {
  targetId: string;
  heroSectionId: string;
}

const ScrollHandler: React.FC<ScrollHandlerProps> = ({ targetId, heroSectionId }) => {
    const animationInProgress = useRef(false);
    const allowScrollAfterAnimation = useRef(false);
    const enableScrollFailsafe = useRef<number | null>(null); // Holds timeout ID or null

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            if (enableScrollFailsafe.current !== null) {
                return;
            }

            if (animationInProgress.current) {
                event.preventDefault();
                return;
            }

            if (allowScrollAfterAnimation.current) {
                allowScrollAfterAnimation.current = false;
                return;
            }

            const heroSection = document.getElementById(heroSectionId);
            if (!heroSection) return;

            const viewportHeight = window.innerHeight;
            const isOnHeroSection = window.scrollY >= 0 && window.scrollY < viewportHeight;
            const isScrollingDown = event.deltaY > 0;

            if (isOnHeroSection && isScrollingDown) {
                event.preventDefault();

                animationInProgress.current = true;

                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });

                    setTimeout(() => {
                        animationInProgress.current = false;
                        allowScrollAfterAnimation.current = true;
                        setTimeout(() => {
                            allowScrollAfterAnimation.current = false;
                        }, 500); // Cooldown period to reset scroll behavior
                    }, 500);
                }
            }

            // Activate the failsafe
            if (enableScrollFailsafe.current !== null) {
                clearTimeout(enableScrollFailsafe.current);
            }
            enableScrollFailsafe.current = window.setTimeout(() => {
                enableScrollFailsafe.current = null;
            }, 200) as unknown as number; // Cast setTimeout return value to number
        };

        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => {
            if (enableScrollFailsafe.current !== null) {
                clearTimeout(enableScrollFailsafe.current);
            }
            window.removeEventListener('wheel', handleScroll);
        };
    }, [targetId, heroSectionId]);

    return null;
};

export default ScrollHandler;
