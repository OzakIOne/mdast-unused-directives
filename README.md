# Markdown Parser

This project is a remark plugin that uses mdast and unified to parse and transform markdown files.

## Installation

To install the plugin, run the following command:

```
npm install markdown-parser
```

## Usage

To use the plugin, add it to your remark configuration:

```javascript
const remark = require('remark');
const markdownParser = require('markdown-parser');

const processor = remark().use(markdownParser);
```

You can also pass options to the plugin:

```javascript
const processor = remark().use(markdownParser, { /* options */ });
```

## Options

The following options are available:

- `option1`: Description of option1. Default: `default value`.
- `option2`: Description of option2. Default: `default value`.

## Testing

To run the tests, run the following command:

```
npm test
```

## Contributing

Contributions are welcome! Please submit a pull request.

## License

This project is licensed under the MIT License.