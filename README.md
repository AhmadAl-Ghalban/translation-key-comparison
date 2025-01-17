This project compares translation keys in two JSON files (en.json and ar.json) and identifies missing keys between them. The two files represent English and Arabic translations, and the tool helps ensure both translation files are consistent.

Installation
Clone the repository:

git clone https://github.com/AhmadAl-Ghalban/translation-key-comparison.git
Navigate to the project directory:


cd translation-key-comparison
Install dependencies:


npm install
Preparing the Translation Files
To use the script, you need to have two translation files in JSON format:

en.json: This file should contain the English translation keys and their corresponding values.
ar.json: This file should contain the Arabic translation keys and their corresponding values.
Both files should have the same structure, where the keys represent the translation string identifiers and the values are the actual translations.

Example en.json:

{
  "greeting": "Hello",
  "farewell": "Goodbye"
}
Example ar.json:

{
  "greeting": "مرحبًا",
  "farewell": "وداعًا",
  "new_key": "مفتاح جديد"
}
Usage
Place your en.json (English) and ar.json (Arabic) translation files in the project directory.

Run the script:

node compare.js
The script will output the missing keys in both the en.json and ar.json files.

Output Example

Missing keys in en.json: ['new_key']
Missing keys in ar.json: []
In this example, new_key is found in ar.json but is missing in en.json.
