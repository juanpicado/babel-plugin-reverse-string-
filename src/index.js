export default function ({types: t}) {

	function reverse(text) {
		return text.split('').reverse().join('');
	}

	return {
		visitor: {
			StringLiteral: {
				enter(path, state) {
					path.node.value = reverse(path.node.value);
				}
			},
			TemplateElement: {
				enter(path) {
					path.node.value.raw = reverse(path.node.value.raw);
				}
			}
		}
	}
}
