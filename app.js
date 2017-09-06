const { BinarySearchTree } = require('./modules/BinarySearchTree');

let tree = new BinarySearchTree();

const findHeight = tree => {
    const ob1 = {'a' : 'a', 'b' : 'b'}
    const ob2 = {'a' : 'a', 'b' : 'b', 'c' : 'c'}
    // if (tree.left && tree.right)
    //     return Math.max(bstHeight(tree.left), bstHeight(tree.right)) + 1;
    if (tree.left && tree.right) {
        console.log('both conditions met....', tree.left.value && tree.right.value)
        return Math.max(findHeight(tree.left), findHeight(tree.right)) + 1;
    }
    if(tree.left) {
        console.log('left condion met.....', tree.value)
        return findHeight(tree.left) + 1;
    }
    if(tree.right) {
        console.log('right condition met.....', tree.value)
        return findHeight(tree.right) + 1;
    }
    return 0;
}


tree.insert("e", "e")
tree.insert("a", "a")
tree.insert("s", "s")
tree.insert("y", "y")

tree.insert("q", "q")
tree.insert("u", "u")
tree.insert("e", "e")
tree.insert("s", "s")
tree.insert("t", "t")
tree.insert("i", "i")
tree.insert("o", "o")
tree.insert("n", "n")


// console.log(tree)
console.log(findHeight(tree));


//look at the left, look at the right, get the max of the 2
