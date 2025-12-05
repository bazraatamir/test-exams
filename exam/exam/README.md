# Exam Questions PDF Location

Place your exam questions PDF file in this directory.

## File Name

The PDF file should be named: `questions.pdf`

## Full Path

The complete path should be: `public/exam/questions.pdf`

## Changing the PDF Path

If you want to use a different path or filename, update the `PDF_PATH` constant in `exam.js`:

```javascript
const PDF_PATH = "your/path/to/questions.pdf";
```

## PDF Format Requirements

- Must be a text-based PDF (not scanned images)
- Text must be selectable
- Questions should be numbered (1., 2., etc.)
- See `PDF_FORMAT_GUIDE.md` in the root directory for formatting details

## Testing

1. Place your PDF file at: `public/exam/questions.pdf`
2. Open `exam.html` in a web browser
3. The PDF will be automatically loaded when you start the exam
