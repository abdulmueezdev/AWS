import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark dark:text-white mb-3">
                {title}
            </h2>
            <div className="w-24 h-1 bg-brand mx-auto rounded-sm"></div>
            {subtitle && (
                <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
