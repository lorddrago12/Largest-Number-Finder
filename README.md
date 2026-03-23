# 🔢 Largest Number Finder

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=flat-square)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen?style=flat-square)

> A clean, zero-dependency JavaScript utility that extracts the **largest number** from each sub-array in a 2D array.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Function](#-function)
- [Usage](#-usage)
- [Examples](#-examples)
- [How It Works](#-how-it-works)
- [Edge Cases](#-edge-cases)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧠 Overview

`largestOfAll` takes an array of arrays and returns a new array containing only the **maximum value** from each sub-array. It leverages JavaScript's `Array.prototype.map()` and `Math.max()` for a concise, readable, and performant solution.

---

## 📦 Function

```js
function largestOfAll(arrayOfArrays) {
  const largest = arrayOfArrays.map(subArray => Math.max(...subArray));
  return largest;
}
```

---

## 🚀 Usage

Simply copy the function into your project and call it with a 2D array:

```js
const result = largestOfAll([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(result); // [3, 6, 9]
```

No installation, no imports, no dependencies — just plug and play.

---

## 💡 Examples

### Basic Usage

```js
largestOfAll([[1, 2, 3], [10, 5, 2], [7, 4, 9]]);
// → [3, 10, 9]
```

### Negative Numbers

```js
largestOfAll([[-5, -3, -10], [-1, -7, -2]]);
// → [-3, -1]
```

### Single Element Sub-Arrays

```js
largestOfAll([[42], [7], [100]]);
// → [42, 7, 100]
```

### Mixed Positive and Negative

```js
largestOfAll([[-10, 5, 0], [3, -1, 8], [-6, -2, -4]]);
// → [5, 8, -2]
```

---

## ⚙️ How It Works

| Step | Operation | Description |
|------|-----------|-------------|
| 1 | `arrayOfArrays.map(...)` | Iterates over each sub-array |
| 2 | `Math.max(...subArray)` | Spreads the sub-array as arguments to `Math.max` |
| 3 | Returns result array | Collects the maximum of each sub-array into a new array |

**Breakdown:**

```
Input:  [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39]]

Step 1: Math.max(13, 27, 18, 26) → 27
Step 2: Math.max(4, 5, 1, 3)     →  5
Step 3: Math.max(32, 35, 37, 39) → 39

Output: [27, 5, 39]
```

---

## ⚠️ Edge Cases

| Scenario | Behavior |
|----------|----------|
| Empty outer array `[]` | Returns `[]` |
| Sub-array with one element `[[5]]` | Returns `[5]` |
| All negative numbers | Returns the least negative (closest to zero) |
| Duplicate max values `[3, 3, 3]` | Returns `3` (correct behavior) |
| Empty sub-array `[[]]` | Returns `[-Infinity]` — handle with validation if needed |

> **Note:** If empty sub-arrays are possible in your dataset, consider adding a guard:
> ```js
> subArray.length ? Math.max(...subArray) : null
> ```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">Made with ❤️ and JavaScript</p>
