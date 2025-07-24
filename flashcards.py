import argparse
import random
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import pandas as pd


def generate_cards(csv_path: str, output: str, count: int = 100):
    df = pd.read_csv(csv_path)
    if 'word' not in df.columns:
        raise ValueError('word column not found in csv')
    df = df.sample(n=min(count, len(df)), random_state=42)

    c = canvas.Canvas(output, pagesize=letter)
    width, height = letter
    margin = 72  # 1 inch margin

    for _, row in df.iterrows():
        word = str(row['word'])
        definition = str(row.get('definition', ''))
        example = str(row.get('example', ''))
        c.setFont("Helvetica-Bold", 24)
        c.drawCentredString(width / 2, height - margin, word)
        c.setFont("Helvetica", 12)
        text_y = height - margin - 40
        for line in definition.split('\n'):
            c.drawString(margin, text_y, line)
            text_y -= 15
        if example:
            text_y -= 10
            c.drawString(margin, text_y, 'Example: ' + example)
        c.showPage()
    c.save()


def main():
    parser = argparse.ArgumentParser(description="Generate Oxford 5000 flashcards PDF")
    parser.add_argument('--csv', default='data/oxford_5000.csv', help='Path to Oxford 5000 CSV file')
    parser.add_argument('--output', default='flashcards.pdf', help='Output PDF file')
    parser.add_argument('--count', type=int, default=100, help='Number of cards to generate')
    args = parser.parse_args()
    generate_cards(args.csv, args.output, args.count)


if __name__ == '__main__':
    main()
