import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Infinity as InfinityIcon, HelpCircle, Zap, Activity } from 'lucide-react';

export default function Slide12() {
  const [uncertaintyBars, setUncertaintyBars] = useState([0, 0, 0, 0, 0]);
  const [velocityBars, setVelocityBars] = useState([20, 50, 80]);

  useEffect(() => {
    // Uncertainty: randomly appear/disappear every 400ms
    const uncertaintyInterval = setInterval(() => {
      setUncertaintyBars(prev => 
        prev.map(() => Math.random() > 0.4 ? Math.floor(Math.random() * 70 + 30) : 0)
      );
    }, 400);

    // Velocity: fast changing width every 100ms
    const velocityInterval = setInterval(() => {
      setVelocityBars(prev => 
        prev.map(() => Math.floor(Math.random() * 90 + 10))
      );
    }, 100);

    return () => {
      clearInterval(uncertaintyInterval);
      clearInterval(velocityInterval);
    };
  }, []);

  const challenges = [
    {
      id: 'unbounded',
      title: 'Unbounded',
      desc: 'Streaming data is continuously produced by various sources. It never ends.',
      icon: InfinityIcon,
      color: '#3B82F6', // Blue
    },
    {
      id: 'uncertainty',
      title: 'Uncertainty',
      desc: 'It’s hard to predict when or if new data will come in.',
      icon: HelpCircle,
      color: '#EC4899', // Pink
    },
    {
      id: 'velocity',
      title: 'High Velocity',
      desc: 'Streaming data is generated at a high velocity or speed.',
      icon: Zap,
      color: '#10B981', // Green
    }
  ];

  return (
    <div className="flex-1 flex flex-col h-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 shrink-0"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white border-2 border-[#120F1A] w-8 h-8 flex items-center justify-center rounded-[4px] shadow-[2px_2px_0px_#120F1A]">
            <Activity className="w-5 h-5 text-[#D53F8C]" />
          </div>
          <h1 className="text-[24px] font-semibold text-[#231F2B]">
            Challenges of Streaming Data
          </h1>
        </div>
        <p className="text-[16px] text-[#514E58] max-w-3xl">
          Unlike static datasets, streaming data introduces unique challenges that require a different approach to visualization.
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-3 gap-8 items-stretch pb-4">
        {challenges.map((challenge, index) => (
          <motion.div
            key={challenge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="bg-white border-2 border-[#120F1A] rounded-[12px] shadow-[8px_8px_0px_#120F1A] p-6 flex flex-col relative overflow-hidden group"
          >
            {/* Background decorative element */}
            <div 
              className="absolute -right-6 -top-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500"
              style={{ color: challenge.color }}
            >
              <challenge.icon size={160} />
            </div>

            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mb-6 border-2 border-[#120F1A] bg-white shadow-[2px_2px_0px_#120F1A] relative z-10"
            >
              <challenge.icon className="w-6 h-6" style={{ color: challenge.color }} />
            </div>

            <h2 className="text-[20px] font-bold text-[#231F2B] mb-3 relative z-10">
              {challenge.title}
            </h2>
            <p className="text-[15px] text-[#514E58] leading-relaxed relative z-10">
              {challenge.desc}
            </p>

            {/* Custom animation area for each card */}
            <div className="mt-auto pt-12 flex-1 flex items-end justify-center relative z-10">
              
              {challenge.id === 'unbounded' && (
                <div className="w-full h-6 relative overflow-hidden rounded-full bg-[#F3F4F6] border-2 border-[#120F1A]">
                  <motion.div 
                    className="absolute top-0 bottom-0 left-0 bg-[#3B82F6] border-r-2 border-[#120F1A]"
                    animate={{ width: ['0%', '100%'] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "linear" }}
                  />
                </div>
              )}
              
              {challenge.id === 'uncertainty' && (
                <div className="w-full flex justify-between items-end h-16 px-2 gap-2">
                  {uncertaintyBars.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-[#EC4899] border-2 border-[#120F1A] rounded-t-[4px]"
                      animate={{ 
                        height: `${h}%`, 
                        opacity: h > 0 ? 1 : 0 
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </div>
              )}
              
              {challenge.id === 'velocity' && (
                <div className="w-full flex flex-col gap-3">
                  {velocityBars.map((w, i) => (
                    <div key={i} className="w-full h-4 bg-[#F3F4F6] rounded-full overflow-hidden relative border-2 border-[#120F1A]">
                      <motion.div
                        className="absolute top-0 bottom-0 left-0 bg-[#10B981] border-r-2 border-[#120F1A]"
                        animate={{ width: `${w}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
