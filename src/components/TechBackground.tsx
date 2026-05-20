interface TechItem {
  name: string;
  top: string;
  left: string;
  size: 'sm' | 'md' | 'lg';
  delay: number;
  duration: number;
}

const items: TechItem[] = [
  { name: 'Python',          top: '8%',  left: '4%',   size: 'lg', delay: 0,    duration: 7  },
  { name: 'LangGraph',       top: '18%', left: '7%',   size: 'md', delay: 1.2,  duration: 9  },
  { name: 'RabbitMQ',        top: '31%', left: '3%',   size: 'sm', delay: 2.5,  duration: 8  },
  { name: 'LangChain',       top: '44%', left: '6%',   size: 'md', delay: 0.8,  duration: 10 },
  { name: 'PostgreSQL',      top: '57%', left: '2%',   size: 'sm', delay: 3.1,  duration: 7  },
  { name: 'ClickHouse',      top: '69%', left: '5%',   size: 'md', delay: 1.7,  duration: 9  },
  { name: 'Socket.IO',       top: '80%', left: '3%',   size: 'sm', delay: 0.4,  duration: 8  },
  { name: 'Docker',          top: '88%', left: '7%',   size: 'lg', delay: 2.0,  duration: 7  },

  { name: 'React',           top: '6%',  left: '72%',  size: 'lg', delay: 0.6,  duration: 8  },
  { name: 'TypeScript',      top: '15%', left: '78%',  size: 'md', delay: 2.2,  duration: 10 },
  { name: 'Node.js',         top: '27%', left: '74%',  size: 'sm', delay: 1.0,  duration: 9  },
  { name: 'OpenRouter',      top: '39%', left: '80%',  size: 'md', delay: 3.4,  duration: 7  },
  { name: 'Redis',           top: '51%', left: '75%',  size: 'sm', delay: 0.3,  duration: 8  },
  { name: 'LangSmith',       top: '63%', left: '79%',  size: 'md', delay: 1.9,  duration: 10 },
  { name: 'RAG',             top: '74%', left: '73%',  size: 'lg', delay: 2.7,  duration: 7  },
  { name: 'SQL',             top: '83%', left: '77%',  size: 'sm', delay: 0.9,  duration: 9  },

  { name: 'Airflow',         top: '11%', left: '88%',  size: 'sm', delay: 1.5,  duration: 8  },
  { name: 'AWS',             top: '35%', left: '91%',  size: 'md', delay: 3.0,  duration: 7  },
  { name: 'Grafana',         top: '60%', left: '89%',  size: 'sm', delay: 0.7,  duration: 9  },
  { name: 'Chart.js',        top: '85%', left: '90%',  size: 'md', delay: 2.3,  duration: 8  },
];

export default function TechBackground() {
  return (
    <div className="hero-tech-bg" aria-hidden="true">
      {items.map((item, i) => (
        <span
          key={i}
          className={`tech-chip tech-chip--${item.size}`}
          style={{
            top: item.top,
            left: item.left,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
}
