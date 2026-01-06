import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MEDIA_BASE_URL } from '../config';
import { ImageOff, Loader2 } from 'lucide-react';

export function MediaItem({ id, type = 'photo', className = '', alt = 'Birthday Memory' }) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const src = `${MEDIA_BASE_URL}${id}`;

    if (error) {
        return (
            <div className={`flex items-center justify-center bg-navy-900/50 rounded-lg border border-navy-800 ${className}`}>
                <ImageOff className="w-6 h-6 text-navy-600" />
            </div>
        );
    }

    return (
        <div className={`relative overflow-hidden bg-navy-900 ${className}`}>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-navy-800 z-10"
                    >
                        <Loader2 className="w-6 h-6 text-gold-500 animate-spin" />
                    </motion.div>
                )}
            </AnimatePresence>

            {type === 'photo' ? (
                <img
                    src={src}
                    alt={alt}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                        setIsLoading(false);
                        setError(true);
                    }}
                    loading="lazy"
                />
            ) : (
                <video
                    src={src}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoadedData={() => setIsLoading(false)}
                    onError={() => {
                        setIsLoading(false);
                        setError(true);
                    }}
                    controls
                    playsInline
                />
            )}
        </div>
    );
}
