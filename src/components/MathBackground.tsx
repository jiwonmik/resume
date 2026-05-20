interface Formula {
  text: string;
  top: string;
  left: string;
  fontSize: string;
}

const formulas: Formula[] = [
  { text: 'x [m]', top: '7%', left: '2%', fontSize: '0.75rem' },
  { text: '∫₀^∞ e⁻ˣ dx = 1', top: '13%', left: '1%', fontSize: '0.65rem' },
  { text: '1 − (n+1)/(n+2)', top: '21%', left: '2%', fontSize: '0.62rem' },
  { text: '(−1)ⁿ⁺¹ · 1/(n+1)', top: '29%', left: '1%', fontSize: '0.6rem' },
  { text: '∑ᵢ₌₁^∞ 1/i²', top: '38%', left: '2%', fontSize: '0.65rem' },
  { text: 'e^{iπ} + 1 = 0', top: '48%', left: '1%', fontSize: '0.7rem' },
  { text: '∂²ψ/∂x² = (1/c²)∂²ψ/∂t²', top: '58%', left: '2%', fontSize: '0.6rem' },
  { text: '∇·E = ρ/ε₀', top: '68%', left: '1%', fontSize: '0.65rem' },
  { text: 'F = ma', top: '77%', left: '3%', fontSize: '0.75rem' },
  { text: '∮ B·dl = μ₀I', top: '85%', left: '2%', fontSize: '0.62rem' },
  { text: 'ω = √(k/m)', top: '6%', left: '66%', fontSize: '0.7rem' },
  { text: '4π m₁k²/3m₁²', top: '11%', left: '72%', fontSize: '0.62rem' },
  { text: 'cos(nπ) = (−1)ⁿ', top: '18%', left: '68%', fontSize: '0.65rem' },
  { text: '1 − 1/(1+(n+2))', top: '26%', left: '70%', fontSize: '0.6rem' },
  { text: 'sin²θ + cos²θ = 1', top: '35%', left: '67%', fontSize: '0.65rem' },
  { text: 'a² + b² = c²', top: '44%', left: '71%', fontSize: '0.72rem' },
  { text: 'lim_{n→∞}(1+1/n)^n = e', top: '54%', left: '68%', fontSize: '0.6rem' },
  { text: '∇²φ = 0', top: '63%', left: '73%', fontSize: '0.68rem' },
  { text: 'E = mc²', top: '72%', left: '70%', fontSize: '0.75rem' },
  { text: 'p = ℏk', top: '81%', left: '68%', fontSize: '0.65rem' },
  { text: 'S = k ln Ω', top: '88%', left: '72%', fontSize: '0.62rem' },
];

export default function MathBackground() {
  return (
    <div className="hero-math-bg" aria-hidden="true">
      {formulas.map((f, i) => (
        <span
          key={i}
          className="formula"
          style={{ top: f.top, left: f.left, fontSize: f.fontSize }}
        >
          {f.text}
        </span>
      ))}
    </div>
  );
}
