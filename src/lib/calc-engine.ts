// Safe expression evaluator: tokenizer + recursive descent parser.
// Supports + - * / % ^, parentheses, unary minus, factorial,
// functions (sin cos tan asin acos atan log ln sqrt cbrt abs exp),
// constants (pi, e), and DEG/RAD angle modes.

export type AngleMode = "deg" | "rad";

type Token =
  | { t: "num"; v: number }
  | { t: "op"; v: string }
  | { t: "fn"; v: string }
  | { t: "lp" }
  | { t: "rp" };

const FUNCS = new Set([
  "sin", "cos", "tan", "asin", "acos", "atan",
  "log", "ln", "sqrt", "cbrt", "abs", "exp",
]);

function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  const s = input.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/π/g, "pi");
  while (i < s.length) {
    const c = s.charAt(i);
    if (c === " ") { i++; continue; }
    if (/[0-9.]/.test(c)) {
      let j = i;
      while (j < s.length && /[0-9.]/.test(s.charAt(j))) j++;
      const v = parseFloat(s.slice(i, j));
      if (Number.isNaN(v)) throw new Error("Bad number");
      tokens.push({ t: "num", v });
      i = j;
      continue;
    }
    if (/[a-z]/.test(c)) {
      let j = i;
      while (j < s.length && /[a-z]/.test(s.charAt(j))) j++;
      const word = s.slice(i, j);
      if (word === "pi") tokens.push({ t: "num", v: Math.PI });
      else if (word === "e") tokens.push({ t: "num", v: Math.E });
      else if (FUNCS.has(word)) tokens.push({ t: "fn", v: word });
      else throw new Error("Unknown: " + word);
      i = j;
      continue;
    }
    if (c === "(") tokens.push({ t: "lp" });
    else if (c === ")") tokens.push({ t: "rp" });
    else if ("+-*/^%!".includes(c)) tokens.push({ t: "op", v: c });
    else throw new Error("Bad char: " + c);
    i++;
  }
  return tokens;
}

function factorial(n: number): number {
  if (n < 0 || !Number.isInteger(n)) throw new Error("Bad factorial");
  if (n > 170) throw new Error("Overflow");
  let r = 1;
  for (let k = 2; k <= n; k++) r *= k;
  return r;
}

export function evaluate(expr: string, mode: AngleMode = "deg"): number {
  const tokens = tokenize(expr);
  let pos = 0;
  const peek = () => tokens[pos];
  const next = () => tokens[pos++];
  const toRad = (x: number) => (mode === "deg" ? (x * Math.PI) / 180 : x);
  const fromRad = (x: number) => (mode === "deg" ? (x * 180) / Math.PI : x);

  function parseExpr(): number {
    let v = parseTerm();
    while (peek()?.t === "op" && ((peek() as { v: string }).v === "+" || (peek() as { v: string }).v === "-")) {
      const op = (next() as { v: string }).v;
      const r = parseTerm();
      v = op === "+" ? v + r : v - r;
    }
    return v;
  }
  function parseTerm(): number {
    let v = parseFactor();
    while (peek()?.t === "op" && ["*", "/", "%"].includes((peek() as { v: string }).v)) {
      const op = (next() as { v: string }).v;
      const r = parseFactor();
      if (op === "*") v *= r;
      else if (op === "/") { if (r === 0) throw new Error("÷ by 0"); v /= r; }
      else v = (v * r) / 100;
    }
    return v;
  }
  function parseFactor(): number {
    let base = parseUnary();
    if (peek()?.t === "op" && (peek() as { v: string }).v === "^") {
      next();
      const exp = parseFactor();
      base = Math.pow(base, exp);
    }
    return base;
  }
  function parseUnary(): number {
    if (peek()?.t === "op" && (peek() as { v: string }).v === "-") { next(); return -parseUnary(); }
    if (peek()?.t === "op" && (peek() as { v: string }).v === "+") { next(); return parseUnary(); }
    return parsePostfix();
  }
  function parsePostfix(): number {
    let v = parseAtom();
    while (peek()?.t === "op" && (peek() as { v: string }).v === "!") { next(); v = factorial(v); }
    return v;
  }
  function parseAtom(): number {
    const tok = next();
    if (!tok) throw new Error("Unexpected end");
    if (tok.t === "num") return tok.v;
    if (tok.t === "lp") {
      const v = parseExpr();
      if (next()?.t !== "rp") throw new Error("Missing )");
      return v;
    }
    if (tok.t === "fn") {
      if (next()?.t !== "lp") throw new Error("Missing (");
      const arg = parseExpr();
      if (next()?.t !== "rp") throw new Error("Missing )");
      switch (tok.v) {
        case "sin": return Math.sin(toRad(arg));
        case "cos": return Math.cos(toRad(arg));
        case "tan": return Math.tan(toRad(arg));
        case "asin": return fromRad(Math.asin(arg));
        case "acos": return fromRad(Math.acos(arg));
        case "atan": return fromRad(Math.atan(arg));
        case "log": return Math.log10(arg);
        case "ln": return Math.log(arg);
        case "sqrt": return Math.sqrt(arg);
        case "cbrt": return Math.cbrt(arg);
        case "abs": return Math.abs(arg);
        case "exp": return Math.exp(arg);
      }
    }
    throw new Error("Parse error");
  }

  const result = parseExpr();
  if (pos !== tokens.length) throw new Error("Parse error");
  if (!Number.isFinite(result)) throw new Error("Overflow");
  return result;
}

export function formatResult(n: number): string {
  if (Number.isInteger(n) && Math.abs(n) < 1e15) return n.toString();
  const s = n.toPrecision(12);
  return String(parseFloat(s));
}
