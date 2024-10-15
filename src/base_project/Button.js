class Button {
    constructor(label, x, y, onClickAction) {
        this.button = createButton(label);
        this.button.class('modern-button');
        this.button.position(x, y);
        this.button.mousePressed(onClickAction);
    }

    // Optionally, add more methods if needed (e.g., to hide, show, change label, etc.)
    hide() {
        this.button.hide();
    }

    show() {
        this.button.show();
    }

    changeLabel(newLabel) {
        this.button.html(newLabel);
    }
}

class ExplanationButton extends Button {
    constructor(x, y, text) {
        // Call the parent class constructor with label and position
        super('What is this?', x, y, () => this.toggleOverlay());
        this.overlayVisible = false;
        this.text = text;
    }

    toggleOverlay() {
        if (!this.overlayVisible) {
            this.createTextOverlay();
            this.displayReadmeText();
            this.overlayVisible = true;
        } else {
            this.textOverlay.remove();
            this.overlayVisible = false;
        }
    }

    createTextOverlay() {
        this.textOverlay = createDiv();
        this.textOverlay.class('text-overlay');
        this.textOverlay.mousePressed(this.toggleOverlay);
    }
    displayReadmeText() {
        if (this.textOverlay) {
            let formattedText = this.text.map(line => {
                // Map H1 (Markdown: #)
                if (line.startsWith('# ')) {
                    return `<h1>${line.slice(2)}</h1>`;
                }
                // Map H2 (Markdown: ##)
                else if (line.startsWith('## ')) {
                    return `<h2>${line.slice(3)}</h2>`;
                }
                // Map unordered list items (Markdown: * or -)
                else if (line.startsWith('- ') || line.startsWith('* ')) {
                    return `<li>${line.slice(2)}</li>`;
                }
                // Default to paragraphs for plain text
                else {
                    return `<p>${line}</p>`;
                }
            }).join('');
            this.textOverlay.html(formattedText);
        } else {
            console.error('textOverlay is not defined. Please check if createTextOverlay was called.');
        }
    }
}