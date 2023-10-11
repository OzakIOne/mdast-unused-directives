import rehypeDocument from 'rehype-document';
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

const file = await unified()
  .use(remarkParse)
  .use(remarkRehype)
  // .use(rehypeDocument, { title: '👋🌍' })
  .use(rehypeFormat)
  .use(rehypeStringify)
  .use(remarkDirective)
  .use(plugin)
  .process(fs.readFileSync(path.resolve('src', 'test.md'), 'utf-8'));

// eslint-disable-next-line no-undef
console.error(reporter(file));
// eslint-disable-next-line no-undef
console.log(String(file));
