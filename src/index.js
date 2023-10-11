import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkDirective from 'remark-directive';
import { unified } from 'unified';
import { reporter } from 'vfile-reporter';
import plugin from './plugin.js';
import path from 'node:path';
import fs from 'node:fs';

const filePath = path.resolve('src', 'test.md');

const file = await unified()
  .use(remarkParse)
  .use(plugin, filePath)
  .use(remarkDirective)
  .use(remarkRehype)
  .use(rehypeFormat)
  .use(rehypeStringify)
  .process(fs.readFileSync(filePath, 'utf-8'));

// eslint-disable-next-line no-undef
console.error(reporter(file));
// eslint-disable-next-line no-undef
console.log(String(file));
