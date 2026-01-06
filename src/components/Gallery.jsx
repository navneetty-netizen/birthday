import { motion } from 'framer-motion';
import { MEDIA_CONFIG } from '../config';
import { MediaItem } from './MediaItem';

export function Gallery() {
    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-serif text-gold-200 mb-4">Captured Moments</h2>
                <div className="h-1 w-20 bg-gold-500 mx-auto rounded-full opacity-50" />
            </motion.div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {MEDIA_CONFIG.photos.map((id, index) => (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                        className="break-inside-avoid"
                    >
                        <MediaItem
                            id={id}
                            type="photo"
                            className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 min-h-[200px]"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
