# Shona Dictionary LaTeX Compilation
# Requires XeLaTeX for Unicode support

SRC_DIR = src
BUILD_DIR = build
GENERATOR_SCRIPT = $(SRC_DIR)/generate-latex-entries.js
TEMPLATE_FILE = $(SRC_DIR)/shona-dictionary-template-clean.tex
GENERATED_TEX = $(BUILD_DIR)/shona-dictionary-generated.tex
TEMPLATE_WITH_SAMPLES = $(BUILD_DIR)/shona-dictionary-template-with-samples.tex
DATA_SOURCE = ../src/data/data.json
OUTPUT_PDF = $(BUILD_DIR)/shona-dictionary.pdf

# Default target
all: $(OUTPUT_PDF)

# Ensure build directory exists
$(BUILD_DIR):
	@mkdir -p $(BUILD_DIR)

# Generate LaTeX dictionary from JSON data
$(GENERATED_TEX): $(DATA_SOURCE) $(GENERATOR_SCRIPT) | $(BUILD_DIR)
	@echo "📖 Generating LaTeX dictionary from data.json..."
	node $(GENERATOR_SCRIPT) $(DATA_SOURCE) $(GENERATED_TEX)

# Generate template with sample entries
template: $(DATA_SOURCE) $(GENERATOR_SCRIPT) | $(BUILD_DIR)
	@echo "📝 Generating template with sample entries..."
	node $(GENERATOR_SCRIPT) $(DATA_SOURCE) $(TEMPLATE_WITH_SAMPLES)

$(OUTPUT_PDF): $(GENERATED_TEX)
	@echo "📝 Compiling LaTeX to PDF..."
	cd $(BUILD_DIR) && xelatex -interaction=nonstopmode $(notdir $(GENERATED_TEX))
	@echo "🔄 Running second pass for cross-references..."
	cd $(BUILD_DIR) && xelatex -interaction=nonstopmode $(notdir $(GENERATED_TEX))
	@echo "✅ Dictionary PDF generated: $(OUTPUT_PDF)"

# Compile sample template (without data.json)
sample: $(TEMPLATE_WITH_SAMPLES)
	@echo "📝 Compiling sample dictionary..."
	cd $(BUILD_DIR) && xelatex -interaction=nonstopmode $(notdir $(TEMPLATE_WITH_SAMPLES))
	cd $(BUILD_DIR) && xelatex -interaction=nonstopmode $(notdir $(TEMPLATE_WITH_SAMPLES))
	@echo "✅ Sample PDF generated"

# Clean build files
clean:
	rm -f $(BUILD_DIR)/*.aux $(BUILD_DIR)/*.log $(BUILD_DIR)/*.out $(BUILD_DIR)/*.toc $(BUILD_DIR)/*.fdb_latexmk $(BUILD_DIR)/*.fls $(BUILD_DIR)/*.synctex.gz

# Clean everything including PDFs
distclean: clean
	rm -f $(BUILD_DIR)/*.pdf $(BUILD_DIR)/*.tex

# Quick preview (compile once)
preview: $(GENERATED_TEX)
	@echo "👀 Quick preview compilation..."
	cd $(BUILD_DIR) && xelatex -interaction=nonstopmode $(notdir $(GENERATED_TEX))

# Check LaTeX installation
check:
	@echo "🔍 Checking LaTeX installation..."
	@which xelatex > /dev/null && echo "✅ XeLaTeX found" || echo "❌ XeLaTeX not found - install TeX Live or MacTeX"
	@which node > /dev/null && echo "✅ Node.js found" || echo "❌ Node.js not found"

# Help
help:
	@echo "Shona Dictionary LaTeX Build System"
	@echo ""
	@echo "Targets:"
	@echo "  all        - Generate LaTeX from data.json and compile PDF"
	@echo "  generate   - Generate LaTeX file from data.json only"
	@echo "  sample     - Compile sample template (no data.json)"
	@echo "  preview    - Quick single-pass compilation"
	@echo "  clean      - Remove build files"
	@echo "  distclean  - Remove all generated files"
	@echo "  check      - Check required software"
	@echo "  help       - Show this help"
	@echo ""
	@echo "Requirements:"
	@echo "  - XeLaTeX (from TeX Live or MacTeX)"
	@echo "  - Node.js"
	@echo "  - Dictionary data file (data.json)"

.PHONY: all generate sample clean distclean preview check help
