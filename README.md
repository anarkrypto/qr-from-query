# QR From Query
Generate QR Code from URL query parameters easily

## Usage

Just add the parameter and the value to the end of the URL: ```?test=mytext```

## Examples

#### Simple word: 

- hello https://anarkrypto.github.io/qr-from-query/?text=hello

#### Phrases:

URLs cannot contain spaces and non-ASCII characters. Use an <a href="https://www.w3schools.com/tags/ref_urlencode.ASP">URL Encoder</a>

- Hello World! https://anarkrypto.github.io/qr-from-query/?text=Hello%20World!

- Hello Günter! How are you ?
https://anarkrypto.github.io/qr-from-query/?text=Hello%20G%C3%BCnter.%20How%20are%20you%20%3F

#### Website:

- Google:
https://anarkrypto.github.io/qr-from-query/?text=https%3A%2F%2Fgoogle.com

- My Github Account:
https://anarkrypto.github.io/qr-from-query/?text=https%3A%2F%2Fgithub.com%2Fanarkrypto


#### URI schemes

URI schemes allow QR Code scanners to automatically identify and perform a specific action, such as opening a website, an email or phone contact, a payment wallet or other app.

- Email Contact: https://anarkrypto.github.io/qr-from-query/?text=mailto:contact@example.com

- Send Nano: https://anarkrypto.github.io/qr-from-query/?text=nano:nano_149is4mjx1f8opfurjw8jgxmj3jgixbe7xt19cf4t39eyixqa5cxu6w1ttud

- Send 0.01 Bitcoin to Address: https://anarkrypto.github.io/qr-from-query/?text=bitcoin:1AR5WWMZbGKankcTcuDrWudrnRPRrFynTW?amount=0.01
