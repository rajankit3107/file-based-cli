# file-based-cli

A simple command-line tool to navigate and analyze text files. It provides commands to count words, sentences, characters, get file info, and search for words in a file.

## Features

- Count the number of words in a file
- Count the number of sentences (lines) in a file
- Count the number of characters in a file
- Get file information (size, creation, and modification date)
- Search for a word in a file

## Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd file-based-cli
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

Run the CLI using Node.js:

```sh
node index.js <command> [options]
```

### Commands

#### `count <file>`

Count the number of words in a file.

```sh
node index.js count a.txt
```

#### `count-s <file>`

Count the number of sentences (lines) in a file.

```sh
node index.js count-s a.txt
```

#### `count-c <file>`

Count the number of characters in a file.

```sh
node index.js count-c a.txt
```

#### `info <file>`

Get information about a file (size, creation, and modification date).

```sh
node index.js info a.txt
```

#### `find <file> <word>`

Search for a word in a file and display the number of occurrences.

```sh
node index.js find a.txt Lorem
```

## Example

Given the sample file `a.txt`, you can try out the commands above to see the results.

## Dependencies

- [chalk](https://www.npmjs.com/package/chalk)
- [commander](https://www.npmjs.com/package/commander)

## License

ISC
