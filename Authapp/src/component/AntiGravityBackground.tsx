import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
    glowColor: string;
    alpha: number;
    baseAlpha: number;
    mass: number;
    shape: 'circle' | 'ring' | 'diamond';
    pulseOffset: number;
}

interface AntiGravityBackgroundProps {
    particleCount?: number;
}

// Single Professional Accent Color Palette (Electric Sky Blue)
const ACCENT_COLOR = {
    main: '#3B82F6',
    glow: 'rgba(59, 130, 246, 0.4)',
    line: 'rgba(59, 130, 246, ',
    aura: 'rgba(59, 130, 246, 0.12)',
};

export const AntiGravityBackground: React.FC<AntiGravityBackgroundProps> = ({
    particleCount = 90
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let dpr = window.devicePixelRatio || 1;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const setCanvasSize = () => {
            if (!canvas) return;
            dpr = window.devicePixelRatio || 1;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);
        };

        setCanvasSize();

        // Mouse Tracking
        const mouse = {
            x: -1000,
            y: -1000,
            prevX: -1000,
            prevY: -1000,
            vx: 0,
            vy: 0,
            radius: 210,
            active: false,
        };

        // Click Shockwaves
        const pulses: { x: number; y: number; radius: number; maxRadius: number; strength: number; alpha: number }[] = [];

        let particles: Particle[] = [];

        const initParticles = () => {
            particles = [];
            const count = Math.min(particleCount, Math.floor((width * height) / 13000));
            const shapes: ('circle' | 'ring' | 'diamond')[] = ['circle', 'circle', 'ring', 'diamond'];

            for (let i = 0; i < count; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                const radius = Math.random() * 3.2 + 1.6;
                const baseAlpha = Math.random() * 0.45 + 0.35;

                particles.push({
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    vx: (Math.random() - 0.5) * 0.25,
                    vy: (Math.random() - 0.5) * 0.25,
                    radius,
                    color: ACCENT_COLOR.main,
                    glowColor: ACCENT_COLOR.glow,
                    alpha: baseAlpha,
                    baseAlpha,
                    mass: 1.0, // Uniform mass so all particles react identically
                    shape: shapes[Math.floor(Math.random() * shapes.length)],
                    pulseOffset: Math.random() * Math.PI * 2
                });
            }
        };

        initParticles();

        const handleResize = () => {
            setCanvasSize();
            initParticles();
        };

        const onMouseMove = (e: MouseEvent) => {
            mouse.vx = e.clientX - mouse.x;
            mouse.vy = e.clientY - mouse.y;
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
        };

        const onMouseLeave = () => {
            mouse.active = false;
            mouse.x = -1000;
            mouse.y = -1000;
        };

        const onTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                mouse.vx = touch.clientX - mouse.x;
                mouse.vy = touch.clientY - mouse.y;
                mouse.x = touch.clientX;
                mouse.y = touch.clientY;
                mouse.active = true;
            }
        };

        const onMouseDown = (e: MouseEvent) => {
            pulses.push({
                x: e.clientX,
                y: e.clientY,
                radius: 10,
                maxRadius: 280,
                strength: 24,
                alpha: 0.85
            });
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseleave', onMouseLeave);
        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('mousedown', onMouseDown);

        let time = 0;

        // Physics & Animation Render Loop
        const render = () => {
            time += 0.018;
            ctx.clearRect(0, 0, width, height);

            // Single-Color Mouse Radial Lighting Aura
            if (mouse.active) {
                const auraGradient = ctx.createRadialGradient(
                    mouse.x,
                    mouse.y,
                    0,
                    mouse.x,
                    mouse.y,
                    mouse.radius * 1.1
                );
                auraGradient.addColorStop(0, ACCENT_COLOR.aura);
                auraGradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.04)');
                auraGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.save();
                ctx.fillStyle = auraGradient;
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, mouse.radius * 1.1, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }

            // Single-Color Shockwave Pulses
            for (let i = pulses.length - 1; i >= 0; i--) {
                const p = pulses[i];
                p.radius += 8.5;
                p.alpha *= 0.94;

                ctx.save();
                ctx.strokeStyle = `${ACCENT_COLOR.line}${p.alpha * 0.55})`;
                ctx.lineWidth = 2;
                ctx.shadowColor = ACCENT_COLOR.main;
                ctx.shadowBlur = 12;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();

                if (p.radius >= p.maxRadius || p.alpha < 0.02) {
                    pulses.splice(i, 1);
                }
            }

            // Single-Color Constellation Neural Mesh Lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 115) {
                        const alpha = (1 - dist / 115) * 0.16;
                        ctx.save();
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `${ACCENT_COLOR.line}${alpha})`;
                        ctx.lineWidth = 0.75;
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            }

            // Particle Updates & Smooth Physics
            particles.forEach((p) => {
                // Micro Ambient Zero-G Drift
                const floatX = Math.cos(time * 0.5 + p.pulseOffset) * 0.12;
                const floatY = Math.sin(time * 0.5 + p.pulseOffset) * 0.12;

                // Soft Base Anchor Spring Restoration
                const dxBase = p.baseX - p.x;
                const dyBase = p.baseY - p.y;
                p.vx += dxBase * 0.0005;
                p.vy += dyBase * 0.0005;

                p.x += floatX + p.vx;
                p.y += floatY + p.vy;

                // High Dampening Friction
                p.vx *= 0.90;
                p.vy *= 0.90;

                // Controlled Anti-Gravity Mouse Repulsion & Impulse
                if (mouse.active) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouse.radius && dist > 0) {
                        const forceFactor = Math.pow(1 - dist / mouse.radius, 2);
                        const rawForce = (forceFactor * 2.5) / p.mass;
                        const force = Math.min(rawForce, 0.7);
                        const angle = Math.atan2(dy, dx);

                        p.vx += Math.cos(angle) * force;
                        p.vy += Math.sin(angle) * force;

                        // Controlled gentle kinetic momentum transfer
                        p.vx += (mouse.vx * 0.025) / p.mass;
                        p.vy += (mouse.vy * 0.025) / p.mass;
                    }
                }

                // Shockwave Pulse Force Reaction
                pulses.forEach((pulse) => {
                    const dx = p.x - pulse.x;
                    const dy = p.y - pulse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const waveDiff = Math.abs(dist - pulse.radius);

                    if (waveDiff < 30 && dist > 0) {
                        const pushForce = Math.min(((30 - waveDiff) / 30) * (pulse.strength / (p.mass * 8)) * pulse.alpha, 0.8);
                        const angle = Math.atan2(dy, dx);
                        p.vx += Math.cos(angle) * pushForce;
                        p.vy += Math.sin(angle) * pushForce;
                    }
                });

                // Velocity Clamp - Enforce Max Speed Limit to prevent wild X/Y movement
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                const maxSpeed = 1.0;
                if (speed > maxSpeed) {
                    p.vx = (p.vx / speed) * maxSpeed;
                    p.vy = (p.vy / speed) * maxSpeed;
                }

                // Screen Boundary Wrap Around with Base Anchor Reset
                if (p.x < -20) { p.x = width + 20; p.baseX = width + 20; }
                if (p.x > width + 20) { p.x = -20; p.baseX = -20; }
                if (p.y < -20) { p.y = height + 20; p.baseY = height + 20; }
                if (p.y > height + 20) { p.y = -20; p.baseY = -20; }

                // Render Single-Color Particles
                ctx.save();
                ctx.globalAlpha = p.alpha;
                ctx.fillStyle = p.color;
                ctx.strokeStyle = p.color;
                ctx.shadowColor = p.color;
                ctx.shadowBlur = 8;

                if (p.shape === 'circle') {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    ctx.fill();
                } else if (p.shape === 'ring') {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius * 1.1, 0, Math.PI * 2);
                    ctx.lineWidth = 1.3;
                    ctx.stroke();
                } else if (p.shape === 'diamond') {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y - p.radius * 1.1);
                    ctx.lineTo(p.x + p.radius * 1.1, p.y);
                    ctx.lineTo(p.x, p.y + p.radius * 1.1);
                    ctx.lineTo(p.x - p.radius * 1.1, p.y);
                    ctx.closePath();
                    ctx.fill();
                }

                ctx.restore();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseleave', onMouseLeave);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('mousedown', onMouseDown);
        };
    }, [particleCount]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-30 pointer-events-none transition-opacity duration-1000"
            style={{ opacity: 0.88 }}
        />
    );
};
