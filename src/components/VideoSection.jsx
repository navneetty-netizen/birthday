import { motion } from 'framer-motion';
import { MEDIA_CONFIG } from '../config';
import { MediaItem } from './MediaItem';

export function VideoSection() {
    return (
        <section className="py-20 bg-navy-900/50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-gold-200 mb-4">Moving Memories</h2>
                    <div className="h-1 w-20 bg-gold-500 rounded-full opacity-50" />
                </motion.div>

                <div className="relative">
                    <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide">
                        {MEDIA_CONFIG.videos.map((id, index) => (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex-none w-[85vw] md:w-[600px] aspect-video snap-center"
                            >
                                <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border border-navy-800">
                                    <MediaItem
                                        id={id}
                                        type="video"
                                        className="w-full h-full bg-black"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Fade indicators */}
                    <div className="absolute top-0 right-0 bottom-8 w-20 bg-gradient-to-l from-navy-950 to-transparent pointer-events-none md:block hidden" />
                    <div className="absolute top-0 left-0 bottom-8 w-20 bg-gradient-to-r from-navy-950 to-transparent pointer-events-none md:block hidden" />
                </div>
            </div>
        </section>
    );
}
