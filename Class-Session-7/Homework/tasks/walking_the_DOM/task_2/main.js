// If elem – is an arbitrary DOM element node…

// Is it true that elem.lastChild.nextSibling is always null?
//true, elem.lastChild has no nextSibling.

// Is it true that elem.children[0].previousSibling is always null?
// No, because elem.children[0] is the first child among elements. But there may exist non-element nodes before it. So previousSibling may be a text node.
