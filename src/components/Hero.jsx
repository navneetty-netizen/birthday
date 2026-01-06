import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TARGET_DATE } from '../config';

export function Hero() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
        const total = Date.parse(TARGET_DATE) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return { total, days, hours, minutes, seconds };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const isBirthday = timeLeft.total <= 0;

    return (
        <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <h1 className="text-5xl md:text-8xl font-serif text-gold-300 mb-6 tracking-tight text-glow">
                    {isBirthday ? "Happy Birthday!" : "The Count Down"}
                </h1>

                <p className="text-navy-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide">
                    {isBirthday
                        ? "Wishing you a day filled with laughter, love, and cherished moments."
                        : "Counting down the moments to a very special day."}
                </p>

                {!isBirthday && (
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-mono text-gold-400">
                        {Object.entries(timeLeft).map(([unit, value]) => {
                            if (unit === 'total') return null;
                            return (
                                <div key={unit} className="flex flex-col items-center">
                                    <span className="text-4xl md:text-6xl font-light tabular-nums">
                                        {Math.max(0, value).toString().padStart(2, '0')}
                                    </span>
                                    <span className="text-xs uppercase tracking-widest text-navy-400 mt-2">{unit}</span>
                                </div>
                            );
                        })}
                    </div>
                )}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce"
            >
                <span className="text-navy-400 text-sm tracking-widest uppercase">Scroll for Memories</span>
            </motion.div>
        </section>
    );
}
