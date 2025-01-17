This project compares translation keys in two JSON files (en.json and ar.json) and identifies missing keys between them. The two files represent English and Arabic translations, and the tool helps ensure both translation files are consistent.

Installation
Clone the repository:

bash
Copy
git clone https://github.com/AhmadAl-Ghalban/translation-key-comparison.git
Navigate to the project directory:

bash
Copy
cd translation-key-comparison
Install dependencies:

bash
Copy
npm install
Preparing the Translation Files
To use the script, you need to have two translation files in JSON format:

en.json: This file should contain the English translation keys and their corresponding values.
ar.json: This file should contain the Arabic translation keys and their corresponding values.
Both files should have the same structure, where the keys represent the translation string identifiers and the values are the actual translations.

Example en.json:
json
Copy
{
  "greeting": "Hello",
  "farewell": "Goodbye"
}
Example ar.json:
json
Copy
{
  "greeting": "مرحبًا",
  "farewell": "وداعًا",
  "new_key": "مفتاح جديد"
}
Usage
Place your en.json (English) and ar.json (Arabic) translation files in the project directory.

Run the script:

bash
Copy
node compare.js
The script will output the missing keys in both the en.json and ar.json files.

Output Example
bash
Copy
Missing keys in en.json: ['new_key']
Missing keys in ar.json: []
In this example, new_key is found in ar.json but is missing in en.json.
