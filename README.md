# OneClickTools

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/erpriyanshu8/oneclicktools.svg)](https://github.com/erpriyanshu8/oneclicktools)
[![GitHub Forks](https://img.shields.io/github/forks/erpriyanshu8/oneclicktools.svg)](https://github.com/erpriyanshu8/oneclicktools)

## 🚀 Project Vision

OneClickTools is a comprehensive suite of utilities designed to simplify complex development and system administration tasks with a single click. Our mission is to reduce the friction in daily workflows by providing developers, DevOps engineers, and system administrators with easy-to-use tools that integrate seamlessly into their environment.

We believe that powerful tools should be accessible to everyone, regardless of technical expertise. OneClickTools democratizes utility access, making advanced functionality available through an intuitive interface.

## ✨ Features

- **One-Click Execution**: Execute complex operations with minimal configuration
- **Cross-Platform Support**: Works seamlessly on Windows, macOS, and Linux
- **Modular Architecture**: Pick and choose tools that suit your needs
- **User-Friendly Interface**: Intuitive CLI and web-based interfaces
- **Extensible Framework**: Easily create custom tools using our SDK
- **Batch Operations**: Process multiple items simultaneously
- **Configuration Management**: Save and reuse custom configurations
- **Detailed Logging**: Track all operations with comprehensive audit logs
- **Error Handling**: Graceful error handling with helpful recovery suggestions
- **Performance Optimized**: Lightweight and fast execution

## 📋 Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Tools List](#tools-list)
- [Architecture](#architecture)
- [Configuration](#configuration)
- [Usage Examples](#usage-examples)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## 📦 Installation

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- Git (for cloning the repository)

### Option 1: Install from PyPI (Recommended)

```bash
pip install oneclicktools
```

### Option 2: Install from Source

```bash
# Clone the repository
git clone https://github.com/erpriyanshu8/oneclicktools.git

# Navigate to the project directory
cd oneclicktools

# Install in development mode
pip install -e .

# Or install in production mode
pip install .
```

### Option 3: Docker

```bash
# Build the Docker image
docker build -t oneclicktools .

# Run the container
docker run -it oneclicktools
```

### Verify Installation

```bash
oneclicktools --version
oneclicktools --help
```

## 🚀 Quick Start

### Basic Usage

```bash
# View all available tools
oneclicktools list

# Get help on a specific tool
oneclicktools <tool-name> --help

# Execute a tool with default settings
oneclicktools <tool-name> --input <input-value>

# Execute a tool with custom configuration
oneclicktools <tool-name> --config config.json --input <input-value>
```

### Web Interface

```bash
# Start the web interface (runs on http://localhost:8080)
oneclicktools web

# Access the dashboard and use tools through the browser
```

## 🛠️ Tools List

### Text Processing Tools

| Tool | Description | Usage |
|------|-------------|-------|
| **TextFormatter** | Format and beautify text | `oneclicktools text-formatter` |
| **JSONValidator** | Validate and format JSON | `oneclicktools json-validator` |
| **RegexMatcher** | Pattern matching and extraction | `oneclicktools regex-matcher` |
| **CSVConverter** | Convert between CSV and other formats | `oneclicktools csv-converter` |

### File Management Tools

| Tool | Description | Usage |
|------|-------------|-------|
| **BatchRenamer** | Rename multiple files with patterns | `oneclicktools batch-renamer` |
| **FileEncryptor** | Encrypt/decrypt files securely | `oneclicktools file-encryptor` |
| **DuplicateFinder** | Find and remove duplicate files | `oneclicktools duplicate-finder` |
| **FileOrganizer** | Auto-organize files by type/date | `oneclicktools file-organizer` |

### Network & API Tools

| Tool | Description | Usage |
|------|-------------|-------|
| **APITester** | Test REST APIs with ease | `oneclicktools api-tester` |
| **PortScanner** | Scan network ports | `oneclicktools port-scanner` |
| **URLValidator** | Validate and check URLs | `oneclicktools url-validator` |
| **DNSLookup** | Perform DNS resolution | `oneclicktools dns-lookup` |

### Development Tools

| Tool | Description | Usage |
|------|-------------|-------|
| **CodeFormatter** | Auto-format code | `oneclicktools code-formatter` |
| **DependencyChecker** | Check project dependencies | `oneclicktools dependency-checker` |
| **GitHelper** | Git operations simplified | `oneclicktools git-helper` |
| **BuildAutomation** | Automate build processes | `oneclicktools build-automation` |

### System Tools

| Tool | Description | Usage |
|------|-------------|-------|
| **SystemMonitor** | Real-time system monitoring | `oneclicktools system-monitor` |
| **ProcessManager** | Manage system processes | `oneclicktools process-manager` |
| **BackupManager** | Automated backup solutions | `oneclicktools backup-manager` |
| **ServiceController** | Manage services | `oneclicktools service-controller` |

## 🏗️ Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    OneClickTools                             │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   CLI Layer  │  │   Web Layer  │  │   API Layer  │      │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘      │
│         │                 │                 │               │
├─────────┼─────────────────┼─────────────────┼───────────────┤
│         │                 │                 │               │
│  ┌──────▼──────────────────▼─────────────────▼──────┐       │
│  │         Core Orchestration Layer                  │       │
│  │  (Tool Registry, Execution Engine, Scheduler)   │       │
│  └──────┬─────────────────────────────────────────┬─┘       │
│         │                                         │          │
├─────────┼─────────────────────────────────────────┼──────────┤
│         │                                         │          │
│  ┌──────▼──────────┐  ┌─────────────────┐  ┌─────▼─────┐   │
│  │   Tool Modules  │  │ Config Manager  │  │   Logger  │   │
│  │  - Text Tools   │  │                 │  │ & Auditor │   │
│  │  - File Tools   │  │                 │  │           │   │
│  │  - Network Tools│  │                 │  │           │   │
│  │  - Dev Tools    │  │                 │  │           │   │
│  │  - System Tools │  │                 │  │           │   │
│  └─────────────────┘  └─────────────────┘  └───────────┘   │
│         │                                                    │
├─────────┼────────────────────────────────────────────────────┤
│         │                                                    │
│  ┌──────▼──────────────────────────────────┐               │
│  │     External Services & Libraries        │               │
│  │  - Database connectors                   │               │
│  │  - Cloud service integrations            │               │
│  │  - Third-party libraries                 │               │
│  └──────────────────────────────────────────┘               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Core Components

#### 1. **CLI Layer**
- Command-line interface for tool execution
- Argument parsing and validation
- Output formatting and display
- Batch processing support

#### 2. **Web Layer**
- REST API endpoints
- Web dashboard and UI
- Real-time status updates
- File upload/download capabilities

#### 3. **Orchestration Engine**
- Tool discovery and registration
- Execution scheduling and queuing
- Resource management
- Error recovery

#### 4. **Tool Modules**
- Independent, self-contained tool implementations
- Standard interface for all tools
- Built-in validation and error handling
- Configuration support per tool

#### 5. **Support Services**
- Configuration management
- Logging and auditing
- Performance monitoring
- User authentication/authorization

## ⚙️ Configuration

### Global Configuration

Create a `config.yaml` file in your home directory:

```yaml
# ~/.oneclicktools/config.yaml
default:
  log_level: INFO
  output_format: json
  parallel_execution: false
  timeout: 300

tools:
  api_tester:
    timeout: 30
    verify_ssl: true
    
  system_monitor:
    update_interval: 5
    history_size: 100

web:
  host: localhost
  port: 8080
  debug: false

logging:
  file: ~/.oneclicktools/logs/oneclicktools.log
  max_size: 10MB
  retention_days: 30
```

### Tool-Specific Configuration

```bash
# Create a tool-specific config
oneclicktools api-tester --init-config api-config.json

# Use custom configuration
oneclicktools api-tester --config api-config.json --target https://api.example.com
```

## 💡 Usage Examples

### Example 1: Validate and Format JSON

```bash
oneclicktools json-validator --input data.json --format --output formatted-data.json
```

### Example 2: Batch Rename Files

```bash
oneclicktools batch-renamer --directory ./files --pattern "old_*" --replacement "new_" --preview
```

### Example 3: Test API Endpoints

```bash
oneclicktools api-tester \
  --url https://api.example.com/endpoint \
  --method POST \
  --headers '{"Authorization": "Bearer token"}' \
  --body '{"key": "value"}' \
  --verbose
```

### Example 4: Find and Remove Duplicates

```bash
oneclicktools duplicate-finder --directory ./data --algorithm md5 --action report
```

### Example 5: Monitor System Resources

```bash
oneclicktools system-monitor --duration 60 --export metrics.csv
```

## 🤝 Contributing

We welcome contributions from the community! Whether you want to report bugs, suggest features, or submit code, please follow these guidelines.

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/oneclicktools.git
   cd oneclicktools
   ```
3. **Create a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
4. **Install development dependencies**:
   ```bash
   pip install -e ".[dev]"
   ```

### Development Workflow

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:
   - Follow PEP 8 style guidelines
   - Add docstrings to all functions and classes
   - Keep commits atomic and well-documented

3. **Write tests**:
   ```bash
   # Run existing tests
   pytest tests/
   
   # Run with coverage
   pytest --cov=oneclicktools tests/
   ```

4. **Update documentation**:
   - Update relevant sections in README.md
   - Add docstrings to new code
   - Update CHANGELOG.md

5. **Commit and push**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**:
   - Provide a clear description of changes
   - Reference related issues
   - Ensure CI/CD checks pass

### Code Standards

- **Language**: Python 3.8+
- **Style Guide**: PEP 8 (enforced with flake8)
- **Type Hints**: Required for all functions
- **Testing**: Minimum 80% code coverage
- **Documentation**: Docstrings for all public APIs

### Creating a New Tool

```python
# oneclicktools/tools/my_tool.py

from oneclicktools.core import BaseTool, ToolConfig

class MyToolConfig(ToolConfig):
    input_file: str
    output_file: str = "output.txt"
    verbose: bool = False

class MyTool(BaseTool):
    """Tool description."""
    
    name = "my-tool"
    description = "Detailed description of what this tool does"
    config_class = MyToolConfig
    
    def execute(self, config: MyToolConfig) -> dict:
        """Execute the tool."""
        # Implementation
        return {"status": "success", "result": "..."}
```

### Submitting Issues

- **Bug Reports**: Include steps to reproduce, expected vs actual behavior
- **Feature Requests**: Explain the use case and benefits
- **Questions**: Check existing issues/documentation first

### Commit Message Guidelines

Follow conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:
```
feat(tools): add csv-to-json converter

Implement a new tool to convert CSV files to JSON format with
support for custom delimiters and headers.

Closes #123
```

## 📞 Support

- **Documentation**: https://github.com/erpriyanshu8/oneclicktools/wiki
- **Issues**: Report bugs on [GitHub Issues](https://github.com/erpriyanshu8/oneclicktools/issues)
- **Discussions**: Join [GitHub Discussions](https://github.com/erpriyanshu8/oneclicktools/discussions)
- **Email**: Send queries to the maintainers

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. OneClickTools version (`oneclicktools --version`)
2. Python version (`python --version`)
3. Operating system
4. Steps to reproduce
5. Expected vs actual behavior
6. Relevant error messages or logs

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Special thanks to:
- All contributors who have helped improve OneClickTools
- The open-source community for inspiration and libraries
- Users who provide valuable feedback and suggestions

## 🔗 Related Resources

- [GitHub Repository](https://github.com/erpriyanshu8/oneclicktools)
- [Project Wiki](https://github.com/erpriyanshu8/oneclicktools/wiki)
- [Issue Tracker](https://github.com/erpriyanshu8/oneclicktools/issues)
- [Discussions](https://github.com/erpriyanshu8/oneclicktools/discussions)

---

**Made with ❤️ by the OneClickTools Community**

*Last Updated: December 28, 2025*
