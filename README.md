# Simple Calculator

[![License](https://img.shields.io/github/license/liamwoody25/simple-calculator.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/liamwoody25/simple-calculator.svg)](https://github.com/liamwoody25/simple-calculator/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/liamwoody25/simple-calculator.svg)](https://github.com/liamwoody25/simple-calculator/issues)

---

A **Simple Calculator** application designed to perform basic arithmetic operations with a clean, user-friendly interface. This project demonstrates best practices in code organization, UI/UX simplicity, and modern stack usage.

---

## 🚀 Tech Stack

- **Frontend:**  
  - HTML5  
  - CSS3  
  - JavaScript (ES6+)
- **Backend:**  
  - Not required (Frontend-only SPA)
- **Testing:**  
  - Jest *(if tests are included)*

---

## 🌟 Features

- **Basic Arithmetic:** Addition, Subtraction, Multiplication, Division
- **Responsive Design:** Works on desktop, tablet & mobile
- **Clear & Intuitive UI:** Minimalist and easy to navigate
- **Keyboard Support:** Perform calculations using keyboard as well as on-screen buttons
- **Error Handling:** Graceful handling of invalid operations (e.g., division by zero)
- **Stack-based Calculation Logic:** Utilizes a stack structure to parse and compute expressions

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/liamwoody25/simple-calculator.git
cd simple-calculator

# Open index.html directly in your browser
```

---

## 🖥️ Usage

1. Launch the calculator in your browser.
2. Enter numbers and operators using the on-screen buttons or your keyboard.
3. Press `=` to compute the result.
4. Use `C` to clear the current input.

---

## 🧮 How It Works (Stack Logic Explained)

This calculator uses a **stack data structure** to evaluate expressions. When you enter numbers and operators:
- Numbers are pushed onto the stack.
- Operators are applied according to standard arithmetic precedence.
- The stack is processed from left to right, evaluating as per operator precedence rules.

Example:
```
Input: 3 + 5 × 2
Stack: [3, '+', 5, '×', 2]
Output: 13 (since 5 × 2 = 10, then 3 + 10 = 13)
```

---

## 📈 Project Stats

- **Lines of Code:** ~[add count]
- **Contributors:** [add count or link](https://github.com/liamwoody25/simple-calculator/graphs/contributors)
- **Open Issues:** [![GitHub issues](https://img.shields.io/github/issues/liamwoody25/simple-calculator.svg)](https://github.com/liamwoody25/simple-calculator/issues)
- **License:** MIT

---

## 🤝 Contributing

Contributions are welcome!  
1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes (`git commit -am 'Add new feature'`)  
4. Push to the branch (`git push origin feature/YourFeature`)  
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy Calculating!**
