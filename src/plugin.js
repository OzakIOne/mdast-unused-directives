import { visit } from 'unist-util-visit';
import { unified } from 'unified';
import stringify from 'remark-stringify';

// export default function plugin() {
//   return (tree) => {
//     const unusedDirectives = [];
//     const typeArr = [];
//     const directiveVisitor = (node, _index, parent) => {
//       typeArr.push([node.name, node.type]);
      
//       if (node.name === 'admonition') {
//         // This is an admonition directive, skip it
//         return;
//       }

//       // Convert the directive to plain text and add it to the
//       // unusedDirectives array
//       const directiveText = unified()
//         .use(stringify) // Add the stringify plugin here
//         .processSync(node).contents;

//       unusedDirectives.push(directiveText);

//       // Mark the directive as processed instead of removing it
//       node.processed = true;
//     };

//     visit(tree, 'root', directiveVisitor);
//     visit(tree, 'containerDirective', directiveVisitor);
//     visit(tree, 'leafDirective', directiveVisitor);
//     visit(tree, 'textDirective', directiveVisitor);

//     // Output the unused directives as plain text, you can do whatever you want
//     // with them
//     console.log('Unused Directives:', unusedDirectives);
//     console.log('Types:', typeArr);
//   };
// }
export default function plugin() {
  return (tree) => {
    visit(tree, (node) => {
      console.log(node);
    });
  };
}