// Last updated: 16/7/2026, 9:21:14 pm
function simplifyPath(path: string): string {
    	const stack: string[] = [];
	const parts = path.split('/');
	for (const part of parts) {
		if (part === '' || part === '.') {
			continue;
		} else if (part === '..') {
			stack.pop();
		} else {
			stack.push(part);
		}
	}
	return '/' + stack.join('/');
};