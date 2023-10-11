import { visit } from 'unist-util-visit';
// import { unified } from 'unified';
// import stringify from 'remark-stringify';

const directiveTypes = ['containerDirective', 'leafDirective', 'textDirective'];
export default function plugin(filePath) {
  return (tree) => {
    const unusedDirectives = [];
    
    const directiveVisitor = (node) => {
      if (directiveTypes.includes(node.type)) {
        unusedDirectives.push({name:node.name,type:node.type,start:node.position.start.line,path:` ${filePath}:${node.position.start.line}:${node.position.start.column}`});
      }
    };

    // visit(tree, 'root', directiveVisitor);
    visit(tree, 'containerDirective', directiveVisitor);
    visit(tree, 'leafDirective', directiveVisitor);
    visit(tree, 'textDirective', directiveVisitor);

    console.log(`Unused Directives in file ${filePath}:`, unusedDirectives);
  };
}
