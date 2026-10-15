import React, { useRef, useState, useEffect } from 'react'

const StatCounter = ({ target, suffix, label, started, delay = 0, color = "#ffffff" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    const duration = 2500;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime - delay;

      if (elapsedTime > 0) {
        const progress = Math.min(elapsedTime / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4); // Quartic ease out
        setCount(Math.floor(eased * target));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      } else {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, target, delay]);

  return (
    <div className="flex flex-col gap-6 py-10 px-2 group">
      <div className="flex flex-col gap-2">
        <span
          className="text-6xl md:text-7xl font-bold"
          style={{
            fontFamily: "'Nunito'",
            color: color,
          }}
        >
          {count.toLocaleString()}{suffix}
        </span>
        <span
          className="text-base font-medium text-white opacity-70 tracking-wide uppercase"
          style={{ fontFamily: "Inter" }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

const CounterSection = () => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  const stats = [
    { target: 77, suffix: "", label: "Districts reached", color: "#ffffff" },
    { target: 3000, suffix: "", label: "Members", color: "#ffbd59" },
    { target: 2019, suffix: "", label: "Founded", color: "#e4a6d1" },
  ];

  return (
    <div className='h-auto bg-(--magenta-rose)'>
      <div className="">
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className='flex justify-center items-center border-r-[0.5px] border-white'>
            <p className='text-xl text-white'>
              Rooted in local experience. <br />
              Connected across Nepal.
            </p>
          </div>

          {stats.map((stat, i) => (
            <div key={stat.label} className="text-white border-r-[0.5px]">
              <StatCounter
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                started={started}
                color={stat.color}
                delay={i * 150}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;