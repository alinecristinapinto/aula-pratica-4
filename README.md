# 🎯 Aula Prática 4 - Engenharia de Software 2

The objective of this project is to:
- Implement a **simple program** with unit tests.
- Configure a **CI/CD workflow** using GitHub Actions to:
   - Run unit tests automatically on every commit or pull request.
   - Validate the program's behavior across multiple operating systems: **Ubuntu**, **macOS**, and **Windows**.

## 🌡️ Temperature Converter

This project provides a **Temperature Converter** utility written in **TypeScript**. It supports conversions between Celsius, Fahrenheit, and Kelvin.

The project also includes **unit tests** using Jest and an automated **CI/CD pipeline** that ensures the code works across different platforms (Ubuntu, macOS, Windows) using **GitHub Actions**.

## 📋 Features

- Convert between **Celsius**, **Fahrenheit**, and **Kelvin**:
  - Celsius ↔ Fahrenheit
  - Celsius ↔ Kelvin
  - Fahrenheit ↔ Kelvin

## 🚀 Installation

#### Clone the repository:
   ```bash
   git clone https://github.com/alinecristinapinto/aula-pratica-4
   cd aula-pratica-4
   ```

#### Install dependencies:
   ```bash
   npm install
   ```

#### Build the project:
   ```bash
   npm run build
   ```

## 🧪 Running Tests

The project uses **Jest** to unit tests.

Run the tests with:
   ```bash
   npm test
   ```