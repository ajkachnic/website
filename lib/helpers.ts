function insertFont(value: string) {
	const style = document.createElement("style");
	style.innerHTML = value;
	document.head.appendChild(style);
}

export function lazyLoadFont(hash: string, url: string) {
	let key = "fonts";
	let cache;

	try {
		cache = window.localStorage.getItem(key);
		if (cache) {
			cache = JSON.parse(cache);
			if (cache.md5 === hash) {
				insertFont(cache.value);
			} else {
				window.localStorage.removeItem(key);
				cache = null;
			}
		}
	} catch {
		return;
	}

	if (!cache) {
		window.addEventListener(
			"load",
			() => {
				fetch(url).then((res) => res.json()).then((json) => {
					try {
						insertFont(json.value);
						window.localStorage.setItem(key, JSON.stringify(json));
					} catch {
					}
				});
			},
		);
	}
}
